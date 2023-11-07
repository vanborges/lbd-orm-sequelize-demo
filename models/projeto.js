const Sequelize = require('sequelize');
const database = require('../db');

const Projeto = database.define('projeto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING(200),
        allowNull: false
    }
})

module.exports = Projeto;