var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var pug = require('pug');
app.set('views', '../views');
app.set('view engine', 'pug');
var controller=require('./controller');
app.use('/', controller);
 

app.get('/',function(req,res){
res.render('first');

})

app.listen(8000,function(){
console.log('app is working');
})

