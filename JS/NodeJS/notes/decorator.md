- decorator -> aclopador de funcionamento dentro de uma variável / função, etc.
- utilizamos *@* para os decorators (exemplo: `@Module`)
- agilidade

```ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
	imports: [],
	controller: [AppControler],
	providers: [AppService],
})

export class AppModule {}
```

mvc o que é?

# **controllers**
- Arquivos de ponto de entrada da aplicação
- Lidam com chamadas HTTP
- ex.: *AppControler* -> classe com decorator @Controller (é uma classe que lida com entradas, requerimentos http);
