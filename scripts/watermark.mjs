import sharp from "sharp";
import { readdir } from "fs/promises";
import { join, extname, basename } from "path";

const PRODUCTS_DIR = new URL("../src/assets/products/", import.meta.url)
  .pathname;

// SVG watermark badge – leaf icon + "YKK TRADING" text, bottom-right corner
const BADGE_W = 200;
const BADGE_H = 52;

const watermarkSvg = `
<svg width="${BADGE_W}" height="${BADGE_H}" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="${BADGE_W}" height="${BADGE_H}" rx="26" ry="26"
        fill="rgba(255,255,255,0.92)" />

  <!-- Leaf icon (simplified path matching Lucide "Leaf") -->
  <g transform="translate(14, 10)" stroke="#3a7d44" stroke-width="1.8"
     stroke-linecap="round" stroke-linejoin="round" fill="none">
    <!-- leaf body -->
    <path d="M11 20 C11 20 2 17 2 8 C2 8 8 4 16 8 C16 8 20 14 11 20Z" fill="#3a7d44" opacity="0.15"/>
    <path d="M11 20 C11 20 2 17 2 8 C2 8 8 4 16 8 C16 8 20 14 11 20Z"/>
    <!-- stem -->
    <path d="M11 20 L11 12"/>
    <!-- vein -->
    <path d="M11 14 C11 14 14 11 16 8"/>
  </g>

  <!-- Brand text -->
  <text x="42" y="20"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="10"
        font-weight="800"
        letter-spacing="2"
        fill="#1a1a1a"
        text-anchor="start">YKK TRADING</text>
  <text x="42" y="36"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="9"
        font-weight="500"
        letter-spacing="1"
        fill="#3a7d44"
        text-anchor="start">Vitamins &amp; Wellness</text>
</svg>
`.trim();

const watermarkBuf = Buffer.from(watermarkSvg);

async function watermark(filePath) {
  const img = sharp(filePath);
  const meta = await img.metadata();
  const { width, height } = meta;

  // Place badge 18px from bottom-right
  const left = Math.max(0, width - BADGE_W - 18);
  const top = Math.max(0, height - BADGE_H - 18);

  const composite = await sharp(filePath)
    .composite([{ input: watermarkBuf, top, left }])
    .jpeg({ quality: 90 })
    .toBuffer();

  // Write back in-place
  await sharp(composite).toFile(filePath);
  console.log(`  ✓ ${basename(filePath)}`);
}

const files = await readdir(PRODUCTS_DIR);
const jpgs = files.filter((f) => extname(f).toLowerCase() === ".jpg");

console.log(`\nWatermarking ${jpgs.length} product images…\n`);
for (const f of jpgs) {
  await watermark(join(PRODUCTS_DIR, f));
}
console.log("\nDone!\n");
