var express=require('express');
var app=express();
var bodyParser=require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({extended:false});
// using static files
app.use(express.static('public'));  

// app.get('/form2.html',function(req,res){
//     res.sendFile( __dirname + "/" + "index.html" );  
// })

app.post('/post_example1',urlencodedParser,function(req,res){
let response={};
response.firstName=req.body.firstname;
response.lastName=req.body.lastname;
res.send(JSON.stringify(response));
// response = {  
//     first_name:req.body.first_name,  
//     last_name:req.body.last_name  
// };  
console.log(JSON.stringify(response));
})

var server = app.listen(8000, function () {  
    var host = server.address().address  
    var port = server.address().port  
    console.log("Example app listening at http://%s:%s", host, port)  
  })  