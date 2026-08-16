"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdLocalTaxi, MdPhone } from "react-icons/md";
import BookingForm from "./BookingForm";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-brand-navy pt-24 pb-16 overflow-hidden">
      
      {/* Full Width Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-bg.webp"
          alt="Gagana Cabs Bangalore taxi service"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay to ensure text and form remain highly readable */}
        <div className="absolute inset-0 bg-brand-navy/70 lg:bg-gradient-to-r lg:from-brand-navy/90 lg:via-brand-navy/70 lg:to-brand-navy/40"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 h-full">
        
        {/* Left: Text Content */}
        <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-brand-light font-medium px-5 py-2 rounded-full text-sm mb-6 shadow-xl"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Available 24/7 in Bangalore
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6"
          >
            Reliable Cab Service <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-brand-light">in Bangalore</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10 text-brand-light/90 font-medium text-lg"
          >
            <span className="flex items-center gap-2"><MdLocalTaxi /> Airport</span>
            <span className="text-white/30">•</span>
            <span className="flex items-center gap-2"><MdLocalTaxi /> Local</span>
            <span className="text-white/30">•</span>
            <span className="flex items-center gap-2"><MdLocalTaxi /> Outstation</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link 
              href="#booking-form"
              className="w-full sm:w-auto px-8 py-4 bg-white text-brand-primary hover:bg-brand-light font-bold rounded-xl transition-all shadow-xl shadow-white/10 text-lg text-center transform hover:-translate-y-1"
            >
              Book a Cab
            </Link>
            <a 
              href="tel:+919880920035"
              className="w-full sm:w-auto px-8 py-4 bg-brand-primary/80 hover:bg-brand-primary backdrop-blur-md text-white font-bold rounded-xl transition-all border border-blue-400/30 flex items-center justify-center gap-2 text-lg shadow-lg"
            >
              <MdPhone className="w-5 h-5" />
              Call Now
            </a>
          </motion.div>
        </div>

        {/* Right: Booking Form Widget */}
        <div className="w-full lg:w-7/12 relative flex justify-center lg:justify-end items-center">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full max-w-lg xl:max-w-xl relative z-20 mt-8 lg:mt-0"
            id="booking-form"
          >
            <div className="bg-white p-2 rounded-2xl shadow-2xl">
              <BookingForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
