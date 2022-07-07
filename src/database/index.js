const Sequelize = require('sequelize');
const dbConfig = require('../../config/config');

const magalu = require('../model/magalu')


const connection = new Sequelize(dbConfig);



magalu.init(connection);
//user.associate(connection.models);


module.exports = connection;