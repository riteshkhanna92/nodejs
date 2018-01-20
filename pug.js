var express = require('express');  
var app = express();  
app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static('public'));
//method called when on localhost 8000
app.get('/', function(req, res){
    res.render('first',{

        name: "TutorialsPoint", 
        url:"http://www.tutorialspoint.com"
    });
 });
 app.listen(8000,function(){
     console.log('working');

 })