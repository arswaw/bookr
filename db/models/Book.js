const mongoose = require('mongoose');

const Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

      const Book = new Schema({
        id : ObjectId,
        ref : String,
        title : String,
        author : String,
        ISBN : Number,
        authorId : Number,
        rating : Number,
        additionalAuthors: Array,
        publishDate : Date
    })

module.exports = mongoose.model('Book', Book);