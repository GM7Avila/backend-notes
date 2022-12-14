# Diretórios

## > 📁 dist
- compilação do projeto;
- NestJS é baseado em Typescript, o código é compilado para Javascript através dos arquivos na pasta *dist* para a comunicação com o NodeJS; 

## > 📁 node_modules
- dependências do NodeJS

## > 📁 test
- arquivos de teste
- onde fica a configuração do [[Jest]]

## > 📁 src
**pasta de código**
- app.controller.spects
### main.ts
- ``main.ts`` => responsável por criar a aplicação através da instrução:
	- ``const app = await ``**NestFactory.create(AppModule)**``;`` (app recebe)
		, onde o parâmetro ``AppModule`` é uma instância de [[app.module.ts]], que é o módulo principal da aplicação.
	- ``app`` retorna a aplicação para a porta 3000 (criada por padrão) em
		``await app.listen(3000);``

**main.ts**
 ![[Pasted image 20221015130530.png]]

**app.module.ts <-> main.ts**
![[Pasted image 20221015143533.png]]

### controler.ts
- responsável por lidar com as requisições da aplicação
- requisições enviadas do frontend 
- cada controlador tem uma ou mais rotas atreladas a ele... 
	- exemplo: controler responsável para requisições do recurso de usuários, cursos, etc.
	- as rotas são dadas por meio dos decorators (@);
	[[app.controller.ts]]
```ts
//>>>>>>>>>    app.controler.ts

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppControler {
  constructor(private readonly appService: AppService) {}

	@Get()
	getHello(): string { 
		return this.appService.getCu();
	} 
}
```

### service.ts
- [[app.service.ts]] 
- o decorator ``@Injectable()`` é quem torna possível definir uma classe como um serviço;
- através da cli, conseguimos gerar serviços: ``nest g service NomeDoServiço`` 
```ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	  getHello(): string {
		    return 'Hello World!';
  }
}
```

## > 📁 test
- ``nest-cli.json`` => arquivo responsável por manter meta-dados para organizar, construir e encontrar projetos estruturados com nest, atualizado **automaticamente** conforme recursos serão incluidos no projeto por meio do cli. 

---

  🚨**note!** em `packed.json`, você poderá notar que há tanto o comando (no cli) de "`"start" : "nest start"`" quanto `"start:dev" : "nest start --watch"`; a diferença, está que, utilizando o `nest start --watch`, utilizamos a flag `--watch`, responsável por verificar se há alterações no código, e recompila-lo de acordo.
> 	**npm run start:dev**

---
### module.ts

- maneira eficaz de organizar os componentes;
- cada módulo encapsula um conjunto de recursos;
- multiplos [[app.module.ts]] 