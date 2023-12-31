const{ Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model{}

// add the rest of the columns
Blog.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    blog_title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    blog_text:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    user_id:{
        type: DataTypes.INTEGER,
        references:{
            model:'users',
            key:'id'
        }
    }
},
{
    sequelize,
    timestamps:true,
    underscored:true,
    modelName:'blog'
});

module.exports = Blog;