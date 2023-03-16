let num = [5, 8, 2, 9, 3]
/*
//num[5] = 11
//num.push(11)

num.sort()  //coloca o array na ordem crescente
*/
console.log(num)
console.log(num.length)
console.log(`O primeiro valor do vetor é ${num[0]}`)

/*
for(let pos = 0; pos < num.length; pos++){
    console.log(`Posição ${pos} valor ${num[pos]}`)
}
*/

for(let pos in num){
    console.log(`Posição ${pos} valor ${num[pos]}`)
}

console.log(num.indexOf(3))