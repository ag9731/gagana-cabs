"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdExplore, MdArrowForward } from "react-icons/md";

export default function PackageCard({ pkg }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl overflow-hidden shadow-xl border border-border group relative flex flex-col h-full"
    >
      <div className="relative h-56 w-full bg-brand-gray overflow-hidden">
        <Image 
          src={pkg.image} 
          alt={pkg.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h4 className="text-2xl font-bold text-white mb-1">{pkg.title}</h4>
          <div className="flex items-center gap-1.5 text-white/80 text-sm">
            <MdExplore className="w-4 h-4 text-brand-primary" />
            <span>Ideal for: {pkg.idealFor}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-text-gray mb-6 flex-grow">{pkg.description}</p>
        
        <div className="mt-auto">
          <Link href="/contact" className="w-full flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-primary text-white font-semibold py-3 rounded-xl transition-colors shadow-lg">
            <span>Get a Custom Quote</span>
            <MdArrowForward className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
