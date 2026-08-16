"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/siteConfig";
import { MdMenu, MdClose, MdPhone } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Packages", href: "/packages" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white py-3"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-56 h-16 md:w-72 md:h-20">
            <Image 
              src="/images/logo.png" 
              alt={`${siteConfig.name} Logo`}
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-base font-medium transition-colors hover:text-brand-primary ${
                pathname === link.href ? "text-brand-primary font-semibold" : "text-text-dark"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex items-center gap-2 text-text-dark hover:text-brand-primary transition-colors font-medium text-base"
          >
            <MdPhone className="w-5 h-5 text-brand-primary" />
            <span>Call Now</span>
          </a>
          <Link
            href="/contact"
            className="bg-brand-primary text-white px-6 py-3 rounded-full font-medium text-base hover:bg-brand-dark transition-colors shadow-lg shadow-brand-primary/20"
          >
            Book a Cab
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text-dark p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <MdClose className="w-7 h-7" /> : <MdMenu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden absolute w-full"
          >
            <div className="flex flex-col px-4 py-6 space-y-4 shadow-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium py-2 border-b border-border/50 ${
                    pathname === link.href ? "text-brand-primary" : "text-text-dark"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="w-full flex items-center justify-center gap-2 border-2 border-brand-primary text-brand-primary py-3 rounded-full font-medium"
                >
                  <MdPhone className="w-5 h-5" />
                  Call Now
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center bg-brand-primary text-white py-3 rounded-full font-medium shadow-md"
                >
                  Book a Cab
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
