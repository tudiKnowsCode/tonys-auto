// Optimize the chosen gallery photos into public/gallery and print dimensions.
import sharp from "sharp";
import { mkdirSync } from "fs";

const SRC = "T:/gallery";
mkdirSync("public/gallery", { recursive: true });

// Ordered for a good masonry flow (mix of orientations + subjects).
const picks = [
  ["4.jpg", "A Porsche 911 Turbo outside Tony's, a Bosch Service center"],
  ["13.jpg", "An Audi R8 at Tony's Imported Auto Service"],
  ["15.jpg", "Welding repair under a car on the lift"],
  ["25.jpg", "A Porsche engine out of the car for major service"],
  ["1.jpg", "Technicians servicing a car's front end in the bay"],
  ["20.jpg", "A transmission disassembled for a rebuild"],
  ["29.jpg", "An Audi S6 in the service bay"],
  ["11.jpg", "A BMW Performance big brake kit"],
  ["9.jpg", "Rebuilding an engine at the shop"],
  ["3.jpg", "Suspension and brake work in progress"],
  ["19.jpg", "A Mercedes-Benz wheel and brakes up on the lift"],
  ["30.jpg", "Engine timing service in progress"],
];

const out = [];
let i = 1;
for (const [file, alt] of picks) {
  const name = `gallery-${String(i).padStart(2, "0")}.jpg`;
  const dest = `public/gallery/${name}`;
  await sharp(`${SRC}/${file}`)
    .resize({ width: 1200, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(dest);
  const meta = await sharp(dest).metadata();
  out.push({ src: `/gallery/${name}`, width: meta.width, height: meta.height, alt });
  i++;
}
console.log(JSON.stringify(out, null, 2));
