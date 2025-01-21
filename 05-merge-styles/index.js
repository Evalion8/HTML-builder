const fs = require('fs');
const path = require('path');

async function mergeStyles() {
  const stylesDir = path.join(__dirname, 'styles');
  const outputDir = path.join(__dirname, 'project-dist');
  const outputFile = path.join(outputDir, 'bundle.css');

  try {
    await fs.promises.mkdir(outputDir, { recursive: true });

    const items = await fs.promises.readdir(stylesDir, { withFileTypes: true });

    const cssFiles = items
      .filter((item) => item.isFile() && path.extname(item.name) === '.css')
      .map((item) => path.join(stylesDir, item.name));

    const writeStream = fs.createWriteStream(outputFile);
    for (const file of cssFiles) {
      const readStream = fs.createReadStream(file, 'utf8');
      readStream.pipe(writeStream, { end: false });
      await new Promise((resolve) => readStream.on('end', resolve));
    }

    console.log('Styles merged successfully into bundle.css!');
  } catch (error) {
    console.error('Error merging styles:', error);
  }
}

mergeStyles();
