const router = require('express').Router();
const {User} = require('../models');

router.get('/signup', async (req, res) => {
    try{
    res.render('signup')
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

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

// Login



module.exports = router;