const Sequelize = require('sequelize');
const database = require('../db');

const FuncionarioProjeto = database.define('funcionarioProjeto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})

module.exports = FuncionarioProjeto;