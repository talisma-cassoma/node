# MODULOS em js🤔 
 
   transformando variaveis em modulos podemos reaproveitar o codigo requisitando os modulos em outro ficheiro<br>
   exemplo da calculadora
  <h2>Modulos nativos do node</h2>
    
   * <a href="">os</a> :
   
   O módulo 'os' fornece métodos e propriedades de utilitários relacionados ao sistema operacional.
   
   * <a href="https://www.w3schools.com/nodejs/nodejs_filesystem.asp">fs</a> :
   
   O módulo fs permite interagir com os ficheiros do sistema, escrever, criar ficheiros Etc.... 
    
   * <a href="">path</a> :
   
   O módulo path fornece a possibilidade de mexer com as rotas e diretório de arquivo 
   
   * <a href="https://www.w3schools.com/nodejs/nodejs_url.asp">url</a> : 
   
      é usado para analisar o URL e suas outras propriedades.
   
   * <a href="https://www.w3schools.com/nodejs/nodejs_events.asp">events</a> : 
   
      toda açao no computador é um evento. Esse modulo é um eventListener
    
   * <a href="https://www.w3schools.com/nodejs/nodejs_http.asp">http</a> 📡
    <h3>protocolo HTTP</h3>
    👨‍💻 criando um servidor http com node<br>
     ```js
           var http = require('http') // requisitamos o modulo http que ja vem par default no node
           http.createServer().listen(8081) // abrir um servidor e colocar na porta 
           console.log('servidor rodando mano')//verifficando
     ```

