console.log(`Trabalhando com listas`)

// const saoPaulo = `São Paulo`
// const rioDejaneiro = `Rio de Janeiro`
// const beloHorizonte = `Belo Horizonte`
// console.log(saoPaulo, rioDejaneiro, beloHorizonte)
//MUITO TRABALHOSO

//USAR ARRAY =D < TRABALHOSO
const listaDestinos = new Array( //new É UMA PALAVRA RESERVADA! - não podemos declarar variaveis com nome new
    `São Paulo`,
    `Rio de Janeiro`,
    `Belo Horizonte`
)

listaDestinos.push(`Curitiba`) //O MÉTODO .push ADICONA VALORES DENTRO DE UMA ARRAY

console.log("Destinos possíveis: ", listaDestinos)

// listaDestinos = 2 //ERRO

listaDestinos.splice(1, 1) //MÉTODO .splice REMOVE VALORES DENTRO DE UMA ARRAY
console.log(listaDestinos)

console.log(listaDestinos[0] ,listaDestinos[1]) //Imprime apenas um valor dentro de uma array