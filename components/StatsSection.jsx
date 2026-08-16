"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AnimatedCounter = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      
      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-brand-primary">
      {count}{suffix}
    </span>
  );
};

export default function StatsSection() {
  const stats = [
    { label: "Special Vehicles", value: 10, suffix: "+" },
    { label: "People Dropped", value: 5000, suffix: "+" },
    { label: "Satisfied Clients", value: 50, suffix: "+" },
    { label: "Years of Service", value: new Date().getFullYear() - 2010, suffix: "+" }
  ];

  return (
    <section className="py-16 bg-white border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center p-6 rounded-2xl hover:bg-brand-gray transition-colors"
            >
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <p className="text-text-dark font-medium mt-3 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
