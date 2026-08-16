const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicPath = path.resolve(__dirname, 'public/images');
const dirs = ['hero', 'fleet', 'destinations', 'services', 'about'];

async function processDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
      const inputPath = path.join(dirPath, file);
      const nameWithoutExt = file.substring(0, file.lastIndexOf('.'));
      const outputPath = path.join(dirPath, `${nameWithoutExt}.webp`);
      
      try {
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
        console.log(`Converted: ${file} -> ${nameWithoutExt}.webp`);
        fs.unlinkSync(inputPath); // remove original to enforce cache miss
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
}

async function run() {
  for (const d of dirs) {
    await processDirectory(path.join(publicPath, d));
  }
  console.log("Image conversion complete.");
}

run();
