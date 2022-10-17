# Map e Reduce
- Utilizamos essas funções no lugar das estruturas de repetições (mais usual no cotidiano do que while, for, etc.)

> Diferença entre map e foreach
> https://www.youtube.com/watch?v=JbzcLKiTThk

### foreach
```js
const nomes = ['J', 'A', 'G']

nomes.forEach((valorAtual,indice,arrayCompleto)=>{
	console.log(valorAtual,indice,arrayCompleto)
});

// => J 0 ['J','A','G']
// => A 1 ['J','A','G']
// => G 2 ['J','A','G']
```

```js
let produtos = [

    {
        nomeProduto: 'Celular',
        valor: 1200.00,
        porcentagemDesconto: 0.20
    },

    {
        nomeProduto: 'Notebook',
        valor: 7200.00,
        porcentagemDesconto: 0.10
    },

    {
        nomeProduto: 'TV',
        valor: 4500.00,
        porcentagemDesconto: 0.15
    }
];

  

produtos.forEach((produtoAtual)=>{

    let valorDesconto = produtoAtual.valor * produtoAtual.porcentagemDesconto
    console.log(produtoAtual.valor + ", " + valorDesconto);

    let valorFinal = produtoAtual.valor - valorDesconto;
    console.log(valorFinal);

})
```

## Map
- Função de transformação (não altera a principal)
- Percorre a coleção e gera valores alterados em cima dos valores que a coleção possui.
- Ex.: transformar valores de cada produto em real para dólares.
- Retorna uma nova lista (imutabilidade).

função callback

```js
const products = [  

    {
        nome: "notebook",
        preco: 2100
    },


    {
        nome: "smartphone",
        preco: 400
    }

]

/*  const precosReais = products.map( p => p.preco*4)  */
const precosReais = products.map(
	
	(p) => {
		p.preco * 4
	}
);


//executa a função callback para cada item da coleção
//p como argumento => preço de cada p * 4


console.log(precosReais) // [8400, 1600]
console.log(produtos)  /*   [ { nome: 'notebook', preco: 2100 },
			                  { nome: 'smartphone', preco: 400 } ]
				       */   
```

```js
const F = [100, 40, 52, 38, 32]
const C = F.map(
	(Fvalue) => { 
		return ((Fvalue - 32)*5/9);
	}
)

```

## Reduce (??)
- Percorre a coleção e gera um valor final em cima dos valores que a coleção possui.

```js

const numeros = [10,20,30,40,50];

const total = numeros.reduce((total,item) => {
	console.log(total) //10, 30, 60, 100
	console.log(item) //20, 30, 40, 50
	
	return total+item;
})

console.log(total); //150

```

```js
const products = [  

    {
        nome: "notebook",
        preco: 2100
    },


    {
        nome: "smartphone",
        preco: 400
    }

]

/*  const precosReais = products.map( p => p.preco*4)  */

const total = produtos.reduce((a,b) => a = b.preco, 0);
consoe.log(total);
```