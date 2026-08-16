export const pricing = {
  airport: [
    {
      id: "apt-1",
      name: "Sedan",
      image: "/images/fleet/sedan.webp",
      price: 999,
      distance: "30 Km",
      extraInfo: "+ Toll",
      capacity: 4,
      waitingTime: "₹50/hour",
      ac: true
    },
    {
      id: "apt-2",
      name: "Innova",
      image: "/images/fleet/innova.jpg",
      price: 1750,
      ac: true
    },
    {
      id: "apt-3",
      name: "Innova Crysta",
      image: "/images/fleet/innova-crysta.jpg",
      price: 1999,
      ac: true
    },
    {
      id: "apt-4",
      name: "Toyota Hybrid",
      image: "/images/fleet/hybrid.jpg",
      price: 2300,
      ac: true
    }
  ],
  local: [
    {
      id: "loc-1",
      name: "Innova Crysta",
      image: "/images/fleet/innova-crysta.jpg",
      duration: "8 Hours",
      distance: "80 Km",
      price: 3800,
      extraKm: 18,
      extraHour: 200,
      outstationRate: "₹18/km",
      ac: true,
      popular: true
    },
    {
      id: "loc-2",
      name: "Toyota Hybrid",
      image: "/images/fleet/hybrid.jpg",
      duration: "8 Hours",
      distance: "80 Km",
      price: 3500,
      extraKm: 21,
      extraHour: 250,
      outstationRate: "₹21/km",
      ac: true
    },
    {
      id: "loc-3",
      name: "Tempo Traveller / Urbania (AC)",
      image: "/images/fleet/tempo-traveller.webp",
      price: "₹21/km",
      extraKm: 21,
      extraHour: 150,
      outstationRate: "₹20/km",
      ac: true
    },
    {
      id: "loc-4",
      name: "Tempo Traveller / Urbania (Non-AC)",
      image: "/images/fleet/tempo-traveller.webp",
      price: "₹19/km",
      extraKm: 19,
      extraHour: 150,
      outstationRate: "₹18/km",
      ac: false
    }
  ],
  outstation: [
    {
      id: "out-1",
      name: "Innova Crysta",
      image: "/images/fleet/innova-crysta.jpg",
      ratePerKm: 18,
      ac: true,
      popular: true
    },
    {
      id: "out-2",
      name: "Toyota Hybrid",
      image: "/images/fleet/hybrid.jpg",
      ratePerKm: 21,
      ac: true
    },
    {
      id: "out-3",
      name: "Tempo Traveller (AC)",
      image: "/images/fleet/tempo-traveller.webp",
      ratePerKm: 20,
      ac: true
    },
    {
      id: "out-4",
      name: "Tempo Traveller (Non-AC)",
      image: "/images/fleet/tempo-traveller.webp",
      ratePerKm: 18,
      ac: false
    }
  ]
};
