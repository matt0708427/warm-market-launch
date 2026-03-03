import DayPageLayout, { TaskBlock, MetaRow, PlaceholderNote, PlaceholderLink, ReplyTaskBlock, CongratusBanner } from "@/components/DayPageLayout";
import { siteConfig } from "@/lib/siteConfig";

export default function Day6() {
  return (
    <DayPageLayout day={6} subtitle="Business Opportunity Post">

      <TaskBlock number={1} title="Post Your Business Opportunity Story">
        <MetaRow label="Purpose">
          Today you will share your WHY for joining {siteConfig.companyName} as a business partner. This is the post that is designed to attract people who are looking for a business opportunity.
        </MetaRow>

        <p className="font-semibold text-gray-900 mt-2">Things to Write Down to Prep for Writing Your Story:</p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>What were you doing before {siteConfig.companyName}?</li>
          <li>What problem were you trying to solve in your life?</li>
          <li>Why did you decide to partner with {siteConfig.companyName}?</li>
          <li>What are you looking forward to achieving as a result of your business?</li>
          <li>What would achieving those goals mean for you and your family?</li>
        </ul>

        <MetaRow label="What to Post">
          Share your business opportunity story using the answers to the questions above.
        </MetaRow>

        <MetaRow label="Best Practices">
          Use the following story structure:
        </MetaRow>

        <div className="space-y-4 mt-2">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="font-bold text-sm text-gray-900 mb-2">Part 1 — Scroll Stopping Hook</p>
            <p className="text-sm text-gray-600 mb-2">
              Come up with a curiosity-invoking sentence (hook), challenging a conventional belief or something you used to believe.
            </p>
            <p className="text-xs font-semibold text-gray-700 mb-1">Examples:</p>
            <ul className="list-disc pl-4 space-y-1 text-xs text-gray-600 italic">
              <li>I used to think that [conventional belief], but now I know that [counterintuitive truth].</li>
              <li>I spent [X years] doing [what you did before], thinking that was the only way to [achieve your goal]. Then everything changed.</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="font-bold text-sm text-gray-900 mb-2">Part 2 — Struggle Part of Your Story</p>
            <ul className="list-disc pl-4 space-y-1 text-sm text-gray-600">
              <li>The primary financial or lifestyle problems you were dealing with</li>
              <li>Share how the problem impacted your life and/or loved ones</li>
              <li>Share fears or worries you had about the future</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="font-bold text-sm text-gray-900 mb-2">Part 3 — Triumph Part of Your Story</p>
            <ul className="list-disc pl-4 space-y-1 text-sm text-gray-600">
              <li>How you found {siteConfig.companyName} as a solution</li>
              <li>Why you decided to join as a business partner</li>
              <li>What you are now looking forward to achieving</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="font-bold text-sm text-gray-900 mb-2">Part 4 — Call to Action</p>
            <ul className="list-disc pl-4 space-y-1 text-sm text-gray-600">
              <li>Ask if anyone is looking for a side income or a business opportunity</li>
              <li>Ask them to drop a certain word or emoji if they would like more info</li>
            </ul>
          </div>
        </div>

        <PlaceholderNote>
          PLACEHOLDER: Provide screenshots of 4–6 examples of business opportunity story posts.
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

      <CongratusBanner day={6} groupName={siteConfig.fbGroupTeamName} />
    </DayPageLayout>
  );
}
