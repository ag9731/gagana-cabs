"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdCheckCircle, MdPerson, MdAcUnit } from "react-icons/md";

export default function VehicleCard({ vehicle }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border group relative flex flex-col h-full"
    >
      {vehicle.popular && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
          Popular Choice
        </div>
      )}
      <div className="relative h-56 w-full bg-brand-gray overflow-hidden">
        <Image 
          src={vehicle.image} 
          alt={vehicle.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h4 className="text-xl font-bold text-white mb-1">{vehicle.name}</h4>
          <p className="text-sm text-white/80">{vehicle.type}</p>
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <p className="text-text-gray text-sm mb-4 line-clamp-2">{vehicle.description}</p>
        
        <div className="flex items-center gap-4 mb-6">
          {vehicle.capacity && (
            <div className="flex items-center gap-1.5 text-sm font-medium text-text-dark bg-brand-light px-3 py-1 rounded-md">
              <MdPerson className="text-brand-primary w-4 h-4" />
              <span>{vehicle.capacity}</span>
            </div>
          )}
          {vehicle.ac && (
            <div className="flex items-center gap-1.5 text-sm font-medium text-text-dark bg-brand-light px-3 py-1 rounded-md">
              <MdAcUnit className="text-brand-primary w-4 h-4" />
              <span>AC</span>
            </div>
          )}
        </div>
        
        <div className="mt-auto pt-4 border-t border-border/60">
          <Link href="/contact" className="w-full block text-center bg-brand-primary/10 hover:bg-brand-primary text-brand-primary hover:text-white font-semibold py-2.5 rounded-lg transition-colors">
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
