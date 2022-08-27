//Function constructor

/* 
* expressão new
* criar um novo objeto
* this keyword
*/

function Person(name) {
    this.name = name
}

const mayk = new Person("Mayk")
const joao = new Person("João")

console.log(mayk)
console.log(joao)


