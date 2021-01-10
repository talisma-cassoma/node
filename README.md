# backend com node

* entendendo os MODULOS em js🤔 
 
 transformando variaveis em modulos podemos reaproveitar o codigo requisitando os modulos em outro ficheiro<br>
 exemplo da calculadora

# protocolo HTTP
👨‍💻 criando um servidor http com node<br>
```
var http = require('http') // requitamos o modulo http que ja vem par default no node

http.createServer().listen(8081) // abrir um servidor e colocar na porta 
console.log('servidor rodando mano')//verifficando
```
 # EXPRESS
      
      npm install epress --save 
      
o express é um framework que serve para criar applicacoes web baseadas no Node.js2. 
C'est de fait le framework standard pour le développement de serveur en Node.js

   * ROTAS
   
   construindo rotas com express 

   * PARAMETROS
   
   ao construir rotas podemos adicionar varias as aos diretorios
   
# NODEMON

```npm install nodemon -g ```instala o nodemon globalmente na tua maquina
 
```npm install nodemon ``` instala o nodemon somente na pasta em questao 

o nodemon é modulo do node que serve pra reiniar o teu sevidor a cada alteracao salva <br>

# SEQUELIZE 
sequelize é um ORM serve para criar bd mysql, sqlite ...pelo node <br>

```npm install --save sequelize```

```npm install --save mysql2 //para usar bd mysql```

const sequelize = new Sequelize('nome do DB', 'usuario', 'palavra passe do sevidor', {
    host: "localhost", //o sitio onde espedado(no meu pc ) 
    dialect: "mysql" //o tipo de DB 
})
# HANDLEBARS 

```npm install --save express-handlebars``` uma versao especifica do handlebars para o express 
o handlebars serve para tornar a paginas html dinamicas

