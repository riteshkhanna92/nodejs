var connection=require('./mysql');
module.exports.booklist=function(callback){
    var query="SELECT * FROM newmisdatabase.book_list where reg_no='b1'";
    connection.query(query, function (error, results, fields) {
        if (error){
          //  console.log("err");
        }
        else{
      
            if(results.length >0){
            callback(null,results);
            }
            }
        });
    }
    module.exports.allBookList=function(callback){
        var query="SELECT * FROM newmisdatabase.book_list";
        connection.query(query, function (error, results, fields) {
            if (error){
              //  console.log("err");
            }
            else{
        
                if(results.length >0){
                callback(null,results);
                }
                }
            });
        }
        module.exports.selectedBook=function(bookid,callback){
            //var query="
            connection.query('select * from newmisdatabase.book_list where  reg_no=?',[bookid], function (error, results, fields) {
                if (error){
                  //  console.log("err");
                }
                else{
                console.log("ELSE LOOP");
                    if(results.length >0){
                    callback(null,results);
                    }
                    else {

                        callback(400,results);
                    }
                    }
                });
            }
            module.exports.insertBook=function(inputData,callback){
              
                connection.query('insert into newmisdatabase.book_list (user_id,reg_no,genre,book_name,author_name,price,status)values (?,?,?,?,?,?,?)',[inputData.userId,inputData.regNo,inputData.genre,inputData.bookName,inputData.authorName,inputData.price,inputData.status], function (error, results, fields) 
               
                
                {
                    if (error){
                     
                    }
                    else{
                    console.log("ELSE LOOP");
                        if(results.length >0){
                        callback(null,results);
                        }
                        else {
    
                            callback(null,results);
                        }
                        }
                    });
                }