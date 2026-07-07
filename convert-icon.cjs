const sharp = require('sharp');
const fs = require('fs');

async function convert() {
  try {
    const svgBuffer = fs.readFileSync('public/logo.svg');
    
    // Create apple-touch-icon.png (192x192 is good, or 180x180)
    await sharp(svgBuffer)
      .resize(180, 180)
      .png()
      .toFile('public/apple-touch-icon.png');
      
    // Create favicon.ico (48x48)
    await sharp(svgBuffer)
      .resize(48, 48)
      .png()
      .toFile('public/favicon.ico');
      
    // Create a 192x192 and 512x512 for manifest if needed
    await sharp(svgBuffer)
      .resize(192, 192)
      .png()
      .toFile('public/logo-192.png');
      
    await sharp(svgBuffer)
      .resize(512, 512)
      .png()
      .toFile('public/logo-512.png');
      
    console.log("Images generated successfully.");
  } catch (error) {
    console.error("Error generating images:", error);
  }
}

convert();
