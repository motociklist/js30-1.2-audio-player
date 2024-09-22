const tracks = [
  { file: "track1.mp3", image: "image1.png" },
  { file: "track2.mp3", image: "image2.png" },
  { file: "track3.mp3", image: "image3.png" }
];

let currentTrackIndex = 0;
const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const nextBtn = document.getElementById("nextBtn");
const background = document.querySelector(".background");

function loadTrack(index) {
  audio.src = tracks[index].file;
  background.style.backgroundImage = `url(${tracks[index].image})`;
}

function playTrack() {
  if (audio.src) {
    audio.play();
  } else {
    loadTrack(currentTrackIndex);
    audio.play();
  }
}

function nextTrack() {
  currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
  loadTrack(currentTrackIndex);
  audio.play();
}

// События кнопок
playBtn.addEventListener("click", playTrack);
nextBtn.addEventListener("click", nextTrack);

// Загрузка первого трека
loadTrack(currentTrackIndex);
