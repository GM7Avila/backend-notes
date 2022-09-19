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
#Parâmetros #Escopos #ambiente 

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
- Essa abordagem em relação a visibilidade de variáveis é chamada de #escopo_léxico.

```js
var something = 1;
{
  var something = 2;
}
```
- Em *javascript*, ==somente as funções podem criar novos ambientes==, nesse sentido, diferente de muitas outras linguagens, blocos de código que utilizam `{}` **NÃO** podem criar um ambiente local!
- #let → A variável ``let`` ==corrige esse problema==, uma vez que ela funciona como #var, mas criará uma variável que é local ao bloco que a contém e não à função que a contém.

## Funções Como Valores
- Nomes para um pedaço específico do programa.
- É possível armazenar um valor de função em um novo local, passá-lo como argumento para outra função, e assim por diante; pode também ser atribuída a um novo valor, assim como qualquer outra variável:
```js
var launchMissiles = function(value) {
  missileSystem.launch("now");
};

if (safeMode)
  launchMissiles = function(value) {/* do nothing */};
```

## Fluxo das Funções
- As funções podem ser definidas em qualquer momento do código, elas não fazem parte do fluxo normal de controle, que é executado de cima para baixo.
- Isso permite ter a liberdade de ordenar o código de uma maneira mais expressiva, sem nos preocuparmos com o fato de ter que definir todas as funções antes de usá-las.

## Funções em condicionais ou loops
- ==**NÃO FAÇA ISSO**==
```js
function example() {
  function a() {} // Okay
  
  if (something) {
    function b() {} // Danger!
  }
}
```
- Diferentes plataformas JavaScript usadas em diferentes navegadores têm tradicionalmente feito coisas diferentes nessas situações, e a última versão basicamente proíbe essa prática. 
- Se você deseja que seu programa se comporte de forma consistente, use somente essa forma de definição de função no bloco externo de uma outra função ou programa.

--- 
## Pilha de Chamadas
#pilha
```js
function greeting(){
	sayHi();
}
function sayHi(){
	return "Hi!";
}

greeting();

```

- A execução dos programas com mais de uma função segue sempre a ordenação da [Pilha](Pilha.md).

**Execução:**
1. ignore all functions, until it reaches the ``greeting()`` function invocation.
2. add the greeting() function to the #callstack list.
	- Note: Call stack list [ greeting ]
3. execute all lines of code inside the ``greeting()`` function 
4. get to ``sayHi()`` function invocation
5. add the sayHi() function to the #callstack list.
	- Note: Call stack list [ sayHi - greeting ]
6. execute all lines of code inside the `sayHi()` function, until reaches its end.
7. return execution to the line that invoked `sayHi()` and continue executing the rest of the `greeting()` function.
8. delete the `sayHi()` function from our call stack list.
	- Note: Call stack list [ greeting ]
9. when everything inside the `greeting()` function has been executed, return to its invoking line to continue executing the rest of the JS code.
10. delete the `greeting()` function from the call stack list.
	- Note: Call stack list [ **EMPTY** ]

In summary, then, we start with an empty Call Stack. Whenever we invoke a function, it is automatically added to the Call Stack. Once the function has executed all of its code, it is automatically removed from the Call Stack. Ultimately, the Stack is empty again.

- If the stack takes up more space than it had assigned to it, it results in a **"stack overflow"** error.

---

## Argumentos Opcionais
- Se você passar mais argumentos que o necessário, os extras serão ignorados. 
- Se você passar menos argumentos, os parâmetros faltantes simplesmente receberão o valor `undefined`.

```js
function power(base, exponent) {
  if (exponent == undefined)
    exponent = 2;
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
}

console.log(power(4));
// → 16
console.log(power(4, 3));
// → 64
```

---

## Closure
#closure
- O que acontece com as variáveis locais quando a função que criou não está mais ativa?
- Clousure é quando uma função "lembra" de seu escopo léxico, mesmo quando a função é executada fora desse [[escopo léxico]] 

**Exemplo**
``escopo``
```js
let x = 50;

function somarXMais3(){
	return x+3;
}

module.exports = somarXmais3(); //exportar a função
```
``modulo``
```js
const somarXMais3 = require('./escopo')

let x = 100;
console.log(somarXMais3());

// -> a função "lembra" de seu escopo, logo usa o x de ./escopo
```

https://www.youtube.com/watch?v=xME2TcbxiNo

- isso também se aplica à variáveis:
```js 
function wrapValue(n) { 
	var localVariable = n; 
	return function() { return localVariable; }; 
} 
var wrap1 = wrapValue(1); var wrap2 = wrapValue(2); console.log(wrap1()); 
// → 1 
console.log(wrap2()); 
// → 2
```
- function "congle" o código que está em seu corpo e envolve em um pacote
```js
function multiplier(factor) { 
	return function(number) { 
		return number * factor; }; 
} 

var twice = multiplier(2); 
console.log(twice(5)); 
// → 10
```
- No exemplo, `multiplier` retorna um pedaço de código "congelado" que fica armazenado na variável `twice`. 
- A última linha do exemplo chama o valor armazenado nessa variável, fazendo com que o código "congelado" (`return number * factor;`) seja executado. 
- Ele continua tendo acesso à variável `factor` que foi criada na chamada de `multiplier` e, além disso, tem acesso ao argumento que foi passado a ele (o valor 5) por meio do parâmetro `number`.

---

## Recursão
#recursão
- Uma função que invoca a si mesma é denomida **função recursiva**.

Toda função recursiva tem duas regras:
	1. invoca a si mesma
	2.  tem dentro de si, uma estratégia para que pare de ser invocada #basecase

Se não pensarmos em uma **base case**, a função cai em um loop, como no exemplo:
````js
function dontDoThat(value) {
	return dontDoThat(value);
}
````

Para elaborar a **base case** devemos primeiro entender o valor que é passado por argumento, exemplo:
- decrementando valor
```js
const getFactorial = number => {
	let factorial = 1;
	
	for (let i = number; i>= 1; i--){
		factorial = factorial * i
	} 
	
	return factorial
}

export default getFactorial
```


```

```js
function power(base, exponent) { 
	if (exponent == 0) return 1; 
	else return base * power(base, exponent - 1); 
} 

console.log(power(2, 3)); // → 8
```

