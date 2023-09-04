const router = require('express').Router();
const {User} = require('../models');

// Render signup page
router.get('/signup', async (req, res) => {
    try{
    res.render('signup')
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// try and see get routes delete when done
// router.get('/signup', async (req, res) => {
//     try{
//       const tagData=await User.findAll()
//       return res.json(tagData)
//     }catch(err){
//       console.log(err);
//       return res.json(err);
//     }
//   });

// Create a new user
router.post('/signup', async (req, res) => {
    try {
      const dbUserData = await User.create({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
  
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

//Render login page 
router.get('/login', async (req, res) => {
try{
res.render('login')
}catch (err) {
    console.log(err);
    res.status(500).json(err);
}
});

// Login
router.post('/login', async (req,res)=>{
    try{
        const dbUserData = await User.findOne({
            where:{
                username:req.body.username
            },
    });
    if (!dbUserData) {
        res
            .status(400)
            .json({ message: 'Incorrect email or password. Please try again!' });
        return;
    };

    req.session.save(() => {
        req.session.loggedIn = true;
    
        res
            .status(200)
            .json({ user: dbUserData, message: 'You are now logged in!' });
    });
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})


module.exports = router;