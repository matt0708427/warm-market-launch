import PageLayout from "@/components/PageLayout";
import { siteConfig } from "@/lib/siteConfig";
import { Play, Download, Users, Calendar, MessageCircle } from "lucide-react";

export default function LaunchWelcome() {
  return (
    <PageLayout>
      {/* Page heading */}
      <div className="text-center mb-6">
        <p className="font-black text-xl font-['Montserrat'] mb-2" style={{ color: "var(--brand-green)" }}>
          Congratulations!
        </p>

        {/* Hero image placeholder */}
        <div
          className="w-full rounded-xl mb-5 flex items-center justify-center text-teal-400 border-2 border-dashed border-teal-200 bg-teal-50"
          style={{ height: 200 }}
        >
          <div className="text-center">
            <svg className="w-12 h-12 mx-auto mb-2 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <p className="text-sm text-teal-400 font-medium">WELCOME HERO IMAGE PLACEHOLDER</p>
            <p className="text-xs text-teal-300">Replace with your welcome / team image</p>
          </div>
        </div>

        <h1 className="text-2xl font-black text-gray-900 font-['Montserrat'] leading-tight mb-2">
          Welcome to {siteConfig.companyName} &amp; {siteConfig.teamName}!
        </h1>
        <p className="text-gray-500 text-sm">
          I Want to Make Sure You Have All the Support &amp; Resources You'll Need to Begin Your Launch!
        </p>
        <p className="text-gray-500 text-sm mt-1">
          Watch the Short 10 Minute Video Below to Begin Your Onboarding!
        </p>
      </div>

      {/* Video placeholder */}
      <div className="video-placeholder mb-8">
        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
          <Play className="w-6 h-6 text-white fill-white ml-1" />
        </div>
        <div className="text-center px-6">
          <p className="font-semibold text-sm">VIDEO PLACEHOLDER</p>
          <p className="text-white/60 text-xs mt-1">
            Replace with your welcome / onboarding video embed
            <br />(Vimeo, YouTube, or Wistia)
          </p>
        </div>
      </div>

      {/* Next Steps */}
      <div className="mb-8">
        <h2 className="text-xl font-black text-gray-900 font-['Montserrat'] mb-5 pb-3 border-b border-gray-200">
          Next Steps
        </h2>

        <div className="space-y-5">
          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "oklch(0.92 0.05 200)" }}>
              <Download className="w-5 h-5" style={{ color: "var(--brand-teal)" }} />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Download the Company App</p>
              <p className="text-gray-500 text-sm">Or save your Back Office login info in a safe place.</p>
              <div className="placeholder-block mt-2">
                PLACEHOLDER: Add link or instructions to download the company app / access the back office.
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "oklch(0.92 0.05 200)" }}>
              <Users className="w-5 h-5" style={{ color: "var(--brand-teal)" }} />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm mb-2">Join the 3 Main Facebook Groups</p>
              <ul className="space-y-2">
                <li className="text-sm">
                  <span className="text-gray-500">For Business Prospects — </span>
                  <a href={siteConfig.fbGroupBizUrl} className="text-teal-600 underline font-medium">
                    {siteConfig.fbGroupBizName}
                  </a>
                </li>
                <li className="text-sm">
                  <span className="text-gray-500">For Product Prospects — </span>
                  <a href={siteConfig.fbGroupProductUrl} className="text-teal-600 underline font-medium">
                    {siteConfig.fbGroupProductName}
                  </a>
                </li>
                <li className="text-sm">
                  <span className="text-gray-500">Team Training Group — </span>
                  <a href={siteConfig.fbGroupTeamUrl} className="text-teal-600 underline font-medium">
                    {siteConfig.fbGroupTeamName}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "oklch(0.92 0.05 200)" }}>
              <Calendar className="w-5 h-5" style={{ color: "var(--brand-teal)" }} />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Add Team Training to Your Calendar</p>
              <p className="text-gray-500 text-sm">
                {siteConfig.trainingSchedule} —{" "}
                <a href={siteConfig.zoomUrl} className="text-teal-600 underline">
                  Zoom Link to Join
                </a>
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: "oklch(0.92 0.05 200)" }}>
              <MessageCircle className="w-5 h-5" style={{ color: "var(--brand-teal)" }} />
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">Introduce Yourself!</p>
              <p className="text-gray-500 text-sm">
                Here is the link to the Welcome Post in the{" "}
                <a href={siteConfig.welcomePostUrl} className="text-teal-600 underline">
                  {siteConfig.fbGroupTeamName}
                </a>
                . Please introduce yourself!
              </p>
            </div>
          </div>

          {/* Step 5 — additional resources placeholder */}
          <div className="placeholder-block">
            PLACEHOLDER: Add any other simple resources they might need to learn more about your hero product(s). Keep it brief — do NOT overwhelm them with science or deep comp plan details.
          </div>
        </div>
      </div>

      {/* Bio / About section */}
      <div className="bg-gray-50 rounded-xl p-6 flex gap-5 items-start">
        {/* Photo placeholder */}
        <div
          className="w-24 h-24 rounded-full shrink-0 flex items-center justify-center border-2 border-dashed border-teal-300 bg-teal-50 text-teal-400 text-xs text-center leading-tight"
          style={{ minWidth: "6rem" }}
        >
          {/* PLACEHOLDER: Replace with <img src="..." className="w-24 h-24 rounded-full object-cover" /> */}
          PHOTO<br />PLACEHOLDER
        </div>
        <div>
          <h2 className="text-lg font-black text-gray-900 font-['Montserrat'] mb-2">
            Hey, I'm <span style={{ color: "var(--brand-teal)" }}>{siteConfig.leaderName}</span>!
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">
            Before you go, I want to take the opportunity to share my story with you. This matters because so often we look at leaders and think… "this probably came easy to them" and it's simply not true…
          </p>
          <div className="placeholder-block">
            PLACEHOLDER: Share your story of struggle and triumph here. Include a picture of yourself if desired.
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
