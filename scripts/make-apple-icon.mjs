import sharp from "sharp";
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" rx="34" fill="#1c1c1e"/>
  <rect x="46" y="52" width="88" height="18" fill="#ffffff"/>
  <rect x="81" y="52" width="18" height="66" fill="#ffffff"/>
  <rect x="46" y="128" width="88" height="14" fill="#b82325"/>
</svg>`;
await sharp(Buffer.from(svg)).png().toFile("app/apple-icon.png");
console.log("wrote app/apple-icon.png");
