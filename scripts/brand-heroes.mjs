// Resize the chosen brand photos into optimized hero images in public/brands.
import sharp from "sharp";

const SRC = "T:/car-images";
const picks = {
  "audi-hero": `${SRC}/audi/blake-meyer-CRNbHjNaljo-unsplash.jpg`,
  "bmw-hero": `${SRC}/bmw/devon-janse-van-rensburg-yoqHLUayUTg-unsplash.jpg`,
  "jaguar-hero": `${SRC}/jaguar/ralf-schlegel-6pDXbba2cQk-unsplash.jpg`,
  "land-rover-hero": `${SRC}/land rover/michael-heuser-wuEs2P8VLGA-unsplash.jpg`,
  "mercedes-hero": `${SRC}/mercedes/aaron-huber-8qYE6LGHW-c-unsplash.jpg`,
  "porsche-hero": `${SRC}/porsche/david-ford-S7bRdvGDUPA-unsplash.jpg`,
};

for (const [name, src] of Object.entries(picks)) {
  const out = `public/brands/${name}.jpg`;
  await sharp(src)
    .resize({ width: 1600, withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(out);
  const meta = await sharp(out).metadata();
  console.log(`${out}  ${meta.width}x${meta.height}`);
}
