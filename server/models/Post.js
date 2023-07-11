import { Schema, model } from "mongoose";

const postSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    location: String,
    description: String,
    picturePath: String,
  },
  { timestamps: true }
);

const Post = model("Post", postSchema);

export default Post;
