let alugados = [];
function alterarStatus(id){
    let game = document.querySelector(`li#game-${id}`)
    let statusGame = game.querySelector('.dashboard__item__button')
    let imgGame = game.querySelector('.dashboard__item__img')
    let nomeGame = game.querySelector('.dashboard__item__name').textContent

    
    if(statusGame.textContent === 'Alugar'){
        let confirmacaoAlugar = confirm('Você tem certeza que deseja alugar?')
        if(confirmacaoAlugar){
            imgGame.classList.add('dashboard__item__img--rented');
            statusGame.classList.add('dashboard__item__button--return')
            statusGame.textContent = 'Devolver'
            alugados.push(nomeGame)
        }
    } else {
        let confirmacaoDevolver = confirm('Você tem certeza que deseja devolver?')
        if(confirmacaoDevolver){

            let index = alugados.indexOf(nomeGame);
            if (index > -1) {
                alugados.splice(index, 1);
            }

            imgGame.classList.remove('dashboard__item__img--rented')
            statusGame.classList.remove('dashboard__item__button--return')
            statusGame.textContent = 'Alugar'
        }
    }

    if(alugados.length > 1){
        console.log(`Foram alugados ${alugados.length} jogos. São eles: ${alugados}`)
    } else {
        console.log(`Foi alugado ${alugados.length} jogo. É ele: ${alugados}`)
    }
}


// let nome = prompt('Digite seu nome').toLowerCase()

// let nomeInvertido = nome.split('').reverse().join('')

// console.log(nomeInvertido)

// if(nome === nomeInvertido){
//     alert(`${nome} é políndromo`)
// } else {
//     alert(`${nome} não é políndromo`)
// }