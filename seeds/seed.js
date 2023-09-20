const sequelize = require("../config/connection");
const { User, Blog, Comment } = require("../models");

const userData = require("./UserSeedData.json");
const blogData = require("./BlogSeedData.json");
const commentData = require("./CommentSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, { individualHooks: true });

  await Blog.bulkCreate(blogData);

  await Comment.bulkCreate(commentData);

  process.exit(0);
};

seedDatabase();
