const users = require('../models/usersModel')

module.exports = {
    getAll:(req,res)=> {
        users.getAll((err,results)=> {
            err ? res.status(500).send(err) : res.status(200).json(results);
        })
        },

    insert :(req,res)=> {
        
 
        users.insert ((err,results)=>{
           
            err ?  res.status(500).send(err) : res.status(201).json("created");
        },[req.body.name,req.body.username,req.body.password,req.body.email,req.body.balance,req.body.id])
        // depend on the model
    },
    updateUserBalance:(req,res)=>{
        users.updateUserBalance((err,results)=> {
            err ? res.status(500).send(err) : res.status(200).json(results);
        },[req.body.balance,req.body.id,req.params.id])
    },
    getOneUser : (req,res)=> {
    students.getOneUser((err,results)=> {
        err ? res.status(500).send(err) : res.status(200).json(results);
    },req.params.id)
    }
}