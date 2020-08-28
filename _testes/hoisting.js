function myFunction() {
    console.log( 'ANTES DE DECLARAR', number1 );
    var number1 = 10;
    console.log( 'DEPOIS DE DECLARAR', number1 );
}

console.log( myFunction() );