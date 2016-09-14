var fs = require("fs");
var zlib = require('zlib');

// Compress the file node_test.txt to node_test.txt.gz
fs.createReadStream('node_test.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log("File Compressed.");
