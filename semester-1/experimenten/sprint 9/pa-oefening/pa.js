const audioButton = document.querySelector(".audio-button")
const audioPanel = document.querySelector("audio").style.display="none"

audioButton.style.display="flex"
audioButton.addEventListener("click", playPauseAudio)

function playPauseAudio() {
    const audioButtonImg = audioButton.querySelector("img")
    const audio = audioButton.querySelector(".audio-file")
    
    audioButtonImg.classList.toggle("play")

    if (audio.paused) {
        audio.play()
    } else {
        audio.pause()
    }
}