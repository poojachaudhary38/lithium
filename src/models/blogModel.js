const mongoose= require('mongoose');
const { stringify } = require('querystring');
const blogSchema = new mongoose.Schema(
    { title:
        {
            type: String,
            required: true
        },
     body:
     {
        required: true
    },
     authorId: 
      {
        type: ObjectId,
        ref: "Author"
     },

    tags: [{type: String}],
    category: 
       {
        type: String,
        required: true
    },
       subcategory:[{type: String}], 
       // examples[technology-[web development, mobile development, AI, ML etc]] },  
        deletedAt: 
         {
            type: Date,
            default: false
            },
         isDeleted:
        {
            type: boolean, 
            default: false
        }, 
         publishedAt:
          {
            type: Date,
            default: false
            },
          isPublished: 
          {
            type: boolean, 
            default: false
        }
    }, {timestamps: true });

module.exports = mongoose.model('Blogs', blogSchema)
