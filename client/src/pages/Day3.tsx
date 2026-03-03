import DayPageLayout, { TaskBlock, MetaRow, PlaceholderNote, CongratusBanner } from "@/components/DayPageLayout";
import { siteConfig } from "@/lib/siteConfig";

export default function Day3() {
  return (
    <DayPageLayout day={3} subtitle="Tell Your Story">

      <TaskBlock number={1} title="Post Your Product Success Story">
        <MetaRow label="Purpose">
          This type of post is the money maker! It's designed to share your product success story, which caused you to partner with {siteConfig.companyName}.
        </MetaRow>

        <p className="font-semibold text-gray-900">Things to Write Down to Prep for Writing Your Story:</p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>What problem were you able to solve in your life?</li>
          <li>What problems are you looking forward to helping others with?</li>
          <li>If you've been on the products, what were your results?</li>
          <li>How did the results positively impact your life?</li>
          <li>Why did you choose to partner with {siteConfig.companyName}?</li>
        </ul>

        <MetaRow label="What to Post">
          Share your product success story using the answers to the questions above.
        </MetaRow>

        <MetaRow label="Best Practices">
          Recommend using the following story structure:
        </MetaRow>

        <div className="space-y-4 mt-2">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="font-bold text-sm text-gray-900 mb-2">Part 1 — Scroll Stopping Hook</p>
            <p className="text-sm text-gray-600 mb-2">
              Come up with a curiosity-invoking sentence (hook), challenging a conventional belief or something you used to believe, that kept you from achieving the results your product has helped you achieve. Be controversial and share big results.
            </p>
            <p className="text-xs font-semibold text-gray-700 mb-1">Examples:</p>
            <ul className="list-disc pl-4 space-y-1 text-xs text-gray-600 italic">
              <li>I used to think [primary problem] was my fault, but now I know it was a [counterintuitive cause].</li>
              <li>I struggled with [primary problem] for [period of time], thinking this was just a part of aging. Today, I now [have gotten this result] without [doing the things people normally have to do].</li>
              <li>It turns out [this common method] to [get this desired result] doesn't work for most. I learned this the hard way…</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="font-bold text-sm text-gray-900 mb-2">Part 2 — Struggle Part of Your Story</p>
            <ul className="list-disc pl-4 space-y-1 text-sm text-gray-600">
              <li>The primary problems you were dealing with</li>
              <li>Share how the problem impacted your life and/or loved ones</li>
              <li>Share fears or worries you had about perhaps not being able to solve the primary problem</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="font-bold text-sm text-gray-900 mb-2">Part 3 — Triumph Part of Your Story</p>
            <ul className="list-disc pl-4 space-y-1 text-sm text-gray-600">
              <li>How you found the solution (your product)</li>
              <li>Share the results you got as a result of using the product</li>
              <li>Share how the results improved your life and what you are now able to do</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="font-bold text-sm text-gray-900 mb-2">Part 4 — Call to Action</p>
            <ul className="list-disc pl-4 space-y-1 text-sm text-gray-600">
              <li>Ask the reader if they have had similar struggles and/or would like to achieve similar results</li>
              <li>Invite people to join you in your journey</li>
              <li>Ask them to drop a certain word or emoji if they would like more info</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="font-bold text-sm text-gray-900 mb-2">Part 5 — Picture of You</p>
            <ul className="list-disc pl-4 space-y-1 text-sm text-gray-600">
              <li>Share an image of you that supports the story in some way</li>
              <li>Before and After pics are OK (if applicable)</li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-300 rounded-lg p-4 mt-3">
          <p className="text-sm font-bold text-amber-800">
            ⭐ This is a High Impact Post! It's Your Opportunity to Finally Tell Your Friends &amp; Followers What You're Up To!
          </p>
          <p className="text-sm text-amber-700 mt-1">
            Send a draft of this post to your direct upline to review before posting.
          </p>
        </div>

        <PlaceholderNote>
          PLACEHOLDER: Provide screenshots of 4–6 examples of product success story posts.
        </PlaceholderNote>
      </TaskBlock>

      <CongratusBanner day={3} groupName={siteConfig.fbGroupTeamName} />
    </DayPageLayout>
  );
}
