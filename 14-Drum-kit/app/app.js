const soundMap = {
      w: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      a: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      s: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      d: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      j: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      k: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      l: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    };

function playSound(key) {
  const soundUrl = soundMap[key]
  if(soundUrl){
    const audio = new Audio(soundUrl)
    audio.play();
    animateButton(key);
  }
}

function animateButton(key)  {
  const button = document.querySelector(`.drum[data-key="${key}"]`)
  console.log(button)
  if(button){
    button.classList.add("pressed")
    setTimeout(()=>{
      button.classList.remove("pressed")
    },100)
  }
  console.log(key)
}

document.querySelectorAll(".drum").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.getAttribute("data-key");
    playSound(key);
  });
});

document.addEventListener("keydown", e =>   {
  playSound(e.key.toLocaleLowerCase());
});