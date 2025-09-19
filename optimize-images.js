const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const mkdir = promisify(fs.mkdir);

const inputDir = path.join(__dirname, 'public/images');
const outputDir = path.join(__dirname, 'public/optimized-images');

// Supported image formats
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.webp'];

async function ensureDir(dir) {
  try {
    await mkdir(dir, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

async function optimizeImages() {
  try {
    await ensureDir(outputDir);
    const files = await readdir(inputDir);
    
    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      
      if (SUPPORTED_FORMATS.includes(ext)) {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(
          outputDir, 
          `${path.basename(file, ext)}.webp`
        );
        
        console.log(`Optimizing ${file}...`);
        
        await sharp(inputPath)
          .webp({ 
            quality: 80,
            effort: 6
          })
          .toFile(outputPath);
          
        console.log(`Optimized ${file} to WebP`);
      }
    }
    
    console.log('Image optimization complete!');
    console.log(`Optimized images saved to: ${outputDir}`);
    
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();
