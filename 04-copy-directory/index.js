// const fs = require('fs');
// const path = require('path');

// async function copyDir() {
//   const sourceDir = path.join(__dirname, 'files');
//   const destinationDir = path.join(__dirname, 'files-copy');

//   try {
//     await fs.promises.mkdir(destinationDir, { recursive: true });

//     const items = await fs.promises.readdir(sourceDir, { withFileTypes: true });

//     for (const item of items) {
//       const sourcePath = path.join(sourceDir, item.name);
//       const destinationPath = path.join(destinationDir, item.name);

//       if (item.isDirectory()) {
//         await copyDirRecursive(sourcePath, destinationPath);
//       } else if (item.isFile()) {
//         await fs.promises.copyFile(sourcePath, destinationPath);
//       }
//     }

//     console.log('Directory copied successfully!');
//   } catch (error) {
//     console.error('Error copying directory:', error);
//   }
// }

// async function copyDirRecursive(sourceDir, destinationDir) {
//   await fs.promises.mkdir(destinationDir, { recursive: true });

//   const items = await fs.promises.readdir(sourceDir, { withFileTypes: true });

//   for (const item of items) {
//     const sourcePath = path.join(sourceDir, item.name);
//     const destinationPath = path.join(destinationDir, item.name);

//     if (item.isDirectory()) {
//       await copyDirRecursive(sourcePath, destinationPath);
//     } else if (item.isFile()) {
//       await fs.promises.copyFile(sourcePath, destinationPath);
//     }
//   }
// }

// copyDir();
