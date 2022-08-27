/*

Vamos fortalecer e aplicar os conhecimentos, além de aprender truques e dicas para resolver os desafios e avançar para o próximo nível

*/

/* ### Transformar notas escolares

Crie um algorítmo que transforme as notas dos sistema numérico para sistema de notas em caracteres tipo A B C D F

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - E

*/

let nota = 77

function getNota(nota) {
let notaA = nota >= 90 && nota <= 100
let notaB = nota >= 80 && nota <= 89
let notaC = nota >= 70 && nota <= 79
let notaD = nota >= 60 && nota <= 69
let notaE = nota < 60 && nota >= 0

let notaFinal;

if(notaA) {
    notaFinal = "Nota A"
} else if(notaB) {
    notaFinal = "Nota B"
} else if(notaC) {
    notaFinal = "Nota C"
} else if(notaD) {
    notaFinal = "Nota D"
} else if(notaE){
    notaFinal = "Nota E"
} else {
    notaFinal = 'Nota Inválida'
    }
    
    return notaFinal
}

console.log(getNota(77))