// Estruturas de repetição
// for
// break - para a execução do loop
// continue - pula a execução do momento

/* for (let i = 1; i <= 10; i++){
    console.log(i)
} */

/* for (let i = 10; i > 0; i--){
    if (i === 5) {
        break;
    }
    console.log(i)
} */

/* for (let i = 10; i > 0; i--){
    if (i === 5) {
        continue;
    }
    console.log(i)
} */


// While

/* let i = 0;
while (i < 10) {
    console.log(i)
    i++
} */

// for...of

/* let name = 'Mayk'
let names = ['João', 'Paulo', 'Pedro'] */

/* for (let char of name) {
    console.log(char)
}
 */
/* for (let name of names) {
    console.log(name)
} */

// for...in

let person = {
    name: 'Jonh',
    age: 30,
    weight: 88.6
}

for (let property in person) {
    console.log(property)
}



