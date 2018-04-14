function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if(!audio) {
    return;
  } else {
    audio.currentTime = 0;
    audio.play();
  }
}

function keyPress(event) {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  key.classList.add('highlight');
  document.addEventListener('keyup', function(event) {
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    key.classList.remove('highlight');
  });
}

document.addEventListener('keydown', playSound);
document.addEventListener('keydown', keyPress);
