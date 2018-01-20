var mysql=require('mysql');
var connection=mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'rritss',
    database : 'newmisdatabase'
})

connection.connect(function(err){

    if(err)
        throw error;
    console.log('db connected');
    
})
module.exports=connection;
