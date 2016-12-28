const Sequelize = require('sequelize')
const config = require('./config/config.json')

const sequelize = new Sequelize('database_development', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

module.exports = sequelize
