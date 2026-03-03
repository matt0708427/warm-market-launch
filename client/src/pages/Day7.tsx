import DayPageLayout, { TaskBlock, MetaRow, PlaceholderNote, ReplyTaskBlock, CongratusBanner } from "@/components/DayPageLayout";
import { siteConfig } from "@/lib/siteConfig";

export default function Day7() {
  return (
    <DayPageLayout day={7} subtitle="Lifestyle Post">

      <TaskBlock number={1} title="Post Your Lifestyle Post">
        <MetaRow label="Purpose">
          Today you will share a lifestyle post that gives people a glimpse into your life and what you're working towards. This helps people connect with you on a more personal level and builds trust.
        </MetaRow>

        <p className="font-semibold text-gray-900 mt-2">What to Post:</p>
        <p>
          Share a picture or video of you doing something you love, something that represents the lifestyle you're working towards, or something that shows your personality.
        </p>

        <p className="font-semibold text-gray-900 mt-3">Best Practices:</p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Be authentic and genuine</li>
          <li>Share something that represents your values or goals</li>
          <li>Connect it back to your WHY for building your business</li>
          <li>Keep it positive and inspiring</li>
        </ul>

        <p className="font-semibold text-gray-900 mt-3">Examples of Lifestyle Post Topics:</p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>A family moment that reminds you why you're building this business</li>
          <li>A hobby or passion you're able to pursue more because of your business</li>
          <li>A goal you're working towards (travel, home, financial freedom)</li>
          <li>A "day in the life" that shows your routine and what you're building</li>
        </ul>

        <PlaceholderNote>
          PLACEHOLDER: Provide screenshots of 4–6 examples of lifestyle posts.
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

      <CongratusBanner day={7} groupName={siteConfig.fbGroupTeamName} />
    </DayPageLayout>
  );
}
