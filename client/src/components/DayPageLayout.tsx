import PageLayout from "./PageLayout";

interface TaskBlockProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

export function TaskBlock({ number, title, children }: TaskBlockProps) {
  return (
    <div className="mb-8 pb-8 border-b border-gray-200 last:border-0">
      <div className="flex items-start gap-3 mb-4">
        <span
          className="inline-flex items-center justify-center text-white text-xs font-bold rounded-full px-3 py-1 shrink-0 mt-0.5 font-['Montserrat']"
          style={{ backgroundColor: "var(--brand-teal)" }}
        >
          Task #{number}
        </span>
        <h2 className="text-lg font-black uppercase text-gray-900 font-['Montserrat'] leading-tight">
          {title}
        </h2>
      </div>
      <div className="space-y-3 text-gray-700 leading-relaxed text-[15px]">
        {children}
      </div>
    </div>
  );
}

export function MetaRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <p>
      <span className="font-semibold text-gray-900">{label}:</span>{" "}
      {children}
    </p>
  );
}

export function PlaceholderNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="placeholder-block">
      {children}
    </div>
  );
}

export function PlaceholderLink({ href = "#", children }: { href?: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-block bg-teal-50 border border-dashed border-teal-400 text-teal-700 rounded px-3 py-1 text-sm hover:bg-teal-100 transition-colors"
    >
      {children}
    </a>
  );
}

export function CongratusBanner({ day, groupName = "[Team Training Group Name]" }: { day: number; groupName?: string }) {
  return (
    <div
      className="rounded-xl p-6 text-center text-white mt-8"
      style={{ background: "linear-gradient(135deg, var(--brand-green), oklch(0.38 0.18 145))" }}
    >
      <h2 className="text-xl font-black mb-2 font-['Montserrat']">
        🎉 Congratulations! You've Completed Day {day}!
      </h2>
      <p className="text-white/90 text-sm">
        Share your #wins in <strong>{groupName}</strong>, so we can cheer you on!
      </p>
      <p className="text-white/80 text-sm mt-1">See you tomorrow!</p>
    </div>
  );
}

export function ReplyTaskBlock({ siteConfig }: { siteConfig: { enrollmentConvoTrainingUrl: string } }) {
  return (
    <div className="space-y-4 text-[15px] text-gray-700 leading-relaxed">
      <div>
        <p className="font-bold text-gray-900 mb-2">For People Who Requested More Info:</p>
        <p>
          First, DM them in Messenger to initiate an enrollment convo with a question like:
        </p>
        <blockquote className="border-l-4 border-teal-400 pl-4 my-2 text-gray-600 italic">
          "Hey [fname], saw your comment in my post. Curious, what compelled you to request more info? What's going on?"
        </blockquote>
        <p>
          Second, Reply To Their Comment Letting Them Know That You Direct Messaged Them. Recommend They Check "Message Requests."
        </p>
        <p className="text-sm text-gray-500 italic mt-1">
          NOTE: If you haven't already, review the training on{" "}
          <a href={siteConfig.enrollmentConvoTrainingUrl} className="text-teal-600 underline">
            Enrollment Conversations &amp; Inviting here
          </a>
          , to assist you in these messenger convos.
        </p>
      </div>

      <div>
        <p className="font-bold text-gray-900 mb-2">For People Who Commented or Offered Encouragement in Yesterday's Story Post:</p>
        <p>Reply to Their Comment by Thanking Them Publicly.</p>
        <p>DM Them Thanking Them Directly with Something Like:</p>
        <blockquote className="border-l-4 border-teal-400 pl-4 my-2 text-gray-600 italic">
          "Really appreciate your encouragement/kind words in yesterday's post. Means more than you know. Been quite a journey. Let me know if I can help/support you in any way!"
        </blockquote>
      </div>

      <div>
        <p className="font-bold text-gray-900 mb-2">For People Who Respond to Your 'Thank You' Post in STORIES:</p>
        <p>A Response to Your STORIES Will Initiate a Messenger Convo.</p>
        <p>Reply Thanking Them Directly with Something Like:</p>
        <blockquote className="border-l-4 border-teal-400 pl-4 my-2 text-gray-600 italic">
          "Really appreciate your encouragement. Means more than you know. Been quite a journey. Let me know if I can help/support you in any way!"
        </blockquote>
      </div>
    </div>
  );
}

interface DayPageLayoutProps {
  day: number;
  subtitle: string;
  children: React.ReactNode;
}

export default function DayPageLayout({ day, subtitle, children }: DayPageLayoutProps) {
  return (
    <PageLayout>
      {/* Day Header */}
      <div className="text-center mb-8">
        <span
          className="block text-2xl font-black font-['Montserrat'] mb-1"
          style={{ color: "var(--brand-green)" }}
        >
          10 Day Launch Plan
        </span>
        <h1 className="text-2xl font-black uppercase text-gray-900 font-['Montserrat'] leading-tight">
          Day {day}: {subtitle}
        </h1>
      </div>

      {children}
    </PageLayout>
  );
}
