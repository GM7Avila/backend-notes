# Protocolo HTTP
#cliente-servidor
- protocolo que permite a emissão e recebimento de dados
- cliente-servidor

## Modulo HTTP original do Node
`http.createServer().listen();`
```js
var http = require('http');

http.createServer(function(req,res){
	res.end("Hello World!");
}).listen(8081);

console.log("O servidor está rodando.");
//confira em localhost:8081
```
- função de #callback → ``function(req,res){ }``
---
a cada alteração é necessário fechar a aplicação/servidor e rodar novamente...

para solucionar esse problema utilizamos o [[Nodemon]].