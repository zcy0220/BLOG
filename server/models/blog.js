const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    id: Number,
    comments: [{
        userId: String,
        content: String
    }]
})

module.exports = mongoose.model('blog', blogSchema)