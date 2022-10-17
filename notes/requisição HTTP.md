# Verbos HTTP

## GET
#get
- Os parâmetros são passados no cabeçalho da requisição (podem ser vitos pela URL);
- Tamanho máximo de dados que podem ser enviados como requisição na URL: 225 caracteres;
- Utilizamos para **obter dados** de um determinado recurso, como em um **formulario de busca** ou em uma **listagem de todos os produtos cadastrados**.
  ![[Pasted image 20221016123900.png]]
## POST
#post 
- Os parâmetros são escondidos, enviados no corpo da requisição HTTP, escondendo eles da URL.
![[Pasted image 20221016123910.png]]
- dessa forma, o POST envia os parâmetros no corpo da requisição.
![[Pasted image 20221016123934.png]]
- usando o protocolo HTTPS, esses dados são criptografados;
- Podemos enviar informações maiores(em comparação com o GET), como imagens, etc;
- Utilizamos para **enviar informações para serem processadas**, como por exemplo, criar algum recurso como um produto, cliente, etc.
---
[[HTTP status code]]
