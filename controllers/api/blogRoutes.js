const router = require('express').Router();
const {Blog, User} = require('../../models');

const withAuth = require('../../utils/auth')

// how to get user id in the routes??
router.get('/:user_id', withAuth, async (req, res) => {
    try{
        const userPostData = await Blog.findAll({
            include: [{ model: User }],
            where:{
                user_id: req.session.userId
            }
        })
        const userPosts = userPostData.map((posts)=>
        posts.get({plain:true})
        )
        res.render('dashboard', {
            userPosts,
            loggedIn: Boolean(req?.session?.loggedIn)
        });
    }catch (err){
    console.log(err);
      res.status(500).json(err);
    }
});

router.get('/:user_id/addpost', withAuth, async (req, res)=>{
    try{
        res.render('addpost')
        }catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
});

router.post('/addpost',withAuth,async(req,res)=>{
    try{
        const newBlog = await Blog.create({
            blog_title:req.body.blog_title,
            blog_text:req.body.blog_text,
            user_id:req.session.userId
        })
    res.status(200).json(newBlog);
    }catch(err){
        console.log(err);
      res.status(500).json(err);
    }
})
module.exports = router;