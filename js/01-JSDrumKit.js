document.addEventListener('keydown', function(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  key.classList.add('highlight');
  if(!audio) {
    return;
  } else {
    audio.currentTime = 0;
    audio.play();
  }
  document.addEventListener('keyup', function(event) {
    key.classList.remove('highlight');
  });
});
