import DayPageLayout, { TaskBlock, MetaRow, PlaceholderNote, PlaceholderLink, CongratusBanner } from "@/components/DayPageLayout";
import { siteConfig } from "@/lib/siteConfig";

export default function Day1() {
  return (
    <DayPageLayout day={1} subtitle="Engagement Post">

      <TaskBlock number={1} title="Post Your Engagement Post">
        <MetaRow label="Purpose">
          This type of question post causes people to start engaging with your post and signals to the algorithm that your current friends &amp; followers like your content and want to see future posts of yours in their newsfeed.
        </MetaRow>
        <MetaRow label="Best Practices">
          Use a color block post. Keep it simple and not flashy. Often, less is more. Don't use a picture. Post on Facebook feed and in IG/FB Stories.
        </MetaRow>
        <MetaRow label="What to Post">
          Choose a colored background &amp; write one of the following questions:
        </MetaRow>
        <PlaceholderNote>
          PLACEHOLDER: Provide 7 Done-for-You questions they can post "As-Is," which are likely to get people to share their thoughts or opinions. Nothing political.
        </PlaceholderNote>
        <PlaceholderNote>
          PLACEHOLDER: Provide screenshots of 4–6 examples of engagement posts.
        </PlaceholderNote>
      </TaskBlock>

      <TaskBlock number={2} title="Contact the First 3 People in Your Warm Market">
        <p>
          Use this authentic, transparent, and non-salesy approach to reach out to the first 3 people in your warm market.
        </p>
        <PlaceholderLink href={siteConfig.warmMarketTrainingUrl}>
          Link to Training on How to Authentically Reach Out to Warm Market
        </PlaceholderLink>
      </TaskBlock>

      <TaskBlock number={3} title="Respond to People Replying to Your Engagement Post">
        <p>
          When people respond to your engagement post, reply to them in the comment section.
        </p>
        <p className="italic text-gray-500 text-sm">
          (Do not say anything about your products or company in the comment section. You will kill curiosity and people might Google stuff about your company or products.)
        </p>
      </TaskBlock>

      <CongratusBanner day={1} groupName={siteConfig.fbGroupTeamName} />
    </DayPageLayout>
  );
}
