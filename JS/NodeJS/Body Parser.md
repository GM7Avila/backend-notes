# Body Parser
- biblioteca
- receber dados de formulário no [[Express]]
- ``npm instal --save body-parser`` -> no diretório

## Configurando
```js
const express = require("express")
const app = express();

const bodyParser = require('body-parser')

//configurando Body Parser
app.use(bodyParser.urlenconded({extended: false}))
app.use(bodyParser.json())
```

## Coletando Dados do formulário
- utilize a função ``req.body.`` na **rota desejada**, atribuindo o nome do compo do formulário. Ex.: ``req.body.titulo``

```html
<form action="/add" method="POST">

    <p>Título: </p>
    <input type="text" name="titulo">
    <p>Conteúdo: </p>
    <textarea name="conteudo"></textarea> 
    <button type="submit">Cadastrar</button>

</form>
```

```js
 app.post('/add', function(req,res){

        req.body.conteudo //pega os dados enviados pelo formulário
        res.send("Texto: " + req.body.titulo + " Conteudo: " + req.body.conteudo)
        
    })
```