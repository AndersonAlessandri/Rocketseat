/* 
'   new

    * let-hand-side expression
    * criar um novo objeto
*/

/* let name = new String('Mike')
name.surname = "Brito"
let age = new Number(23)
console.log(name, age) */

// Operadores unários
// typeof
// delete

/* const person = {
    name: 'Mayk',
    age: 25
}
delete person.age

console.log(person) */

// Operadores Aritiméticos

// Multiplicação *
//console.log(3 * 5)

// divisão /
//console.log(12 / 2)

// soma +
//console.log(5 + 7)

/// subtração -
//console.log(10 - 5)

// resto da divisão %
let remainder
remainder = 20 % 6
//console.log(remainder)

// incemento ++
let increment = 0
increment++
//console.log(increment)

// decremento --
let decrement = 0
//console.log(--decrement)

// exponencial **
//console.log(3**3)

// Group Operator ()

let total = (2 + 3) * 5
//console.log(total)

// Operadores de comparação

// Irá comparar valores e retornar um Boolean como resposta à comparação

let one = 1
let two = 2

// == igual a
//console.log(two == 1)
//console.log(one == "1")

// != diferente de
// console.log(one != two)
// console.log(one != 1)
// console.log(one != "1")

// === estritamente igual a

//console.log(one === "1")
//console.log(one === 1)

// !== estritamente diferente de 
//console.log(two !== "2")
//console.log(two !== 2)

// Operadores de atribuição (Assignment)

let x

// assignment
x = 1

// addition assignment
// x = x + 2
x += 2


// subtraction assignment
// x = x -1
x -= 1


// muliplication assignment
// x = x * 2
x *= 2

// division assignment
// x = x / 2
x /= 2

// remainder, exponetiation
//x %= 2
x **= 2

//console.log(x)

// Operadores lógicos (logical operation)

// 2 valores booleanos, quando verificados,
// resultará em verdadeiro ou falso

/* let pao = false
let queijo = false */

// AND &&

// OR ||

// NOT !

//console.log(!queijo)

// Operador Condicional (Ternário)

// Dependendo da condição, bós receberemos valores diferentes

// Condição estáo valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos

// Café da manhã top
let pao = true
let queijo = true

const niceBreakfast = pao && queijo ? 'Café Top' : 'Café ruim'

//console.log(niceBreakfast)

// Maior que 18

let age = 19
const canDrive  = age >= 18 ? 'Can Drive' : 'Cannot Drive'
console.log(canDrive)