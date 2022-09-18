# Função
#function 
## Definindo uma Função
```js
var square = function(x){
	return x*x; //corpo
};

console.log(square(12))/
//-> 144
```
- Uma #function é uma expressão que inicia com a *palavra-chave* `function`.
- Podem receber uma série de #Parâmetros + um **corpo**, contendo as declaraões que serão executadas quando a função é **chamada**.
- A palavra-chave `return` sem uma expressão após, irá fazer com que o retorno da função seja `undefined`.
## Parâmetros e Escopos
#Parâmetros #Escopos

- Variáveis inicializadas dentro do "corpo" das funções são denomidas #variáveis_locais; tem seu valor alterado a cada chamada em outras funções.
- Essa característica de localidade das variáveis se aplica somente aos parâmetros e às variáveis que forem declaradas usando a palavra-chave `var` dentro do "corpo" de uma função.
- Variáveis declaradas fora de funções são chamadas #variáveis_globais, podendo ser chamada dentro de qualquer variável, e não tendo seu valor alterado a cada chamada.

```js
var landscape = function() {
  var result = "";
  var flat = function(size) {
    for (var count = 0; count < size; count++)
      result += "_";
  };
  var mountain = function(size) {
    result += "/";
    for (var count = 0; count < size; count++)
      result += "'";
    result += "\\";
  };

  flat(3);
  mountain(4);
  flat(6);
  mountain(1);
  flat(1);
  return result;
};

console.log(landscape());
// → ___/''''\______/'\_
```

- As funções `flat` e `mountain` podem “ver” a variável `result` porque elas estão dentro do mesmo escopo da função que as definiu. 
- Entretanto, elas não conseguem ver a variável `count` uma da outra (somente a sua própria), pois elas estão definidas em escopos diferentes. 
- O ambiente externo à função `landscape` não consegue ver as variáveis definidas dentro de `landscape`.