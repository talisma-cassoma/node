# backend com node

# MODULOS em js🤔 
 
   transformando variaveis em modulos podemos reaproveitar o codigo requisitando os modulos em outro ficheiro<br>
   exemplo da calculadora
  <h2>Modulos nativos do node</h2>
    
   * os, 
    
   * fs, 
    
   * path, 
    
   * url, 
    
   * events, 
    
   * http 📡
    <h3>protocolo HTTP</h3>
    👨‍💻 criando um servidor http com node<br>
     ```js
           var http = require('http') // requisitamos o modulo http que ja vem par default no node
           http.createServer().listen(8081) // abrir um servidor e colocar na porta 
           console.log('servidor rodando mano')//verifficando
     ```


 # EXPRESS 🛒
 
 (servidor)
      
      npm install epress --save 
      
o express é um framework que serve para criar aplicaçōes web baseadas no Node.js.<br>
:: entre elas criar servidores web 
   * <h2>construindo rotas com express </h2>
    

   * PARAMETROS
   
   ao construir rotas podemos adicionar varias as aos diretorios
   
# NODEMON 🔁
   
   o nodemon é modulo do node que serve pra reinciar automaticamente o teu servidor a cada alteracao feita no projecto

``` npm install nodemon -g``` instala o nodemon globalmente na tua maquina
 
```npm install nodemon``` instala o nodemon somente na pasta em questao 

 salva <br>

# SEQUELIZE 🎲
sequelize é um ORM serve para criar bd mysql, sqlite ...pelo node <br>

```npm install --save sequelize```

```npm install --save mysql2``` para usar bd mysql

## criando um servidor com express
```js
const express = require("express")

//rotas 
express.get('/', function(req, res){ 
    res.sendFile(__dirname + "/public/index.html")
});
//porta do servidor 
express.listen(8080, function(){
    console.log("servidor rodando! vamos fazer nosso app")
});
```

## vs 

## Criar um servidor com modulo nativo http 
```js
const htpp = require('http')// modulo criar sevidor
const fs = require('fs')
const path = require('path')

htpp.createServer((req, res)=>{
    if(req.url == '/'){
        fs.readFile(path.join(__dirname, '/public', 'index.html'), (error, content)=>{
            if(error) throw error

            res.end(content)
        })
    } 
}).listen(8080,()=>{ console.log('servidor rodando! vamos fazer nosso app')})
```
## ligando o node com o banco 

👨‍💻

```js
const sequelize = new Sequelize('nome do DB', 'usuario', 'palavra passe do sevidor', {
    host: "localhost", //o sitio onde espedado(no meu pc ) 
    dialect: "mysql" //o tipo de DB
})
```

<h3>JSON</h3>

# HANDLEBARS ✨ 

(power to html)🥸

```npm install --save express-handlebars``` uma versao especifica do handlebars para o express <br>
o handlebars serve para tornar a paginas html dinamicas
* <h2>construindo rotas com express usando ficheuros dinámicos handlebars </h2>
