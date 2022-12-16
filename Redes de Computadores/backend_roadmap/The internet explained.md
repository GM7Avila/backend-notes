# The internet explained
Um resumo pessoal do conteúdo dos seguintes artigos/sites:
- https://www.vox.com/2014/6/16/18076282/the-internet
- http://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm

## O que é a internet?
- Rede descentralizada de redes de computadores mundial;

## Onde está a internet?
- **Datacenters** - salas de servidores que arazenam os dados do usuário e hospedam aplicativos online. 
- **Backbone** - redes de longa distância - principalmente em cabos de fibra óptica, que transportam dados entre datacenters e consumidores. Os provedores de backbone frequentemente conectam suas redes em *pontos de troca de internet*, geralmente localizados em grandes cidades.
- **Last mile** - é a parte da internet que conecta residências e pequenas empresas à internet. Também inclui torres que de sinal de internet.

## Internet sem fio
- Redes Wi-Fi - espectro não licenciado: frequências eletromagnéticas que estão disponíveis para qualquer pessoa gratuitamente, com limites estritos de potência para evitar conflitos com redes vizinhas.
- Redes celulares - dividias em células com alcances determiandos geografiacmente. Cada célula possui uma torre em seu centro que fornece serviços aos dispositivos. A rede é transferida autoamticamente ao trocar de célula. Utilizam espectro licenciado de alta potência.

## Núvem
- Utilização da internet para acessar o arquivo na nuvem;
- Servidores de Data Center -> Google Drive, One Drive, Hotmail, etc.

## IPv4 e IPv6
- O IPv4, padrão atual da internet, permite cerca de 4 bilhões de endereços IP (hoje em dia esta quantidade de IP é considerada pequena e está quase esgotada);
- Assim os engenhieros da internet desenvolveram um novo padrão chamado IPv6, permitindo um número de 39 dígitos para IPs.

## Endereço IP
- Endereço de Protoclo da Internet (Internet Protocol) são os endereços dos computadores na rede.
- O departamento da ICANN conhecido como Internet Assigned Numbers Authority é responsável pela distribuição de endereçõs IP.

- Cada copmputador/aparelho conectado à internet dev possuis eu endereço exclusivo no formato nnn.nnn.nnn.nnn (ipv4), onde nnn deve ser um número de 0 a 255 (como explicado em [[08. Endereço IP]])
![[ruswp_diag1.gif]]
- Quando conectamos na internet por meio de um provedor de serviços de internet (ISP), geralmente é recebido um endereço de IP temporário durante a sessão de discagem.
- Caso nos conectamos a partir de uma LAN, o coputador pode ter um enedereço IP permanente ou pode obeter um endereço temporário de um servidor DHCP (Dynamic Host Configuration Protocol).

> **Check It Out - O Programa Ping**
> Se você estiver usando o Microsoft Windows ou um tipo de Unix e tiver uma conexão com a Internet, existe um programa útil para verificar se um computador na Internet está ativo. Chama-se **ping** , provavelmente devido ao som produzido por sistemas de sonar submarinos mais antigos. 1 Se estiver usando o Windows, inicie uma janela de prompt de comando. Se você estiver usando um tipo de Unix, acesse um prompt de comando. Digite ping www.yahoo.com. O programa ping enviará um 'ping' (na verdade, uma mensagem de solicitação de eco ICMP (Internet Control Message Protocol)) para o computador nomeado. O computador pingado responderá com uma resposta. O programa ping contará o tempo expirado até que a resposta volte (se ela voltar). Além disso, se você inserir um nome de domínio (ou seja, www.yahoo.com) em vez de um endereço IP, o ping resolverá o nome do domínio e exibirá o endereço IP do computador. Mais informações sobre nomes de domínio e resolução de endereço posteriormente.

## World Wide Web
- Publicações na internet - plataforma aberta;
- Suporta hiperlinks (navegação em documentos);
- Aplicativos baseados em Web (desenvolvimento web);
- *World Wide Web Consortium (W3C)* - organização oficial de padrões web;
- Broswer web (navegadores) - renderizadores de páginas web.
- Web != internet; Web é um serviço/aplicação da internet.
- 

## SSL
- *Secure Sockets Layer*
- Família de tecnologias de criptografia responsável pela privacidade dos usuários da web.
- Indicado pelo cadeado na URL.
![[Pasted image 20221216174819.png]]

## DNS (Domain Name System)
- O DNS é o sistema de domínio dos websites (endereços referentes ao IP do site).
- Sistema hierárquico (subdomínios, rotas);

## Pacotes
- Package é a unidade básica de informação;
- A informação é dividida em pacotes dirigíveis;
- Um pacote tem duas partes: 
	- Cabeçalho - contendo informações que ajudam o pacote chegar no destino, incluindo o comprimento do pacote, origem e destino.
	- Dados reais - um pacote pode conter até 64 kilobytes de dados (aproximadamente 20 páginas de texto simples).
- Caso um roteador de internet esteja congestionado, ele descarta os pacotes para melhorar seu desempenho.
- É responsabilidade do computador remetente detectar que um pacote não chegou ao seu destino e solicitar outra cópia.