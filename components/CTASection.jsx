"use client";

import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { MdPhone } from "react-icons/md";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-navy">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/hero/hero-bg.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/80 to-brand-navy"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          Ready for a Comfortable Journey?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-brand-light/90 max-w-2xl mx-auto mb-10"
        >
          Book your cab today and experience the most reliable transportation service in Bangalore. Available 24/7.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact" className="px-8 py-4 bg-white text-brand-primary font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto text-lg">
            Book Online Now
          </Link>
          <a href={`tel:${siteConfig.phone}`} className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full transition-all hover:bg-white/10 w-full sm:w-auto text-lg flex items-center justify-center gap-2">
            <MdPhone className="w-5 h-5" />
            Call Us Directly
          </a>
        </motion.div>
      </div>
    </section>
  );
}
