const router = require('express').Router();
const Blog = require('../../models/Blog');
router.get('/', (req, res) => res.send('API !'));
module.exports = router;