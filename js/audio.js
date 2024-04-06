const audio = document.querySelector("#myAudio");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");

function togglePlayPause() {
  if (audio.paused) {
    // If audio is paused, play from the stored position
    play.style.display = "none";
    pause.style.display = "inline";
    audio.play();
  } else {
    // If audio is playing, pause and store the current position
    play.style.display = "inline";
    pause.style.display = "none";
    audio.pause();
  }
}
