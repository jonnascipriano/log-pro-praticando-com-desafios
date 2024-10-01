function sortear(){
    let quantidade = Number(document.querySelector('input#quantidade').value)
    let de = Number(document.querySelector('input#de').value)
    let ate = Number(document.querySelector('input#ate').value)

    let sorteados = []
    let numeros;

    
    if(quantidade > ate){
        alert('Quantidade maior que número final do sorteio. Digite valores válidos!')
        document.querySelector('input#quantidade').value = ''
        document.querySelector('input#de').value = ''
        document.querySelector('input#ate').value = ''
    } else if(de > ate){
        alert('Campo "Do número" deve ser inferior ao campo "Até o número"!')
    } else if(quantidade > (ate - de + 1)){
        alert('Quantidade superior ao intervalo de números escolhidos!')
        return
    } else {
        for(let i = 0; i < quantidade; i++){
        numeros = obterNumeroAleatorio(de, ate)
        while (sorteados.includes(numeros)){
            numeros = obterNumeroAleatorio(de,ate)
        }
        sorteados.push(numeros)
        }
        if(document.querySelector('#btn-reiniciar')){
        document.querySelector('#btn-reiniciar').classList.remove('container__botao-desabilitado')
        document.querySelector('#btn-reiniciar').classList.add('container__botao')
        }
    }
    console.log(sorteados)
}

function reiniciar(){
    document.querySelector('input#quantidade').value = ''
    document.querySelector('input#de').value = ''
    document.querySelector('input#ate').value = ''

    if(document.querySelector('#btn-reiniciar')){
        document.querySelector('#btn-reiniciar').classList.remove('container__botao')
        document.querySelector('#btn-reiniciar').classList.add('container__botao-desabilitado')
    }
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}