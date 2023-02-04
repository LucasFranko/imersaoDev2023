var numeroSecreto = parseInt(Math.random() * 1001);
if (numeroSecreto == 0){
    numeroSecreto = parseInt(Math.random() * 1001);
}
var tentativas = 0;
while(chute != numeroSecreto){
  var chute = prompt("Adivinhe o número secreto entre 1 e 1000:");
  if (chute == null){
    alert("Você desistiu do jogo!");
    break;
  } else if (tentativas == 15){
    alert("Você excedeu o número de tentativas!\n O número secreto era " + numeroSecreto + "!");
    break;
  }
  if (chute == numeroSecreto){
    alert("Acertou! O número secreto é " + numeroSecreto + "!\n Você fez " + tentativas + " tentativas.");
  } else if(chute > numeroSecreto){
    tentativas = tentativas + 1;
    alert("Errou! O número secreto é menor do que " + chute + "!\n Você ja fez " + tentativas + " tentativas.");
  } else if(chute < numeroSecreto){
    tentativas = tentativas + 1;
    alert("Errou! O número secreto é maior do que " + chute + "!\n Você ja fez " + tentativas + " tentativas.");
  }
}