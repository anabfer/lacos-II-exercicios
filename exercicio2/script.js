let number = +(prompt('Digite um número para realizar a arabuada de 1 a 10:'))
let tabuada = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let i in tabuada){
    console.log(`${number} x ${tabuada[1]} = ${number * tabuada[i]}`)
}