alert('Bem vindo ao jogo secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute = prompt("Digite um número de 1 a 10");

if(chute == numeroSecreto){
    alert("Voce acertou! O numero secreto é " + numeroSecreto);
} else {
    alert(`Voce errou! seu chute foi ${chute} e o numero secreto é ${numeroSecreto}`);
}
