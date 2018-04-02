var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router=express.Router();
var expressValidator = require('express-validator');

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(expressValidator());  //this line to be addded


var dao=require("./dao");
 
var bookList=[];
var response={};

//console.log('inisde api.js');
router.get('/getBook',function(req,res){
    dao.booklist(function(error,data){

       if(error){
        response.statusCode= 400,
        response.Failure,
        response.message="error occured.",
        response.result=data;
        res.status(400).json(response);
       
       }
       else {
        response.statusCode= 200,
        response.SUCCESS,
        response.message="all data returned Succesfully.",
        response.result=data;
        res.status(200).json(response);
       }

    })
   
    
})
router.get('/getAllBooks',function(req,res){
    dao.allBookList(function(error,data){

       if(error){
        response.statusCode= 400,
        response.Failure,
        response.message="error occured.",
        response.result=data;
        res.status(400).json(response);

       
       }
       else {
        response.statusCode= 200,
        response.SUCCESS,
        response.message="all data returned Succesfully.",
        response.result=data;
        res.status(200).json(response);
       }

    })
   
    
})
router.get('/getbook/:bookid',function(req,res){
 var parameter1=req.params.bookid;
console.log('inisde api'+JSON.stringify(parameter1))
 
    dao.selectedBook((parameter1),function(error,data){

       if(error){
        response.statusCode= 400,
        response.Failure,
        response.message="error occured.",
        response.result=data;
        res.status(500).json(response);


       
       }
       else {
        response.statusCode= 200,
        response.SUCCESS,
        response.message="all data returned Succesfully.",
        response.result=data;
        res.status(200).json(response);
       }

    })
   
    
})
router.post('/createBook',bodyParser.json(),function(req,res){
   var data=req.userId
    req.checkBody("userId", "Enter a userId.").isNumber();
    
    



      var errors = req.validationErrors();
      if (errors) {
        res.send(errors);
        return;
      } else {
        dao.insertBook((req.body),function(error,data){
            
                   if(error){
                    response.statusCode= 400,
                    response.Failure,
                    response.message="error occured.",
                    response.result=data;
                    res.status(400).json(response);
            
                   
                   }
                   else {
                    response.statusCode= 200,
                    response.SUCCESS,
                    response.message="all data returned Succesfully.",
                    response.result=data;
                    res.status(200).json(response);
                   }
            
                })
      }
    });
    
 
    
      
      
       
  
module.exports=router;