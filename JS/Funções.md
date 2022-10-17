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
- Uma função que invoca a si mesma é denomida [Função recursiva](Iteratividade%20x%20Recursividade.md).

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

### Fatorial em JavaScript
- Abaixo, temos um exemplo simples de como se calcular o fatorial (n!) de um número (n), através de uma [função iterativa](Iteratividade%20x%20Recursividade.md)
```js
function fatorial(n){

    var result = n;

    for(var i=1; i<n ; i++){

  

        // 4 * (3) -> 12[4 * 3] * (2) -> 24 [(4*3) * 2 ] * 1 => 24

        result = result * (n-i)

    }
    
    return result;
} 

console.log(fatorial(4));
```


#### Aplicando Recursividade à iteratividade
- Agora veremos como implementar a recursividade para calcular o fatorial, ou seja, chamaremos a função dentro de si mesma no código:
```js
function fatorialRec(n){
	if(n === 0) return 1;
	if(n === 1) return 1;
	return n * fatorialRec(n-1);
	
	//numero vezes o fatorial dele menos 1
	// 4! -> 4 x 3!
	// 3! -> 3 x 2!
	// 2! -> 2 X 1!
	// 1! -> 1
	// 0! -> 1
}
```

- O mesmo conceito pode ser aplicado para resolvermos recursivamente a [[Sequência de Fibonacci]] 
```js
function fibo(n){
	if (n === 1) return 1;
	if (n === 2) return 2;
	return fibo(n-1) + fibo(n-2);
	
	//    1   2   3   4   5   6   7   8   9
	//   [01, 02, 03, 05, 08, 13, 21, 34, 55]
}

fibo(7);
// => 21
```

- As aplicações recursivas no geral, são o mais próximo do que podemos chegar das definições matemáticas, em forma de funções.

> Video Aula:  https://www.youtube.com/watch?v=H5u1dOoCPnc

> Quicksort em Javascript: https://www.youtube.com/watch?v=TpWk0e0ayco

---
## Funções Crescentes
### Exemplo: Farm
Escrever um programa que comporte me uma string de três palavras o número de galinhas e vacas em uma fazenda, permitindo no máximo 3 dígitos. Ou seja, adicionamos zeretos antes de ambos os números que não ocupam três dígitos: `003`, `033`, `999`.

```js
function printFarmInventory(cows, chickens) { 
	var cowString = String(cows); 
	while (cowString.length < 3) 
		cowString = “0” + cowString; 
	console.log(cowString + “ Cows”); 
	var chickenString = String(chickens); 
	while (chickenString.length < 3) 
		chickenString = “0” + chickenString; 
	console.log(chickenString + “ Chickens”); 
} 
printFarmInventory(7, 11);
```

Aprimorando...
```js
var cowString =  printFarmInventory(2);
var chickenString =  printFarmInventory(11);
var pigString =  printFarmInventory(25);

function printFarmInventory(theString){
    var theString = String(theString);
    while (theString.length < 3)
        theString = '0' + theString;
    console.log(theString);
}
```

Aprimorando...
```js
function zeroPad(number, width) {
  var string = String(number);
  while (string.length < width)
    string = “0” + string;
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(zeroPad(cows, 3) + “ Cows”);
  console.log(zeroPad(chickens, 3) + “ Chickens”);
  console.log(zeroPad(pigs, 3) + “ Pigs”);
}

printFarmInventory(7, 16, 3);
```

- ``.length`` ao valor de uma ``string`` forcene o **tamanho**(quantidade de caracteres) dela.
- A repetição ``while`` continua adicionando zeros no início da ``stirng`` até que o número de caracteres seja pelo menos três.

---
## Função Callback
- Permite executar uma função depois de uma determinada ação;
- Conceito fundamental para entender a parte assíncrona do JS;
  
>https://youtu.be/0haWgdHFuJw?list=TLPQMTAxMDIwMjIayz4yUM5nIw&t=870

```js
function newButton(text){

    const $body = document.querySelector("body"); //selecionando body -> $body
    const $button = document.createElement("button"); //criando botão html

    $button.textContent = text; //botão dentro da função, é necessário exportalo
    $body.insertAdjacentElement("beforeend", $button); //inserindo button no body

    return $button; //exportando o botão para usa-lo fora da função

}

  

const login = newButton('Login');

const register = newButton('Register');

  

console.log("login", login);

console.log("registrado", register);

  
// ========== o código a seguir fica repetitivo ===============

login.addEventListener('click', () => {

    console.log("Fazendo login")

});

register.addEventListener('click', () => {

    console.log("Registrando")

});
```

configuramos os comportamentos antes de inserir o elemento
```js

function newButton(text, callback){

    const $body = document.querySelector("body"); //selecionando body -> $body
    const $button = document.createElement("button"); //criando botão html

    $button.textContent = text; //botão dentro da função, é necessário exportalo
    
    callback(); //cria uma função callback que vai ser a ()=>{} de cada func
    
    $body.insertAdjacentElement("beforeend", $button); //inserindo button no body

    return $button; //exportando o botão para usa-lo fora da função

}

  

newButton("Login", () => { //callback
	console.log('função newButton - login') 
});

newButton("Register", () => { //calback
	console.log('função newButton - register')
});


```

---

## Funções e Efeitos Colaterais Crescentes
Funções no geral podem ser dividas entre:
- funções que produzem um efeito colateral;
- funções que retornam um valor;

---
## Arrow Function () => {}
#ArrowFunction since ES6 (2015)

- é necessário atribuir a uma variável/constante para funções não anôenimas

- ``()=>{}``

### Diferença de sintaxe
- não é necessário usar a palavra-chave `function`
```js
function isAdult(age){
	return age>= 18
}
```

```js
const isAdult = (age) => age>= 18
```
- em caso de um único parâmetro o parêntese pode ser emetido
- tudo entre {} responde a ``return``

```js
function getRandomNumber(){
	return Math.random()
}
```

```js
const getRandomNumber = () => Math.random()
```

#### Variações do Arrowfunction
> https://www.youtube.com/watch?v=3EkS9-P3cIM
##### Sem return mas retorna 
- Não usa as chaves ``{}``
```js
const sum = (n1, n2) => n1 + n2;

console.log(sum(20,30));
```

##### Sem parâmetros
```JS
const comunity = () => 'CollabCode'
//const comunity = _ => 'CollabCode'

console.log(community())
```

##### Só um parâmetro
```js
const double = (number) => number * 2;
```

```JS
const double = number => number * 2; //opcional
```

##### Parâmetros múltiplos
```js
const sum = (number1, number2, number3) => number1 + number2 + number3;
```

##### Arrowfunction com chaves
```js
const isAdult = (age) => {
	if(age >= 18){
		return 'Maior idade'
	} 
	
	retirm 'Menor idade'
};

console.log(sum(18));
```

##### Retornando um JSON sem return
```js
const getPerson = () => { return { name: "Henri", eye: "blue" } /* objeto */ };
```
ou
```js
const getPerson = () => ( { name: "Henri", eye: "blue"} ) //uso do parêntese para o return
```

##### ✨ ==IIFE com ArrayFunction== ✨
- IIFE -> boa prática
- garantindo o escopo de cada arquivo
- suponha o caso em que exista dois arquivos js diferentes com a mesma constante ``getPerson``, porém com valores de propriedades diferentes...
```js 
//index1.js
const getPerson = () => ({name: "Luna", eye: "green"});

console.log(getPerson());
```
```js
//index2.js
const getPerson = () => ({name:"Vitor", eye: "brown"});

console.log(getPerson());
```
```html
<!DOCTYPE html>
<html lang="en">
	<head>
		...
	</head>
	
	<body>
		<script src="index1.js"></script> <!--chama primeiro-->
		<script src="index2.js"></script> <!--chama segundo-->
	</body>
</html>
```
- nesse caso, a partir do momento que o ``index1.js`` é chamado, a constante com o nome "``getPerson``" é criada no **escopo global** do navegador. 
- Sendo assim, ocorre o erro de variáveis declaradas mais de uma vez, não sendo possível utilizar a constante no ``index2.js``.
- Isso é ruim para manutenção, pense em programas que possuem 100 arquivos que usam variáveis desse tipo, precisamos então *elaborar um escopo* a partir de uma função.
```js
//index1.js
function init(){
	
	const getPerson = () => ({name: "Luna", eye: "green"})
	
	console.log(getPerson());
}

init(); //caso queira vazar o escopo do arquivo

```
```js
//index2.js
function init(){
	
	const getPerson = () => ({name: "Vitor", eye: "brown"})
	
	console.log(getPerson());
}

init(); //caso queira vazar o escopo do arquivo
```
- neste caso, podemos otimizar utilizando o conceito de **IIFE** 
	- primeiro removemos o **nome da função** e utilizamos apenas ``()`` para chamar a mesma:
	- depois envolvemos a função em um escopo utilizando ``()``
```js
// #1
function() {
	const getPerson = () => ({name: "Vitor", eye:"brown"})
}()
```
```js
// #2
(function() {
	const getPerson = () => ({name: "Vitor", eye:"brown"})
}) ()
```
- isso serve para o mesmo arquivo ``index2.js`` 
- **criando uma IIFE em arrowfunction:**
```js
(()=> {
	const getPerson = () => ({name: "Luna", eye: "blue"});
	console.log(getPerson());
})
```

##### This na Arrowfunction
```js
(()=>{
	function Person() { //função construtora
		this.age = 0;
		
		setInterval(function(){
			this.age = this.age + 1;
			console.log('Qual this?', this)
			console.log('Qual a idade?', this.age)
		}, 1000)
	}
	//instanciando Person
	const p1 = new Person();
}) ()//executar a IIFE
```
```js
(()=>{
	function Person() { //função construtora
		
		const that = this; //resolvendo o problema por meio do objeto that
		//referência do this é guardada dentro do objeto que está acessível
		that.year=0;
		
		setInterval(function(){
			that.age = that.age + 1;
			console.log('Qual this?', that)
			console.log('Qual a idade?', that.age)
		}, 1000)
	}
	//instanciando Person
	const p1 = new Person();
}) ()//executar a IIFE
```


#### Arrowfunctions em funções anônimas de callback
```js
document.addEventListener('click', function(){
	console.log('clicked')
})
```

```js
document.addEventListener('click', () => console.log('clicked'))
```

--- 
## JavaScript Funcional #01
> https://www.youtube.com/watch?v=a87hVIkG37M
- **First-class function** é a propriedade de linguagem de programação que permite o tratamento de funções como variáveis.
- **Higher-order functions** função que recebe outra função como parâmetro.

### const x let
#const_let
- ``const`` torna o endereço do Objeto constante, ou seja, esse endereço NÃO pode apontar para outro espaço na memória.
	- no entanto, os atributos/propriedades de um objeto constante, podem ser alterados
	- para manter as propriedades de um objeto constantes usamos o método ``Object.freeze()``.
		- ``const o1 = Object.freeze({name:'a'})`` 
		- para modificar um objeto "freezado" devemos clona-lo, e partir do clone fazer as novas alterações.
			- ``const o2 = {...o1, name:'b'} //o2 é clone de o1 e mudou o nome de 'a' para 'b'``
			- assim evoluimos dados imutáveis freezados.
- ``let`` permite que seja alterado as referências:
```js
const o1 = {name: 'a'}
let o2 == 01 //referência inicial

o2 = {} //mudou a referência, aponta para outro espaço na memória
```

### Referência x Valores
#referência_valores
```js
let a =3;
let b = a;

a++
b--

console.log(a,b) // >> a = 4 ; b = 2 -> não há compartilhamento de referência

let obj1 = { name: 'a' }
let obj2 = obj1 //compartilhamento da referência

obj2.name = 'b'; 

console.log(obj1, obj2) // >> { name b, name b }

```

- No caso de let obj2 = obj1, há um **compartilhamento de referências** entre as variáveis, ou seja, o que é feito em uma, é feita na outra.
- nesses casos, temos uma economia por parte da memória.


--- 
## Resumo do Resumo
- ``function`` pode ser usada para criar uma expressão em si, ou como declaração para dar função á uma variável.
```js
// Create a function value f
var f = function(a) {
  console.log(a + 2);
};

// Declare g to be a function
function g(a, b) {
  return a * b * 3.5;
}
```

- [ ] Revisar como funcionam os escopos locais e globais

- parâetros e variáveis declaradas dentro de uma função são locais àquela função, recriando toda vez que a função é invocada, e não são acessíveis fora da função.
- funções declaradas dentro da função, tem acesso ao escopo local das funções externas que as envolvem.