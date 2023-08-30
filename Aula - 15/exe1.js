var num = [6, 9, 1]

num[3] = 4
num.push(5)//add automaticamente se olhar o indice

num.sort()

console.log(`O vetor tem ${num.length} posições`)

console.log(`os valores são reodernados são ${num}`)

/* for(var i = 0; i < num.length; i++) {

    console.log(num[i])
} */

for (var i in num){//"Para cada posição em num"
    console.log(num[i])
}

var pos = num.indexOf(4)//procura o valor entre parentese e retorna a posição em que ele se encontra no vetor. Caso não encontre ele retorna -1
console.log(`encontramos o valor na posição ${pos}`)