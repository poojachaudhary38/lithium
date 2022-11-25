const express = require('express');
const router = express.Router();

// // // Controller improt
const internController = require('../controller/internController')
const collegeController = require('../controller/collegeController')

router.get("/test-me", function (req, res) { res.status(200).send("Connection Done.") })

router.post("/functionup/interns" , internController.createIntern)

router.post("/functionup/colleges" , collegeController.createCollege)

router.get("/functionup/collegeDetails" , collegeController.getCollegeDetails)


module.exports = router;

