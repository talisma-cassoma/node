# node
 
 transformando variaveis em modulos<br>
 exportando modluoss<br> 
 requisitando os modulos em outro ficheiro<br>
* protocolo HTTP**
criando um servidor http com node
```
var http = require('http') // requitamos o modulo http que ja vem par default no node

http.createServer().listen(8081) // abrir um servidor e colocar na porta 
console.log('servidor rodando mano')//verifficando
```
 * EXPRESS
npm install epress --save //
o express é um framework que serve 

* ROTAS 
* PARAMETROS
* NODEMON
npm install nodemon -g //instala o nodemon globalmente na tua maquina 
npm install nodemon // instala o nodemon somente na pasta em questao
o nodemon é modulo do node que serve pra reiniar o teu sevidor a cada alteracao salva  
