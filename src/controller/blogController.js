//=======get api==========

const blogModel = require("../models/blogModel");

const getBlogs = async function(req, res)  { 
    try {
        let data = req.query;
        let filter = { $in: ({ isDeleted: false, isPublished: true, ...data })};
        //console.log(filter);
        let blogPresent = await blogModel.find(filter)

        if (blogPresent.length === 0) {
          res.status(404).send({ msg: "No such blog is present" })
        } else {
          res.status(200).send({ status: true, data: blogPresent })
        }
    } catch (err) {
      res.status(500).send({ status: false, msg: err.message });
    }
}


module.exports.getBlogs = getBlogs