import PageLayout from "@/components/PageLayout";
import { siteConfig } from "@/lib/siteConfig";
import { CheckCircle, Mail, MessageSquare } from "lucide-react";

export default function LaunchConfirmation() {
  return (
    <PageLayout>
      <div className="text-center py-4">
        {/* Hero image placeholder */}
        <div
          className="w-full rounded-xl mb-6 flex items-center justify-center text-teal-400 border-2 border-dashed border-teal-200 bg-teal-50"
          style={{ height: 200 }}
        >
          <div className="text-center">
            <svg className="w-12 h-12 mx-auto mb-2 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <p className="text-sm text-teal-400 font-medium">HERO IMAGE PLACEHOLDER</p>
            <p className="text-xs text-teal-300">Replace with celebration / team image</p>
          </div>
        </div>

        {/* Congrats badge */}
        <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 border border-green-200 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
          <CheckCircle className="w-4 h-4" />
          Congratulations! You Are In!
        </div>

        <h1 className="text-2xl font-black text-gray-900 font-['Montserrat'] mb-4 leading-tight">
          I Can't Wait Until You Start Executing Your Launch!
        </h1>

        <p className="text-gray-600 text-base max-w-md mx-auto mb-8 leading-relaxed">
          Check Your Email and Text Messages to Make Sure You Got Our Welcome Message with Your First Set of Tasks for Today! Don't Worry, It All Should Only Take 15 Minutes to Complete!
        </p>

        {/* Icon callouts */}
        <div className="flex justify-center gap-6 mb-8">
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center">
              <Mail className="w-5 h-5 text-teal-500" />
            </div>
            <span className="text-xs font-medium">Check Email</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-gray-500">
            <div className="w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-teal-500" />
            </div>
            <span className="text-xs font-medium">Check Texts</span>
          </div>
        </div>

        {/* Person photo placeholder */}
        <div
          className="w-full rounded-xl flex items-center justify-center text-teal-400 border-2 border-dashed border-teal-200 bg-teal-50"
          style={{ height: 180 }}
        >
          <div className="text-center">
            <svg className="w-10 h-10 mx-auto mb-2 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <p className="text-sm text-teal-400 font-medium">PERSON / TEAM PHOTO PLACEHOLDER</p>
            <p className="text-xs text-teal-300">Replace with your photo</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
