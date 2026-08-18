import { siteConfig } from "./siteConfig";

const defaultSEO = {
  title: `${siteConfig.name} - Reliable Cab Service in Bangalore`,
  description: "Book comfortable and reliable cab services in Bangalore with Gagana Cabs. We offer airport transfers, city rides, outstation cabs, and special travel packages.",
  keywords: "cab service in Bangalore, taxi service in Bangalore, Bangalore airport taxi, outstation cab Bangalore",
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://gaganacabs.in',
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/hero/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Banner`,
      },
    ],
  }
};

export const seoConfig = {
  home: { ...defaultSEO },
  about: {
    title: `About Us | ${siteConfig.name}`,
    description: "Learn about Gagana Cabs, a reliable cab and travel service in Bangalore serving customers since 2010.",
    keywords: "about Gagana Cabs, Bangalore cab company, reliable taxi Bangalore"
  },
  services: {
    title: `Our Services | ${siteConfig.name}`,
    description: "Explore our range of services including Bangalore city cabs, airport taxi, outstation travel, and corporate transport.",
    keywords: "Bangalore airport cab, corporate cab service Bangalore, local cab service"
  },
  pricing: {
    title: `Cab Pricing & Fares | ${siteConfig.name}`,
    description: "Transparent and affordable pricing for airport transfers, local rentals, and outstation trips. Book Ertiga, Sedan, or Tempo Traveller.",
    keywords: "affordable cab service Bangalore, Innova Crysta cab Bangalore fare, Tempo Traveller rental"
  },
  packages: {
    title: `Travel Packages | ${siteConfig.name}`,
    description: "Discover our popular travel packages from Bangalore to Ooty, Chikkamagaluru, Nandi Hills, and Kodaikanal.",
    keywords: "Bangalore to Ooty cab, Bangalore to Chikkamagaluru cab, Nandi Hills trip"
  },
  contact: {
    title: `Contact Us | ${siteConfig.name}`,
    description: "Contact Gagana Cabs for booking enquiries, custom quotes, and travel assistance in Bangalore.",
    keywords: "contact Gagana Cabs, book taxi Bangalore, Gagana Cabs phone number"
  }
};
