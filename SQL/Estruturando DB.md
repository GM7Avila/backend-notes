# Estruturando a DATA BASE 
- CREATE DATABASE **postapp**;
---
- Criar pasta na raiz da aplicação (**models**) -> armazenará todos os models do banco;
- Criar o arquivo ``db.js`` -> arquivo de conexão para a Data Base;
- exportar modulo do sequelize no arquivo:

```js
// ----------- arquivo => models/db.js -----------

const Sequelize - require('sequelize')

//conexão com o banco de dados MySQL
const sequelize = new Sequelize('postapp', 'root', 'senha', {
	host: 'localhost',
	dialect: 'mysql'
})

//exportando o módulo sequelize para funcionar em outros arquivos
module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize
}
```

- Criar o arquivo ``Posts.js``, referente as postagens do formulário

```js

//----------- arquivo => Posts.js -----------

//chamando o módulo criado db
const db = require('./db')

  

//criando a tabela postagens
const Post = db.sequelize.define('postagens', {

    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }

})

/* Post.sync({force: true}) */

//uma vez chamado o Post.sync pode ser apagado / comentado

```

- ao final, ``Post.sync({force: true})`` para sincronizar a tabela, lembrando de que, depois de gerado apagar ou comentar essa linha.
- executar **node** do arquivo ``Posts.js`` para rodar as linhas de comando para criação do banco.
- não é profissional utilizar ``Post.sync({force: true})``, o correto é fazer essa aplicação pelo GUI do MySQL.