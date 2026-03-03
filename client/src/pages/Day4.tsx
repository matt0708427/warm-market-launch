import DayPageLayout, { TaskBlock, MetaRow, PlaceholderNote, ReplyTaskBlock, CongratusBanner } from "@/components/DayPageLayout";
import { siteConfig } from "@/lib/siteConfig";

export default function Day4() {
  return (
    <DayPageLayout day={4} subtitle="Thank Your Followers & Respond to Comments">

      <TaskBlock number={1} title="Post in Your Stories and Thank Your Followers">
        <MetaRow label="Purpose">
          Today you will thank your followers/friends for their support in your story post. Do this in your STORIES or on your main feed as a colored post.
        </MetaRow>
        <p>
          In your STORIES post a photo of you with your products (if you already have them). If you don't have your products yet, just use a picture of you looking happy &amp; excited. Put overlay text over the photo that says something like…
        </p>
        <blockquote className="border-l-4 border-teal-400 pl-4 my-2 text-gray-600 italic text-sm">
          "Thank you for your support yesterday! It felt so good to share my [primary topic of your story] story with you. I look forward to sharing more as this new journey unfolds."
        </blockquote>
        <PlaceholderNote>
          PLACEHOLDER: Provide screenshots of 4–6 examples of "thank your followers" posts.
        </PlaceholderNote>
      </TaskBlock>

      <TaskBlock number={2} title="Reply to Friends/Followers Who Commented in Yesterday's Product Success Story Post">
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

      <CongratusBanner day={4} groupName={siteConfig.fbGroupTeamName} />
    </DayPageLayout>
  );
}
