# Estrutura do Programa

-   Expressão: um fragmento de código que produz algum valor.
----
## Variáveis
#variáveis
-   Quando uma variável aponta para um valor, isso não significa que estará ligada ao valor para sempre.
-   O operador = pode ser usado a qualquer hora em variáveis existentes para desconectá-las de seu valor atual e então apontá-las para um novo;
-   Variáveis são tentáculos e não caixas, elas não guardam valores e sim os agarram.

### var, let e const
1. var -> variável global
2. let -> variável local
3. const -> constante (mesmo escopo do let)

#### var/let x const
- não pode-se reatribuir algo á uma constante; 
- exceto para objetos (pois podemos alterar suas propriedades, e não o seu tipo: Objeto)

---
## Palavras-chave e Palavras-reservadas
#palavras-reservadas
`break` `case` `catch` `continue` `debugger` `default` `delete` `do` `else` `false` `finally` `for` `function` `if` `implements` `in` `instanceof` `interface` `let` `new` `null` `package` `private` `protected` `public` `return` `static` `switch` `throw` `true` `try` `typeof` `var` `void` `while` `with` `yield` `this`

---
## Ambiente
#enviorment
O conjunto de variáveis e seus valores que existem em um determinado tempo é chamado de environment (ambiente).

---
## Função
#function
-   Executar uma [função](./Funções) é denominado **invocar / chamar ou aplicar**.
-   Os valores passados pelas funções são chamados de #argumentos.
-   A função define o parâmetro.
-   O código de chamada passa o argumento a esse parâmetro.

### Argumentos VS Parâmetros
#### 1. Argumentos
- #Argumento é o valore recebido na função pelos parâmetros.
- Cada argumento corresponde a um parâmetro (na mesma posição).
- Recebe argumentos, mas em parâmetros.
- Argumentamos com o que desejamos executar uma função devidamente parametrizada.
- Pode haver mais ou menos argumentos

#### 2. Parâmetro
- Definido na declaração da função/método. 
- #Parâmetros são as variáveis que irão receber um valor em uma #function (ou [[Método]])
- Não se passa parâmetros, passa argumentos.
- Dizems que uma função é ==parametrizada==, quando é definida por meio de seus parâmetros as informações que virão posteriormente.
- Todos os parâmetros são nomeados
- Podem existir menos ou mais argumentos para cada parâmetro, já que existem parâmetros que são opcionais e outros que podem ser listas variáveis de dados. 

![[Pasted image 20220917181750.png]]

##### Exemplos:
```js
void Func1(int i, bool flag = true) { //declarou dois parâmetros
    // execução
}

void Func2(params int[] lista) { //declarou um parâmetro
    //execução
}

void Func3(bool x, bool y) {
    int z = 0;
    Func1(1); //chamou com 1 argumento
    Func1(z, x && y); /*chamou com dois argumentos vindos de variável e 
    expressão respectivamente*/
    Func2(1, 2, 3); //chamou com 3 argumentos
    Func1(flag : false, i : 2); //argumentos nomeados
}
```

### Função console.log
#console 
- A maioria dos sistemas JavaScript (incluindo todos os navegadores e o Node.js), fornecem essa função.
- Escrever argumentos como texto na saída do dispostitivo.
- É uma expressão que retorna o campo ``log`` do valor contido na variável ``console``.

----
## Retornando Valores
- Quando a função produz um valor, é dito que ela retorna (return) ele.
- Tudo que produz um valor é uma #expressão, o que significa que chamadas de função podem ser usadas dentro de expressões maiores. Exemplo:
  
```JS
console.log(Math.min(2,4) + 100);
```

a função ``Math.min`` (oposto da função ``Math.max``) retorna o valor do parâmetro que possuir o menor argumento. 

--- 

## Fluxo de Controle
```JS
var theNumber = Number(prompt("Pick a number", ""));
alert("Yout number is the square root of " + theNumber * theNumber);
```

## Execução Condicional
```js
var theNumber = Number(prompt("Pick a number", ""));
if(!isNaN(theNumber)){
	alert("Your number is the square root of " + theNumber * theNumber)
}
```
- a função `!isNaN` é uma função padrão, que returna **true** se o argumento fornecido é `NaN`.
- A função `Number` retorna `NaN` quando você fornece a ela uma string que não representa um número válido. 
- Se (``if``) o número (``theNumber``) não (``!``) for um ``NaN``(Não Núemro) - ou seja, se ele for um número - retorna alert.

### if else
```js
var num = Number(prompt("Pick a number", "0"));

if (num < 10)
  alert("Small");
else if (num < 100)
  alert("Medium");
else
  alert("Large");
```

### while
```js
var number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
```

### do while
```js
do {
  var name = prompt("Who are you?");
} while (!name);
console.log(name);
```

```js
do {var password = prompt("Write de password")} while (password!= 'sudo1234');
console.log(password);
```

### for 
```js 
for (var number = 0; number <= 12; number = number + 2)
  console.log(number);
  
// → 0
// → 2
//   … etcetera
```

#### for of
- forma de iterar ([[iteração]]) passar por todos os elementos
- ex.1) podemos declarar novos elementos a partir de for of
```js
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
```
- ao invés de:
```js
const array1 = ['a', 'b', 'c'];

for (let i=0; i<array1.length; i++){
	console.log(array1[i])
}

```

### break
```js
for (var current = 20; ; current++) {
  if (current % 7 == 0)
    break;
}
console.log(current);
// → 21
```

- Se você não incluir a declaração `break` ou acidentalmente escrever uma condição que sempre produza um resultado `true`, seu programa ficará preso em um _loop infinito_. Um programa preso em um loop infinito nunca vai terminar sua execução, o que normalmente é uma coisa ruim.

- Quando `continue` é encontrado no corpo de um loop, o controle de execução pula para fora do corpo e continua executando a próxima iteração do loop.

### switch
```js
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
```
- pula para default se nenhum valor for encontrado.

--- 

## Exercício Xadrez
```js
var size = 8;
let string = '';

for(l = 1; l<=size; l++){

    for(c = 1; c<=size; c++){

        if((l+c) % 2 === 0){
            string += ' ';
        } else {
            string += '#';
        }
    }

    string += "\n"

}

console.log(string);
```

--- 

