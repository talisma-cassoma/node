# node
* como usar uma funcçao que está num outro documento?🤔

usando módulos:

ficheiro soma.js
  ``` var somar = function (a,b){
    return a+b
    }
    module.exports = somar // expeortando a nossa variavel soma transformando a em um modulo 
  ````
ficheiro subtracao.js
  ```
  var subtrair = function (a,b){
    return a-b
    }
    module.exports = subtrair
  ```
ficheiro divisao.js 
  ```
  var dividir = function (a,b){
    return a/b
    }
    module.exports = dividir
 ```
ficheiro multiplicacao.js
  ```
   var multplicar = function (a,b){
    return a*b
}
module.exports = multplicar
  ```
ficheiro calc.js 
  ```` 
 //vou carregar os modulos aqui 

 var somaFunc = require("./soma") //pegando o modulo do arquivo soma.js 
 var multFunc = require("./multiplicacao")
 var divFunc = require("../divisao")
 var subFunc = require("./subtracao")

 console.log(somaFunc(1,12))
 console.log(multFunc(20,2))
 console.log(subFunc(20,2))
 console.log(divFunc(20,2))
 ````

* transformando variaveis em modulos<br>
 exportando modluoss<br> 
 requisitando os modulos em outro ficheiro<br>

* protocolo HTTP**<br>
criando um servidor http com node<br>
```
var http = require('http') // requitamos o modulo http que ja vem par default no node

http.createServer().listen(8081) // abrir um servidor e colocar na porta 
console.log('servidor rodando mano')//verifficando
```
 * EXPRESS
npm install epress --save //
o express é um framework que serve 

* ROTAS <br>
* PARAMETROS<br>
* NODEMON<br>
npm install nodemon -g //instala o nodemon globalmente na tua maquina <br>
npm install nodemon // instala o nodemon somente na pasta em questao  <br>
o nodemon é modulo do node que serve pra reiniar o teu sevidor a cada alteracao salva <br>
* sequelize é um ORM serve para criar bd mysql, sqlite ...pelo node <br>
npm install --save sequelize <br>
npm install --save mysql2 //para usar bd mysql <br>

const sequelize = new Sequelize('nome do DB', 'usuario', 'palavra passe do sevidor', {
    host: "localhost", //o sitio onde espedado(no meu pc ) 
    dialect: "mysql" //o tipo de DB 
})
* handlebars <br>

npm install --save express-handlebars //uma versao especifica do handlebars<br>

