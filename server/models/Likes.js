import { Schema, model } from "mongoose";

const likeSchema = new Schema(
  {
    post: { type: Schema.Types.ObjectId, required: true, ref: "Post" },
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  },
  { timestamps: true }
);

const Like = model("Like", likeSchema);

export default Like;
