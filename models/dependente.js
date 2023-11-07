const Sequelize = require('sequelize');
const database = require('../db');

const Dependente = database.define('dependente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    parentesco: Sequelize.STRING(100)
})

module.exports = Dependente;