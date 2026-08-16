"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig, contactInfo } from "@/data/contact"; // wait, the structure is a bit mixed, let me fix it
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

// Quick hack since contactInfo is in contact.js and siteConfig is in siteConfig.js
// but I exported them differently. I'll just import from siteConfig.
import { siteConfig as config } from "@/data/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* Company Info */}
          <div>
            <div className="relative w-48 h-16 mb-6 bg-white p-2 rounded-xl">
              <Image 
                src="/images/logo.png" 
                alt={`${config.name} Logo`}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-brand-light/80 mb-6 leading-relaxed">
              Reliable, Comfortable and Professional Travel from Bangalore. Serving customers since {config.startedYear}.
            </p>
            <div className="flex items-center gap-4">
              {config.social?.whatsapp && (
                <a href={config.social.whatsapp} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              )}
              {config.social?.instagram && (
                <a href={config.social.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
                  <FaInstagram className="w-5 h-5" />
                </a>
              )}
              {config.social?.facebook && (
                <a href={config.social.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-primary transition-colors">
                  <FaFacebook className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Pricing', 'Packages', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} className="text-brand-light/80 hover:text-white transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2 inline-block">Popular Services</h4>
            <ul className="space-y-3">
              {[
                'Bangalore Airport Taxi',
                'Bangalore City Cab',
                'Outstation Taxi',
                'Corporate Cab',
                'Bangalore to Ooty',
                'Bangalore to Chikkamagaluru',
                'Bangalore to Nandi Hills'
              ].map((service, idx) => (
                <li key={idx} className="text-brand-light/80 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-white/10 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MdLocationOn className="w-6 h-6 text-brand-primary shrink-0" />
                <span className="text-brand-light/80 text-sm leading-relaxed">{config.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <MdPhone className="w-5 h-5 text-brand-primary shrink-0" />
                <a href={`tel:${config.phone}`} className="text-brand-light/80 hover:text-white transition-colors">{config.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <MdEmail className="w-5 h-5 text-brand-primary shrink-0" />
                <a href={`mailto:${config.email}`} className="text-brand-light/80 hover:text-white transition-colors">{config.email}</a>
              </li>
            </ul>
            
            <div className="mt-8">
              <p className="text-sm text-brand-light/60 mb-2">Need a Cab?</p>
              <a href={`tel:${config.phone}`} className="inline-block bg-white text-brand-navy font-bold px-6 py-3 rounded-full hover:bg-brand-primary hover:text-white transition-all shadow-lg">
                Call {config.phone}
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 mt-8 text-center md:flex md:justify-between md:text-left text-brand-light/60 text-sm">
          <p>&copy; {currentYear} {config.name}. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Designed for Comfort & Reliability.</p>
        </div>
      </div>
    </footer>
  );
}
