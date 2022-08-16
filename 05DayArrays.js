let prompt = require('prompt-sync')();


console.log("########################################")
console.log("|SEJA BEM VINDO Á SUA LISTA DE COMPRAS!|")
console.log("########################################")

let frutas = []
let legumes = []
let congelados = []
let laticinios = []
let doces = []


let adicionar = prompt("Deseja adicionar um item á sua lista?! Digite: S/N: ")

while(adicionar.toUpperCase() == "S"){
    
    let item = prompt("Qual item você deseja inserir? ")
    
    console.log("#################")
    console.log("|1. FRUTAS      |")
    console.log("|2. LEGUMES     |")
    console.log("|3. CONGELADOS  |")
    console.log("|4. LATICÍNIOS  |")
    console.log("|5. DOCES       |")
    console.log("#################")
    
    let categoria = prompt("Escolha um número de acordo com a categoria do seu item: ")

    switch(categoria){
        case "1":
            frutas.push(item)
            break
        case "2":
            legumes.push(item)
            break
        case "3":
            congelados.push(item)
            break
        case "4":
            laticinios.push(item)
            break
        case "5":
            doces.push(item)
            break
        default:
            console.log("Categoria não encontrada!")
    }
    adicionar = prompt("Deseja continuar adicionando?! Digite: S/N: ")
    if(adicionar.toUpperCase() == "N")
    break
}

console.log(`Lista de compras 
                               FRUTAS:  ${frutas}\n
                               LEGUMES: ${legumes}\n
                               CONGELADOS: ${congelados}\n
                               LATICÍNIOS: ${laticinios}\n
                               DOCES: ${doces}.`)
    