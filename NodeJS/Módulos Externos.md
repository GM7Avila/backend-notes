# Módulos
Criar um módulo externo das funções  para tornar o código mais limpo:

- criar o arquivo: ``/functions/soma.js`` e atribuir a variável soma à função que retorna a+b 

```js
var soma = function(a,b){
	return a+b;
} //functions/soma.js
```

- atribuir a esse arquivo a função `module.exports` fazendo referência de que valor ele recebe. No caso, recebendo a variável `soma` (que é a nossa função):

```js
var soma = function(a,b){
	return a+b;
}
module.exports = mul;
//functions/soma.js
```

- criando o arquivo principal ``/calc.js`` e fazendo o ==require das funções== utilizando: ``require(/adress)``; dessa forma estamos atribuindo a elas novas variáveis (que servirão de identificadores):

```js
var SomaFunc = require("./functions/soma")

console.log(SomaFunc(2,4));
//calc.js
```