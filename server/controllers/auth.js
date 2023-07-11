import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random() * 10000),
      impressions: Math.floor(Math.random() * 10000),
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userFound = await User.findOne({ email: email });

    if (!userFound)
      return res.status(400).json({ msg: "User does not exists" });

    const isPasswordMatch = await bcrypt.compare(password, userFound.password);

    if (!isPasswordMatch)
      return res.status(400).json({ msg: "Invalid Credentials" });

    const token = await jwt.sign({ id: userFound._id }, process.env.JWT_SECRET);
    delete userFound.password;
    return res.status(200).json({ token, user: userFound });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
