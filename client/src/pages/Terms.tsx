import PageLayout from "@/components/PageLayout";
import { siteConfig } from "@/lib/siteConfig";

export default function Terms() {
  return (
    <PageLayout>
      <h1 className="text-2xl font-black text-gray-900 font-['Montserrat'] mb-6">Terms and Conditions</h1>
      <div className="prose prose-sm max-w-none text-gray-700 space-y-4">
        <div className="placeholder-block">
          PLACEHOLDER: Add your Terms and Conditions content here. Consult with a legal professional to ensure compliance with applicable laws and regulations.
        </div>
        <p>Last updated: {siteConfig.year}</p>
        <p>
          By accessing and using this website, you accept and agree to be bound by the terms and conditions of this agreement. If you do not agree to these terms, please do not use this website.
        </p>
        <p>
          This website is operated by <strong>{siteConfig.teamBrand}</strong>. Throughout the site, the terms "we," "us," and "our" refer to {siteConfig.teamBrand}.
        </p>
        <p>
          For questions about these Terms and Conditions, please contact us through the information provided on this site.
        </p>
      </div>
    </PageLayout>
  );
}
