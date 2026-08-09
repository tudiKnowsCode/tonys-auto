import sharp from "sharp";
import { readdirSync, mkdirSync } from "fs";
import path from "path";

const SRC = "T:/car-images";
const OUT =
  "C:/Users/tudin/AppData/Local/Temp/claude/t--Projects-tonys-auto/6e448c6a-b285-4fe5-a11d-5621777129e1/scratchpad/thumbs";

for (const brand of readdirSync(SRC)) {
  const dir = path.join(SRC, brand);
  let files;
  try {
    files = readdirSync(dir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
  } catch {
    continue;
  }
  const outDir = path.join(OUT, brand);
  mkdirSync(outDir, { recursive: true });
  let i = 1;
  for (const f of files) {
    const meta = await sharp(path.join(dir, f)).metadata();
    const orient = meta.width >= meta.height ? "landscape" : "portrait";
    const out = path.join(outDir, `${i}__${orient}__${f}`);
    await sharp(path.join(dir, f))
      .resize({ width: 720, withoutEnlargement: true })
      .jpeg({ quality: 68 })
      .toFile(out);
    console.log(`${brand}/${i} ${orient} ${meta.width}x${meta.height} ${f}`);
    i++;
  }
}
