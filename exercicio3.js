const prompt = require("utils/prompt")

console.log("Digite a sua idade em: Anos, Meses e Dias")
var anos = prompt("Anos: ")
var meses = prompt("Meses: ")
var dias = prompt("Dias: ")

anos = anos * 365
meses = meses * 30

var idade = anos + meses + dias

console.log("Idade: ", idade)