const express = require('express');
const db = require('../database-mysql');

const app = express();

app.get('/api/users',  (req, res)=> {

});

app.listen(3000, () =>{
  console.log('listening on port 3000!');
});

