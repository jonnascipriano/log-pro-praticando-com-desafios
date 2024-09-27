function sortear(){
    let quantidade = parseInt(document.querySelector('input#quantidade').value)
    let de = parseInt(document.querySelector('input#de').value)
    let ate = parseInt(document.querySelector('input#ate').value)
    let sorteados = []
    let numero;

    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate)
        sorteados.push(numero)
    }
    console.log(sorteados)
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}