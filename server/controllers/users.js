import Friend from "../models/Friends.js";
import User from "../models/User.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user)
      return res.status(404).json({ message: `No user found with id: ${id}` });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const getUserFriends = async (req, res) => {
  try {
    const { id } = req.params;
    const friends = await Friend.find({ user: id })
      .populate("friend")
      .populate("user");

    res.status(200).json(friends);
  } catch (error) {
    res.status(505).json({ error: error.message });
  }
};

export const addRemoveFriend = async (req, res) => {
  try {
    const { id, friendId } = req.params;
    const result = await Friend.findOne({ friend: friendId, user: id });
    if (!result) {
      const newFriendRelation = await Friend.create({
        friend: friendId,
        user: id,
      });
      const friendRelation2 = await Friend.create({
        friend: id,
        user: friendId,
      });

      const res = await Promise.all([newFriendRelation, friendRelation2]);
      res.status(200).json(res);
    } else {
      await Friend.findOneAndDelete({ user: id, friend: friendId });
      await Friend.findOneAndDelete({ user: friendId, friend: id });
      res.status(200).json({ message: "Friendship removed" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
