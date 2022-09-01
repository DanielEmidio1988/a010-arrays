const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando console.log():

const array1 = [1,5,4,9]
const array2 = ["Chamander","Squirtle","Bulbassaur"]
const array3 = [1, "Chamander", false]

// Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log("Atividade 1\n")
console.log("Lista 1: "+array1.length)
console.log("Lista 2: "+array2.length)
console.log("Lista 3: "+array3.length)

// Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log("Atividade 2\n")
console.log(array1[0])
console.log(array2[1])
console.log(array3[2])

// Imprima uma informação booleana verdadeira sobre a inclusão de um item do primeiro array, e 
//uma informação booleana falsa sobre a inclusão de um item ao terceiro array. Isto é, um includes() verdadeiro, 
//e outro falso
console.log("Atividade 3\n")
console.log("Tem 5 no 1º Array? "+array1.includes(5))
console.log("A condição é verdadeira no 3º Array? "+array3.includes(true))