const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const userRoutes = require("./userRoutes");
const commentRoutes = require("./commentRoutes");
const blogRoutes = require("./oneBlogRoute");

router.use("/", homeRoutes);
router.use("/users", userRoutes);
router.use("/api", apiRoutes);
router.use("/comments", commentRoutes);
router.use("/blog", blogRoutes);

module.exports = router;
