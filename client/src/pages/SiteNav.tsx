import { Link } from "wouter";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { siteConfig } from "@/lib/siteConfig";

const pages = [
  {
    group: "Funnel Entry",
    items: [
      { label: "Opt-In Page", path: "/launch", description: "New team member opt-in form with GHL webhook" },
      { label: "Thank You / Confirmation", path: "/launch-plan-invite-confirmation", description: "Shown immediately after opt-in" },
      { label: "Welcome Page", path: "/launch-plan-welcome", description: "Emailed to new team member — overview + next steps" },
    ],
  },
  {
    group: "10-Day Training",
    items: [
      { label: "Day 1 — Engagement Post", path: "/launch-plan-day-1", description: "Post a question/engagement post + reach out to 3 warm market contacts" },
      { label: "Day 2 — Curiosity Post", path: "/launch-plan-day-2", description: "Post a curiosity/teaser post + reach out to 3 more contacts" },
      { label: "Day 3 — Tell Your Story", path: "/launch-plan-day-3", description: "Post your product success story" },
      { label: "Day 4 — Thank Your Followers", path: "/launch-plan-day-4", description: "Thank followers + respond to comments + reach out to 3 more" },
      { label: "Day 5 — Live Video", path: "/launch-plan-day-5", description: "Go live on Facebook/Instagram + respond to comments" },
      { label: "Day 6 — Business Opportunity Post", path: "/launch-plan-day-6", description: "Share your business WHY story" },
      { label: "Day 7 — Lifestyle Post", path: "/launch-plan-day-7", description: "Share a lifestyle post connecting to your WHY" },
      { label: "Day 8 — Value Post", path: "/launch-plan-day-8", description: "Share educational/value-based content" },
      { label: "Day 9 — Social Proof Post", path: "/launch-plan-day-9", description: "Share a testimonial or customer result" },
      { label: "Day 10 — Final Push & What's Next", path: "/launch-plan-day-10", description: "Final push post + what comes after the launch" },
    ],
  },
  {
    group: "Legal",
    items: [
      { label: "Terms and Conditions", path: "/terms", description: "Site terms" },
      { label: "Privacy Policy", path: "/privacy", description: "SMS & data privacy policy" },
    ],
  },
];

export default function SiteNav() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-8 pb-16">
        {/* Header */}
        <div className="text-center mb-8">
          <span
            className="block text-xl font-black font-['Montserrat'] mb-1"
            style={{ color: "var(--brand-green)" }}
          >
            10 Day Launch Plan
          </span>
          <h1 className="text-2xl font-black text-gray-900 font-['Montserrat']">
            Site Page Directory
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            All 13 pages — click any page to preview it
          </p>
        </div>

        {/* Page groups */}
        <div className="space-y-8">
          {pages.map((group) => (
            <div key={group.group}>
              <h2
                className="text-xs font-bold uppercase tracking-widest mb-3 pb-2 border-b border-gray-200"
                style={{ color: "var(--brand-teal)" }}
              >
                {group.group}
              </h2>
              <div className="space-y-2">
                {group.items.map((page) => (
                  <Link key={page.path} href={page.path}>
                    <div className="flex items-start justify-between gap-4 p-4 rounded-lg border border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition-all group cursor-pointer">
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-gray-900 text-sm font-['Montserrat'] group-hover:text-teal-700 transition-colors">
                          {page.label}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                          {page.description}
                        </p>
                      </div>
                      <div className="shrink-0 mt-0.5">
                        <span
                          className="text-xs font-mono px-2 py-1 rounded bg-gray-100 text-gray-500 group-hover:bg-teal-100 group-hover:text-teal-700 transition-colors"
                        >
                          {page.path}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Config reminder */}
        <div className="mt-10 p-5 rounded-xl bg-amber-50 border border-amber-200">
          <p className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-2">
            Customization Reminder
          </p>
          <p className="text-xs text-amber-700 leading-relaxed">
            All placeholder values (team name, brand, GHL webhook URL, Facebook group links, Zoom link, etc.) are in one file:{" "}
            <code className="bg-amber-100 px-1 rounded font-mono">client/src/lib/siteConfig.ts</code>
          </p>
          <p className="text-xs text-amber-700 mt-1">
            Current team name: <strong>{siteConfig.teamName}</strong> &nbsp;|&nbsp; GHL Webhook:{" "}
            <strong>{siteConfig.ghlWebhookUrl === "YOUR_GHL_WEBHOOK_URL_HERE" ? "⚠️ Not configured" : "✅ Configured"}</strong>
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
