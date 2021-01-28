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

