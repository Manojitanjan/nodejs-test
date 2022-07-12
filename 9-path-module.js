const path = require('path');
console.log(path.sep);

//only to join given files and filepath
const filePath = path.join('\content', 'subfolder', 'test.txt');
console.log(filePath);
// to get only the base file name
const base = path.basename(filePath);
console.log(base);
// to get the absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);