const express = require('express');
const  users = require('../routes/UsersRoute');
const db = require('../database-mysql/database');

const app = express()
const port = 3000

app.use('/users',users);



app.listen(port, () =>{
  console.log(`listening on port =>>>> ${port}`);
});

