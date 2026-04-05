#!/usr/bin/env node

/**
 * Build Script for Mama Minds
 * Builds the project for production
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔨 Building Mama Minds...\n');

try {
  // Run Vite build
  console.log('📦 Running Vite build...');
  execSync('vite build', { stdio: 'inherit' });
  
  console.log('\n✅ Build completed successfully!');
  console.log('📁 Output directory: ./dist\n');
  
  // Display build info
  const distPath = path.join(__dirname, '../dist');
  if (fs.existsSync(distPath)) {
    const getSize = (dirPath) => {
      let size = 0;
      const files = fs.readdirSync(dirPath, { withFileTypes: true });
      
      files.forEach(file => {
        if (file.isDirectory()) {
          size += getSize(path.join(dirPath, file.name));
        } else {
          size += fs.statSync(path.join(dirPath, file.name)).size;
        }
      });
      return size;
    };
    
    const sizeInMB = (getSize(distPath) / 1024 / 1024).toFixed(2);
    console.log(`📊 Build size: ${sizeInMB} MB`);
  }
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}