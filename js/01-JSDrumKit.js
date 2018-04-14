function playAudio(audio) {
  if(!audio) {
    return;
  } else {
    audio.currentTime = 0;
    audio.play();
  }
}

function keyTransform(key) {
  key.classList.add('highlight');
  setTimeout(function() {
    key.classList.remove('highlight');
  }, 100)
}

function keyPress(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const keyActive = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  playAudio(audio);
  keyTransform(keyActive);
}

function keyClick(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const keyActive = document.querySelector(`.key[data-key="${keyCode}"]`);
  playAudio(audio);
  keyTransform(keyActive);
}

document.addEventListener('keydown', keyPress);
