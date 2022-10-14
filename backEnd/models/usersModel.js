
const db = require("../database-mysql/database");

module.exports = {
  getAll: (cb) => {
    let syntax = `SELECT * users`;
    db.query(syntax, (err, results) => {
      err ? cb(err, null) : cb(null, results);
    });
  },
insert: (cb, values) => {
    let syntax = `INSERT INTO clients SET name=? , username=? , password=?, email=? , balnace=? `; 
    db.query(syntax, values, (err, results) => {
      err ? cb(err, null) : cb(null, results);
    });
  }, 
  updateUserBalance : (cb,values) => {

    let syntax = `UPDATE clients set balance=? where id = ?`;
    db.query(syntax,values,(err, results) => {
        err ? cb(err, null) : cb(null, results);
      }) 

  },
  getOneUser : (cb,id)=>{
    let syntax = `SELECT *  FROM clients WHERE id = ?`;
    db.query(syntax,id,(err, results) => {
        err ? cb(err, null) : cb(null, results);
      }) 
  }

  }