const router = require("express").Router();
const { Blog, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const currentPosts = await Blog.findAll({
      include: [{ model: User }],
    });
    const currentPostsData = currentPosts.map((post) =>
      post.get({ plain: true })
    );
    console.log(currentPostsData);
    res.render("all", {
      currentPostsData,
      loggedIn: Boolean(req?.session?.loggedIn),
      userId: req?.session?.userId,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
