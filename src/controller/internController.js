// // // Model improt are -->
const collegeModel = require("../model/collegeModel")
const internModel = require("../model/internModel")


// // Some Imp. Regex are -->
const nameReg = /^([A-Za-z ]+)$/
const emailReg = /^([a-z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,20})$/
const mobileReg = /^([+]\d{2})?\d{10}$/





const isValid = function (value) {
    if (typeof value === 'undefined' || value === null) return false;

    if (typeof value === 'string' && value.trim().length === 0) return false

    return true;
}



// // // Route handler for create intern Api
const createIntern = async function (req, res) {

    try {

        let body = req.body

        let { name, mobile, email, collegeName } = body

        // // // If body is empty
        if (Object.keys(body).length <= 0) return res.status(400).send({ status: false, message: "Give some data to create " })

        // // if name is not given and not match with regex and not should empty
        if (!isValid(name) || !name.match(nameReg)) return res.status(400).send({ status: false, message: "Name is Invalid." })

        // // if mobile is not given and not match with regex and not should empty
        if (!isValid(mobile) || !mobile.match(mobileReg)) return res.status(400).send({ status: false, message: "Mobile is not given or Invalid Mobile." })

        // // if email is not given and not match with regex and not should empty
        if (!isValid(email) || !email.match(emailReg)) return res.status(400).send({ status: false, message: "Email is not given or Invalid Email." })

        // // if collegeName is not given and not should empty
        if (!isValid(collegeName)) return res.status(400).send({ status: false, message: "college Name is not given or Invalid College Name." })


        // console.log(body)

        let collegeIdByClgName = await collegeModel.findOne({ name: collegeName })

        if (!collegeIdByClgName) return res.status(400).send({ status: false, message: "Given name is not present in DB" })

        console.log(collegeIdByClgName)

        body.collegeId = collegeIdByClgName._id

        let newInternData = await internModel.create(body)

        res.status(201).send({ status: true, message: "Intern created successfully", data: newInternData })
    } catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }

}






module.exports = { createIntern }