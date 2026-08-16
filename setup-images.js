const fs = require('fs');
const path = require('path');
const https = require('https');

const dirs = [
  'public/images/logo',
  'public/images/hero',
  'public/images/fleet',
  'public/images/destinations'
];

dirs.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

const imagesToCreate = [
  { path: 'public/images/hero/hero-bg.jpg', text: 'Hero+Background', width: 1920, height: 1080 },
  { path: 'public/images/fleet/sedan.jpg', text: 'Sedan', width: 800, height: 600 },
  { path: 'public/images/fleet/innova.jpg', text: 'Innova', width: 800, height: 600 },
  { path: 'public/images/fleet/innova-crysta.jpg', text: 'Innova+Crysta', width: 800, height: 600 },
  { path: 'public/images/fleet/hybrid.jpg', text: 'Toyota+Hybrid', width: 800, height: 600 },
  { path: 'public/images/fleet/tempo-traveller.jpg', text: 'Tempo+Traveller', width: 800, height: 600 },
  { path: 'public/images/destinations/bangalore-city.jpg', text: 'Bangalore+City', width: 800, height: 600 },
  { path: 'public/images/destinations/airport.jpg', text: 'Airport+Transfer', width: 800, height: 600 },
  { path: 'public/images/destinations/outstation.jpg', text: 'Outstation', width: 800, height: 600 },
  { path: 'public/images/destinations/corporate.jpg', text: 'Corporate', width: 800, height: 600 },
  { path: 'public/images/destinations/chikkamagaluru.jpg', text: 'Chikkamagaluru', width: 800, height: 600 },
  { path: 'public/images/destinations/nandi-hills.jpg', text: 'Nandi+Hills', width: 800, height: 600 },
  { path: 'public/images/destinations/ooty.jpg', text: 'Ooty', width: 800, height: 600 },
  { path: 'public/images/destinations/kodaikanal.jpg', text: 'Kodaikanal', width: 800, height: 600 },
  { path: 'public/images/destinations/bangalore-sightseeing.jpg', text: 'Bangalore+Sightseeing', width: 800, height: 600 },
];

imagesToCreate.forEach(img => {
  const file = fs.createWriteStream(path.join(__dirname, img.path));
  https.get(`https://placehold.co/${img.width}x${img.height}/2859A9/FFFFFF/jpeg?text=${img.text}`, function(response) {
    response.pipe(file);
  });
});

console.log("Images downloading...");
