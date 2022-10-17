# Diretórios
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
	[[app.controler.ts]]
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