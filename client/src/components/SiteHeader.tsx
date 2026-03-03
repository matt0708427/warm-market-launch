import { siteConfig } from "@/lib/siteConfig";

export default function SiteHeader() {
  return (
    <header
      className="w-full py-3 px-4 flex items-center justify-center"
      style={{ backgroundColor: "var(--brand-teal)" }}
    >
      {/* PLACEHOLDER: Replace this div with an <img> tag pointing to the real logo */}
      <div className="flex items-center gap-2 bg-white/15 border-2 border-dashed border-white/50 rounded-md px-5 py-2">
        <svg
          className="w-7 h-7 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
        <span className="text-white font-bold text-base tracking-wide font-['Montserrat']">
          LOGO HERE
        </span>
      </div>
    </header>
  );
}
