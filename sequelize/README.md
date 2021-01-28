* ## ligando o node com o banco 

👨‍💻

```js
const sequelize = new Sequelize('nome do DB', 'usuario', 'palavra passe do sevidor', {
    host: "localhost", //o sitio onde espedado(no meu pc ) 
    dialect: "mysql" //o tipo de DB
})
```
* ## criando uma banco de dados 
```js
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.TEXT
    }
})

//Postagem.sync({force: true});//para forçar a criar o banco de dados 
//caso nao tenha ainda criado ou recriar o banco de dados 
```
* ## inserindo dados no banco de dados
```js 
Postagem.create({
    titulo : 'meu de perfil',
    conteudo: 'leu dia foi assim'
})
//Postagem.sync({force: true});//para forçar a criar, caso nao tenha ainda criado ou recriar a tabela
```

