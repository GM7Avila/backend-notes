# Dev Kit, Runtime Environment e Virtual Machine

## Fluxo 
1. Escrevemos o *código-fonte* no arquivo com a extensão ``.java``;
2. Utiliza o *JDK* para compilar o seu código-fonte e gerar o *arquivo bytecode* (arquivo com a extensão ``.class``);
3. Para executar o seu programa, a *JVM* lê o arquivo compilado (.class) e as bibliotecas padrões do Java que estão no *JRE*.
![[Pasted image 20221227220507.png]]

## Java Virtual Machine (JVM)
- Multiplataforma;
- JVM executa programa *bytecode*.
- ocê não precisa programar na linguagem java, para executar um programa na JVM. Você pode criar seus programas em outras linguagens que também geram arquivos _bytecode_. Existem várias delas, alguns exemplos são: Scala, JRuby, Jython, Clojure, Groovy, etc..
- Responsável por executar o bytecode (.class);

## Java Runtime Environment (JRE)
- Ambiente de Execução do Java que fornece as bibliotecas padrões do Java para o JDK compilar o seu código e para JVM executar o seu programa.
- Possui a JVM, Bibliotes Básicas (API Java) e Ferramentas de Execução (exemplo: ``java.exe``).

## Java Developer Kit (JDK)
- Kit de Desenvolvimento Java;
- Fornece as ferramentas necessárias para escrever programas Java que podem ser executados pela JVM e JRE;
- JDK é um pacote de ferramentas para desenvovlver software baseado em Java.
- Compilador, depurador e o prório JRE para execução dos programas.

