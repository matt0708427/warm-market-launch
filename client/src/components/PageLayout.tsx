import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

interface PageLayoutProps {
  children: React.ReactNode;
  maxWidth?: string;
}

export default function PageLayout({ children, maxWidth = "max-w-2xl" }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteHeader />
      <main className={`flex-1 w-full ${maxWidth} mx-auto px-4 py-8 pb-16`}>
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
