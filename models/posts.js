const mongoose= require('mongoose');
//const { string, date } = require('joi');
const postSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    slug: String,
    poster: String,
    title: String,
    description: String,
    createdAt: Date,
    updatedAt: Date
});

module.exports = mongoose.model('Post',postSchema);