const mongoose = require('mongoose');
const { Schema } = mongoose; // Extraction de Schema depuis mongoose


const postSchema = new Schema({
    title:{
        type: String,
        required:true 
    },
    body:
    {
        type: String,
        required: true
    },
    CreatedAt:{
        type: Date,
        default:Date.now
    },
    updatedAt:{
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Post', postSchema);