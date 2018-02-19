const mongoose = require('mongoose');

const Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

      const User = new Schema({
        id : ObjectId,
        email: String,
        job_title: String,
        roles: Array,
        location: String,
        userid: String,
        username : String,
        password : String,
        phone: String,
        externalProfiles: Array,
        summary: String
    })

module.exports = mongoose.model('Users', User);