* ## ligando o node com o banco 

👨‍💻

```js
const sequelize = new Sequelize('nome do DB', 'usuario', 'palavra passe do sevidor', {
    host: "localhost", //o sitio onde espedado(no meu pc ) 
    dialect: "mysql" //o tipo de DB
})
```
* ## criando uma banco de daodos 
```js
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

//Postagem.sync({force: true});//para for√ßar a criar caso ou rectiar a tabela ...
```
* ## inserindo dados no banco de dados
```js 
Postagem.create({
    titulo : 'meu de perfil',
    conteudo: 'leu dia foi assim'
})
```

