function playAudio(audio) {
  if(!audio) {
    return;
  } else {
    audio.currentTime = 0;
    audio.play();
  }
}

function keyPress(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  playAudio(audio);
}

function keyClick(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  playAudio(audio);
}

function keyActive(event) {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  key.classList.add('highlight');
  document.addEventListener('keyup', function(event) {
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    key.classList.remove('highlight');
  });
}

document.addEventListener('keydown', keyPress);
document.addEventListener('keydown', keyActive);
