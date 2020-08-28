// EXEMPLO 1
const arr = [0,1,2]
const newArr = [...arr,3]
const newArr2 = [3,...arr]

console.log(newArr)
console.log(newArr2)

// EXEMPLO 2

const arr2 = [4,6]

function soma(a,b,c){
  return a + b + c
}

console.log(soma(8, ...arr2))
//RETORNA 18