const express = require('express');
const router = express.Router();


router.get("/test-me" , function(req ,res){res.status(200).send("Connection Done.")})




module.exports = router