var http = require("http");
http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-type': "text/plain" });
    res.end('heelo');

}).listen(8081)
console.log(__dirname);
console.log(__filename);

console.log(`Process Architecture: ${process.arch}`);
console.log(`Process PID: ${process.pid}`);
console.log(`Process Platform: ${process.platform}`);
console.log(`Process Version: ${process.version}`);