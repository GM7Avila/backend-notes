#designPattern
> https://www.dofactory.com/javascript/design-patterns/singleton

Singletons são úteis em situações em que as ações de todo o sistema precisam ser coordenadas a partir de um **único local central**. Um exemplo é um conjunto de *conexões de banco de dados*. O pool gerencia a criação, a destruição e o tempo de vida de todas as conexões de banco de dados para todo o aplicativo, garantindo que nenhuma conexão seja 'perdida'.

Singletons reduzem a necessidade de variáveis ​globais, o que é particularmente importante em JavaScript porque limita a poluição do namespace e o risco associado de colisões de nomes. O padrão **Module** (veja nosso produto [Dofactory JS](https://www.dofactory.com/products/dofactory-js) ) é a manifestação do JavaScript do padrão Singleton.

Vários outros padrões, como Factory, Prototype e Façade são frequentemente implementados como Singletons quando apenas uma instância é necessária.

...