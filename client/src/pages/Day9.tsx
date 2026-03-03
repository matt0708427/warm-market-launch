import DayPageLayout, { TaskBlock, MetaRow, PlaceholderNote, ReplyTaskBlock, CongratusBanner } from "@/components/DayPageLayout";
import { siteConfig } from "@/lib/siteConfig";

export default function Day9() {
  return (
    <DayPageLayout day={9} subtitle="Social Proof Post">

      <TaskBlock number={1} title="Post a Social Proof / Testimonial Post">
        <MetaRow label="Purpose">
          Today you will share a social proof post featuring a testimonial or result from a customer or team member. This builds credibility and trust, and shows your audience that real people are getting real results.
        </MetaRow>

        <p className="font-semibold text-gray-900 mt-2">What to Post:</p>
        <p>
          Share a testimonial, before-and-after story, or result from someone who has used your products or joined your team. Always get permission before sharing someone else's story.
        </p>

        <p className="font-semibold text-gray-900 mt-3">Best Practices:</p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Use a real person's story (with their permission)</li>
          <li>Include a photo if possible</li>
          <li>Focus on the transformation — before and after</li>
          <li>Keep the language authentic and not overly "salesy"</li>
          <li>End with a call to action</li>
        </ul>

        <p className="font-semibold text-gray-900 mt-3">Examples:</p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Share a screenshot of a message from a happy customer</li>
          <li>Share a before-and-after photo (with permission)</li>
          <li>Share a quote from a team member about their business journey</li>
          <li>Share a result you personally witnessed from someone in your team or customer base</li>
        </ul>

        <PlaceholderNote>
          PLACEHOLDER: Provide screenshots of 4–6 examples of social proof / testimonial posts.
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

      <CongratusBanner day={9} groupName={siteConfig.fbGroupTeamName} />
    </DayPageLayout>
  );
}
