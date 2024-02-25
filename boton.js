"use strict";

let audio = document.querySelector(".audio");
let mario = new Audio("audio/mario.mp3");
audio.addEventListener("click", function() {
    // Audio button functionality (toggle image)
    let botonAudio = document.querySelector(".botonActive");
    botonAudio.src = botonAudio.src.endsWith("audioActive.svg")
        ? "img/audioInactive.svg"
        : "img/audioActive.svg"; // Consistent path
        // Pausar o reproducir el audio
  if (mario.paused) {
    mario.play();
  } else {
    mario.pause();
  }
});

// Separate event listener for "enviar" button
let enviar = document.querySelector(".enviar");
enviar.addEventListener("click", function() {
    
    mario.play();
});

