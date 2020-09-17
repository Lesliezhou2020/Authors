const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String,
            required: true,
            minlength: [3, "Authors name must be at least three characters long!"]
     }   
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);
