function sortear(){
    let quantidade = Number(document.querySelector('input#quantidade').value)
    let de = Number(document.querySelector('input#de').value)
    let ate = Number(document.querySelector('input#ate').value)

    let sorteados = []
    let numeros;

    for(let i = 0; i < quantidade; i++){
        numeros = obterNumeroAleatorio(de, ate)

        while(sorteados.includes(numeros)){
            numeros = obterNumeroAleatorio(de, ate)
        }

        sorteados.push(numeros)
    }
    
    let resultado = document.querySelector('#resultado')
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    alterarStatusBotao()
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function alterarStatusBotao(){
    let botao = document.querySelector('#btn-reiniciar')
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
}

function reiniciar(){
    document.querySelector('input#quantidade').value = ''
    document.querySelector('input#de').value = ''
    document.querySelector('input#ate').value = ''
    document.querySelector('#resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`
}