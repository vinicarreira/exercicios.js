// ORDENANDO NOMES COM O INSERTIONSORT

const prompt = require("utils/prompt")

//  LER O NOMES

var x = prompt('Entre com os nomes: ','arrayofstr')

console.log("inicial: ",x)

// PROGRAMA

for (var i = 1; i <= 4; i++) {
    var eleito = x[i]
    var j = i - 1

    while (j >= 0 && x[j] > eleito) {
        x[j + 1] = x[j];
        j = j - 1
    }
    x[j+1] = eleito;
}

console.log("inicial: ",x)