var arr = [ 'Pedro', null, true, { carro: 'prata' }, function() {} ];
var qtd = arr.length;

/* 
console.log( arr.length );
console.log( arr[1] );
console.log( arr[2] );
console.log( arr[3] );
console.log( arr[4] );
console.log( arr[5] );

// Fazendo a mesma coisa usando o while:

while( qtd > 0 ) {
    console.log( arr[ --qtd ] );
}
*/

// Buscando uma propriedade de objeto dentro do array:
while( qtd > 0 ) {
    console.log( arr[ --qtd ] );
    if( qtd === 3 ) {
        console.log( arr[ qtd ].carro );
    }
}
