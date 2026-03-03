import PageLayout from "@/components/PageLayout";
import { siteConfig } from "@/lib/siteConfig";

export default function Privacy() {
  return (
    <PageLayout>
      <h1 className="text-2xl font-black text-gray-900 font-['Montserrat'] mb-6">Privacy Policy</h1>
      <div className="prose prose-sm max-w-none text-gray-700 space-y-4">
        <div className="placeholder-block">
          PLACEHOLDER: Add your Privacy Policy content here. Consult with a legal professional to ensure compliance with GDPR, CCPA, and other applicable privacy laws.
        </div>
        <p>Last updated: {siteConfig.year}</p>
        <p>
          <strong>{siteConfig.teamBrand}</strong> ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>
        <h2 className="text-lg font-bold text-gray-900 font-['Montserrat'] mt-4">Information We Collect</h2>
        <p>
          We may collect personal information that you voluntarily provide to us when you register on the website, including your name, email address, and phone number.
        </p>
        <h2 className="text-lg font-bold text-gray-900 font-['Montserrat'] mt-4">SMS Communications</h2>
        <p>
          By providing your phone number and consenting to SMS communications, you agree to receive text messages from us. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe at any time.
        </p>
        <p>
          For questions about this Privacy Policy, please contact us through the information provided on this site.
        </p>
      </div>
    </PageLayout>
  );
}
