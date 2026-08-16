const fs = require('fs');
const path = require('path');
const https = require('https');

const brainPath = path.resolve('C:/Users/ashag/.gemini/antigravity/brain/c595ec18-fdd8-4c97-86bb-6612990d565e');
const publicPath = path.resolve(__dirname, 'public/images');

// 1. Copy generated images
const generated = [
  { src: 'hero_bg_1786892720590.jpg', dest: 'hero/hero-bg.jpg' },
  { src: 'sedan_1786892926054.jpg', dest: 'fleet/sedan.jpg' },
  { src: 'innova_crysta_1786892739347.jpg', dest: 'fleet/innova.jpg' }, // Use for Innova as well
  { src: 'innova_crysta_1786892739347.jpg', dest: 'fleet/innova-crysta.jpg' },
  { src: 'innova_crysta_1786892739347.jpg', dest: 'fleet/hybrid.jpg' }, // Use for Hybrid as well
  { src: 'tempo_traveller_1786892943161.jpg', dest: 'fleet/tempo-traveller.jpg' }
];

generated.forEach(img => {
  const srcPath = path.join(brainPath, img.src);
  const destPath = path.join(publicPath, img.dest);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${img.src} to ${img.dest}`);
  } else {
    console.log(`Missing generated image: ${srcPath}`);
  }
});

// 2. Download Unsplash images for destinations and services
const unsplashLinks = [
  { dest: 'destinations/bangalore-city.jpg', id: '1598257006458-087169a1f08d' },
  { dest: 'destinations/airport.jpg', id: '1436491865332-7a61a3518cdb' },
  { dest: 'destinations/outstation.jpg', id: '1469854523086-cc02fe5d8800' },
  { dest: 'destinations/corporate.jpg', id: '1504384308090-c894fdcc538d' },
  { dest: 'destinations/chikkamagaluru.jpg', id: '1585255318115-f6c12ec582f3' },
  { dest: 'destinations/nandi-hills.jpg', id: '1506461883276-59f1de8a14af' },
  { dest: 'destinations/ooty.jpg', id: '1571536802807-30451e3955d8' },
  { dest: 'destinations/kodaikanal.jpg', id: '1623061295328-98e3bba5b8e9' },
  { dest: 'destinations/bangalore-sightseeing.jpg', id: '1582510003544-4d00ae5f3048' },
];

let pending = unsplashLinks.length;
unsplashLinks.forEach(img => {
  const destPath = path.join(publicPath, img.dest);
  const file = fs.createWriteStream(destPath);
  https.get(`https://images.unsplash.com/photo-${img.id}?w=800&q=80`, function(response) {
     response.pipe(file);
     file.on('finish', () => {
       file.close();
       console.log(`Downloaded ${img.dest}`);
       pending--;
       if (pending === 0) console.log("Done.");
     });
  }).on('error', (err) => {
    fs.unlink(destPath);
    console.error(`Error downloading ${img.dest}: ${err.message}`);
  });
});
