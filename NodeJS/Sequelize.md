# Sequelize
#orm 

- **ORM** (Object Relational Mapper) - Promise - para NodeJS.
- Sistema que abstrai toda a camada do banco de dados;
- Facilita a geração de tabelas e o trabalho com banco de dados no geral;

## Instalação 
![[Pasted image 20220916223230.png]]
- ``npm install --save sequelize`` - na pasta do diretório de trabalho
- ``npm install --save mysql2`` - módulo para usar o mysql

## Conectando o banco de dados pelo sequelize
```js
const Sequelize = require('sequelize');
const sequelize = new Sequelize('banco_ex', 'root_user', 'senha_do_root', {
	host: 'localhost', dialect: 'mysql' 
});
```

## Autenticando - teste
``` js
sequelize.authenticate().then(function(){
	console.log("Conectado com sucesso.") 
}).catch(function(erro){ 
	console.log("Falha ao se conectar " + erro) 
});
```

## Criando #Models 
```js
const Postagem = sequelize.define('postagens', {
	titulo: {
		type: Sequelize.STRING 
	}, 
	
	conteudo: { 
		type: Sequelize.TEXT 
	}
}) Postagem.sync({force: true}) 
//função sincroniza o model com o MySQL - gerar tabela Postagem
```

![[Pasted image 20220916223702.png]]
Acessando tabela...
![[Pasted image 20220916223721.png]]

O Sequelize por padrão:
- cria uma linha para ID da tabela;
- cria a linha createdAt, que indica a data que foi criada e cria linha updatedAt, que indica quando foi o último update feito