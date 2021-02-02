const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase:true,
    trim:true
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Blog = mongoose.model('blog', blogSchema);
module.exports = Blog;