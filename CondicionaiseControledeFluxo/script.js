// Control Flow

//Algoritimo

/* console.log('lavar o copo')
console.log('servir o café') */.1

// If...else

/* if (true){
    
} else {

} */

/* let temperature = 37
let highTemperature = temperature >=37.5  
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature){
    console.log('Febre alta')
} else if(mediumTemperature){
    console.log('Febre moderada')
} else {
    console.log('Saudável')
} */

// switch

/* let expression =  'd'

switch (expression) {
    case 'a':
        // cod
        console.log('a')
        break
    case 'b':
        // cod para expression 
        console.log('b')
        break
    default:
        console.log('default')
        break
        
}
 */

/* function calculate(number1, operator, number2) {
    let result = 0;

    switch (operator) {
        case '+':
            result = number1 + number2
            break

    }
} */

    // throw (disparar, lançar)

function saMyName(name = '') {
    if (name === '') {
        throw new Error("Nome é obrigatório")
    }
        console.log(name)

}

    // try...catch (tentar, pegar)

try {
        saMyName('Anderson')
    } catch (e) {
        console.log(e)
}
    
console.log('após ao try/catch')