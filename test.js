 var http = require('http');
 var filerReader = require('fs');
 var urlReader = require('url');
 var uc = require('upper-case');
 http.createServer(function(req, res) {

     var q = urlReader.parse(req.url, true);
     // console.log(q);

     var filename = "." + q.pathname;
     // console.log(q.pathname);
     // console.log(filename);
     filerReader.readFile(filename, function(error, data) {
         if (error) {
             res.writeHead(404, { 'Content-Type': 'text/html' });
             return res.end("404 Not Found");
         } else {
             res.writeHead(404, { 'Content-Type': 'text/html' });
             res.write(uc(data));
             res.end;
         }
     })




 }).listen(8080);