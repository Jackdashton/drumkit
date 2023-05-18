function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // select something with data-key 65
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // select something with the class 'key'
  console.log(audio);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0; // Rewind to the start to allow play repeatedly.
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.keys'));
// Each key gets an event listener added to it, when transition ending we run removeTransition
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener("keydown", playSound);
