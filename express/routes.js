const express = require("express") // o express é um modulo e ele retorna uma funcao que cria o express

const app = express();//const pra evitar sobrescerever o variavel app
 
/*/criando rotas 
app.get("/", function(req, res){
    res.send("ola daqui é o servidor")
});*/

app.get("/sobre", function(req, res){
    //res.send('minha pagina sobre')
    res.sendFile(__dirname + "/html/sobre.html")
})
 app.get('/blog', function(req, res){
     res.send("bemvindo ao meu blog")
 })

//adicionando parametros as rotas 
app.get('/hello/:nome', function(req, res){
    res.send("Ola")
});

app.get('/helloman/:cargo/:nome', function(req, res){//podes por qts params quiseres
    res.send("Ola")
});

app.get('/olaa/:cargo/:nome', function(req, res){
    res.send(req.params)//requisita os parametros dados na rota em forma de obejectos
});

app.get('/ola/:cargo/:nome/:cor', function(req, res){
    res.send('<h1> olá ' + req.params.nome + ' tu es '+ req.params.cargo + '</h1><br>'+'<h2> tua cor favorita é '
    + req.params.cor + '</h2>')
    //lembre que o send so envia uma vez dentro da sua funcao de rota  
}); 

app.get('/', function(req, res){ /*__dirname é uma variavel que retorna o directorio principal 
    do nosso arquivo index.js que é /Desktop/helloworld/rotas_parametros */ 
    res.sendFile(__dirname + "/html/index.html")
});

    /*abrindo um servidor com express*/
app.listen(8081, function(){
    console.log('servidor rodandando no localhost:8081')
}); //sempre e sempre essa linha deve ser a ultima do nosso codigo   