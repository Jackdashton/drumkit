function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // select something with data-key 65
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // select something with the class 'key'
  console.log(audio);
  if (!audio) return;
  audio.currentTime = 0; // Rewind to the start to allow play repeatedly.
  audio.play();
  console.log(key);
  key.classList.add("playing");
  // transition end event
}
function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip if not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
// Each key gets an event listener added to it, when transition ending we run removeTransition
keys.forEach(key => key.addEventListener('transitioned', removeTransition));
window.addEventListener("keydown", playSound);
