var express=require('express');
var app=express();
var pug = require('pug');
app.set('views', '../views');
app.set('view engine','pug');

var bodyParser=require('body-parser');

var dao=require('./dao');
var router = express.Router();
router.get('/loginMethod',function(req,res){
console.log('inside controler loginMetod')
dao.loginfunction('aman','aman1',function(error){
    if(error)
    {
    throw error
    }
    else {
   
        res.render('second')
    }

})

})
module.exports = router;