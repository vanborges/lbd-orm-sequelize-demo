const Sequelize = require('sequelize');
const database = require('../db');

const Endereco = database.define('endereco', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    rua: Sequelize.STRING(200),
    bairro: Sequelize.STRING(200),
    numero: Sequelize.INTEGER,
    cep: Sequelize.STRING(11)
})

module.exports = Endereco;