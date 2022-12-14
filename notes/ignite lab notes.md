# 01. Fundamentos do Nest.js & Prisma

## O que é um Microserviço?
Como hospedamos a aplicação; Comunuicação entre as aplicações.
![[Pasted image 20221213225259.png]]

Aplicação (API) <-> Data Base (DB)

Arquitetura de deploy - como a aplicação é hospedada
- *Monolítica*
- *Microserviços*

**Microserviço**: *dividir a aplicação em setores;*
Ex.: Microserviço de carrinho, checkout, nota fiscal, logística, autenticação, catálogo, etc.

- Maior *independência* entre os serviços (menos problema de conflito);
- Possibilidade de *duplicidade* de dados;
- Integração com mais de um banco de dados; cada serviço com seu banco e cada banco com seu dado;
- Um banco por serviço;
- Comunicação assíncrona.

## NestJS
- Framework *opinado* -> opinião na forma em que você deve criar sua aplicação;
- Leque de bibliotecas que o NestJS integra;
- Menos atrito na tomada de decisão; escopo;
- Maneiras diretas de realizar serviços;
- Velocidade e Produtividade (menos tempo com tomada de decisão);
- Integrações acopladas no próprio framework;
- **Typescript** e facilidade de **Decorators**;

## Inversão de dependência
- [[app.controller.ts]]
```ts
import { Controoller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
	constructor (private readonly appService: AppService){}
}

	@Get('hello')
	getHello(): string {
		return this.appService.getHello();
	}

```

Quando importamos AppService, não estamos utilizando diretamente o seu conteúdo na chamada do método hello. 

Isto porque AppService na verdade é uma classe, e precisamos definir um *constructor* que recebe um parâmetro ``appService`` que é do tipo *AppService*.

Assim na chamada do método hello utilizamos: `this.appService.getHello();

Ou seja, ao invés do app.controller.ts buscar a dependência em outro arquivo, ele *recebe a funcionaldiade como um parâmetro quando é instanciado.*

## Injeção de dependência
- [[app.module.ts]]
```ts

```

---
checkpoint
aula 01: *38:00*
https://app.rocketseat.com.br/event/ignite-lab-04/nodejs/aula-1?utm_source=Active_Campaing&utm_medium=leads_cadastrados&utm_campaign=event-ignite-lab04&utm_term=email&utm_content=automacao-incricao