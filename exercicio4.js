const prompt = require("utils/prompt")

var eleitores = prompt("Qual o numero de eleitores: ")
var brancos = prompt("Qual o numero de votos brancos: ")
var nulos = prompt("Qual o numero de votos nulos: ")
var validos = prompt("Qual o numero de votos validos: ")

brancos = brancos*100/eleitores
nulos = nulos*100/eleitores
validos = validos*100/eleitores

console.log("Brancos: ",brancos,"%")
console.log("Nulos ",nulos,"%")
console.log("Validos ",validos,"%")

