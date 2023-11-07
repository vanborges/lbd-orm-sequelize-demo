(async () => {
    // Importação dos módulos e configuração do banco de dados
    const database = require('./db'); // Importa o módulo que configura a conexão com o banco de dados.
    const Funcionario = require('./models/funcionario'); // Importa o modelo do funcionário.
    const Endereco = require('./models/endereco'); // Importa o modelo de endereço associado ao funcionário.
    const Projeto = require('./models/projeto'); // Importa o modelo de projeto.
    await database.sync(); // Sincroniza o banco de dados com os modelos, criando as tabelas se não existirem.

    try {

        // Cria um novo endereço associado ao funcionário.
        const enderecofuncionario1 = await Endereco.create({ 
            rua: 'Rua das Flores',
            numero: 123
        });
       console.log('Endereço criado com sucesso:', enderecofuncionario1.toJSON());

       // Busco o endereco pelo id
         endereco1 = await Endereco.findByPk(1);

        // //Cria um novo funcionário e salva no banco de dados.
         const novofuncionario = await Funcionario.create({
             nome: 'Asdrubal',
             salario: 10000.00,
             email: 'asdrubal@gmail.com',
            idEndereco: endereco1.id
         });
        console.log('Funcionário criado com sucesso:', novofuncionario.toJSON());

        // Busca um funcionário pelo id.
        funcionario1 = await Funcionario.findByPk(1);
        console.log('Funcionário encontrado:', funcionario1.toJSON());

        const projeto1 = await Projeto.create({
             nome: 'Projeto 1'
         });
        await projeto1.addFuncionario(funcionario1);

        console.log('Projeto criado com sucesso:', projeto1.toJSON());

    } catch (error) {
        console.error('Erro', error);
    }

})();
