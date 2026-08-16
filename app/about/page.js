import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import { seoConfig } from "@/data/seo";
import { MdCheckCircle, MdLocalAirport, MdDirectionsCar, MdVerifiedUser } from "react-icons/md";

export const metadata = {
  title: seoConfig.about.title,
  description: seoConfig.about.description,
  keywords: seoConfig.about.keywords,
};

export default function About() {
  const whyChooseUs = [
    { title: "Reliable Service", description: "Dependable transportation for planned and everyday journeys.", icon: <MdVerifiedUser className="w-8 h-8 text-brand-primary" /> },
    { title: "Comfortable Vehicles", description: "A range of vehicles for different travel requirements.", icon: <MdDirectionsCar className="w-8 h-8 text-brand-primary" /> },
    { title: "Easy Booking", description: "Quick booking through phone, WhatsApp and online enquiry.", icon: <MdCheckCircle className="w-8 h-8 text-brand-primary" /> },
    { title: "Experienced Service", description: `Serving customers since ${siteConfig.startedYear}.`, icon: <MdVerifiedUser className="w-8 h-8 text-brand-primary" /> },
    { title: "Airport Transfers", description: "Convenient airport pickup and drop services.", icon: <MdLocalAirport className="w-8 h-8 text-brand-primary" /> },
    { title: "Outstation Travel", description: "Comfortable long-distance journeys from Bangalore.", icon: <MdDirectionsCar className="w-8 h-8 text-brand-primary" /> },
  ];

  return (
    <>
      <div className="bg-brand-navy pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">About Gagana Cabs</h1>
          <p className="text-brand-light text-lg max-w-2xl mx-auto">Your trusted travel partner in Bangalore since 2010, offering premium cab services for all your journey needs.</p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-md border border-border hover:shadow-xl transition-shadow flex gap-6 items-start">
                <div className="w-14 h-14 bg-brand-light rounded-full flex items-center justify-center shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-navy mb-2">{feature.title}</h3>
                  <p className="text-text-gray">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
