var mysql = require('mysql2');

const config = {
  host: 'localhost', //127.0.0.1
  user: 'root',
  password: 'khalil',
  database: 'chessWebsiteDatabase'
}

var connection = mysql.createConnection(config);

connection.connect ((err)=> {
  if(err){
    console.log(err)
  }
  else {
    console.log("your db is connected")
  }
});



module.exports = connection;