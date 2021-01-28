# backend com node

# <a href="https://github.com/talisma-cassoma/node/blob/main/express/express.md">MODULOS em js🤔</a> 
 
   transformando variaveis em modulos podemos reaproveitar o codigo requisitando os modulos em outro ficheiro<br>
   exemplo da <a href="https://github.com/talisma-cassoma/node/blob/main/express">calculadora</a>
 
 # EXPRESS 🛒
 
 (servidor)
      
      npm install epress --save 
      
o express é um framework que serve para criar aplicaçōes web baseadas no Node.js.<br>
:: entre elas criar servidores web 

# NODEMON 🔁
   
   o nodemon é modulo do node que serve pra reinciar automaticamente o teu servidor a cada alteracao feita no projecto

``` npm install nodemon -g``` instala o nodemon globalmente na tua maquina
 
```npm install nodemon``` instala o nodemon somente na pasta em questao 

 salva <br>

# SEQUELIZE 🎲
* <h2>sequelize</h2> é um ORM serve para criar bd mysql, sqlite ...pelo node <br>

```npm install --save sequelize```

```npm install --save mysql2``` para usar bd mysql

* ## ligando o node com o banco 

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
* <h2>construindo rotas com express usando ficheiros dinámicos handlebars </h2>
