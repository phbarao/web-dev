// for( var i = 1; i < 10; i++ ) {
//     console.log( i );
// }

var car = {
    brand: 'VW',
    model: 'Gol',
    year: 2013
}

for( var prop in car ) {
    console.log( prop );
}

console.log( 'is brand in car? ', 'brand' in car );
console.log( 'is doors in car? ', 'doors' in car );

for( var prop in car ) {
    console.log( car[ prop ] );
}
