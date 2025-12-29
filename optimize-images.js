#!/usr/bin/env node

/**
 * Image Optimization Script
 * 
 * This script provides instructions for optimizing images manually.
 * Run this after optimizing your images with external tools.
 */

console.log('\n🎨 IMAGE OPTIMIZATION GUIDE\n');
console.log('Your current images:');
console.log('  - logo.png: 608 KB');
console.log('  - profil.jpg: 2 MB (!)\n');

console.log('📋 Steps to optimize:\n');

console.log('1. COMPRESS IMAGES:');
console.log('   • Use TinyPNG (tinypng.com) or Squoosh (squoosh.app)');
console.log('   • Target size: < 200 KB for logo, < 500 KB for profil\n');

console.log('2. CONVERT TO WebP:');
console.log('   • WebP is 25-35% smaller than JPEG/PNG');
console.log('   • Use: squoosh.app or online converters\n');

console.log('3. RESPONSIVE IMAGES:');
console.log('   • Create multiple sizes (small, medium, large)');
console.log('   • Use <picture> tag with srcset\n');

console.log('4. LAZY LOAD IMAGES:');
console.log('   • Add loading="lazy" to <img> tags');
console.log('   • Already implemented in components!\n');

console.log('💡 QUICK WINS:');
console.log('   • Reduce profil.jpg from 2MB to ~300KB = 1.7MB saved!');
console.log('   • Convert to WebP = Additional 30-40% savings\n');

console.log('After optimization, replace the files and run npm run build\n');
