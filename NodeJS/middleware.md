# Middleware
- Funções de Middleware são funções que tem acesso ao *[[objeto]] de solictação* (ex.: `req`), o *objeto de resposta* (ex.: `res`), e a ==próxima função de middleware== no **ciclo** solicitação-resposta do aplicativo.
- A próxima função de middleware é comumente denotada por uma variável chamada ``next``.
- Funções de middleware podeme executar as seguintes tarefas:
  
    -  Executar qualquer código;
    -  Fazer mudanças nos **objetos de solicitação** e **resposta**;
    -  Encerrar o ciclo de solicitação-resposta;
    -  Chamar o próximo middleware na pilha.

--- 
>fonte: https://expressjs.com/pt-br/guide/writing-middleware.html#:~:text=Vis%C3%A3o%20Geral,por%20uma%20vari%C3%A1vel%20chamada%20next%20.

