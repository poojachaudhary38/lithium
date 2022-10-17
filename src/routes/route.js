const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require("..logger");
//importing external packages
const underscore = require("underscore");
//import module
const welcome = require("../logger/logger");
const format = require("../validator/formatter");
const help = require("../util/helper");
const lodash = require("../lodash/lodash");

router.get('/test-me', function(req,res) {
   //calling the components of a different custom module
console.log("calling my function", xyz.myFunction());
console.log("the value of function is ", xyz.myurl);
//calling the function

console.log(welcome.welcome());
console.log(help.getBatchInfo());
console.log(format.format());
console.log(lodash.lodash());
//trying to use external package called underscore
let myArray = ["pritesh" , "Akash", "Sabhia", "Farheena"];
let result = underscore.first(myArray)
console.log("the result of underscore examples api is : ",result)
  res.send(mt first ever api!)
  });

  //first problem of get-api
  router.get('/movies',function(req,res){
   console.log("The path params in the request are :", req.params)
   const movies = ['Rang de basanti', 'The shining', 'Lord of rings', 'Batman begins']
   res.send(movies)
  });

  //second problem of get-api
  router.get('/movies/:indexNumber', function(req,res) {
   console.log("The path params in the request are :", req.params)
   const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
   const index = req.params.indexNumber;
   res.send(movies[Number(index)])
});

//third problem
function indexNumber(req,res) {
   var indexNumber = req.params.indexNumber
   if(indexNumber>dhoom.length||indexNumber<0) {
      res.send("please give us a valid number so we can able to share a correct details")
   };
   res.send(dhoom[indexNumber])
};

//fourth problem
router.get('/films', function(req,res) {
   const films = [{
      "id": 1,
      "name": "The shining"
   },
   {
      "id": 2,
      "name": "Incendies"
   },
   {
      "id": 3,
      "name": "Rang de basanti"
   },
   {
      "id": 4,
      "name": "Finding nemo"
   }
];
res.send(films)
});

module.exports = router;






