var mysql = require('mysql');  

var conn=mysql.createConnection({
    host: "localhost",  
    user: "root",  
     password: "rritss",
    database: "newmisdatabase"  
    

});
 conn.connect((Error)=>{
  if(Error)
  throw Error
// console.log('connected')
 //var insertQuery="insert into testtable values ('name1',23,'mukesh')";
 //var updateColumn="alter table testtable add column salary int";
 //var deleteColumn="alter table testtable drop column salary"
 var selectQuery="select * from testtable"
 conn.query(selectQuery,function(eror,results){
     if(eror){
         throw eror
     }

     console.log(results);
 })
 })

