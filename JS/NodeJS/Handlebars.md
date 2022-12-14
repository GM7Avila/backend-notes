# Handlebars
HTML DINÂMICO COM JS
## Instalando pelo npm no terminal 
- ``npm install --save express-handlebars``

## Require do módulo express-handlebars
- constante que recebe o módulo no próprio arquivo.js

```js
const handlebars = require('expres-handlebars')
```

## Configurando o handlebars
- Definir o handlebars como [[template engines - express]]

```js
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
```
> main -> template padrão no projeto
- Criar a pasta **views** no diretório do projeto.
	- ``views/laylouts/main.handlebars``
- ``main.handlebars`` -> html5

---

## Aplicação de Postagens

### Aula 19 - Handlebars 

**index.js**
```js
const express = require("express");

const app = express();

const handlebars = require('express-handlebars')

const Sequelize = require('sequelize');


// Config

    // Template Engine

    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))

    app.set('view engine', 'handlebars')

    // Conexão com o banco de dados MySQL

    const sequelize = new Sequelize('teste', 'root', 'senha', {

        host: 'localhost',

        dialect: 'mysql'

    })


    app.listen(8081, function(){

        console.log("Servidor rodando!")

    });
```

**views/layouts/main.handlebars**
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    {{{body}}}
</body>

</html>
```

- O arquivo html criado serve como main para qualquer outro arquivo handlebars criado. Dessa forma, não é nessário implementar todo o código em novas páginas html, basta escrever apenas o novo código desejado, como mostrado na aula 20, no arquivo ``form.handlebars``.

### Aula 20 - Criando formulario
- Criando formulário de cadastro de posts
	1) Criando rota: ``app.get('/cad', function(req,res){res.send('')})``
```js
const express = require("express");

const app = express();

const handlebars = require('express-handlebars')

const Sequelize = require('sequelize');


// Config

    // Template Engine

    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))

    app.set('view engine', 'handlebars')

    // Conexão com o banco de dados MySQL

    const sequelize = new Sequelize('teste', 'root', 'senha', {

        host: 'localhost',

        dialect: 'mysql'

    })

  

    // Criando Formulario - cadastro de post

    app.get('/cad', function(req,res){

        res.send('ROTA DE CADASTRO DE POST')

    })

  

    app.listen(8081, function(){

        console.log("Servidor rodando!")

    });

```

- Criando um arquivo ``formulario.handlebars`` (na pasta de ``views``) do formulário, com a seguinte estrutura:
```html
<form action="">

    <p>Título: </p>
    <input type="text" name="titulo">
    <p>Conteúdo: </p>
    <textarea name="conteudo"></textarea>
    <button type="submit">Cadastrar</button>
    
</form>
```
- note que não é necessáro utilizar toda a estrutura HTML novamente, pois já possuímos um layout definido: ``main.handlebars``.

- agora utilizamos a função ``.render`` associado ao objeto de resposta ``res``([[Express]]); fornencendo como parâmetro o arquivo handlebars que desejamos **renderizar**: ``formulario``
```js
// Criando Formulario - cadastro de post

    app.get('/cad', function(req,res){

        res.render('formulario')

    })
```

### Aula 21 - Enviando dados ao formulário
#### method & action
**arquivo** ``formulario.handlebars``
- ``method``: forma como os dados do formulário são envidados para o backend; em html, existem duas formas de envio: ``GET`` / ``POST``
	- ``GET`` -> envia os dados pela própria URL (menos usado)
	- ``POST`` -> não passa os dados pela URL (mais usado)
```html
<form action="" method="">

    <p>Título: </p>
    <input type="text" name="titulo">
    <p>Conteúdo: </p>
    <textarea name="conteudo"></textarea>
    <button type="submit">Cadastrar</button>
    
</form>
```

- criar uma rota no arquivo ``index.js`` para corresponder a ``action``
	- em caso e usar POST, você precisa alterar o **tipo da rota**
	- ``app.post`` : (essa rota só pode ser acessada quando uma requisição for feita usando o método POST)
	- **ATENÇÃO!** rotas do tipo **post** não podem ser acessadas pela URL!
		- rotas do tipo ``.get``, por sua vez, podem ser acessadas dessa maneira.

```js
app.post('/add', function(req,res){
	res.send('FORMULARIO RECEBIDO!')
})
```

- agora precisamos de usar algum recurso para extrairmos dados de formulários, para isso utilizaremos a biblitoca [[Body Parser]]