"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/data/siteConfig";

export default function PricingCard({ item, type }) {
  const isAirport = type === 'airport';
  const isLocal = type === 'local';
  const isOutstation = type === 'outstation';

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border ${item.popular ? 'border-brand-primary border-2' : 'border-border'} flex flex-col h-full transition-shadow duration-300 relative`}
    >
      {/* Top Image Section */}
      <div className="relative h-56 w-full bg-brand-light overflow-hidden">
        <Image 
          src={item.image || "/images/fleet/innova-crysta.webp"} 
          alt={`${item.name} cab service in Bangalore`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
        
        {/* Subtle bottom gradient for contrast if needed, but keeping it clean as requested */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent"></div>

        {/* Popular/Recommended Tag */}
        {item.popular && (
          <div className="absolute top-4 right-4 bg-brand-primary text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-lg flex items-center gap-1">
            ★ Recommended
          </div>
        )}
        
        {/* Category Tag */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-brand-navy text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-sm">
          {isAirport ? "Airport Transfer" : isLocal ? "Local Rental" : "Outstation Cabs"}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 md:p-8 flex-grow flex flex-col">
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-brand-navy mb-2">{item.name}</h3>
        
        {/* Price & Duration */}
        <div className="mb-6 flex flex-col">
          <div className="flex items-end gap-2 text-brand-primary">
            <span className="text-4xl font-extrabold tracking-tight">
              {typeof item.price === 'number' ? `₹${item.price.toLocaleString('en-IN')}` : item.price || `₹${item.ratePerKm}/km`}
            </span>
          </div>
          <div className="text-text-gray font-medium mt-1">
            {isLocal && item.duration && `${item.duration} / ${item.distance}`}
            {isAirport && item.distance && `${item.distance}`}
            {isAirport && item.extraInfo && ` ${item.extraInfo}`}
            {isOutstation && "Base Rate"}
          </div>
        </div>
        
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {item.ac !== undefined && (
            <div className="bg-blue-50 border border-blue-100 text-brand-navy text-xs font-bold px-3 py-1.5 rounded-md flex items-center gap-1.5">
              {item.ac ? "❄ AC" : "💨 Non-AC"}
            </div>
          )}
          {item.capacity && (
            <div className="bg-gray-50 border border-gray-200 text-text-dark text-xs font-bold px-3 py-1.5 rounded-md flex items-center gap-1.5">
              👤 Up to {item.capacity} Seats
            </div>
          )}
        </div>
        
        {/* Detailed Pricing Features */}
        <ul className="space-y-3 mb-8 flex-grow text-sm text-text-gray border-t border-border/50 pt-6">
          {isLocal && item.extraKm && (
            <li className="flex items-center justify-between">
              <span>Extra Km</span>
              <span className="font-semibold text-text-dark">₹{item.extraKm}</span>
            </li>
          )}
          {isLocal && item.extraHour && (
            <li className="flex items-center justify-between">
              <span>Extra Hour</span>
              <span className="font-semibold text-text-dark">₹{item.extraHour}</span>
            </li>
          )}
          {(isLocal || isAirport) && item.outstationRate && (
            <li className="flex items-center justify-between">
              <span>Outstation</span>
              <span className="font-semibold text-text-dark">{item.outstationRate}</span>
            </li>
          )}
          {isAirport && item.waitingTime && (
            <li className="flex items-center justify-between">
              <span>Waiting Time</span>
              <span className="font-semibold text-text-dark">{item.waitingTime}</span>
            </li>
          )}
          {item.seatingOptions && (
            <li className="flex flex-col gap-1 mt-2">
              <span className="font-semibold text-text-dark">Seating Options:</span>
              <span className="text-text-gray">{item.seatingOptions.join(', ')}</span>
            </li>
          )}
          {item.packageDetails && (
            <li className="flex flex-col gap-1 mt-4 pt-4 border-t border-border/50 text-center">
              {item.packageDetails.split('\n').map((line, i) => (
                <span key={i} className={i === 2 ? "font-bold text-brand-primary text-base" : "text-text-dark font-semibold"}>{line}</span>
              ))}
            </li>
          )}
        </ul>
        
        {/* CTAs */}
        <div className="mt-auto flex flex-col gap-3">
          <Link 
            href={`/#booking-form?vehicle=${encodeURIComponent(item.name)}`} 
            className={`w-full text-center py-3.5 rounded-xl font-bold transition-all shadow-md ${
              item.popular 
                ? 'bg-brand-primary text-white hover:bg-brand-dark shadow-brand-primary/40' 
                : 'bg-brand-navy text-white hover:bg-brand-primary shadow-brand-navy/30'
            }`}
          >
            Book Now
          </Link>
          <a 
            href={siteConfig.social?.whatsapp ? `${siteConfig.social.whatsapp}?text=${encodeURIComponent(`Hi Gagana Cabs, I want to book a ${item.name} for ${isAirport ? 'Airport Transfer' : isLocal ? 'Local Rental' : 'Outstation'}.`)}` : `tel:${siteConfig.phone}`} 
            target="_blank"
            rel="noreferrer"
            className="w-full text-center py-3.5 rounded-xl font-bold border-2 border-brand-light text-brand-navy hover:bg-brand-light transition-colors flex items-center justify-center gap-2"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}
