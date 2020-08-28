arr = [ 1, 2, 3, 'Pedro', { tema: 'azul' }, [ 'la', 'la2', 'la3' ] ]

// Adicionando um intem no array através do método PUSH:
arr.push( { carro: 'BMW' } );

console.log( arr );

console.log( arr[ 1 ] );

console.log( arr[ 6 ].carro );

console.log( arr[ 5 ][ 1 ] );

arr.push( function soma( x, y ) { return x + y; } )

console.log( arr[7] );

// Podemos chamar a função dentro do array da seguinte maneira:
console.log( arr[ 7 ]( 1, 2 ) );


// FOR
for( var num = 0; num < 20; num++ ) {
    console.log( num );
}