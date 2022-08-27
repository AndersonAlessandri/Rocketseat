// Qual usar?

// getElementById [element]
// getElementByClassName [HTMLCollection]
// getElementByTagName[HTMLCollection]
// querySelector [element]
// querySelectAll [NodeList]

// Manipulando elementos
// Atributos

const header = document.querySelector('header')
header.setAttribute('id', 'header')

const headerId = document.querySelector('#header')

console.log(headerId.getAttribute('class'))

header.removeAttribute('id')

header.removeAttribute('class')