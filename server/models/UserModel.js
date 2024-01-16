import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
    min: 6,
    max: 15,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 12,
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
  likeNumber: {
    type: Number,
    default: 100,
  },
  avatarImage: {
    type: Object,
    default: "default.jpg",
  },
});

export default mongoose.model("Users", UserSchema);

