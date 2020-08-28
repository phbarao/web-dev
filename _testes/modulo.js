// Imprimindo os números de 0 até 20:
var num = 0

while( num <= 20 ) {
    console.log( num++ )
}


// Imprimindo só os número pares
var num = 0

while( num <= 20 ) {
    num % 2 === 0 ? console.log(num) : '';
    num++;
}