# Array
- **Lista** de valores
- Separados por vírgula dentro de colchetes
- Pode guardar aqualquer tipo de valor: string, number, boolean, arrays, etc.

## Acessando itens do Array
### Por posição na lista
- note: contagens começam sempre do valor 0
``const nomes = ['daniel', 'sofia', 'juliana']
``nomes[1]`` return ``sofia``
- elemento 0 (daniel) caracter da posição ``[1]`` = a (d**a**niel)
``nomes [0][1]`` return `a` 
- valores de posição fora do array
``nomes [3]`` return ``undefined`` 

```js
const nomes = ['daniel', 'sofia', 'juliana'];

console.log('nome[0] = ${nomes[0]}')
console.log('nome[1] = ${nomes[1]}')
console.log('nome[2] = ${nomes[2]}')
console.log('nome[3] = ${nomes[3]}')
```

## Arrays dentro de Arrays
```js
const alunos = [ [ 'daniel','henrique' ] , [ 'raquel' , 'luisa' ] ]
```
- ``index[0]`` do array alunos => ``['daniel' , 'henrique']``
- ``index[1]`` do array alunos => ``['raquel' , 'luisa']``

### Acessando a Array dentro do Array
- mesma lógica de acessar o caracter da posição (*Stirng é um array de caracter*);
- ``alunos[0][0]`` return ``daniel``
- ``alunos[0][1]`` return ``henrique``

## Operações básicas
### Trocando valores dos elementos do index
```js
const nomes = ['daniel', 'hernique', 'raquel', 'luisa']
nomes[0] = 'guilherme'
//nomes[0]: daniel => guilherme
```
- **Atenção** - mesmo que trocando os valores do array, e ele ser uma **Const**, isso não interfere na variável do array. O Array nomes continua sendo um Array. O que não poderia ser feito é assimlar ``const nomes = 2``, pois assim ele seria um novo valor; **TypeError: Assignment to constant variable**

### Deletando um item
- Utilizamos uma função [[built-in]] de arrays chamada **"splice"**, onde:
	- primeiro argumento: **index** de marcação
	- segundo argument: quantidade de itens depois do **index** a ser deletado
- Lista de funções built-in (incluindo o splice) com função de deletar:
📦**splice** 
	(method) ``Array<detected>.splice``
	![[Pasted image 20220923111346.png]]
	- primeiro parâmetro → **start** (tipo number)
	- segundo parâmetro → **deleteCount?** (tipo number)
		**note**: o interrogação ``?`` após o nome do parâmetro, indica que ele os argumentos para esse, são ***opcionais***, ou seja, a função funciona mesmo se não forem passados argumentos à ele.
📦**pop**
	(method) ``Array<detected>.pop`` 
	![[Pasted image 20220923114815.png]]
	- deleta o último elemento do array
📦**shitf** 
	(method) ``Array<detected>.shift`` 
	- deleta o primeiro elemento do array
**Ex.1**
```js
const nomes  = ['daniel', 'luisa', 'felipe', 'sofia'];

nomes.splice(0 , 1);
console.log(nomes);
// => ['luisa', 'felipe', 'sofia']
```
- A partir da posição 0, deletando somente 1 - a partir dessa posição. Ou seja, apagando 'daniel'.

**Ex.2**
```js
const nomes  = ['daniel', 'luisa', 'felipe', 'sofia'];

nomes.splice(1);
console.log(nomes);
// => ['daniel']
```
- Nesse caso, não passamos nenhuma argumento para o parâmetro ``deleteCount``, então ele considera que todos os elementos, do index referente ao argumento do parâmetro ``start``, em diante, serão deletados.

### Inserindo Elementos
#### Forma tradicional
- ``array[posiçãoDesejada = 20`` → insere ``20`` na posição desejada do array
- caso o array não possua elementos até o número desejado, ele cria elementos com valores vazios até chegar no index em que está sendo inserido o novo elemento.

#### Função push e unshift
- ``nomes.push('julia')`` insere o valor passado na **última** posição
- ``nomes.unshift('julia')`` insere o valor passado na **primeira** posição


----
# Notes
![[Pasted image 20220923111139.png]]
- O primeiro símbolo é referente aos métodos, já o segundo ás propriedades

- método vs propriedade (função?)