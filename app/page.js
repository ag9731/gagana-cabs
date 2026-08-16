import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import VehicleCard from "@/components/VehicleCard";
import ServiceCard from "@/components/ServiceCard";
import PackageCard from "@/components/PackageCard";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import PricingClient from "@/app/pricing/PricingClient";
import { vehicles } from "@/data/vehicles";
import { services } from "@/data/services";
import { packages } from "@/data/packages";
import { MdCheckCircle, MdLocalAirport, MdDirectionsCar, MdVerifiedUser } from "react-icons/md";
import Link from "next/link";

export default function Home() {
  const whyChooseUs = [
    { title: "Airport Transfers", description: "Punctual and reliable pickups and drops to and from Bangalore Airport.", icon: <MdLocalAirport className="w-8 h-8 text-brand-primary" /> },
    { title: "Comfortable Fleet", description: "Well-maintained, clean, and air-conditioned vehicles for your comfort.", icon: <MdDirectionsCar className="w-8 h-8 text-brand-primary" /> },
    { title: "Easy Booking", description: "Quickly book a cab via phone, WhatsApp, or our online form.", icon: <MdCheckCircle className="w-8 h-8 text-brand-primary" /> },
    { title: "Trusted Since 2010", description: "Over a decade of experience providing safe and dependable transport.", icon: <MdVerifiedUser className="w-8 h-8 text-brand-primary" /> },
  ];

  return (
    <>
      {/* Hero with Booking Widget */}
      <Hero />
      
      {/* Trust Statistics */}
      <StatsSection />

      {/* Fleet Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Our Fleet</h2>
            <p className="text-text-gray text-lg">From premium sedans to spacious Tempo Travellers, we have the perfect vehicle for your journey.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-brand-light/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Why Choose Gagana Cabs?</h2>
            <p className="text-text-gray text-lg">We prioritize your comfort, safety, and time, ensuring a premium travel experience every time you ride with us.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-md border border-border hover:shadow-xl transition-shadow text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-3">{feature.title}</h3>
                <p className="text-text-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-brand-navy relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-brand-light/80 text-lg">Comprehensive travel solutions tailored to your specific requirements.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Transparent Cab Pricing in Bangalore</h2>
            <p className="text-text-gray text-lg">Explore our cab and airport transfer pricing and choose the vehicle that best fits your journey.</p>
          </div>
          <PricingClient />
          <div className="text-center mt-12">
            <Link href="/pricing" className="inline-block px-8 py-4 bg-brand-primary hover:bg-brand-dark text-white font-bold rounded-full transition-all shadow-lg shadow-brand-primary/30 text-lg">
              View All Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-20 bg-brand-gray">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Popular Travel Packages</h2>
            <p className="text-text-gray text-lg">Explore the most scenic locations across Karnataka and beyond with our custom travel packages.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.slice(0, 3).map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <CTASection />
    </>
  );
}
