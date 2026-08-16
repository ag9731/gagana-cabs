import Image from "next/image";
import PricingClient from "./PricingClient";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import { seoConfig } from "@/data/seo";

export const metadata = {
  title: seoConfig.pricing.title,
  description: seoConfig.pricing.description,
  keywords: seoConfig.pricing.keywords,
};

export default function PricingPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-brand-navy pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/images/hero/hero-bg.webp" alt="Pricing" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Transparent Pricing</h1>
          <p className="text-xl text-brand-light/90 max-w-2xl mx-auto">
            Affordable and competitive rates for all your travel needs. No hidden charges.
          </p>
        </div>
      </section>

      <section className="bg-brand-gray">
        <PricingClient />
      </section>

      <FAQ />
      <CTASection />
    </>
  );
}
