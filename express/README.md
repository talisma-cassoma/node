* ## criando um servidor com express
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

* ## criando um servidor com modulo nativo http 
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

    

   * <a href="https://github.com/talisma-cassoma/node/blob/main/express/routes.js">Rotas e parametros</a> 
   
   ao construir rotas podemos adicionar varias as aos diretorios
   
