const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bloguserSchema = new Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase:true,
    unique:true,
    trim:true
  },
  password: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Bloguser = mongoose.model('bloguser', bloguserSchema);
module.exports = Bloguser;