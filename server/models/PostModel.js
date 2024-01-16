import mongoose from "mongoose";
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  userName: {
    type: String,
    ref: "Users",
  },
  gender: {
    type: Boolean,
    required: true,
    default: 0,
  },
  age: {
    type: Number,
    required: true,
    default: 18,
  },
  title: {
    type: String,
  },
  favorite: {
    type: String,
  },
  description: {
    type: String,
  },
  postImg: {
    type: String,
    default: "",
  },
});

export default mongoose.model("Posts", PostSchema);
