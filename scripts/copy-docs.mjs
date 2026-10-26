import fs from "node:fs";
import path from "node:path";

const docsDir = path.resolve(process.cwd(), "docs");
const publicImagesDir = path.resolve(process.cwd(), "public", "images");

if (fs.existsSync(docsDir)) {
  if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
  }

  const files = fs.readdirSync(docsDir);
  for (const file of files) {
    if (/\.(png|jpg|jpeg|webp|avif|svg)$/i.test(file)) {
      const src = path.join(docsDir, file);
      const dest = path.join(publicImagesDir, file);
      fs.copyFileSync(src, dest);
      console.log(`[copy-docs] Copied ${file} -> public/images/`);
    }
  }
}
