// Make the connected near-white/checkerboard background of a logo transparent.
// Flood-fills inward from every border pixel, so it never touches the logo interior.
import sharp from "sharp";

const file = process.argv[2];
if (!file) {
  console.error("usage: node scripts/strip-bg.mjs <path>");
  process.exit(1);
}

const { data, info } = await sharp(file)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width: w, height: h, channels: ch } = info;
const isBg = (i) => {
  // near-white (covers the 255 + 238 checker) and currently opaque
  return data[i] >= 224 && data[i + 1] >= 224 && data[i + 2] >= 224 && data[i + 3] > 0;
};

const visited = new Uint8Array(w * h);
const stack = [];

// Seed from all four borders.
const seed = (x, y) => {
  const p = y * w + x;
  if (!visited[p]) {
    visited[p] = 1;
    if (isBg(p * ch)) stack.push(p);
  }
};
for (let x = 0; x < w; x++) {
  seed(x, 0);
  seed(x, h - 1);
}
for (let y = 0; y < h; y++) {
  seed(0, y);
  seed(w - 1, y);
}

let cleared = 0;
while (stack.length) {
  const p = stack.pop();
  data[p * ch + 3] = 0; // make transparent
  cleared++;
  const x = p % w;
  const y = (p - x) / w;
  const neighbors = [
    [x - 1, y],
    [x + 1, y],
    [x, y - 1],
    [x, y + 1],
  ];
  for (const [nx, ny] of neighbors) {
    if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
    const np = ny * w + nx;
    if (visited[np]) continue;
    visited[np] = 1;
    if (isBg(np * ch)) stack.push(np);
  }
}

// Soften a 1px halo: fade any bright pixel that borders transparency.
for (let y = 0; y < h; y++) {
  for (let x = 0; x < w; x++) {
    const p = y * w + x;
    const i = p * ch;
    if (data[i + 3] === 0) continue;
    if (data[i] < 210 || data[i + 1] < 210 || data[i + 2] < 210) continue;
    const near = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ].some(([nx, ny]) => {
      if (nx < 0 || ny < 0 || nx >= w || ny >= h) return false;
      return data[(ny * w + nx) * ch + 3] === 0;
    });
    if (near) data[i + 3] = 0;
  }
}

await sharp(data, { raw: { width: w, height: h, channels: ch } })
  .png()
  .toFile(file);

console.log(`${file}: cleared ${cleared} background px (${w}x${h})`);
