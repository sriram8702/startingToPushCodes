const Sequelize = require("sequelize");

const sequelize = new Sequelize('node-complete','root','135qwe.,',{
    dialect: 'mysql',
    host:'localhost'
});

module.exports=sequelize;