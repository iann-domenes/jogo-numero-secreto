const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-Br'

function falar(){
  recognition.start()
}

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
  chute = e.results[0][0].transcript
  exibeChuteNaTela(chute)
  verificaSeOChutePossuiValorValido(chute)
}

function exibeChuteNaTela(chute) {
  if(chute == 'game over'){
    document.body.innerHTML = `
      <h2>Game Over</h2>
      <h3>O número secreto era ${numeroSecreto}</h3>
      <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
  }
  elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
  `
}

// recognition.addEventListener('end', falarUp())