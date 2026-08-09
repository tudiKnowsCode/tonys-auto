import sharp from "sharp";
import { readdirSync, mkdirSync } from "fs";
import path from "path";

const SRC = "T:/gallery";
const OUT =
  "C:/Users/tudin/AppData/Local/Temp/claude/t--Projects-tonys-auto/6e448c6a-b285-4fe5-a11d-5621777129e1/scratchpad/gthumbs";
mkdirSync(OUT, { recursive: true });

const files = readdirSync(SRC).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
for (const f of files) {
  const meta = await sharp(path.join(SRC, f)).metadata();
  const orient =
    meta.width === meta.height
      ? "square"
      : meta.width > meta.height
        ? "land"
        : "port";
  const safe = f.replace(/[^a-z0-9._-]/gi, "_");
  await sharp(path.join(SRC, f))
    .resize({ width: 520, withoutEnlargement: true })
    .jpeg({ quality: 66 })
    .toFile(path.join(OUT, `${orient}__${safe}`));
  console.log(`${f}  ${meta.width}x${meta.height} ${orient}`);
}
