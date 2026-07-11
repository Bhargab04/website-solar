const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = 'd:/Projects/avoy/Solara-energy-solutions/src/assets';
console.log('Optimizing directory:', dir);

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.webp')) {
    const p = path.join(dir, file);
    const tempOut = p + '.temp.webp';
    
    sharp(p)
      .metadata()
      .then(metadata => {
        if (metadata.width > 1920) {
          console.log(`Resizing ${file} from width ${metadata.width} to 1920`);
          return sharp(p)
            .resize({ width: 1920 })
            .webp({ quality: 75 })
            .toFile(tempOut)
            .then(() => {
              fs.renameSync(tempOut, p);
              console.log(`Updated ${file}`);
            });
        } else if (metadata.width > 1200 && fs.statSync(p).size > 300 * 1024) {
          console.log(`Compressing ${file} (width: ${metadata.width}, size: ${(fs.statSync(p).size/1024).toFixed(1)}kb)`);
          return sharp(p)
            .resize({ width: 1400 })
            .webp({ quality: 70 })
            .toFile(tempOut)
            .then(() => {
              fs.renameSync(tempOut, p);
              console.log(`Updated ${file}`);
            });
        } else {
          console.log(`${file} is already optimized (width: ${metadata.width}, size: ${(fs.statSync(p).size/1024).toFixed(1)}kb)`);
        }
      })
      .catch(err => console.error(`Error processing ${file}:`, err));
  }
});
