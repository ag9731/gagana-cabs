import { siteConfig } from "@/data/siteConfig";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import BookingForm from "@/components/BookingForm";
import Image from "next/image";

export const metadata = {
  title: "Contact Us | Gagana Cabs",
  description: "Get in touch with Gagana Cabs for booking enquiries and support.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-brand-navy pt-32 pb-20 text-center relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Contact Us</h1>
          <p className="text-brand-light text-lg max-w-2xl mx-auto">We are available 24/7 for bookings and support.</p>
        </div>
      </div>

      <section className="py-20 bg-brand-light/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Contact Info & Image */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-border">
                <h3 className="text-2xl font-bold text-brand-navy mb-8">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                      <MdPhone className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy">Phone</h4>
                      <p className="text-text-gray mt-1"><a href={`tel:${siteConfig.phone}`} className="hover:text-brand-primary transition-colors">{siteConfig.phone}</a></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                      <MdEmail className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy">Email</h4>
                      <p className="text-text-gray mt-1"><a href={`mailto:${siteConfig.email}`} className="hover:text-brand-primary transition-colors">{siteConfig.email}</a></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                      <MdLocationOn className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy">Office Address</h4>
                      <p className="text-text-gray mt-1 leading-relaxed">{siteConfig.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Travel Image */}
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg hidden lg:block">
                <Image 
                  src="/images/fleet/innova-crysta.webp" 
                  alt="Gagana Cabs Fleet" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="lg:col-span-7">
              <BookingForm />
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7509890479767!2d77.6163!3d12.9172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzAxLjkiTiA3N8KwMzYnNTguNyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="Gagana Cabs Office Location"
        ></iframe>
      </section>
    </>
  );
}
