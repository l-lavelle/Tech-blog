const router = require("express").Router();
const { Blog, Comment } = require("../models");

router.get("/:blog_id", async (req, res) => {
  try {
    const blogPost = await Blog.findByPk(req.params.blog_id, {
      include: [{ model: Comment }],
    });

    const blog = blogPost.get({ plain: true });

    res.render("singleBlog", {
      blog,
      loggedIn: req.session.loggedIn,
      userId: req.session.userId,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
module.exports = router;
