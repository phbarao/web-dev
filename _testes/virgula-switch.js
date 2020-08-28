function myFunc(x) {
    switch(x) {
        case 1:
            console.log('x é 1');
            break;
        case 2:
            console.log('x é 2');
            break;
        default:
            console.log('x não é 1 nem 2.');
            break;
    }
}

myFunc(3)

// Os breaks são muito importantes no uso do switch