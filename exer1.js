// ORDEM ALFABETICA BUBBLESORT

const prompt = require("utils/prompt")

//  LER O CARACTERES

var x = prompt('Entre com os caracteres: ','arrayofstr')

console.log("inicial: ",x)

// PROGRAMA

for (var n = 1; n <=x.length; n++) {
    for (var i = 0; i <=x.length - 2 ; i++) {
        if (x[i] > x[i+1]){
            var aux = x[i]
            x[i] = x[i + 1]
            x[i + 1] = aux
        }
    }
}        

console.log("Final: ",x)