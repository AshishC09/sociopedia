import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import multer from "multer";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
import * as dotenv from "dotenv";

import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import postsRoutes from "./routes/posts.js";

import { verifyToken } from "./middleware/auth.js";
// import User from "./models/User.js";
// import { comments, friends, likes, posts, users } from "./data/index.js";
// import Post from "./models/Post.js";
// import Friend from "./models/Friends.js";
// import Like from "./models/Likes.js";
// import Comment from "./models/Comment.js";

// Configurations
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

// App setup
const app = express();

// App config
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// Storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Routes with files
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/posts", postsRoutes);

// Mongoose setup
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGDODB_URL || "", {
    dbName: process.env.DBNAME,
  })
  .then(() => {
    console.log("Database connected successfully");

    // Inserting dummy data
    // User.insertMany(users);
    // Post.insertMany(posts);
    // Friend.insertMany(friends);
    // Like.insertMany(likes);
    // Comment.insertMany(comments);

    app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
  })
  .catch((error) =>
    console.log(`Error happened in connecting database: ${error}`)
  );
