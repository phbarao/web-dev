// Função dentro de Função:
function adder(x) {
    return function(y) {
        return x + y;
    }
}

var add2 = adder(2)
console.log( add2(3) )


// Objeto como parametro de uma função:
var uno = {
    color: 'yellow',
    year: 2012
}

function getCarColor(mycar) {
    return mycar.color;
}

function getCarYear(mycar) {
    return mycar.year;
}

console.log( getCarColor(uno) );
console.log( getCarYear(uno) );


//Funcao como parametro de outra funcao
function showOtherFunction(func) {
    return func();
}

function returnedFunction() {
    return 'Returned Function'
}

console.log( showOtherFunction( returnedFunction ) );