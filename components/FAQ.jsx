"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";

const faqs = [
  {
    question: "Do you provide Bangalore airport pickup and drop?",
    answer: "Yes, we provide 24/7 reliable airport transfer services across Bangalore. You can book a Sedan, Ertiga, or Innova Crysta for comfortable airport travel."
  },
  {
    question: "Do you provide outstation cab services from Bangalore?",
    answer: "Absolutely! We offer outstation cabs for destinations like Ooty, Chikkamagaluru, Nandi Hills, Kodaikanal, Coorg, Wayanad, and more. Our fleet includes comfortable SUVs and Tempo Travellers ideal for long journeys."
  },
  {
    question: "Which vehicles are available in your fleet?",
    answer: "Our well-maintained fleet includes Hatchbacks/Sedans, Suzuki Ertiga, Toyota Innova Crysta, Toyota Hybrid, and Tempo Travellers (Urbania) in both AC and Non-AC variants."
  },
  {
    question: "How can I book a cab?",
    answer: "You can book a cab quickly by calling us directly at +91 98809 20035, sending us a message on WhatsApp, or filling out the booking enquiry form on our website."
  },
  {
    question: "Do prices include toll charges?",
    answer: "Prices may vary depending on the specific service, route, and package. Toll charges and parking fees are generally additional unless explicitly stated in your custom quotation. Please contact us for the exact latest quotation for your journey."
  },
  {
    question: "Can I request a specific vehicle?",
    answer: "Yes, you can request a specific vehicle when making your enquiry. We will check availability and confirm your preferred vehicle for the journey."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-brand-gray relative">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Frequently Asked Questions</h2>
          <p className="text-text-gray text-lg">Got questions? We've got answers.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${openIndex === index ? 'border-brand-primary shadow-md' : 'border-border hover:border-gray-300'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-brand-primary' : 'text-brand-navy'}`}>
                  {faq.question}
                </span>
                <MdKeyboardArrowDown 
                  className={`w-6 h-6 text-brand-primary transform transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-text-gray leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
