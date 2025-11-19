let tag = document.querySelector('h1');
tag.innerHTML = 'Hora do Desafio'





function verificarClique(){
    console.log('O botão foi clicado');
}

function verificarAlert(){
    alert('Eu amo JS')
}

function verificarPrompt(){
    let cidade = prompt('Digite a cidade que vc nasceu')
    alert(`Nossa que legal, eu ja estive na cidade de ${cidade}`);
}

function verificarSoma(){
    let intro = alert('Vamos fazer um calculo basico de soma!');
    let n1 = parseInt(prompt('Digite um número'));
    let n2 = parseInt(prompt('Digite outro número'));
    
    resultado = n1 + n2

    alert(`O resultado do cálculo da soma entre os números ${n1} e ${n2} é ${resultado}`);
}