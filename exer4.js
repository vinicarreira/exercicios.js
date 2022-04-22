// ORDEM DADOS BUBBLESORT COM FUNCTION COM MUDANÇAS NO FOR

const prompt = require("utils/prompt")

// FUNCTION

function bubblesort(x) {
    for (var n = 1; n <=x.length; n++) {
        for (var i = 0; i <= x.length - 2; i++) {
            if (x[i][0] > x[i+1][0]){              
                var aux = x[i]
                x[i] = x[i + 1]
                x[i + 1] = aux
            }
        }
    }      
}

// MAIN = PARTE PRINCIPAL 
console.clear // Clean Screen


var dados = [
    [56, "Jair"],
    [59, "Valdir"],
    [8, "Bia"],
    [4, "Ana"],
    [71, "Manoel"],
    [13, "Carla"],
    [15, "Carlos"]
]

bubblesort(dados, 1)
              // Ordernar por nome, apenas trocar o 0 por 1 / coluna 1 = 0, coluna 2 = 1, e assim vai indo, colocando o campo que vai ordenar

console.log(dados)