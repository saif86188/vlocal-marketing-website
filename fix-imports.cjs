const fs = require('fs');
const path = require('path');

function processDir(dir, depth) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath, depth + 1);
    } else if (fullPath.endsWith('page.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Calculate relative prefix
      // depth = 0 for src/app/services/seo/ (wait, let's just count from src/app/services)
      let prefix = '';
      for (let i = 0; i < depth + 2; i++) {
        prefix += '../';
      }
      
      content = content.replace(/@\/components/g, prefix + 'components');
      fs.writeFileSync(fullPath, content);
      console.log(`Updated ${fullPath} with prefix ${prefix}`);
    }
  }
}

processDir(path.join(__dirname, 'src', 'app', 'services', 'seo'), 1);
processDir(path.join(__dirname, 'src', 'app', 'services', 'it-services'), 1);
