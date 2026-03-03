import DayPageLayout, { TaskBlock, MetaRow, PlaceholderNote, PlaceholderLink, ReplyTaskBlock, CongratusBanner } from "@/components/DayPageLayout";
import { siteConfig } from "@/lib/siteConfig";

export default function Day5() {
  return (
    <DayPageLayout day={5} subtitle="Live Video">

      <TaskBlock number={1} title="Do Live Video Sharing Your Story & Value">
        <MetaRow label="Purpose">
          Today you will retell your story but in a live video. Remember that excitement is HIGH right now and the algorithm is working in your favor and showing your post to more of your friends/followers.
        </MetaRow>
        <p>
          Thank people again for their support and let them know you wanted to come on live to share a little more about what you're up to.
        </p>

        <p className="font-semibold text-gray-900 mt-3">Best Practices:</p>
        <p>
          Give your live video a curiosity-invoking title (hook). Your headline is what will get people to stop the scroll and hit play.
        </p>

        <p className="font-semibold text-sm text-gray-800 mt-2">Title/Hook Examples:</p>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
          <li>My story with [Primary Problem or Challenge You Dealt With]</li>
          <li>Why I Shared My [Primary Problem or Challenge] Story</li>
          <li>I Almost Didn't Share This, Cause I Was Too Embarrassed…</li>
          <li>What I Did to Finally [Achieve This Result &amp; Solve This Primary Problem or Challenge]</li>
        </ul>

        <p className="mt-3">
          Outline what you're going to share. Write out a bullet point version of your story post, but add some value or things you learned as well.
        </p>

        <PlaceholderLink href={siteConfig.fbLiveWorksheetUrl}>
          Link to Facebook Live Planning Worksheet
        </PlaceholderLink>

        <PlaceholderNote>
          PLACEHOLDER: Provide screenshots of 4–6 examples of live video setups / titles.
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

      <CongratusBanner day={5} groupName={siteConfig.fbGroupTeamName} />
    </DayPageLayout>
  );
}
