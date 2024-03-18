const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('databaseName', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
