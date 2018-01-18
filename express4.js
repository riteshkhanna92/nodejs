var express = require('express');  
var app=express();  



app.get('/get_example3',function(request,response){

    response.send('<p>Firstname: ' + request.query['firstname']+'</p>'  
    // <p>Lastname: '+request.query['lastname']+'</p><p>Password: '+request.query['password']+'</p>  
    // <p>AboutYou: '+request.query['aboutyou']+'</p>');  
)

})

var server=app.listen(8000,function(){

    var host = server.address().address  
    var port = server.address().port  
    console.log("Example app listening at http://%s:%s", host, port)  
})
