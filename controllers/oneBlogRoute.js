const router = require("express").Router();
const { Blog, Comment, User } = require("../models");

router.get("/:blog_id", async (req, res) => {
  try {
    const blogPost = await Blog.findByPk(req.params.blog_id, {
      include: [{ model: Comment }, { model: User }],
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

router.post("/comment/:blog_id", async (req, res) => {
  try {
    const newComment = await Comment.create({
      blog_id: req.params.blog_id,
      comment_text: req.body.comment_text,
      user_id: req.session.userId,
    });
    res.status(200).json(newComment);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
