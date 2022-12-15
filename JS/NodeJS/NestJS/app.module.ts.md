``app.module.ts``
``AppModule`` -> instância

aclopador de controllers e services;

é aonde devemos inserir os outros diversos módulos que formos criar na aplicação.

esta inclusão na maior parte das vezes é feita de forma automática pelo Nest.

```ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({ // <- Decorator

  imports: [],
  controllers: [AppController],
  providers: [AppService],

})
 
export class AppModule {}
```

- importa a função Module de nestjs/common(padrão no Nest - nodemodules)
```ts
import { Module } from '@nestjs/common';
```
- importa a classe AppController
```ts
import { AppController } from './app.controller';
```

---
# Trabalhando com Módulos

## Criando um módulo
- cli: ``nest g module nomeDoModulo`` 
- estrutura básica:
  
```ts
import { Module } from '@nestjs/common';

@Module( {
	controllers: [], //objeto que importa os controllers
	providers: [] //objeto que importa os serviço
} )

export class nomeDoModulo
```

- todas as informações no app.module.ts referente aos jogos, ficarão em um módulo próprio.
![[Pasted image 20221101075735.png]]

![[Pasted image 20221101082056.png]]

![[Pasted image 20221101082125.png]]