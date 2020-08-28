async function main() {
  try {
    if(await getResultado(5) > 10) {
      console.log('O valor retornado é maior que 10');
      if(await getResultado(3) < 10) {
        console.log('O valor é menor que 10')
      }
    }
  } catch(err) {
    console.log('deu ero');
    console.log(err);
  }
}

main();

function getResultado(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 2.5);
    }, 3000)
  });
}
