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

const bukaUndangan = document.querySelector(".buka-undangan");
const navHero = document.querySelector(".hero-foot");
const content = document.querySelector(".main-content");
const audioTriger = document.querySelector(".audio");

bukaUndangan.addEventListener("click", () => {
  bukaUndangan.style.display = "none";
  navHero.style.display = "inline";
  content.style.display = "inline";
  audioTriger.style.display = "flex";
  audio.play();
  function scroll() {
    content.scrollIntoView({ behavior: "smooth" });
  }
  setTimeout(scroll, 600);
});
