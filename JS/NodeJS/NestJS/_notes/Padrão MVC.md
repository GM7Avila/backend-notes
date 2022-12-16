# Arquitetura de Software MVC

![[Pasted image 20221214011117.png]]
- Padrão de arquitetura de software MVC
- **Model View and Controller**
- *Controller* -> facilita a troca de informações entre a interface do usuário aos dados no banco, fazendo com que as respostas sejam mais rápidas e dinâmicas.
- *MVC é o mais conhecido e empregado entre os desenvolvedores profissionais*.

## Model
- Também conhecida como **Business Oject Model** (objeto modelo de negócio)
- Gerenciar e controlar a forma como os dados se comportam por meio das funções, lógica e regras de negócio estabelecidas.
- Detentor dos dados que recebe as informações do *Controller*, valida se está correto ou não e envia a resposta mais adequada.

## Controller
- Intermediar as requisições enviadas pelo *View* com as requisições fornecidas pelo *Model*, processando dos dados que o usuário informou e repassando para outras camadas.

## View
- Camada responsável por apresentar as informações de forma visual ao usuário. Em seu desenvolvimento devem ser aplicados apenas recursos ligados ao front-end.
![[Pasted image 20221214010942.png]]

# Como esses componentes se interagem?
Tudo começa com a interação do usuário na camada View. A partir daí o controlador pega essa informações e envia para o Model que fica responsável por avaliar aqueles dados e transmitir uma resposta.   

O controlador recebe essas respostas e envia uma notificação de validação daquela informação para a camada view, fazendo com a mesma apresente o resultado de maneira gráfica e visual.  

Todo esse processo leva em consideração as regras de negócio aplicadas na construção de todo projeto.

# Por que usar MVC?
-   **Segurança**: O *controller* funciona como uma espécie de *filtro* capaz de impedir que qualquer *dado incorreto* chegue até a camada modelo. 
-   **Organização**: Esse método de programação permite que um novo desenvolvedor tenha muito mais *facilidade em entender* o que foi construído, assim como os erros se tornam mais fácil de serem encontrados e corrigidos.
-   **Eficiência**: Como a arquitetura de software é dividida em 3 componentes , sua aplicação fica muito mais leve, permitindo que vários desenvolvedores trabalhem no projeto de forma independente.
-   **Tempo**: Com a dinâmica facilitada pela colaboração entre os profissionais de desenvolvimento, o projeto pode ser concluído com muito mais rapidez, tornando o projeto escalável.  
-   **Transformação**: As mudanças que forem necessárias também são mais fluidas, já que não será essencial trabalhar nas regras de negócio e correção de bugs.

Além disso, um software precisa ter estabilidade no processo de comunicação entre seus elementos de maneira dinâmica para que a experiência do usuário não seja prejudicada.

## Como implementar um projeto MVC?
Essa arquitetura de software pode ser utilizada no programação web, mobile ou desktop e ela pode ser implementada através de diversos frameworks de Java como o [Spring MVC](https://docs.spring.io/spring/docs/current/spring-framework-reference/web.html#mvc) ou [Play Framework](https://www.playframework.com/) ou também em frameworks mais modernos de Ruby como Ruby on Rails.  

Cada um tem suas diferenças, portanto o ideal é que o programador entenda os recursos disponíveis no processo de desenvolvimento e adote o mais adequado a sua necessidade.   

# Conclusão 
O MVC funciona como um padrão de arquitetura de software que melhora a conexão entre as camadas de dados, lógica de negócio e interação com usuário. Através da sua divisão em três componentes, o processo de programação se torna algo mais simples e dinâmico. Por padrão existem a camada Model, Controller e View que deram origem a sigla dessa arquitetura de software mais utilizado entre os desenvolvedores.    
  

  