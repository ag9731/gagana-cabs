"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import * as Icons from "react-icons/md";

export default function ServiceCard({ service }) {
  const IconComponent = Icons[service.icon] || Icons.MdLocalTaxi;

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border group relative flex flex-col h-full"
    >
      <div className="relative h-48 w-full bg-brand-gray overflow-hidden">
        <Image 
          src={service.image} 
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500"></div>
        <div className="absolute -bottom-6 right-6 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center z-10 text-brand-primary transform rotate-12 group-hover:rotate-0 transition-transform">
          <IconComponent className="w-6 h-6" />
        </div>
      </div>
      
      <div className="p-6 pt-8 flex-grow flex flex-col">
        <h4 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-primary transition-colors">{service.title}</h4>
        <p className="text-text-gray text-sm mb-6 flex-grow">{service.description}</p>
        
        <div className="mt-auto pt-4 border-t border-border/60">
          <Link href="/contact" className="inline-flex items-center font-semibold text-brand-primary hover:text-brand-dark transition-colors group/link">
            Enquire Now
            <Icons.MdArrowForward className="ml-1 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
