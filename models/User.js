const{ Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model{}

// where bycrypt password?
// where validate that correct input?
User.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allownull:false,
            primaryKey:true,
            autoIncrement:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        sequelize,
        timestamps:false,
        underscored:true,
        modelName:'user'
    }
);

module.exports = User;