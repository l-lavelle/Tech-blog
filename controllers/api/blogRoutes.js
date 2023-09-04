const router = require('express').Router();
const {Blog, User} = require('../../models');

const withAuth = require('../../utils/auth')

router.get('/:user_id', withAuth, async (req, res) => {
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