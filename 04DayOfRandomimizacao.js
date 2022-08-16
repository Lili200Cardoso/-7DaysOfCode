let prompt = require('prompt-sync')();

console.log("****************************************************")
console.log("|                   VAMOS JOGAR?!                  |")
console.log("Vou Pensar em um número de 0 á 10. Tente adivinhar!!")
console.log("****************************************************")


let num = Math.floor(Math.random() * (10 - 0 + 1) + 0)
let chute = ""
let adivinhou = false


for(cont = 0; cont < 3; cont++){
    chute = prompt("Em que número eu pensei?")
    console.log("PROCESSANDO...")
    if(chute == num){
        console.log(`PARABÉNS!!Você acertou! O número escolhido era ${num}`)
        adivinhou = true
        break
    }
    console.log(`Errado!!`)  
}
if(!adivinhou){
    console.log(`Você não acertou! O número escolhido era ${num}`)
}





