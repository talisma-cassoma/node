//vou carregar os modulos aqui 

var somaFunc = require("./soma") //pegando o modulo do arquivo soma.js 
var multFunc = require("./multiplicacao")
var divFunc = require("../divisao")
var subFunc = require("./subtracao")

console.log(somaFunc(1,12))
console.log(multFunc(20,2))
console.log(subFunc(20,2))
console.log(divFunc(20,2))