const{ Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model{
    checkPassword(loginPassword){
        return bcrypt.compareSync(loginPassword, this.password)
    }
}

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
        hooks: {
            beforeCreate: async (newUserData) => {
              newUserData.password = await bcrypt.hash(newUserData.password, 10);
              return newUserData;
            }
          },
        sequelize,
        timestamps:false,
        underscored:true,
        modelName:'user'
    }
);

module.exports = User;