 var http = require('http');
 var url = require('url');
 var fs = require('fs');
 var url = require('url');
 var adr = 'http://localhost:8080/default.htm?year=2017&month=february';

 var q = url.parse(adr, true);

 // creating a server 
 //  http.createServer(function(req, res) {
 //      res.writeHead(200, { 'Content-Type': 'text/html' });
 //      /*Use the url module to turn the querystring into an object:*/
 //      var q = url.parse(req.url, true).query;
 //      /*Return the year and month from the query object:*/
 //      var txt = q.year + " " + q.month;
 //      res.end(txt);
 //  }).listen(8080);


 // deleting a file
 //  fs.unlink('testRename1', function(error) {

 //      if (error)
 //          throw error;
 //      console.log('file overridden');

 //  })
 //  console.log(q.hostname);
 //  console.log(q.pathname);
 //  console.log(q.search)
 //  console.log('test' + q.search)