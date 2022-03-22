console.log(`\n Trabalhando com condicionais`)

const listaDestinos = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Belo Horizonte`
)

const idadeCliente = 20
const clienteAcompanhado = false
let passagemComprada = false
const destino = "São Paulo"

console.log("\n Destinos possíveis: ", listaDestinos)

const podeComprar = (idadeCliente >= 18 || clienteAcompanhado)

let contador = 0
let destinoExiste = false
// while (contador < 3){

//     if(listaDestinos[contador] == destino) {
//         destinoExiste = true
//         break;
//     }
//     contador++
// }
for (let i = 0; i < 3; i++){
    if(listaDestinos[i] == destino) {
        destinoExiste = true
    }
}

console.log("Destino existe: ", destinoExiste)

if (podeComprar && destinoExiste) {
    console.log("Boa viagem!")
} else {
    console.log("Erro.")
}

// for (let i = 0; i < 3; i++){
//     if(listaDestinos[i] == destino) {
//         destinoExiste = true
//     }
// }