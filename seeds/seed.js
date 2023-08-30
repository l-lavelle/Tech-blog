const sequelize = require('../config/connection');
const {User, Blog}=require('../models');

const userData = require('./UserSeedData.json');
const blogData = require('./BlogSeedData.json');

const seedDatabase = async () =>{
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData);

    const blogs = await Blog.bulkCreate(blogData);
    
    process.exit(0);
};

seedDatabase();