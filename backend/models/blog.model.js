import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  gossip: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  uname: {
    type: String,
    required: true,
    unique: true,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
