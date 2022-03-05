//(i)Taking all variables ---->

let index = 0;
let icon = document.getElementById("icon2");
let iconPlay = document.getElementsByClassName("songName");
let pervious = document.getElementById("icon1");
let next = document.getElementById("icon3");
let songTime = document.getElementById("songTime");
let audio = document.querySelector("audio");

//(ii) Array list for songs----->

const songs = [
  { name: "Zack Merci - Ray of Light (feat. Nieko) [NCS Release]" },
  { name: "Machayenge 3(Mr-Jatt1.com)" },
  { name: "Syn Cole - Time [NCS Release]" },
  { name: "52 Gaj Ka Daman - Renuka Panwar" },
  { name: "Kehndi-Hundi-Si-Chan-Tak-Rah-Bana-De(PagalWorld)" },
  { name: "Chenda & Shiah Maisel - Find You There [NCS Release]" },
  { name: "Wo Karna Chaahti Grind(Mr-Jatt1.com)" },
  { name: "Kacha Badam"}
];

//(iii) For play button ---->

icon.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    icon.src = "circle-pause-solid.svg";
  } else {
    audio.pause();
    icon.src = "circle-play-solid.svg";
  }
});

//(iv)Loading song ---->

const loadSong = (songs) => {
  audio.src = "songs/" + songs.name + ".mp3";
  
  audio.play();
};

//(v) Function for next button --->

const nextSong = () => {
  if(index ==8){
    index=0;
  }
  else{
    index++;
  }
  
  loadSong(songs[index]);
};

next.addEventListener("click", nextSong);

//(vi) Function for previous button --->

const previousSong = () => {
  if(index ==0){
    index=8;
  }
  else{
    index--;
  }
  
  loadSong(songs[index]);
};

pervious.addEventListener("click", previousSong);

//(vii) For automatic time update --->

audio.addEventListener("timeupdate", () => {
  time = parseFloat((audio.currentTime / audio.duration) * 100);
  songTime.value = time;
});

//(viii) Time update manually --->

songTime.addEventListener("change", () => {
  audio.currentTime = (songTime.value * audio.duration) / 100;
});
