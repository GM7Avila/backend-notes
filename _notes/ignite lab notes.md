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

## S.O.L.I.D.
- Princípios de boa prática na Programação Orientada a Objetos;
- https://youtu.be/mkx0CdWiPRA
- **S**: *Single Responsability Principle (SRP)*
	
	Princípio da responsabilidade única: uma classe deve ter somente um único motivo para mudar. Classes devem ser responsabilizadas por um único assunto (evitar God Class);
	
```java
class Order {
	public function calculateTotalSum(){}
	public function getItems(){}
	public function getItemCount(){}
	public function addItems($item){}
	public function deleteItem($item){}
	public function printOrder(){}
	public function showOrder(){}
	public function load(){}
	public function save(){}
	public function update(){}
	public function delete(){}
}
```
	
```java
class Order{
	public function calculateTotalSum(){}
	public function getItems(){}
	public function getItemCount(){}
	public function addItems($item){}
	public function deleteItem($item){}
}

class OrderRepository{
	public function load(){}
	public function save(){}
	public function update(){}
	public function delete(){}
}

class OrderView {
	public function printOrder(){}
	public function showOrder(){}
}
```
	
- **O**: *Open-Closed Principle (OCP)*
	Objetos ou entidades devem estar abertos para extensão, mas fechados para modificação. Quando um novo comportamento e recurso precisam ser adicionados no software, devemos extender ao invés de alterar o código fonte original.
	
	Separe o comportamento extensível por trás de uma interface e inverta as dependências;
	
	Devemos abstrair o contexto em uma interface, se as abstrações estão bem definidas, elas estão abertas para serem extendidas.
	
```java
class ContratoCLT{
	public function salario(){}
}

class Estagio{
	public function bolsaAuxilio(){}
}

class FolhaDePagamento{
	protected $saldo;
	
	public function calcular ($contrato){
		if ($contrato instaceof ContratoClt){
			$this->saldo = $contrato->salario();
		} else if ($contrato instaceof Estagio){
			$this->saldo = $contrato->bolsaAuxilio();
		}
	}
}
```
	
```java
interface Remunreval {
	public function remuneracao();
}

class ContratoCLT implements Remuneravel{
	public function remuneracao(){}
}

class ContratoPJ implements Remuneravel{
	public function remuneracao(){}
}

class Estagio implements Remuneravel{
	public function remuneracao(){}
}

class FolhaDePagamento{
	protected $saldo;
	
	public function calcular ( Remuneravel $contrato ){
		$this->saldo = $contrato -> remuneracao();
	}
}


```
	
- **L**: *Liskov Substitution Principle*
	Uma classe derivável, deve ser substituída por sua classe base. 
	Se *S* é um subtipo de *T*, então os objetos do tipo *T* podem ser substituídos pelos objetos do tipo *S*, sem que seja necessário alterar as propriedades desse programa. 
	
	Utilizar o polimorfismo com mais confiança;
	
- **I**: *Interface Segregation Principle*
	Uma classe *não deve* ser forçada a implementar interfaces que não serão utilizadas. Devemos criar interfaces mais específicas do que ter uma única interface genérica.
	
```java
interface Aves {
	public function setLocalizacao($longitude, $latitude);
	public function setAltitude($latitude);
	public function renderizar();
}

class Papagaio implements Aves {
	public function setLocalizacao($longitude, $latitude){}
	public function setAltitude($altitude){}
	public function renderizar(){}
}

class Pinguim implements Aves {
	public function setLocalizacao($longitude, $latitude){}
	public function setAltitude($altitude){} //pinguim não possui altitude
	public function renderizar(){}
}
```

```java
interface Aves{
	public function setLocalizacao($longitudem, $latitude){}
	public function renderizar();
}

interface AvesQueVoam extends Aves { 
	public function setAltitude($altitude);
}

class Papagaio implements AvesQueVoam { //segregação de interfaces
	public function setLocalizacao($longitude, $latitude){}
	public function setAltitude ($altitude){}
	public function renderizar(){}
}

class Pinguim implements Aves {
	public function setLocalizacao($longitude, $latitude){}
	public function renderizar(){}
}

```
	
- **D**: *Dependency Inversion Principle*
	Princípio da Inversão de Dependência -> devemos depender de **abstrações** e não de implementações.
	
	Desaclopamento de código.
	
	Módulos de alto nível não devem depender de módulos de baixo nível, ambos devem depender de abstrações.
	
	Abstrações não devem depender de detalhes, detalhes devem depender de abstrações.
	
```java
use MySQLConnection;

class PasswordReminder {
	private $dbConnection;
	
	public function __construct(){ 
		$this -> dbConnection = new MySQLConnection(); //instância de MySQLConnection
		//alto nível de acloplamento
	}
}
```

para recuperar a senha, a classe PasswordReminder precissa conectar ao banco de dados, e para isso ela cria uma instância da classe MySQLConnection em seu método construtor; 

nesse código temos um alto nível de aclopamento, e não desejamos isso (a classe PasswordReminder tem a responsabilidade de criar uma instancia da classe MySQLConnection)!

se tivessemos que reaproveitar essa classe em outro sistema, teríamos *obrigatoriamente* que levar a classe MySQLConnection junto, ou seja, **forte aclopamento**.

resolvendo este problema:
```java
interface DBConnectionInterface {
	public function connect();
}

class MySQLConnection implements DBConnectioninterface {
	public functiion connect() {}
}
class OracleConnection implmenets DBConnectionInterface {
	public function connect() {}
}
class SQLServer implements DBConenction interface {
	public function connect() {}
}

class PasswordRemidner
	private $dbConnection;
	
	public function __construct(DBConnectionInterface $dbConnection) {
		$this -> dbConnection = $dbConnection;
	}
```


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
- automatizar a inserção das dependências no momento em que as classes foram instanciadas.
- ex.: a partir do momento que o controller solicita uma dependência do tipo AppService, o Nest automaticamente detecta, que dentro do módulo existe a classe AppService, e esta classe precisa obrigatoriamente ter o decorator ``@Injectable()``

---
checkpoint
aula 01: *38:00*
https://app.rocketseat.com.br/event/ignite-lab-04/nodejs/aula-1?utm_source=Active_Campaing&utm_medium=leads_cadastrados&utm_campaign=event-ignite-lab04&utm_term=email&utm_content=automacao-incricao