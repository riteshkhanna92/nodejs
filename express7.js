var express = require('Express');
var app = express();

// var q = url.parse(req.url, true);
// var filename = "." + q.pathname;
//var things = require('./express-router');
app.get('/:id',function(req,res){

var requestUrlId=req.params.id;
console.log(requestUrlId);
if(requestUrlId==1)
{
  
    
     console.log("inside if check"+requestUrlId)
    var thing=require('./express-router');
   
//   //both index.js and things.js should be in same directory
//   app.use(1, thing);
app.use('/1',thing);
}
else if(requestUrlId==2)
{
  

    var thing1=require('./express-router1');
   
//   //both index.js and things.js should be in same directory
   app.use('/2', thing1);

}
})
 
 
app.listen(3000);