const router = require("express").Router();
const { Blog, User } = require("../../models");

// Render dashboard with single users posts
router.get("/:user_id", async (req, res) => {
  try {
    const userPostData = await Blog.findAll({
      include: [{ model: User }],
      where: {
        user_id: req.session.userId,
      },
    });
    const userPosts = userPostData.map((posts) => posts.get({ plain: true }));

    res.render("dashboard", {
      userPosts,
      loggedIn: Boolean(req?.session?.loggedIn),
      userId: req?.session?.userId,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Render add post page
router.get("/:user_id/addpost", async (req, res) => {
  try {
    res.render("addpost", {
      loggedIn: Boolean(req?.session?.loggedIn),
      userId: req?.session?.userId,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create a new blog post
router.post("/addpost", async (req, res) => {
  try {
    const newBlog = await Blog.create({
      blog_title: req.body.blog_title,
      blog_text: req.body.blog_text,
      user_id: req.session.userId,
    });
    res.status(200).json(newBlog);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get a single blog post for edit Modal
router.get("/:blog_id/options", async (req, res) => {
  try {
    res.render("postoptions", {
      loggedIn: Boolean(req?.session?.loggedIn),
      userId: req?.session?.userId,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update a blog post
router.put("/:blog_id/options", async (req, res) => {
  try {
    const updatedBlog = await Blog.update(
      {
        blog_title: req.body.blog_title,
        blog_text: req.body.blog_text,
      },
      {
        where: {
          id: req.params.blog_id,
        },
      }
    );
    res.status(200).json(updatedBlog);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Delete a blog post
router.delete("/:blog_id/options", async (req, res) => {
  try {
    const deleteBlog = await Blog.destroy({
      where: {
        id: req.params.blog_id,
      },
    });
    return res.status(200).json(deleteBlog);
  } catch (err) {
    console.log(err);
    return res.json(err);
  }
});
module.exports = router;
