# Objects
## Tudo é Objeto em Javascript!
- ``'André.length'`` possui uma propriedade, então é um objeto
- ``console`` é um objeto, em seguida vem uma propriedade/método (no caso ``.log`` é um método, possui parâmetro)
```js
let carro = {

	marca: "VW" //propriedade de carro (valor fixo)
	preco: "20000" //propriedade de carro (valor fixo)
	
	andar: function(){
		//método do objeto
		return console.log('andou')
	}

}

console.log(carro.marca); 

console.log(carro.andar());

```
- É possível atribuir um valor a uma propriedade usando o operador `=` , isso irá substituir o valor de uma propriedade, caso ela exista, ou criar uma nova propriedade no objeto se não existir.

## Objeto dentro de Objeto
- Acessando objetos dentro de objetos
```js
let cliente = {
	
	nome: "Jonathan"
	idade: "35"
	carros: { 
		
		camaro: {
			placa: "LKXN-312"
			cor: "preto"
		}, //+ objetos
		
		uno: {
			palaca: "NXKL-123"
			cor: "branco"
		}
	}
	
}

console.log(pessoa.carros.camaro.placa)

```

## Métodos de Objetos
```js
let cliente = {
	
	nome: "Jonathan"
	idade: "35"
	carros: { 
		
		camaro: {
			placa: "LKXN-312"
			cor: "preto"
		}, //+ objetos
		
		uno: {
			palaca: "NXKL-123"
			cor: "branco"
		}
	},
	
	andar: function(km){
		console.log(pessoa.nome + " andou " + km + "km")
	}
	
}

console.log(pessoa.carros.camaro.placa)

pessoa.andar(20); //chamou o método
```

## Manipulando Objetos e Arrays
```js
let guilherme = {

    nome: "Guilherme Avila",

    planguage: ["JavaScript","JAVA","C","C++"],

    isActive: true,

    points: 2500

};


let silvia = {

    nome: "Silvia de Andrade",

    planguage: ["Ruby","C","JAVA","C#"],

    isActive: true,

    points: 3000

};


let pedro = {

    nome: "Pedro Oliveira",

    planguage: ["C","JavScript"],

    isActive: false,

    points: 520

};


let alunos = [guilherme, silvia, pedro];


let valorTotal = 0;

for (aluno of alunos){
    if (aluno.isActive){ valorTotal += aluno.points; }
}
  
console.log(valorTotal);
```

### Usando reduce
- [Como usar o reduce?](/JS/reduce) 

```js
let alunos = [guilherme, silvia, pedro];

let valorTotal = estudantes.reduce((a,c) => a + c.points, 0)
```

```js 
let valorTotal = estudantes.reduce((a,c) => a + c.points, 0)
// é igual a 
let valorTotal = estudantes.reduce(function(a,c) { return a + c }, 0)
```

