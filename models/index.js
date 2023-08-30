// Define the relationships for models 
const User = require('./User')
const Blog = require('./Blog')
const Comment= require('./Comment')

// User has many blog posts
User.hasMany(Blog,{
    foreignKey:'user_id',
    onDelete: 'CASCADE',
})

// Blog post only belongs to one user
Blog.belongsTo(User,{
    foreignKey:'user_id'
})

// User has many comments
User.hasMany(Comment,{
    foreignKey:'user_id',
    onDelete:'CASCADE'
})

// Comment cooresponds to one user
Comment.belongsTo(User, {
    foreignKey:'user_id'
})

Blog.hasMany(Comment, {
    foreignKey:'blog_id'
})

Comment.belongsTo(Blog, {
    foreignKey:'blog_id'
})

module.exports = {User, Blog, Comment}

