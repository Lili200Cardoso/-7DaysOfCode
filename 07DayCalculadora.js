let prompt = require('prompt-sync')();

mensagem()
let operacao = ""


while(operacao !== "5"){

    console.log(" 1. SOMAR        ")
    console.log(" 2. SUBTRAIR     ")
    console.log(" 3. DIVIDIR      ")
    console.log(" 4. MULTIPLICAR  ")
    console.log(" 5. SAIR         ")


    operacao = prompt("Escolha a opção desejada: ") 
    if(operacao != "5"){
        let n1 = prompt("Digite o primeiro valor: ")
        let num1 = parseInt(n1)
        let n2 = prompt("Digite o segundo valor: ")
        let num2 = parseInt(n2)

        switch(operacao){

            case "1":
                console.log(` O resultado da sua operação é: ${somar(num1,num2)}`)
                break
            case "2":
                console.log(` O resultado da sua operação é: ${subtrair(num1,num2)}`)
                break
            case "3":
                console.log(` O resultado da sua operação é: ${dividir(num1,num2)}`)
                break
            case "4":
                console.log(` O resultado da sua operação é: ${multiplicar(num1,num2)}`)
                break
            default:
                console.log("Operação Inválida!")
        }

    }
    else
        console.log("Programa encerrado!! Até a próxima!")
     
}


function somar(n1, n2){
    return n1 + n2;
}

function subtrair(n1, n2){
    return n1 - n2;
}

function dividir(n1, n2){
    return n1 / n2;
}

function multiplicar(n1, n2){
    return n1 * n2;
}

function mensagem(){

    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
    console.log("|        CALCULADORA        |")
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")

}


