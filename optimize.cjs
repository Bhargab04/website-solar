const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src/assets');
fs.readdirSync(dir).forEach(file => {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    const p = path.join(dir, file);
    const out = p.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    sharp(p)
      .webp({ quality: 80 })
      .toFile(out)
      .then(() => {
        console.log(`Optimized ${file} to WebP`);
        // We delete the original to save space
        fs.unlinkSync(p);
      })
      .catch(err => console.error(err));
  }
});
