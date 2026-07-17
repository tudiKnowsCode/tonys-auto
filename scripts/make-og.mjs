// Generates public/og.png (1200x630 Open Graph card) from an SVG.
// Re-run after changing: node scripts/make-og.mjs
import sharp from "sharp";

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#1c1c1e"/>
  <rect x="90" y="150" width="56" height="4" fill="#b82325"/>
  <text x="90" y="230" font-family="Georgia, 'Times New Roman', serif" font-size="30" letter-spacing="6" fill="#e0595b">MANCHESTER, CONNECTICUT — SINCE 1979</text>
  <text x="90" y="330" font-family="Georgia, 'Times New Roman', serif" font-size="72" font-weight="500" fill="#ffffff">Tony&#8217;s Imported</text>
  <text x="90" y="420" font-family="Georgia, 'Times New Roman', serif" font-size="72" font-weight="500" fill="#ffffff">Auto Service</text>
  <text x="90" y="500" font-family="Arial, Helvetica, sans-serif" font-size="26" fill="#b7b3aa">European auto repair &#183; Audi &#183; BMW &#183; Mercedes-Benz &#183; Porsche &#183; Jaguar &#183; Land Rover</text>
  <rect x="0" y="614" width="1200" height="16" fill="#b82325"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og.png");
console.log("wrote public/og.png");
