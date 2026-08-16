"use client";

import { useState } from "react";
import PricingCard from "@/components/PricingCard";
import { pricing } from "@/data/pricing";
import { motion, AnimatePresence } from "framer-motion";
import { MdInfoOutline } from "react-icons/md";

export default function PricingClient() {
  const [activeTab, setActiveTab] = useState("airport");

  const tabs = [
    { id: "airport", label: "Airport Transfer" },
    { id: "local", label: "Local Rental" },
    { id: "outstation", label: "Outstation" },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-20">
      
      {/* Disclaimer */}
      <div className="bg-blue-50 border border-blue-200 text-brand-dark p-4 rounded-xl flex gap-4 items-start max-w-4xl mx-auto mb-12 shadow-sm">
        <MdInfoOutline className="w-6 h-6 shrink-0 mt-0.5 text-brand-primary" />
        <p className="text-sm md:text-base leading-relaxed">
          <strong>Note:</strong> Prices may vary depending on route, date, tolls, trip requirements and vehicle availability. Please contact Gagana Cabs for the latest quotation.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all ${
              activeTab === tab.id
                ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/30"
                : "bg-white text-text-gray hover:bg-gray-100 hover:text-brand-navy border border-border"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8"
        >
          {pricing[activeTab].map((item) => (
            <PricingCard key={item.id} item={item} type={activeTab} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
