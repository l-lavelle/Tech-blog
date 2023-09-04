const sequelize = require('../config/connection');
const {User, Blog}=require('../models');

const userData = require('./UserSeedData.json');
const blogData = require('./BlogSeedData.json');

const seedDatabase = async () =>{
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {individualHooks: true });

    await Blog.bulkCreate(blogData);
    
    process.exit(0);
};

seedDatabase();