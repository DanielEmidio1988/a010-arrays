// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie três novos arrays, 
//chamados nomeDoArrayOriginalCopia, e faça o que se pede abaixo nas cópias dos arrays originais;

const array1 = [1,5,4,9]
const array2 = ["Chamander","Squirtle","Bulbassaur"]
const array3 = [1, "Chamander", false]
const Array1Copia = array1.slice()
const Array2Copia = array2.slice()
const Array3Copia = array3.slice()

// Adicione um item number ao primeiro array. Utilize console.log() para exibir o original e a cópia;
array1.push(3)
console.log("Atividade 1\n")
console.log(array1)
console.log(Array1Copia)

// Remova o último item do segundo array. Utilize console.log() para exibir o original e a cópia;
//array2.splice(2,1)
array2.pop()
console.log("Atividade 2\n")
console.log(array2)
console.log(Array2Copia)

// Remova o segundo item do terceiro array. Utilize console.log() para exibir o original e a cópia;
array3.splice(1,1)
console.log("Atividade 3\n")
console.log(array3)
console.log(Array3Copia)