import { siteConfig } from "@/lib/siteConfig";
import { Link } from "wouter";

export default function SiteFooter() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-5 px-4 text-center text-sm text-gray-500 mt-auto">
      <div className="flex items-center justify-center gap-1 flex-wrap">
        <Link href="/terms" className="underline hover:text-gray-700 transition-colors">
          Terms and Conditions
        </Link>
        <span className="mx-1">|</span>
        <Link href="/privacy" className="underline hover:text-gray-700 transition-colors">
          Privacy Policy
        </Link>
      </div>
      <div className="mt-1 text-xs text-gray-400">
        &copy; {siteConfig.year} {siteConfig.teamBrand} &mdash; All Rights Reserved
      </div>
    </footer>
  );
}
