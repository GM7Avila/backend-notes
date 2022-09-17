# Express
#framework #minimalista #rotas #web-backend  
- Framework minimalista
- Aplicações web back-end
- repositório de pacotes npm

## Criando Rotas
```js
const express = require("express");
//retorna a função para a constante express
const app = express();
//instanciando a função para a constante app

//criando rotas:
app.get("/", function(req,res){
	res.send("Seja bem-vindo a minha app!");
});

app.get("/sobre", function(req,res){
	res.send("Página sobre");
});

app.listen(8081, function(){
	console.log("Servidor rodando na url http://localhost:8081/");
});

```

- Caso nenhuma rota for definida a mensagem ``Cannot GET/`` aparece no navegador
- A função do express ``.listen(porta)``  deve ser a ultima linha do código
- Assim que a função ``.listen`` é instanciada, o servidor começa a rodar
- Quando a função ``.listen`` é executada, ela dispara um #evento, através desse evento, podemos disparar futuras novas funções.

## Utilizando parâmetros
- utilizar ``/:`` torna obrigatório o uso do parâmetro na rota:
![[Pasted image 20220916221734.png]]

```js
app.get('/ola/:cargo/:nome/:cor', function(req,res){

	res.send(
		"Oi " + req.params.nome + ", seu cargo eh: " +re.params.cargo + ". Sua cor favorita eh: " +req.params.cor; 
	);

});
```

## Objetos de requisição
``req`` e ``res`` do, são [[objeto]] de requisição e resposta em uma função de [[middleware]] do express.
- ``req`` - receber dados do protocolo
- ``req.params`` - mostrar os parâmetros

