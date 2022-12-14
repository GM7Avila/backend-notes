```js
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();

  }

}
```

--- 
# Controllers 

## 🛠️ Configurando seu Controller
- controllers lidam com as *requisições*;
- comando para criar um controller pela cli: ``nest g controller nomeDoController`` 
	resultado de criação pelo cli:
	``CREATE src/nomeDoController/nomeDoController.controller.spec.ts``
	``CREATE src/nomeDoController/nomeDoController.controller.ts``
	``UPDATE src/app.module.ts``
- criou o spec (arquivo de testes) do controller e o arquivo ts (configuração), em seguida atualizou o [app.module](app.module.ts.md);
- esse arquivo é criado em uma subpasta com o nome do controller
- para criar um controller *sem o arquivo de teste*, usamos o comando: ``nest g controller courses --no-spec``
- para criar uma estrutura diferente, você também pode informar o caminho das pastas desejadas atavés do cli: 
	- supondo que desejamos criar uma pasta modules antes de courses:
	- ``nest g controller module/courses``
	- a flag ``--dry-run`` no cli atrelada ao comando acima, permite visualizar como ficará montado a estrutura sem de fato cria-la.
![[Pasted image 20221015231043.png]]
----
## 🧱 Estrutura de um Controller
#get
- **nomeDoController.controller.ts**:
```ts
import { Controller } from '@nestjs/common'

@Controller('nomeDoController')
export class CoursesController { }
```
- o [[decorator]] @Controller define a classe como um controller do NestJS (note, é um recurso do nest - from '@nestjs/common')
- o [[endpoint]] do controller é indicado no parâmetro do decorator @Controller: ``@Controller('nomeDoController')`` -> é a rota (URL) para acessar os métodos desse controller.
	- ao rodar no [[insomnia]] o caminho ``'/nomeDoController'``, será procurado os métodos desse controller.
- É necessário ter os métodos referente ao tipo de requisição que desejamos usar, exemplo, criando o método 'findAll()'
```ts
import { Controller, Get } from '@nestjs/common'

@Controller('nomeDoController')
export class CoursesController {
	
	@Get
	findAll() { 
		return 'Listagem de cursos';
	}

}
```
- Atribuimos à função findAll o decorator @Get (podendo ser qualquer [[requisição HTTP]]), padrão do nestjs; dessa forma, para que ele funcione, precisamos chama-lo importando-o do diretório nestjs/common em ``import{ Controller, Get }``
- *Entendendo a aplicação...* toda requisição GET, que chegar pela rota 'nomeDoController', utilizará o método ``findAll()``
>  🚨**note!** em `packed.json`, você poderá notar que há tanto o comando (no cli) de "`"start" : "nest start"`" quanto `"start:dev" : "nest start --watch"`; a diferença, está que, utilizando o `nest start --watch`, utilizamos a flag `--watch`, responsável por verificar se há alterações no código, e recompila-lo de acordo.
> 	**npm run start:dev**

- caso você queira que a função findAll atenda em forma de **rotas alinhadas** você póde indica-las no parâmetro do decorator em uso (`@Get()`):
```ts
import { Controller, Get } from '@nestjs/common'

@Controller('nomeDoController')
export class CoursesController {
	
	@Get('list')
	findAll() { 
		return 'Listagem de cursos';
	}

}
```
- agora o return será referente apenas à rota ``nomeDoController/list``.
- caso a rota usada seja apenas ``nomeDoController`` será retornado o [[HTTP status code]] 404 (not found);
- a partir disso (prefixo do controller) é possível criar novos métodos com rotas alinhadas; ou então definir as rotas em cada método (sem depender do prefixo).

----
## 🔀 Parâmetro de Rotas
#get
### Tratando parâmetros dinâmicos

- criando o método findOne() para retornar um jogo específico;
- Ex.: identificação do jogo que queremos buscar -> utilizamos ``:`` nos parâmetros da função criada.
	- ``findOne(':id')``
- o parâmetro vem após o nome da rota ``gameList/valorPassadoComoParâmetro``
- para tornar possível a chamada do parâmetro no escopo da função precisamos do decorator @Param (nestjs/common), indicado no próprio método da função:

```js
import { Controller, Get, Param } from '@nestjs/common'

@Controller('gameList')
export class CoursesController {
	
	@Get()
	findAll() { 
		return 'Listagem de jogos';
	}
	
	@Get(':gameId') //<- nome do parâmetro da rota (dinâmico)
	findOne(@Param() params) { //lista inteira (params)
		return `Jogo #${params.gameId}`;
	} // -> Mapped {/gameList/:id, GET}
}
```

- Param() é um objeto que pode conter uma lista de parâmetros; 
- podemos receber mais de um parâmetro por rota - params é o nome dado
- outra forma de trabalhar com parâmetros dinâmicos:
```js
@Get(':gameID')
    findOne(@Param('gameID') id: string){ 
        return {
            gameID: `${id}`
        };
    }
```
- desse modo conseguimos determinar o tipo do valor do parâmetro ``id: string``
- através dessa desestruturação conseguimos usar o parâmetro diretamente no código (usando id ao em vez de params.gameId)
- no exemplo acima, o GET está retornando em formato de objeto:
	- ![[Pasted image 20221016163617.png]]
----
## 🚚 Dados de Playload (HTTP POST)
#post
```js

import { Controller, Get, Param } from '@nestjs/common'

@Controller('gameList')
export class CoursesController {
	/**
	@Get()
	findAll() { 
		return 'Listagem de jogos';
	}
	
	@Get(':gameId') //<- nome do parâmetro da rota (dinâmico)
	findOne(@Param() params) { //lista inteira (params)
		return `Jogo #${params.gameId}`;
	} // -> Mapped {/gameList/:id, GET}
	*/
	
	@Post()
	registerGame(@Body()body){
		return body;
	}
	
}
```
- chamar o decorator POST -> ``@Post()``
- criar a função correspondente: ``registerGame(){}``
- condecorar o parâmetro da função - no caso com o @Body() + objeto
- body -> objeto
- retornar o objeto body
	- ![[Pasted image 20221016164310.png]]
- podemos ainda, passar como argumento para o decorator, os parâmetros que desejamos filtrar:
```ts
	...
	@Post()
    registerGame(@Body('name') body) {
        return body;
    }
```
dessa forma o arquivo json filtra sómente a propriedade que tiver 'name' retornando somente este valor:  
	- ![[Pasted image 20221016165008.png]]
	  
---
## 🌐 Trabalhando com Status Code
[[HTTP status code]]

- GET bem sucedida : Status Code => 200 OK
- POST bem sucedido : Status Code => 201 Created

- Quando precisamos manipular o Status Code (tratar erros, etc), usamos o decoretor ``@HttpCode``
- Util para código de status estático (já)

```js
import {... , HttpStatus } from '@nestjs/common';

...

@Post()
@HttpCode(HttpStatus.NO_CONTENT) //forçando o método devolver No_content (204)
create(@Body('name') body) { 
	return body;
}
...
```

- Quando precisamos tratar mensagens de resposta, usamos o decorator ``@Res`` para manipular o response devolvido ao usuário. 

## 📭 Requisições HTTP: PATCH, PUT e DELETE
- PUT: atualizar todos os dados de um recurso de uma única vez
- PATCH: atualização parcial dos dados
- DELETE: deletar dados parcial 

PATCH:
```ts
...
 @Patch(':gameID')

    update(@Param('gameID') id: string, @Body() body){
        return `Updated: game ${id}`
    }
...
```

DELETE: 
```ts
...
 @Delete(':gameID')

   remove(@Param('gameID') id: string, @Body() body){
        return `Deleted: game ${id}`
    }
...
```

