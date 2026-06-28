import fs from 'fs';
import path from 'path';

function replaceInFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf8');
  const newContent = content
    .replace(/Luxm/g, 'Lumx')
    .replace(/LUXM/g, 'LUMX')
    .replace(/luxmsalon\.in/g, 'lumxsalon.in')
    .replace(/luxm_appointments/g, 'lumx_appointments')
    .replace(/luxm_reviews/g, 'lumx_reviews')
    .replace(/luxmsalonagra/g, 'lumxsalonagra');
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent);
    console.log(`Updated ${filePath}`);
  }
}

function walk(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath);
    } else {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.html') || filePath.endsWith('.xml') || filePath.endsWith('.txt')) {
        replaceInFile(filePath);
      }
    }
  }
}

replaceInFile('index.html');
walk('src');
walk('public');
