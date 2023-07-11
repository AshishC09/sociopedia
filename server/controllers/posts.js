import Like from "../models/Likes.js";
import Post from "../models/Post.js";
import User from "../models/User.js";

export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = User.findById(userId);
    const newPost = new Post({
      description,
      location: user.location || "",
      picturePath,
      user: userId,
    });

    const savedPost = await newPost.save();
    res.status(201).json({ post: savedPost });
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export const getFeedPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const userPosts = await Post.find({ user: userId });
    res.status(200).json({ posts: userPosts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    const prevLike = await Like.findOne({ userId });
    if (userId && id) {
      if (!prevLike) {
        const newLike = new Like({ post: id, user: userId });
        const savedLike = await newLike.save();
        res.status(201).json({ like: savedLike });
      } else {
        await Like.findByIdAndDelete(prevLike._id);
        res.status(201).json({ message: "Like removed" });
      }
    } else {
      res.status(500).json({ message: `id:${id} userId:${userId}` });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
