import Image from "next/image";
import { seoConfig } from "@/data/seo";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";

export const metadata = {
  title: seoConfig.services.title,
  description: seoConfig.services.description,
  keywords: seoConfig.services.keywords,
};

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-brand-navy pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image src="/images/hero/hero-bg.webp" alt="Our Services" fill className="object-cover" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-brand-light/90 max-w-2xl mx-auto">
            Comprehensive transportation solutions tailored to your needs in Bangalore and beyond.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-brand-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-brand-navy rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Looking for something specific?</h2>
            <p className="text-xl text-brand-light/80 max-w-2xl mx-auto mb-10 relative z-10">
              We offer customizable travel solutions. Whether it's a multi-day corporate event, a family wedding, or a special outstation request, we've got you covered.
            </p>
            <div className="relative z-10">
              <a href="/contact" className="inline-block bg-white text-brand-primary font-bold px-8 py-4 rounded-full hover:bg-brand-light transition-colors text-lg shadow-lg">
                Contact for Custom Requirements
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
