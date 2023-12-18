let zap = document.querySelector('#zap')
let summary = document.querySelector('summary')

function Vermais_VerMenos() {
  if (summary.innerText === "Ver mais") {
    summary.innerText = 'Ver menos'
  } else if (summary.innerText === "Ver menos") {
    summary.innerText = 'Ver mais'
  }

}
let audio = {
  audioBolha: new Audio('../audio/bolha.mp3'),
  audioFantasia: new Audio('../audio/fantasia.mp3'),
  audioSucesso: new Audio('../audio/sucesso.mp3'),
  audioRapido: new Audio('../audio/rapido.mp3'),

}



setTimeout(() => {

  zap.style.display = 'flex';
}, 10000);

function bolha() {
  audio.audioBolha.play()
}
function fantasia() {
  audio.audioFantasia.play()
}
function sucesso() {
  audio.audioSucesso.play()
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  audio.audioRapido.play()
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  audio.audioRapido.play()
}