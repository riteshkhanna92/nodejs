var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
})

connection.connect(function(err) {

    if (err)
        throw error;
    console.log('db connected');

})
module.exports = connection;