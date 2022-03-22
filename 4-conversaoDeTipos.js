console.log("Conversão de Tipos")

console.log("ano" + 2022)
console.log("2" + "2")
console.log(parseInt("2") + parseInt("2")) // para adição, é necessário converter para Int - parseInt

console.log("10" / "2") //conversão implícita - só usamos / para conversão numérica.
console.log("20" * "2") //conversão implícita - * para conversão numérica.
console.log("12" - "3") //conversão implícita - - para conversão numérica.

console.log("gabriel" / "1") //NaN - Not a Number

console.log("6.5" * "5") //Identifica número flutuante
console.log(5.6) //Irá ler como número float - 5.6
console.log(5,6) //Irá ler dois números - 5 6




let variavel = 1

function teste() {
    console.log(variavel)

}

teste()
