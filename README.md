[Documentação do Ionic](http://ionicframework.com/docs/)

## Curso de Férias de Desenvolvimento Mobile
![Node 6](https://img.shields.io/badge/node-6.x.x-green.svg)
![NPM 3](https://img.shields.io/badge/npm-3.x.x-orange.svg)
![Angular 4](https://img.shields.io/badge/angular-4.x.x-red.svg)
![Ionic 3](https://img.shields.io/badge/ionic-3.x.x-blue.svg)

### Inicialização do projeto:

```bash
<sudo> npm install -g ionic cordova
ionic start projectName sidemenu
```

Then, to run it, cd into `projectName` and run:

```bash
ionic lab or ionic start to run into your brownser
ionic cordova platform add <ios | android>
ionic cordova run <ios | android>
```

### Introdução

* **O que é um Framework (JavaScript)?**

  Um framework para aplicações web é um framework de software designado para suportar o desenvolvimento de sites web dinâmicos, aplicações Web e serviços Web. O framework destina-se a aliviar a sobrecarga associada a atividades comuns realizadas em desenvolvimento Web. Por exemplo, muitos frameworks fornecem bibliotecas para acesso à banco de dados, frameworks de modelagem e gerenciamento de sessão, e geralmente promovem a reutilização de código.

  Os frameworks também trouxeram o uso de padrões de desenvolvimento, aumentando o "poder" de uma aplicação do lado cliente, especialmente quando falamos de SPA (Single Page Application), onde é possível tratar o Front-End e o Back-End de forma quase independente.

* **O que é SPA e como se comporta?**
  
  Como conceito mais básico e simplista do Single Page Application (SPA), podemos dizer que trata-se de uma aplicação que não faz refresh no navegador ao mudar de página. 
  
  O SPA é uma tecnologia denominada de Client-Side, ou seja, todos os processos estão sendo executados no lado do cliente, ou seja no navegador do usuário. (Com exceção de alguns processos realizados com outras tecnologias, como o React, que permite renderizar no lado servidor)
  
  A comunicação com o back-end se dá através de chamadas Ajax para os end-points específicos de uma API, e é exatamente nesse momento que as aplicações SPA mostram todo o seu brilho, pois uma aplicação SPA bem feita é agnóstica ao back-end, não sabendo e não se importando se a aplicação foi feita em Node, PHP, Java, Ruby, Python, Go, Elixir, ou qualquer outra linguagem. 
  
  O router é uma peça importantíssima no modelo de desenvolvimento de SPAs. É ele que define/constrói a tela para o usuário, permitindo que, mesmo após um refresh, a página volte ao seu estado anterior ou a um estado próximo disso É muito comum salvar informações localmente no navegador do usuário (O desenvolvimento mobile híbrido segue uma lógica parecida). Em geral é armazenado um token ou qualquer informação que possa identificar o usuário e sua máquina, fazendo do localStorage. 

* **O que é o Angular (E TypeScript)?**
 
  Antes de entender o que é Angular é preciso entender o que seja o TypeScript, que foi adotado desde a versão 2 do Framework.
  
  O TypeScript possibilita que você escreva código JavaScript na forma que foi acostumado quando aprendeu Orientação a Objetos. Assim é possível criar métodos que retornem um valor com tipo definido. 
  
  No final, TypeScript pega o seu código cheio de classes e transforma em JavaScript puro, no qual o browser vai compreender. No próprio site é definido que o TypeScript compila para JavaScript, o que é um termo **tecnicamente errado** – mas cada vez mais aceito, dado que aquele código “malucão” em JavaScript pode ser encarado como código de máquina.
  
  Agora voltando para as aplicações Angular, elas são feitas a partir de um conjunto de web components. Um web componente é a combinação de estilo CSS + template HTML + classe javascript que irá dizer ao Angular como controlar uma parte da aplicação.
  
  Além de componentes, no Angular possuímos uma série de bibliotecas (Classes) que resolvem cada uma um problema específico.
  
  Um pequeno exemplo de um componente:
  
  ``` typescript
  import {Component} from '@angular/core'
  @Component({
    selector: 'my-app',
    template: '<h1>Hello World!</h1>
  })
  export class AppComponent {
    name = 'MATERA Systems'
  }
  ```
  
  Analisando o código acima, percebemos alguns pontos importantes. Primeiro, nós temos a importação da classe Component do núcleo do Angular, o que nos permite criar componentes utilizando o decorador @Component.
  
  Decoradores de componentes sempre vem escrito acima da declaração da classe do seu componente e servem para “dizer” ao Angular como este componente deve trabalhar, alguns decoradores são:
  
  * **Selector**: Irá informar ao Angular qual nome deverá utilizar na tag HTML
  * **Template**: Irá informar ao Angular qual o template de View que irá utilizar, podendo importar um arquivo .html ou usando o template no próprio arquivo TypeScript, utilizando templates literais com `<div></div>`, interpolando as variáveis da mesmo forma que faria no arquivo HTML, com {{variavel}}
  
  Para o Angular, assim como o falecido AngularJS, é muito importante a importação dos módulos e componentes que você irá fazer uso. Como convenção, você tem os arquivos main.ts, app.module.ts e o app.routes.ts, dividindo a responsabilidade da sua aplicação.
  
  O objetivo do app.module é basicamente importar todos os recursos que a aplicação irá utilizar e defini-las em um módulo – onde possamos fazer o bootstrap – ou inicialização da nossa aplicação. Essa inicialização é feita pelo main.ts, que é o core da aplicação chamado no index.html.
  
  Entendendo o que seja o Angular e como ele se relaciona com os Componentes, podemos passar a pensar na sua Arquitetura:
  
  ![Arquitetura](https://angular.io/generated/images/guide/architecture/overview2.png)
  
  No Angular tudo é centrado no Component. Conforme você pode analisar mais ao centro do diagrama o componente angular é definido por meio de um Metadata​, que nada mais é que aquele objeto {} definido dentro do decorador @Component​. Este mesmo componente possui um Template​ e a comunicação de dados entre a parte lógica do Componente e o Template é realizada por meio de Property Bindings, ou Ligação por meio de propriedades.
  
  #### Diretivas
  
  O Angular também possui um recurso “mágico” para utilizar na camada de View, que são as Diretivas, que são atributos HTML especiais que aceitam um certo grau de lógica de programação na camada do template.
  
  Alguns exemplos são:
  
  * ***ngIf**: Remove ou adiciona um componente com base em uma expressão booleana
  
    `<section *ngIf="showSection==true"></section>`
    
  * ***ngFor**: Percorre um laço de repetição fazendo o bind (ligação) do conteúdo dentro da tag que carregar a diretiva
  
    `<li *​ngFor​="let item of list"></li>`
    
  * **[ngClass]**: Faz o bind (ligação) de classe no html, a chave do objeto representa o nome da classe a ser aplicada, o valor do objeto representa a condição ou expressão
  
    `<div [​ngClass​]​="{'is-active': pagina == 'home'}"></div>`
    
  * **[(ngModel)]**: O famoso *two-way data-binding*, ou ligação de dados em duas vias, além de controle de validação dos formulários
  
    `<input [(​ngModel​)]​="userName">`
  
  #### Services
  
  Services são basicamente classes _Singleton_, que é um padrão de software (do inglês _Design Pattern_), garantindo a instância única de uma classe, para assim ter um ponto global de acesso ao objeto. 
  
  Basicamente, o service serve para “guardar a lógica do negócio”, consumindo os end-points da API e retornando ou enviando os dados de acordo com a requisição vinda do componente.
  
  Para criar um serviço no Angular, basta criar uma Classe e decorá-la com o decorador `@Injectable()`, como por exemplo:
  
  ``` typescript
  @Injectable()
  export class MyService() {}
  ```
  
  A injeção de Service dentro do Componente é feito por meio do 
  
  `import {MyService} from ‘../../providers/myservice.service’`
    
   e pela aplicação do Service no construtor: 
   
   `constructor(private service: MyService){}`
   
  #### Node
  
  Em linhas gerais o node.js é uma plataforma escrita em javascript feita para rodar código javascript. Em uma simples analogia, o Node.js seria a soma do PHP+Apache. é importante frisar que o Node.js roda código javascript apenas no lado do servidor.
  Utilizaremos o node aqui não para criar API's ou renderizar HTML no lado do servidor. Iremos utilizar o node como ferramenta principal para desenvolvimento. Por meio dele vamos instalar a linha de comando do angular e executar nossa aplicação localmente.
  
  É possível instalar via mvn também.
  
  [Link para download](https://nodejs.org/en/download/)
  
  #### NPM
  
  NPM​ vem de Node Package Manager ou gerenciador de pacotes do Node. O NPM é distribuído juntamente com a plataforma do node e é por meio dele que iremos instalar todas nossas dependências de desenvolvimento e bibliotecas.
  
  #### Angular CLI
  
  Uma vez instalado o Node/NPM, precisamos instalar a interface de linha de comando do Angular. Agora sim vamos começar de fato a trabalhar com node, pelo gerenciador de pacotes npm
  
    `npm i -g @angular/cli@latest`

* **Desenvolvimento Híbrido X Desenvolvimento Nativo**

  * **Nativo**

    O app nativo é desenvolvido para utilização em uma plataforma específica, como iOS, utilizando Objective-C e Swift, ou Android, utilizando Java e atualmente Kotlin. Dessa forma, o aplicativo nativo é capaz de explorar todas as potencialidades da plataforma para a qual foi criado, consegue ter acesso a diversos recursos dos aparelhos como GPS, câmera, calendário, lista de contatos, entre outros. E nem sempre os aplicativos nativos precisam da internet para seu funcionamento. 
  
    O desenvolvimento do aplicativo nativo leva tempo e é mais trabalhoso, pois é necessário desenvolver um app para cada plataforma distinta, visto que cada uma delas requer diferentes códigos para o desenvolvimento dos aplicativos e mão de obra especializada. Tudo isso faz com que o custo do app nativo seja bem mais alto. Mas se o público-alvo do aplicativo é mais exigente, buscando rapidez e confiabilidade, o app nativo é, com certeza, a melhor opção para atender a essas necessidades.
  
  * **Híbrido**
  
    Uma aplicação híbrida é toda desenvolvido em HTML5, CSS3 e JavaScript mas também tem características do app nativo. Assim, esse modelo de app pode usar recursos tanto da internet quanto do dispositivo, mas ele não consegue acessar as funcionalidades do dispositivo de forma direta, sendo necessário o uso de um framework que funcione como intermediário entre o aplicativo e o dispositivo.
    
    O app híbrido tem a capacidade de ser executado em diferentes plataformas.  Isso é possível porque assim que ele é aberto pelo usuário, todo seu código roda dentro de algo chamado webview, um tipo especial de browser. O usuário não sabe que está dentro de um browser pois essa webview não contém componentes característicos de um, como a barra de endereço ou a barra de favoritos. 

    A webview contém apenas o necessário para que o HTML5, CSS3 e JavaScript funcione. Ela se comporta como a engine de renderização do app. Assim, o seu desenvolvimento acaba sendo mais rápido e também mais barato. A redução de tempo em comparação aos aplicativos nativos se deve à possibilidade de execução do aplicativo em diferentes plataformas. 

  A escolha entre o desenvolvimento de uma aplicação **Nativa** ou de uma aplicação **Híbrida** dis respeito a necessidades de negócio e arquiteturais muito específica, levando em conta pontos como segurança, desempenho e agilidade na entrega. Hoje existem soluções que seriam um misto desses dois recursos, que é o desenvolvimento mobile com **React Native**.

* **O que é o Apache Cordova?**

  Apache Cordova é um framework de desenvolvimento móvel de código aberto, que permite você usar tecnologías web como HTML5, CSS3 e JavaScript para o desenvolvimento multi-plataforma. Através do comando build do cordova, o app é empacotado dentro de um app nativo. O input do build são os arquivos HTML5, CSS3 e JavaScript além de alguns arquivos de configuração do seu projeto, e o output é um app nativo que, ao ser executado, abre a webview que vai renderizar o app.
  
  Os plugins são parte integrante do ecossistema Cordova. Eles fornecem uma interface para o Cordova e ligações para as APIs padrão do dispositivo, o que permite que você invoque recursos nativo do dispositivo a partir do JavaScript, como câmera, contatos, GPS, entre outros. Além dos plugins principais, existem vários plugins de terceiros que fornecem ligações adicionais para recursos que não estão necessariamente disponíveis em todas as plataformas.
  
  Você também pode desenvolver seus próprios plugins. Importante dizer que quando você cria um projeto Cordova, ele não possui nenhum plugin presente. Isso é feito para que o build final da sua app não fique sobrecarregado com plugins que você não vai precisar.

  Você pode ter acesso à documentação oficial [aqui](https://cordova.apache.org/docs/en/latest/guide/overview/index.html)

  Para poder utilizar o Cordova, é preciso se certificar de ter instalado:
  
  * Node e NPM
  * SDK do Android
  * xCode para o IOS

* **O que é o Ionic?**

  O Ionic Framework é uma SDK de código aberto que permite desenvolver aplicativos móveis híbridos usando tecnologías web como HTML5, CSS3 e JavaScript. Atualmente o Ionic requer Angular para funcionar em seu total potencial, e também precisa do Cordova para conseguir instalar e executar o app nos dispositivos.
  
  O Ionic possui uma interface de linha de comando, a CLI. Essa ferramenta fornece vários comandos úteis para o desenvolvedor, como instalar e atualizar o Ionic, buildar e executar o projeto, entre outros.
  
  Existem alguns componentes prontos em Ionic que são elementos de UI, e são reutilizáveis. Eles são compostos por HTML, CSS e às vezes JavaScript. Todo componente Ionic se adapta à plataforma em que o aplicativo está sendo executado.
  
  O Ionic possui uma excelente documentação e um fórum próprio bastante ativo onde perguntas são respondidas em até poucos dias
  
  Você pode ter acesso a documentação oficial [aqui](https://ionicframework.com/docs/intro/concepts/)
  
  Para iniciar um projeto Cordova Ionic é precis$ <sudo> npm install -g cordova ionico realizar uma instalação global
  
  `<sudo> npm install -g cordova ionic`

### Iniciando um projeto Ionic
* Preparação do ambiente (Caso esteja utilizando Linux, lembrar de colocar o comando _sudo_)
  
  1. Instale o Node/NPM do [site oficial](https://nodejs.org/en/)
  2. Rode `node -v` e depois `npm -v` para se certificar de estar com a versão certa
  3. Rode `npm i -g cordova ionic`
  
 _(Step-01 - Instalação)_
* Instalação 
  
  1. Para instalar é preciso rodar `ionic start projectName sidemenu`
  2. Após isso, acesse a pasta do projeto criado com `cd projectName`
  3. E então faça seu aplicativo rodar em seu browser com o comando `ionic lab` ou `ionic start`
  4. É uma boa prática já adicionar a plataforma para a qual está desenvolvendo. È possível fazer isso com o comando: `ionic cordova platform add <ios | android>`
  5. Após isso é possível rodar a aplicação em seu dispositivo, conectando ele no cabo, ativando a depuração e executando o comando: `ionic cordova run <ios | android>`


* **Como utilizar a documentação a seu favor**
  
  O Ionic tem uma vasta [documentação](https://ionicframework.com/docs/) onde é possível encontrar comandos de uso do Framework e também componentes já estruturados.
  
  Como o Ionic utiliza o Framewor Angular, é importante estar atendo à [documentação](https://angular.io/docs) do Angular, para fazer o desenvolvimento dos _**Components, Controllers e Services**_ de maneira apropriada 

* **Como trabalhar com páginas e componentes** 

  O site da [documentação](https://ionicframework.com/docs/components/#action-sheets) do Ionic tem um tópico específico tratando de como lidar com componentes na sua página, assim como o site oficial da [documentação](https://angular.io/guide/architecture#components) do Angular
  
  Mas, para o entendimento correto do que seja **_Component_** é preciso entender os valores do **_WebComponents_**.
  
  A ideia de criar componentes na web não é nova. A cada novo framework ou a cada novo plugin, tentamos fazer isso. O problema é que um componente só é um componente se ele pode ser reutilizado, diversas vezes, em qualquer lugar do projeto, sem sofrer alterações acidentais por códigos externos e também sem modificar outros elementos. É aí que entram os Web Components.
  
  Os Web Components são (por enquanto) um grupo de 5 especificações, que formam o guarda-chuva dos Web Components, são eles:

  1. Templates: definem pedaços de código que são totalmente inertes à página até que seu Javascript os ative.
  2. Decorators: aplicam os templates baseando-se em seletores para criar mudanças visuais ricas e comportamentos.
  3. Custom Elements: são elementos customizados, com nomes e scripts criados por você.
  4. Shadow DOM: é onde uma parte do código do seu elemento é encapsulada e escondida pelo browser, ou seja, não é visível no código normal do DOM, mas que monta todo seu componente “por baixo dos panos”.
  5. Imports: definem quais elementos customizados são empacotados e lidos como um recurso.

 _(Step-01 - Criação do cabeçalho)_

* Estilização

  O Ionic tem uma forma um tanto diferente de [estilizar](https://ionicframework.com/docs/theming/css-utilities/) os seus componentes, mesmo que aceite o uso de CSS puro ou de pré-processadores de CSS, como o uso do [SASS](https://ionicframework.com/docs/theming/sass-variables/).

* Rotas e navegação 

  No momento de pensar na navegação, temos que lembrar que estamos utilizando o Angular e que esse Framework [possui uma forma própria de realizar a navegação](https://angular.io/guide/router)

_(Step-02)_

### Conectando ao back-end
* O que é REST?

  O termo REST foi definido por Roy T. Fielding em sua tese de PhD. Roy foi um dos principais desenvolvedores de muitos dos protocolos Web essenciais, incluindo HTTP e URIs, e ele formalizou várias das idéias por trás deles nesse documento. Nesta dissertação, Roy primeiro define uma metodologia de falar sobre estilos arquiteturais — alto nível, padrões de abstração que expressam as principais ídeias por trás de uma abordagem arquitetural. Cada estilo arquitetural com um conjunto de regras que o define. Exemplos de estilos arquiteturais incluem “o estilo nulo” (que não possue regras), pipe e filter, cliente/servidor, objetos distrubuídos e REST.
  
  Se tudo isso soa um pouco abstrato pra você. Você está certo - REST em si é um estilo de alto nível que poderá ser implementado utilizando muitas tecnologias diferentes, e instanciado utilizando diferentes valores para suas propriedades abstratas.
  
  Uma roupagem do estilo REST é o HTTP, ou de forma um pouco mais abstrata: a arquitetura da Web em si. Pensando dessa forma, o HTTP "instancia" a interface uniforme do REST com uma interface especial, consistindo nos verbos HTTP.

  Comumente, REST é conhecido como um conjunto de princípios que definem como Web Standards, como HTTP e URIs, devem ser usados. A promessa é que se você aderir a princípios REST enquanto estiver desenhando sua aplicação, você terá um sistema que explora a arquitetura da Web em seu benefício. 
  
  Os cinco princípios fundamentais são os seguintes:
  
  1. Dê a todas as coisas um Identificador
  
      Use URIs para identificar tudo o que precisar ser identificado, especifique todos os recursos de "alto nível" que seu aplicativo oferece, se eles representam itens individuais, conjuntos de itens, objetos virtuais e físicos, ou resultados de computação.
  
  2. Vincule as coisas
  
      Use liks para referênciar coisas que possam ser identificadas (recursos) sempre que for possível. Hiperlinks são o que fazem a Web ser a Web.
      
  3. Utilize métodos padronizados
  
      Para que clientes possam interagir com seus recursos, eles devem implementar o protocolo de aplicação padrão (HTTP) corretamente, isto é, utilizar os métodos padrão: GET, PUT, POST e DELETE.
  
  4. Recursos com múltiplas representações
  
      Ofereça diversos formatos dos recursos para diferentes necessidades.
  
  5. Comunique sem estado
  
      Em outras palavras, um servidor não deveria guardar o estado da comunicação de qualquer um dos clientes que se comunique com ele além de uma única requisição. A razão mais óbvia para isso é escalabilidade - o número de clientes que podem interagir com o servidor seria consideravelmente impactado se fosse preciso manter o estado do cliente.

* O que é API?

  API é um conjunto de rotinas e padrões de programação para acesso a um aplicativo de software ou plataforma baseado na Web. A sigla API refere-se ao termo em inglês "Application Programming Interface" que significa em tradução para o português "Interface de Programação de Aplicativos".
  
  Através das APIs, os aplicativos podem se comunicar uns com os outros sem conhecimento ou intervenção dos usuários. Elas funcionam através da comunicação de diversos códigos, definindo comportamentos específicos de determinado objeto em uma interface. A API liga as diversas funções em um site de maneira que possam ser utilizadas em outras aplicações.

* Como fazer uma aplicação “consumir” uma APi REST?

  Um exemplo simples de api, é a API pública do [Pokeapi](https://pokeapi.co/), que é uma API pública para consumir dados de pokemons

## Links úteis

### Clients REST
* Postman - https://www.getpostman.com/
* Insomnia - https://insomnia.rest/

### CSS
SASS - https://sass-guidelin.es/pt/
Grid - http://getskeleton.com/#intro
Cores - https://coolors.co/

### Flexbox
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
https://tableless.com.br/flexbox-organizando-seu-layout/
Playground - http://the-echoplex.net/flexyboxes/

### ES6
Geral - https://medium.com/@matheusml/o-guia-do-es6-tudo-que-voc%C3%AA-precisa-saber-8c287876325f
Conversor ES6 para ES5 - http://es6-features.org/#Constants

### Test 
Jest - https://facebook.github.io/jest/
Mocha - https://mochajs.org/

### Angular
Indice de Components - https://devarchy.com/angular
Material Components - https://material.angular.io/components/categories


### Mobile
Desenvolvimento nativo com Angular - https://docs.nativescript.org/angular/tutorial/ng-chapter-0
Padrões - http://www.mobile-patterns.com/
Lista GitHub de coisas úteis - https://github.com/candelibas/awesome-ionic

### Geral
Ver aceitação nos browsers - https://caniuse.com/
Introdução ao GIT - http://rogerdudler.github.io/git-guide/index.pt_BR.html



