let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1: OK');
  }, 2000);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Promise 2: REJEITADA');
  }, 2000);
})

Promise.all([promise1, promise2])
  .then(([resultado1, resultado2]) => {
    console.log('Todas as promises foram resolvidas');
    console.log(resultado1);
    console.log(resultado2);
  })
  .catch((error) => {
    console.log('Uma das promises foi rejeitada');
    console.log(error);
  })