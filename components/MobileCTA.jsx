"use client";

import { siteConfig } from "@/data/siteConfig";
import { FaWhatsapp } from "react-icons/fa";
import { MdPhone } from "react-icons/md";

export default function MobileCTA() {
  const whatsappMsg = "Hello Gagana Cabs, I would like to enquire about booking a cab.";
  const waUrl = siteConfig.social?.whatsapp ? `${siteConfig.social.whatsapp}?text=${encodeURIComponent(whatsappMsg)}` : null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 flex sm:hidden">
      <a 
        href={`tel:${siteConfig.phone}`}
        className="flex-1 flex items-center justify-center gap-2 py-4 bg-brand-primary text-white font-medium active:bg-brand-dark transition-colors"
      >
        <MdPhone className="w-5 h-5" />
        <span>Call Now</span>
      </a>
      
      {waUrl && (
        <a 
          href={waUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-green-500 text-white font-medium active:bg-green-600 transition-colors"
        >
          <FaWhatsapp className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>
      )}
    </div>
  );
}
