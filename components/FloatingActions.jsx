"use client";

import { siteConfig } from "@/data/siteConfig";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { motion } from "framer-motion";

export default function FloatingActions() {
  const whatsappMsg = "Hello Gagana Cabs, I would like to enquire about booking a cab.";
  const waUrl = siteConfig.social?.whatsapp ? `${siteConfig.social.whatsapp}?text=${encodeURIComponent(whatsappMsg)}` : null;

  return (
    <div className="fixed right-4 bottom-20 md:bottom-8 flex flex-col gap-4 z-50 items-end hidden sm:flex">
      {siteConfig.social?.facebook && (
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={siteConfig.social.facebook}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl group relative"
          aria-label="Facebook"
        >
          <FaFacebook className="w-6 h-6" />
          <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Facebook
          </span>
        </motion.a>
      )}

      {siteConfig.social?.instagram && (
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noreferrer"
          className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl group relative"
          aria-label="Instagram"
        >
          <FaInstagram className="w-6 h-6" />
          <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Instagram
          </span>
        </motion.a>
      )}

      {waUrl && (
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href={waUrl}
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl shadow-green-500/30 group relative"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="w-7 h-7" />
          <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            WhatsApp
          </span>
        </motion.a>
      )}

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`tel:${siteConfig.phone}`}
        className="w-14 h-14 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl shadow-brand-primary/30 group relative"
        aria-label="Call Now"
      >
        <MdPhone className="w-7 h-7" />
        <span className="absolute right-full mr-3 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Call Now
        </span>
      </motion.a>
    </div>
  );
}
