var fs = require("fs");
var readData = fs.readFileSync('../input.txt');
console.log('readData' + readData);
console.log('program end');
fs.stat('../input.txt', function(error, data) {
    console.log('check' + data.isDirectory());

})