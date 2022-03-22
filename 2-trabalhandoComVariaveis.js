console.log("Trabalhando com variáveis.")

// JavaScript é casesensitive (não podemos colocar letras maiúsculas onde por padrão, são minúsculas)

Idade = 18
idade = 19
idadeSoma = Idade + idade
console.log(idadeSoma)
// não declaramos a variável com o "const", isso fará com que as variáveis subam em escopo global - NÃO É BOA PRÁTICA!

const Idade2 = 18
const idade2 = 19
idadeSoma2 = Idade2 + idade2
console.log(idadeSoma2)
//BOA PRÁTICA

let ano = 2022
let anoNascimento = ano - idade2
console.log(anoNascimento)
//declarando com LET - escopo em bloco | pode ser atualizada, mas não declaradas novamente | pode ser declarada sem ser inicializada | Todas elas passam por hoisting para o topo de seu escopo. Porém, enquanto variáveis com var são inicializadas com undefined, as variáveis com let e const não são inicializadas.
//declarando com VAR - escopo global ou de função | pode ser atualizada e declaradas novamente dentro de seu escopo | pode ser declarada sem ser inicializada | var é inicializada com undefined
//declarando com CONST - escopo em bloco | não podem ser atualizadas nem declaradas novamente | precisa da inicialização durante a declaração | const não é inicializada

