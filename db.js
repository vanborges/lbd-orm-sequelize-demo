const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5433/postgres_orm', {
    dialect: 'postgres',
    host: 'localhost'
})

module.exports = sequelize;