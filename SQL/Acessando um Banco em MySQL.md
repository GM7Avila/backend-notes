# Comandos Básicos de MySQL
## Acessando MySQL pelo CMD
![[Pasted image 20220921164139.png]]
``mysql -h localhost -u root -p`` + senha

## Operações nos DATABASES
- Mostrar os bancos de dados: ``SHOW DATABASES;``
- Criando um banco de dados: ``USE nomeDoBanco;``
- Acessando as tabelas do banco: ``SHOW TABLES;``

## Tabelas SQL
- tabela são definidas conforme os objetos;
- definidas no arquivo;
>nome -> coluna do tipo **texto/string/char**
>email -> coluna do tipo **texto/string/char**
>idade -> coluna do tipo **int**

- Criando Tabelas 
```SQL
CREATE TABLE usuarios{
	nome VARCHAR(50),
	email VARCHAR(100),
	idade INT
};

INSERT INTO usuarios(nome, email, idade) VALUES{
	"Guilherme Avila"
	"email@teste"
	21
};

INSERT INTO usuarios(nome, email, idade) VALUES{
	"Lucia"
	"email2@teste"
	53
};

INSERT INTO usuarios(nome, email, idade) VALUES{
	"Julia",
	"email3@teste",
	19
};

```

### Modificando e Usando Tabelas

#### Consultando 
- ``SELECT * FROM nomeDaTabela`` -> mostrar elementos da tabela
- ``SELECT * FROM nomeDaTabela WHERE`` **+ condição**
	- ``SELECT * FROM usuarios WHERE idade = 19;
	- ``SELECT * FROM usuarios WHERE nome = "Lucia";
	- ``SELECT * FROM usuarios WHERE idade >= 18;

![[Pasted image 20220921165355.png]]

#### Deletando Elementos
- ``DELETE FROM usuarios`` -> apaga tudo de usuarios
- ``DELETE FROM usuarios WHERE`` + condição
	- ``DELETE FROM usuarios WHERE name = "Victor";

#### Update de Elementos da Tabela
- ``UPDATE usuarios SET nome = "NewName" WHERE name = "OldName"

![[Pasted image 20220921165818.png]]