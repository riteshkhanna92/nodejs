var express=require("express");
var app=express();
var router=express.Router();
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
router.post('/createBook',function(req,res){
   var inpuBody={};
  inpuBody=req.body;
   console.log('  this.inpuBody'+JSON.stringify(req.body))
    
       dao.insertBook((inpuBody),function(error,data){
   
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
module.exports=router;