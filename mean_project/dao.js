var connection = require('./mysqlConnection');
module.exports.loginfunction = function(username, password, callback) {

    //connection.query('SELECT STATUS, userid FROM loginform WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
    connection.query('SELECT training_room_name FROM test.training_mas_room_detail', function(error, results, fields) {
        if (error) {
            throw error;
        } else {

            if (results.length > 0) {

                callback(null, results);
            }
        }


    });

}