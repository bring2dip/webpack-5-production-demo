const path = require('path');
const fs = require('fs');

// Our function that generates our html plugins
exports.getFiles = function getFiles (directory) {
  // Read files in template directory
  const files = fs.readdirSync(path.resolve(__dirname, directory))
  return files.filter(item => {
    return item.split('.').length >= 2;
  }).map(item => {
    // Split names and extension
    const parts = item.split('.');
    const name = parts[0]
    const extension = parts[1]
    return {
      filePath: path.resolve(__dirname, `${directory}/${name}.${extension}`),
      fullName: `${name}.${extension}`,
      name,
    }
  })
}