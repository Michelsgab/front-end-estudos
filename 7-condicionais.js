console.log(`Trabalhando com condicionais`)

const idadeCliente = 17
const clienteAcompanhado = true
const passagemComprada = true
const listaDestinos = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Belo Horizonte`
)

listaDestinos.push(`Curitiba`)

console.log("Destinos possíveis: ", listaDestinos)

if(idadeCliente >= 18 || clienteAcompanhado) {
    console.log("Compra efetuada.")
    listaDestinos.splice(1, 1)
    console.log(listaDestinos)
}else {
        console.log("Cliente menor de idade e desacompanhado.")
    }

console.log("Embarque: \n\n")
if ((idadeCliente >= 18 || clienteAcompanhado) && passagemComprada) {
    console.log("Ótima viagem.")
} else {
    console.log("Você não pode embarcar.")
} 


//CONDIÇÕES
console.log(idadeCliente > 18)
console.log(idadeCliente < 18)
console.log(idadeCliente >= 18)
console.log(idadeCliente <= 18)
console.log(idadeCliente == 18)

//----------------------------------------------------------------------------------------------------------------------