var numeroSecreto = parseInt(Math.random() * 1001)
var tentativas = 0

// looping para repetir o código até acertar o número
while (chute != numeroSecreto) {
  var chute = prompt('Digite um número entre 0 e 1000:')
  tentativas = tentativas + 1
  if (chute == numeroSecreto) {
    alert('Parabéns! Você acertou o número secreto (' + numeroSecreto + ') em ' + tentativas + ' tentativas!')
  } else if (chute > numeroSecreto) {
    alert('Você errou! O número secreto é menor que ' + chute + '.')
  } else if (chute < numeroSecreto) {
    alert('Você errou! O número secreto é maior que ' + chute + '.')
  }
}