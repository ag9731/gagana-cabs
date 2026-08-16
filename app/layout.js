import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import MobileCTA from "@/components/MobileCTA";
import { seoConfig } from "@/data/seo";
import { siteConfig } from "@/data/siteConfig";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL('https://gaganacabs.in'),
  title: seoConfig.home.title,
  description: seoConfig.home.description,
  keywords: seoConfig.home.keywords,
  openGraph: seoConfig.home.openGraph,
};

export default function RootLayout({ children }) {
  // Simple JSON-LD for local business
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": siteConfig.name,
    "image": "https://gaganacabs.in/images/logo/logo.png",
    "url": "https://gaganacabs.in",
    "telephone": siteConfig.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "20th Main Rd, Old Madiwala, Chikka Madivala, BTM 2nd Stage, BTM Layout",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560076",
      "addressCountry": "IN"
    },
    "areaServed": "Bangalore",
    "priceRange": "₹₹",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className={`${poppins.variable} font-sans antialiased bg-brand-gray text-text-dark flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-[72px]">
          {children}
        </main>
        <Footer />
        <FloatingActions />
        <MobileCTA />
      </body>
    </html>
  );
}
