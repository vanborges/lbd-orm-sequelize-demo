const Sequelize = require('sequelize');
const database = require('../db');
const Endereco = require('./endereco');
const Dependente = require('./dependente');
const funcionarioProjeto = require('./funcionarioProjeto');
const Projeto = require('./projeto');

const Funcionario = database.define('funcionario', {
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
    salario: Sequelize.DECIMAL
})

// Relacionamento 1: 1 Funcionario com Enderco
Funcionario.belongsTo(Endereco, {
    constraint: true,
    foreignKey: 'idEndereco'
})

// Relacionamento 1:n Funcionario possui vários Dependentes
Funcionario.hasMany(Dependente, {
    foreignKey: 'idFuncionario'
})

// n:n Funcionario e Projeto
Funcionario.belongsToMany(Projeto, {
    through: {
        model: funcionarioProjeto
    },
    foreignKey: 'idFuncionario',
    constraint: true
})

Projeto.belongsToMany(Funcionario, {
    through: {
        model: funcionarioProjeto
    },
    foreignKey: 'idProjeto',
    constraint: true
})

module.exports = Funcionario;