[Documentação do Ionic](http://ionicframework.com/docs/)

## Curso de Férias de Desenvolvimento Mobile
![Node 6](https://img.shields.io/badge/node-6.x.x-green.svg)
![NPM 3](https://img.shields.io/badge/npm-3.x.x-orange.svg)
![Angular 4](https://img.shields.io/badge/angular-4.x.x-red.svg)
![Ionic 3](https://img.shields.io/badge/ionic-3.x.x-blue.svg)

### Inicialização do projeto:

```bash
$ sudo npm install -g ionic cordova
$ ionic start projectName sidemenu
```

Then, to run it, cd into `projectName` and run:

```bash
$ ionic lab or ionic start to run into your brownser
$ ionic cordova platform add <ios | android>
$ ionic cordova run <ios | android>
```

### Introdução

* O que é um Framework (JavaScript)?

* O que é o Angular (E TypeScript)?
 
Antes de entender o que é Angular é preciso entender o que seja o TypeScript, que foi adotado desde a versão 2 do Framework.

O TypeScript possibilita que você escreva código JavaScript na forma que foi acostumado quando aprendeu Orientação a Objetos. Assim é possível criar métodos que retornem um valor com tipo definido. 

No final, TypeScript pega o seu código cheio de classes e transforma em JavaScript puro, no qual o browser vai compreender. No próprio site é definido que o TypeScript compila para JavaScript, o que é um termo tecnicamente errado – mas cada vez mais aceito, dado que aquele código “malucão” em JavaScript pode ser encarado como código de máquina.

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

![Arquitetura](https://www.hygorzorak.com/downloads/arquitetura_angular.png)

No Angular tudo é centrado no Component. Conforme você pode analisar mais ao centro do diagrama o componente angular é definido por meio de um Metadata​, que nada mais é que aquele objeto {} definido dentro do decorador @Component​. Este mesmo componente possui um Template​ e a comunicação de dados entre a parte lógica do Componente e o Template é realizada por meio de Property Bindings, ou Ligação por meio de propriedades.

##### Diretivas

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

##### Services

Services são basicamente classes Singleton, que é um padrão de software (do inglês Design Pattern), garantindo a instância única de uma classe, para assim ter um ponto global de acesso ao objeto. 

Basicamente, o service serve para “guardar a lógica do negócio”, consumindo os end-points da API e retornando ou enviando os dados de acordo com a requisição vinda do componente.

Para criar um serviço no Angular, basta criar uma Classe e decorá-la com o decorador @Injectable(), como por exemplo:

``` typescript
@Injectable()
export class MyService() {}
```

A injeção de Service dentro do Componente é feito por meio do 

`import {MyService} from ‘../../providers/myservice.service’`
  
 e pela aplicação do Service no construtor: 
 
 `constructor(private service: MyService){}`
 
##### Node

Em linhas gerais o node.js é uma plataforma escrita em javascript feita para rodar código javascript. Em uma simples analogia, o Node.js seria a soma do PHP+Apache. é importante frisar que o Node.js roda código javascript apenas no lado do servidor.
Utilizaremos o node aqui não para criar API's ou renderizar HTML no lado do servidor. Iremos utilizar o node como ferramenta principal para desenvolvimento. Por meio dele vamos instalar a linha de comando do angular e executar nossa aplicação localmente.

É possível instalar via mvn também.

[Link para download](https://nodejs.org/en/download/)

##### NPM

NPM​ vem de Node Package Manager ou gerenciador de pacotes do Node. O NPM é distribuído juntamente com a plataforma do node e é por meio dele que iremos instalar todas nossas dependências de desenvolvimento e bibliotecas.

##### Angular CLI

Uma vez instalado o Node/NPM, precisamos instalar a interface de linha de comando do Angular. Agora sim vamos começar de fato a trabalhar com node, pelo gerenciador de pacotes npm

  `npm i -g @angular/cli@latest`

* O que é SPA e como se comporta?
* O que é o Ionic?
* Desenvolvimento Híbrido X Desenvolvimento Nativo

### Iniciando um projeto Ionic
* Preparação do ambiente
* Instalação 

 _(Step-01 - Instalação)_

* Como utilizar a documentação a seu favor
* Como trabalhar com páginas e componentes 

 _(Step-01 - Criação do cabeçalho)_

* Estilização
* Rotas e navegação 

_(Step-02)_

### Conectando ao back-end
* O que é REST?
* O que é API?
* Como fazer uma aplicação “consumir” uma APi REST?

 _(Step-03)_

### Tópicos avançados
* Como estruturar as pastas da minha aplicação?
* Boas práticas no uso de web-components e flexbox
* Utilizando recursos nativos do dispositivo

_(Step-04, Step-05 e Step-06)_


