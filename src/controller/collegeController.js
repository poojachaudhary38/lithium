

const collegeModel = require("../model/collegeModel")
const internModel = require("../model/internModel")



const isValid = function (value) {
    if (typeof value === undefined || value === null) return false;

    if (typeof value === 'string' && value.trim().length === 0) return false

    return true;
}

// // // Regex for Url --->
const urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

// // // Get all detail 
const getCollegeDetails = async function (req, res) {
    try {
        const collegeName = req.query.collegeName


        if (!isValid(collegeName))  return res.status(400).send({ status: false, message: "CollegeName is not valid" })
        

        const collegeDetails = await collegeModel.findOne({ name: collegeName, isDeleted: false }).select({ isDeleted: 0 })

        if (!collegeDetails)  return res.status(404).send({ status: false, msg: "There is no such a college in this name" })
        
        const internDetails = await internModel.find({ collegeId: collegeDetails._id , isDeleted: false }).select({ isDeleted: 0, collegeId: 0 })

        if (internDetails.length == 0) return res.status(404).send({ status: false, message: "There are no intern in this college" })
        
        return res.status(200).send({ status: true, data: { name: collegeDetails.name, fullName: collegeDetails.fullName, logolink: collegeDetails.logoLink, interns: internDetails } })
    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}






const createCollege = async function(req,res) {
    try {
        let data = req.body;
        const { name, fullName, logoLink } = data;

        if (Object.keys(data).length == 0) return res.status(400).send({status: false, message: "Data is not provided"})
        

        if (!isValid(name.toLowerCase()))  return res.status(400).send({status: false, message: "Require a valid name"})
        
        if (!isValid(fullName))  return res.status(400).send({status: false, message: "Please enter fullName"})

        if (!isValid(logoLink) || !logoLink.match(urlRegex))    return res.status(400).send({status: false, message: "Please enter valid logolink(Url in http:// formate)"})
        

        let duplicateName = await collegeModel.findOne({name: name})

        if (duplicateName)  return res.status(400).send({status: false, message: "College name already exist"})


        const newCollege = await collegeModel.create(data);
        return res.status(201).send({status: true, message: "New College created" , data : newCollege })

    } catch (err) {
        return res.status(500).send({status: false, message: err.message})
    }
}

module.exports = { getCollegeDetails  ,createCollege  }