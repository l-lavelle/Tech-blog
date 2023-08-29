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
    user_id:{
        type: DataTypes.INTEGER,
        references:{
            model:'user',
            key:'id'
        }
    }
},
{
    sequelize,
    timestamps:false,
    underscored:true,
    modelName:'blog'
});

module.exports = Blog;