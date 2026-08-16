"use client";

import { useState, useEffect } from "react";
import { sendBookingEnquiry } from "@/lib/emailjs";
import { motion } from "framer-motion";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    pickupLocation: "",
    dropLocation: "",
    pickupDate: "",
    pickupTime: "",
    vehicleType: "",
    tripType: ""
  });
  
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const vehicle = urlParams.get('vehicle');
      if (vehicle) {
        setFormData(prev => ({ ...prev, vehicleType: vehicle }));
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await sendBookingEnquiry(formData);
      setStatus("success");
      setFormData({
        name: "", phone: "", email: "", pickupLocation: "", dropLocation: "",
        pickupDate: "", pickupTime: "", vehicleType: "", tripType: ""
      });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-border p-6 md:p-8 w-full max-w-4xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-primary to-blue-400"></div>
      <h3 className="text-2xl font-bold text-brand-navy mb-6 text-center">Book Your Ride</h3>
      
      {status === "success" && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-green-50 text-green-700 p-4 rounded-lg mb-6 text-center font-medium border border-green-200">
          Thank you! Your booking enquiry has been received. Our team will contact you shortly.
        </motion.div>
      )}

      {status === "error" && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-red-50 text-red-700 p-4 rounded-lg mb-6 text-center font-medium border border-red-200">
          Something went wrong. Please try again or contact us directly via phone.
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1">
          <label className="text-sm font-semibold text-text-dark">Full Name <span className="text-red-500">*</span></label>
          <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all" placeholder="John Doe" />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-semibold text-text-dark">Phone Number <span className="text-red-500">*</span></label>
          <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all" placeholder="+91 XXXXX XXXXX" />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-semibold text-text-dark">Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all" placeholder="john@example.com" />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-semibold text-text-dark">Trip Type <span className="text-red-500">*</span></label>
          <select required name="tripType" value={formData.tripType} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all bg-white">
            <option value="">Select Trip Type</option>
            <option value="City to Airport">City to Airport</option>
            <option value="Airport to City">Airport to City</option>
            <option value="Local City Ride">Local City Ride</option>
            <option value="Outstation">Outstation Cabs</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-semibold text-text-dark">Pickup Location <span className="text-red-500">*</span></label>
          <input required type="text" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all" placeholder="Your pickup address" />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-semibold text-text-dark">Drop Location <span className="text-red-500">*</span></label>
          <input required type="text" name="dropLocation" value={formData.dropLocation} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all" placeholder="Your drop address" />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-semibold text-text-dark">Pickup Date <span className="text-red-500">*</span></label>
          <input required type="date" name="pickupDate" value={formData.pickupDate} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all" />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-semibold text-text-dark">Vehicle Preference <span className="text-red-500">*</span></label>
          <select required name="vehicleType" value={formData.vehicleType} onChange={handleChange} className="w-full px-4 py-2.5 rounded-lg border border-border focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all bg-white">
            <option value="">Select a Vehicle</option>
            <option value="Hatchback / Sedan">Hatchback / Sedan</option>
            <option value="Innova">Innova</option>
            <option value="Innova Crysta">Innova Crysta</option>
            <option value="Innova Hycross / Hybrid">Innova Hycross / Hybrid</option>
            <option value="Tempo Traveller">Tempo Traveller / Urbania</option>
          </select>
        </div>
        <div className="md:col-span-2 mt-4 text-center">
          <button 
            type="submit" 
            disabled={status === "loading"}
            className="w-full md:w-auto px-10 py-3.5 bg-brand-primary hover:bg-brand-dark text-white font-bold rounded-lg transition-all shadow-lg shadow-brand-primary/30 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Submitting..." : "Submit Enquiry"}
          </button>
        </div>
      </form>
    </div>
  );
}
