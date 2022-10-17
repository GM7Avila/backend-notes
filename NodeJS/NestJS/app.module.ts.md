``app.module.ts``
``AppModule`` -> instância

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