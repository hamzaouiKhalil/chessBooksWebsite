var mysql = require('mysql2');
var mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);

var getAllUsers = ()=> {
};



module.exports.getAllUsers = getAllUsers;

