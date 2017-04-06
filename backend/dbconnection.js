var mysql	   = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
      user     : 'root',
      password : 'equinox',
      database : 'nodejs'
    });
 //   connection.connect();
module.exports=connection;