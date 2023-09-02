const router = require('express').Router();
const {Blog, User} = require('../../models');

router.get('/:user_id', async (req, res) => {
    try{
        const userPostData = await Blog.findAll({
            include: [{ model: User }],
            where:{
                user_id: req.params.user_id
            }
        })
        const userPosts = userPostData.map((posts)=>
        posts.get({plain:true})
        )
        res.render('dashboard', {userPosts});
    }catch (err){

    }
});
module.exports = router;