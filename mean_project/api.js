 const express = require('express');
 const router = express.Router();
 var connection = require('./mysqlConnection');



 router.get('/users', (req, res) => {
     console.log('inisde users method')
     connection.query('SELECT training_room_name FROM test.training_mas_room_detail', function(error, results, fields) {
         if (error) {
             console.log('inisde if method')
             throw error;
         } else {

             if (results.length > 0) {
                 console.log('inisde api.js' + results.json());

                 return results.json();
             }
         }


     });

 });





 module.exports = router;