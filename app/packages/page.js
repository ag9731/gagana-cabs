import Image from "next/image";
import PackageCard from "@/components/PackageCard";
import CTASection from "@/components/CTASection";
import { packages } from "@/data/packages";
import { seoConfig } from "@/data/seo";

export const metadata = {
  title: seoConfig.packages.title,
  description: seoConfig.packages.description,
  keywords: seoConfig.packages.keywords,
};

export default function PackagesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-brand-navy pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/images/hero/hero-bg.webp" alt="Packages" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Travel Packages</h1>
          <p className="text-xl text-brand-light/90 max-w-2xl mx-auto">
            Explore carefully curated travel packages to top destinations from Bangalore.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-brand-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
