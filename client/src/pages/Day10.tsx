import DayPageLayout, { TaskBlock, MetaRow, PlaceholderNote, PlaceholderLink, ReplyTaskBlock, CongratusBanner } from "@/components/DayPageLayout";
import { siteConfig } from "@/lib/siteConfig";

export default function Day10() {
  return (
    <DayPageLayout day={10} subtitle="Final Push & What's Next">

      <TaskBlock number={1} title="Post Your Final Push Post">
        <MetaRow label="Purpose">
          Today is your final day of the 10-Day Launch Plan! You've done an incredible job. Today's post is designed to create urgency and make one final push to anyone who has been watching but hasn't taken action yet.
        </MetaRow>

        <p className="font-semibold text-gray-900 mt-2">What to Post:</p>
        <p>
          Share a post that summarizes your journey over the last 10 days, expresses gratitude for the support, and makes a final invitation for anyone who wants to join you or try your products.
        </p>

        <p className="font-semibold text-gray-900 mt-3">Best Practices:</p>
        <ul className="list-disc pl-5 space-y-1 text-sm">
          <li>Express genuine gratitude for the support you've received</li>
          <li>Briefly recap the highlights of your 10-day journey</li>
          <li>Make a clear, final call to action</li>
          <li>Create a sense of urgency (limited spots, special offer, etc.)</li>
          <li>Let people know what's coming next for you</li>
        </ul>

        <PlaceholderNote>
          PLACEHOLDER: Provide screenshots of 4–6 examples of "final push" posts.
        </PlaceholderNote>
      </TaskBlock>

      <TaskBlock number={2} title="Reply to Friends/Followers Who Commented in Any Post, Stories & Lives">
        <ReplyTaskBlock siteConfig={siteConfig} />
      </TaskBlock>

      <TaskBlock number={3} title="Contact the Final 3 People in Your Warm Market">
        <p>
          Use this authentic, transparent, and non-salesy approach to reach out to the final 3 people in your warm market.
        </p>
        <a
          href={siteConfig.warmMarketTrainingUrl}
          className="inline-block bg-teal-50 border border-dashed border-teal-400 text-teal-700 rounded px-3 py-1 text-sm hover:bg-teal-100 transition-colors mt-2"
        >
          Link to Training on How to Authentically Reach Out to Warm Market
        </a>
      </TaskBlock>

      <TaskBlock number={4} title="What's Next?">
        <p>
          Congratulations on completing your 10-Day Warm Market Launch! You've laid an incredible foundation. Here's what to focus on going forward:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-sm mt-2">
          <li>Continue showing up consistently on social media</li>
          <li>Keep reaching out to new people in your warm market and beyond</li>
          <li>Attend team training calls regularly</li>
          <li>Focus on personal development and skill building</li>
          <li>Celebrate your wins — no matter how small!</li>
        </ul>
        <PlaceholderNote>
          PLACEHOLDER: Add any specific next steps, resources, or training that new distributors should focus on after completing the 10-day launch.
        </PlaceholderNote>
      </TaskBlock>

      {/* Special final congratulations */}
      <div
        className="rounded-xl p-8 text-center text-white mt-8"
        style={{ background: "linear-gradient(135deg, var(--brand-teal), oklch(0.42 0.12 200))" }}
      >
        <h2 className="text-2xl font-black mb-3 font-['Montserrat']">
          🏆 You Did It! 10 Days Complete!
        </h2>
        <p className="text-white/90 text-base mb-2">
          You've just completed your 10-Day Warm Market Launch. This is just the beginning of an incredible journey!
        </p>
        <p className="text-white/80 text-sm">
          Share your #wins in <strong>{siteConfig.fbGroupTeamName}</strong>, so we can celebrate with you!
        </p>
      </div>
    </DayPageLayout>
  );
}
