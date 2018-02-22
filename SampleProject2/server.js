var http=require("http");
var express=require("express");
var app=express();

//cors enabling
const cors = require('cors');
app.use(cors());

var bodyParser=require("body-parser");
var controller=require("./api");


var response={};
//controller configuaration
app.use('/api',controller);

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
  
 
 
 

app.get('*', (req, res) => {
    response.statusCode= 400,
    response.Failure,
    response.message="error occured.",
    response.result=[];
    res.status(400).json(response);
  });
  
/**
 * Get port from environment and store in Express.
 */
 
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));