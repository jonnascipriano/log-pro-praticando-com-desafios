let nomes = []

function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo').value;
    for(let i = 0; i<=nomes.length; i++){
        if(nomeAmigo === nomes[i]){
            alert('Nome já existente')
            break
        } else {
            nomes.push(nomeAmigo);
            break
        }
    } 

    console.log(nomes)
}
