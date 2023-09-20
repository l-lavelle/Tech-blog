const router = require("express").Router();
const { Blog, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const currentPosts = await Comment.findAll();
    const listProduct = currentPosts.map((posts) => posts.get({ plain: true }));
    res.json(listProduct);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const currentPosts = await Blog.findByPk(req.params.id, {
      include: [{ model: Comment }],
    });

    return res.json(currentPosts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
