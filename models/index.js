// Define the relationships for models 
const User = require('./User')
const Blog = require('./Blog')

// User has many blog posts
User.hasMany(Blog,{
    foreignKey:'',
    onDelete: 'CASCADE',
})

// Blog post only belongs to one user
Blog.belongsTo(User,{
    foreignKey:''
})

module.exports = {User, Blog}