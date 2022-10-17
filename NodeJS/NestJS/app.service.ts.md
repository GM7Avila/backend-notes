```ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	  getHello(): string {
		    return 'Hello World!';
  }
}
```

---
# Services

## Trabalhando com serviços
Serviços são usados para isolar a lógica de negócio nos controllers
- reutilização do código em mais de uma parte da aplicação (injetando na classe que desejamos utilizar);

### criando um serviço pela CLI
``nest g service nomeDoServiço``

>CREATE src/xxxx/xxxx.service.spec.ts
CREATE src/xxxx/xxxx.service.ts
UPDATE src/app.module.ts

arquivo: [[app.module.ts]]
![[Pasted image 20221016181805.png]]

```js
import { Injectable } from '@nestjs/common';

@Injectable() //injeção de dependência prórpio do container do Nest
export class GamesService {
	
	//vanmos codar aqui ainda
	
}
```
- para injetar o serviço *GameService* em um controller, usamos no cotroller um [[Método]] construtor que será responsável por receber a **instância** desse serviço.
- essa instância é criada com o [[padrão singleton]], garantindo que existirá apenas uma única instância a cada siclo da aplicação.

- para isso devemos criar um método *constructor* no nosso arquivo [[app.controler.ts]] em @Controller:
```ts
@Controller('gameList')
export class gamesController //export -> usar em outros locais 
	constructor(private readonly gamesService : GamesService){
	//classe constructor(private readonly nome : tipo da variável)
   }
```

- criando uma entidade para os jogos: 
	- Local: `src/games/entities/game.entity.ts`
```ts
export class Game{
	title: string;
	id: number;
	tags: string[];
	description: string;|
}
```

- a partir desse modelo(classe), podemos instanciar o objeto em ``game.services.ts``:
```ts
import { Injectable } from '@nestjs/common';
import { Game } from './entities/game.entity'

@Injectable()
export class GamesService {
	private games: Game[]=[]
}

```

- preciamos importar ``import`` a classe(escopo) Game para games.service;
- em seguinda, na classe criada anteriormente (`GamesService{}`) nós conseguimos instanciar nosso objeto: ``private games: Game[] = []`` <- o objeto ``games``, do tipo ``Game[]``(array) receberá um novo array ``=[]``, onde podemos inserir os dados:
```js
import { Injectable } from '@nestjs/common';
import { Game } from './entities/game.entity';

@Injectable() //injeção de dependência prórpio do container do Nest
export class GamesService {
    private games: Game[] = [
        {
            title: "Batman",
            id: 112233,
            tags: ['adventure', 'action', 'investigation'],
            age: 17, //corrigir
            description: 'Batman description here',
        },
        {
            title: "Minecraft",
            id: 113322,
            tags: ['adventure', 'chill', 'open-world'],
            age: 0, //corrigir
            description: 'Minecraft description here',
        },
        {
            title: "Red Dead Redep.",
            id: 332211,
            tags: ['adventure', 'action', 'old-west'],
            age: 18, //corrigir
            description: 'Batman description here',
        }
    ];
}
```
- a partir dessa estrutura definida, podemos criar os métodos, que irão manipular essa estrutura de dados (findAll, findOne, etc) - que serão usados no Controller;
```js
import { Injectable } from '@nestjs/common';
import { Game } from './entities/game.entity';

@Injectable() //injeção de dependência prórpio do container do Nest
export class GamesService {
    private games: Game[] = [
        {
            title: "Batman",
            id: 112233,
            tags: ['adventure', 'action', 'investigation'],
            age: 17, //corrigir
            description: 'Batman description here',
        },
        {
            title: "Minecraft",
            id: 113322,
            tags: ['adventure', 'chill', 'open-world'],
            age: 0, //corrigir
            description: 'Minecraft description here',
        },
        {
            title: "Red Dead Redep.",
            id: 332211,
            tags: ['adventure', 'action', 'old-west'],
            age: 18, //corrigir
            description: 'Batman description here',
        }
    ];

	findAll(){
		return this.games;
	}

	findOne(id:string){
		return this.games.find((game)=>{ //itera um por um
			game.id === Number(id); 
		})
	}

}
```

- Criando o método ``findAll()``, que retorna ``this``(fazendo referência ao arquivo atual) objeto ``games`` (array) - ou seja, todo o array;
- Criando o método ``findOne()`` que retorna ``this`` (fazendo referência ao arquivo atual) objeto ``games``, utilizando o método ``.find`` (do JS):
	- passamos ``id:string`` como argumento da função ``findOne()``; ou seja, utilizaremos uma variável do tipo ``string`` chamada id na função.
	- no méotdo ``find``, passamos como argumento uma arrowfunction (anônima):
		- essa arrow function, trata *cada elemento* como uma variável ``'game'``(ou seja, le cada game), e em seguida compara se o *id* do elemento ``game``(referência de cada objeto em ``games`` - ou seja, da própria estrutura de dados) é igual ao *id* passado no parâmetro da função findOne(**id:string**) - ou seja, de fora da estrutura de dados;
		- como a id do parâmetro da função findOne() é uma *String*, usamos *Number* parar declarar que o id a ser recebida(fora da estrutura de dados criada), **deve ser um número** da seguinte forma: ``game.id === Number(id)`` 
- Em seguidas criamos a estrutura de create: registerGame(), que será responsável por receber as informações enviadas do front-end através de um [[Data Transfer Object]]:
```ts...
	registerGame(registerGameDto: any){ 
		   
		this.games.push(createCourseDto)
		
	} 
	//ainda não definido o que será passado dentro da função então usamos :any
   ```
- incluimos no array ``game`` a estrutura enviada em `createCourseDto` através do ``.push`` - mais a frente explicado com detalhe;