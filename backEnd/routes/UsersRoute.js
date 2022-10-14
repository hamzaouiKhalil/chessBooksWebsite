const express = require('express');

const router =express.Router();
const {insert,getOneUser,updateUserBalance} = require('../controllers/usersControllers');

router.post("/add",insert);
router.put("/:id",updateUserBalance);
router.get("/one/:id",getOneUser)
router.get("/getall")
module.exports = router;
