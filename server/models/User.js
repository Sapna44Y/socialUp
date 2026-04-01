import mongoose, { connections } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: { type: String, require: true },
    email: { type: String, require: true },
    full_name: { type: String, require: true },
    username: { type: String, unique: true },
    bio: { type: String, default: "Hey there! I am using SocialUp." },
    profile_picture: { type: String, default: "" },
    cover_photo: { type: String, default: "" },
    location: { type: String, default: "" },
    followers: [{ type: String, ref: "User" }],
    followering: [{ type: String, ref: "User" }],
    connections: [{ type: String, ref: "User" }],
  },
  { timestamps: true, minimize: false },
);

const User = mongoose.model("User", userSchema);
export default User;
