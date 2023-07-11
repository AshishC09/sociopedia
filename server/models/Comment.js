import { Schema, model } from "mongoose";

const commentSchema = new Schema(
  {
    post: { type: Schema.Types.ObjectId, required: true, ref: "Post" },
    text: {
      type: String,
      required: true,
      min: 1,
    },
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  },
  { timestamps: true }
);

const Comment = model("Comment", commentSchema);

export default Comment;
