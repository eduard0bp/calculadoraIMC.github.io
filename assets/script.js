const calcular = document.getElementById('calcular')

function imc() {
  const nome = document.getElementById('nome').value
  const altura = document.getElementById('altura').value
  const peso = document.getElementById('peso').value
  const resultado = document.getElementById('resultado')

  if (nome !== '' && altura !== '' && peso !== '') {
    const valorIMC = peso / (altura * altura)

    let classificacao = ''
    if (valorIMC < 18.5) {
      classificacao = 'Abaixo do peso.'
    } else if (valorIMC < 25) {
      classificacao = 'Peso ideal (parabéns).'
    } else if (valorIMC < 30) {
      classificacao = 'Levemente acima do peso.'
    } else if (valorIMC < 35) {
      classificacao = 'Obesidade grau I.'
    } else if (valorIMC < 40) {
      classificacao = 'Obesidade grau II (severa).'
    } else {
      classificacao = 'Obesidade III (mórbida). Cuidado! Procure um médico.'
    }

    resultado.textContent = `Olá ${nome} seu IMC é ${valorIMC.toFixed(
      2
    )} e sua classificação é ${classificacao}`
  } else {
    resultado.textContent = 'Preencha todos os campos!'
  }
}

calcular.addEventListener('click', imc)
