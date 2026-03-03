import DayPageLayout, { TaskBlock, MetaRow, PlaceholderNote, ReplyTaskBlock, CongratusBanner } from "@/components/DayPageLayout";
import { siteConfig } from "@/lib/siteConfig";

export default function Day8() {
  return (
    <DayPageLayout day={8} subtitle="Value Post">

      <TaskBlock number={1} title="Post a Value-Based Post">
        <MetaRow label="Purpose">
          Today you will share a value post that educates, informs, or entertains your audience. This type of content positions you as a knowledgeable resource and builds credibility with your followers.
        </MetaRow>

        <p className="font-semibold text-gray-900 mt-2">What to Post:</p>
        <p>
          Share tips, insights, or information related to your niche. This could be about health, wellness, financial freedom, entrepreneurship, or any topic relevant to your products or business.
        </p>

        <p className="font-semibold text-gray-900 mt-3">Best Practices:</p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Lead with a strong hook that grabs attention</li>
          <li>Provide genuinely useful information</li>
          <li>Keep it easy to read — use bullet points or numbered lists</li>
          <li>End with a call to action or question to encourage engagement</li>
        </ul>

        <p className="font-semibold text-gray-900 mt-3">Examples of Value Post Topics:</p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>5 tips for [achieving a result related to your product niche]</li>
          <li>The #1 mistake people make when trying to [solve a problem your products address]</li>
          <li>What I wish I knew before [starting my business / trying this product]</li>
          <li>How to [achieve a specific result] in [timeframe]</li>
        </ul>

        <PlaceholderNote>
          PLACEHOLDER: Provide screenshots of 4–6 examples of value posts.
        </PlaceholderNote>
      </TaskBlock>

      <TaskBlock number={2} title="Reply to Friends/Followers Who Commented in Any Post, Stories & Lives">
        <ReplyTaskBlock siteConfig={siteConfig} />
      </TaskBlock>

      <TaskBlock number={3} title="Contact the Next 3 People in Your Warm Market">
        <p>
          Use this authentic, transparent, and non-salesy approach to reach out to the next 3 people in your warm market.
        </p>
        <a
          href={siteConfig.warmMarketTrainingUrl}
          className="inline-block bg-teal-50 border border-dashed border-teal-400 text-teal-700 rounded px-3 py-1 text-sm hover:bg-teal-100 transition-colors mt-2"
        >
          Link to Training on How to Authentically Reach Out to Warm Market
        </a>
      </TaskBlock>

      <CongratusBanner day={8} groupName={siteConfig.fbGroupTeamName} />
    </DayPageLayout>
  );
}
