import fs from "fs";
import path from "path";

const dir = "./src/generated";

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");

  // add .js to local imports
  content = content.replace(
    /from\s+['"](\.\/[^'"]+)['"]/g,
    (match, p1) => `from '${p1}.js'`
  );

  fs.writeFileSync(filePath, content);
}

function walk(dirPath) {
  for (const file of fs.readdirSync(dirPath)) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith(".ts")) {
      fixFile(fullPath);
    }
  }
}

walk(dir);
console.log("✅ Fixed ESM imports");