import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "test",
    lastName: "me",
    email: "aaaaaaa@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p11.jpeg",

    location: "San Fran, CA",
    occupation: "Software Engineer",
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Steve",
    lastName: "Ralph",
    email: "thataaa@gmail.com",
    password: "$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p3.jpeg",

    location: "New York, CA",
    occupation: "Degenerate",
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Some",
    lastName: "Guy",
    email: "someguy@gmail.com",
    password: "da39a3ee5e6b4b0d3255bfef95601890afd80709",
    picturePath: "p4.jpeg",

    location: "Canada, CA",
    occupation: "Data Scientist Hacker",
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Whatcha",
    lastName: "Doing",
    email: "whatchadoing@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p6.jpeg",

    location: "Korea, CA",
    occupation: "Educator",
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Jane",
    lastName: "Doe",
    email: "janedoe@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p5.jpeg",

    location: "Utah, CA",
    occupation: "Hacker",
    viewedProfile: 40212,
    impressions: 7758,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Harvey",
    lastName: "Dunn",
    email: "harveydunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p7.jpeg",

    location: "Los Angeles, CA",
    occupation: "Journalist",
    viewedProfile: 976,
    impressions: 4658,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Carly",
    lastName: "Vowel",
    email: "carlyvowel@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p8.jpeg",

    location: "Chicago, IL",
    occupation: "Nurse",
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Jessica",
    lastName: "Dunn",
    email: "jessicadunn@gmail.com",
    password: "$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p9.jpeg",

    location: "Washington, DC",
    occupation: "A Student",
    viewedProfile: 19420,
    impressions: 82970,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
];

const postsIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const posts = [
  {
    _id: postsIds[0],
    user: userIds[1],
    location: "New York, CA",
    description: "Some really long random description",
    picturePath: "post1.jpeg",
  },
  {
    _id: postsIds[1],
    user: userIds[3],

    location: "Korea, CA",
    description:
      "Another really long random description. This one is longer than the previous one.",
    picturePath: "post2.jpeg",
  },
  {
    _id: postsIds[2],
    user: userIds[4],

    location: "Utah, CA",
    description:
      "This is the last really long random description. This one is longer than the previous one.",
    picturePath: "post3.jpeg",
  },
  {
    _id: postsIds[3],
    user: userIds[5],

    location: "Los Angeles, CA",
    description:
      "This is the last really long random description. This one is longer than the previous one. Man I'm bored. I'm going to keep typing until I run out of things to say.",
    picturePath: "post4.jpeg",
  },
  {
    _id: postsIds[4],
    user: userIds[6],

    location: "Chicago, IL",
    description:
      "Just a short description. I'm tired of typing. I'm going to play video games now.",
    picturePath: "post5.jpeg",
  },
  {
    _id: postsIds[5],
    user: userIds[7],

    location: "Washington, DC",
    description:
      "For the last time, I'm going to play video games now. I'm tired of typing. I'm going to play video games now.",
    picturePath: "post6.jpeg",
  },
];

export const comments = [
  { post: postsIds[0], user: userIds[2], text: "Some hard comment" },
  { post: postsIds[1], user: userIds[5], text: "Some hard comment" },
  { post: postsIds[3], user: userIds[3], text: "Some hard comment" },
  { post: postsIds[4], user: userIds[2], text: "Some hard comment" },
];

export const likes = [
  { post: postsIds[3], user: userIds[0] },
  { post: postsIds[2], user: userIds[1] },
  { post: postsIds[3], user: userIds[2] },
  { post: postsIds[5], user: userIds[3] },
  { post: postsIds[1], user: userIds[4] },
  { post: postsIds[2], user: userIds[5] },
  { post: postsIds[4], user: userIds[6] },
  { post: postsIds[1], user: userIds[7] },
  { post: postsIds[3], user: userIds[5] },
  { post: postsIds[0], user: userIds[2] },
  { post: postsIds[5], user: userIds[0] },
  { post: postsIds[4], user: userIds[3] },
];

export const friends = [
  { user: userIds[0], friend: userIds[1] },
  { user: userIds[1], friend: userIds[0] },
  { user: userIds[3], friend: userIds[1] },
  { user: userIds[1], friend: userIds[3] },
  { user: userIds[2], friend: userIds[1] },
  { user: userIds[1], friend: userIds[2] },
  { user: userIds[4], friend: userIds[1] },
  { user: userIds[1], friend: userIds[4] },
  { user: userIds[6], friend: userIds[1] },
  { user: userIds[1], friend: userIds[6] },

  { user: userIds[2], friend: userIds[3] },
  { user: userIds[3], friend: userIds[2] },
  { user: userIds[6], friend: userIds[5] },
  { user: userIds[5], friend: userIds[6] },
  { user: userIds[7], friend: userIds[1] },
  { user: userIds[1], friend: userIds[7] },
];
