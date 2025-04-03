# Sprint 5 Fix the Flow
## Week 1
### Dinsdag 3 december 2024

#### Wat heb je vandaag gedaan? 

Ik heb vandaag gewerkt aan de interactieve player, zie deze issue: https://github.com/julia-stevens/fix-the-flow-interactive-website/issues/4

Ik ben veel bezig geweest met JavaScript, en heb uiteindelijk de content van de player kunnen vullen met JavaScript, zie: 

```js
let trackList = [ // array met content player 
    {
        // [0] BACK TO BLACK - AMY WINEHOUSE
        path: "./assests/Back-To-Black_Amy-Winehouse.mp3", // path van eerste nummer
        name: "Goud van Oud", // show-name
        artist: "Back to Black - Amy Winehouse", // track-name-artist
        image: "./assests/back-to-black-thumbnail.png" // track-art
    },
    {
        // [1] KILLER QUEEN - QUEEN
        path: "./assests/queen-killer-queen.mp3", 
        name: "Goud van Oud", 
        artist: "Killer Queen - Queen", 
        image: "./assests/sheer-heart-attack.jpg"
    }
]
```

```js
function loadTrack(trackIndex) {
    // clear previous seek timer
    clearInterval(updateTimer); 
    resetValues();

    // load new track
    currentTrack.src = trackList[trackIndex].path; // source currentTrack = haal uit array (start bij 0 (dus eerste nummer) en neem het path)
    currentTrack.load(); // laad currentTrack variabele
    
    // update details
    trackNameArtist.textContent = trackList[trackIndex].artist; // laad trackNameArtist met artist uit trackList
    showName.textContent = trackList[trackIndex].name; // laad showName met name uit trackList
    trackArt.src = trackList[trackIndex].image; // laad trackArt met image uit trackList

    // update elke seconde
    updateTimer = setInterval(seekUpdate, 1000);

    // wanneer track eindigd, roep "nextTrack" op
    currentTrack.addEventListener("ended", nextTrack);
}
```

Daarnaast ben ik aan de slag gegaan met het stylen van de `input type="range"`, zie css; 

```css
/*********** Baseline, reset styles ***********/
input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
}

/* Removes default focus */
input[type="range"]:focus {
    outline: none;
}

/******** Chrome, Safari, Opera and Edge Chromium styles ********/
/* slider track */
input[type="range"]::-webkit-slider-runnable-track {
    background-color: #e60063;
    border-radius: 0rem 0rem .3rem .3rem;
    height: 0.5rem;
}

/* slider thumb */
input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;

    /* Override default look */
    appearance: none;
    margin-top: -4px;

    /* Centers thumb on the track */
    background-color: #e60063;
    filter: drop-shadow(0px 0px 8px black);
    border-radius: 0.5rem;
    height: 1rem;
    width: 1rem;
}

input[type="range"]:focus::-webkit-slider-thumb {
    outline: 3px solid #e60063;
    outline-offset: 0.125rem;
}

/*********** Firefox styles ***********/
/* slider track */
input[type="range"]::-moz-range-track {
    background-color: #e60063;
    border-radius: 0rem 0rem .3rem .3rem;
    height: 0.5rem;
}

/* slider thumb */
input[type="range"]::-moz-range-thumb {
    background-color: #e60063;
    filter: drop-shadow(0px 0px 8px black);
    border: none;

    /*Removes extra border that FF applies*/
    border-radius: 0.5rem;
    height: 1rem;
    width: 1rem;
}

input[type="range"]:focus::-moz-range-thumb {
    outline: 3px solid #e60063;
    outline-offset: 0.125rem;
}
```