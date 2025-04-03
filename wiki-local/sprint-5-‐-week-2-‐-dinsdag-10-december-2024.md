# Sprint 5
## Week 2
### Dinsdag 10 december 2024

#### Workshop view-transition
* cross document
* same document

```css
@view-transition {
   navigation: auto; 
}
```

#### Player herontwerp en extra JavaScript functionaliteiten
Zie [issue](https://github.com/julia-stevens/fix-the-flow-interactive-website/issues/2)

Ik heb een aantal nieuwe schetsen gemaakt, met daarin het herontwerp van de player en nieuwe states

![image](https://github.com/user-attachments/assets/f55051f8-3785-4a2d-a80d-35321795f46b)

![image](https://github.com/user-attachments/assets/9768b2c3-8246-41d0-bdb4-cb7849dd4d55)

![image](https://github.com/user-attachments/assets/062311fe-f9e8-4c8c-8aaf-900d4cc02874)

**Commit:** [5d8759e](https://github.com/julia-stevens/fix-the-flow-interactive-website/commit/5d8759e7141cbc0c1fdf1e6af307bb4378a64003)

* Loading animatie toegevoegd in CSS
* In JS wordt deze met een `addEventListener("click")` aangeroepen 
* Wanneer animatie eindigt, wordt deze class uit getoggled en nummer gestart met `playTrack()`
* Object `buttonLabelStates` toegevoegd met "Speel af, Laden en Pauzeer". Deze wordt op in de juiste functies gebruikt om de tekst onder play button aan te passen, bijvoorbeeld bij `loadTrack()`: 

```js
function loadingTrack() {
    if (isPlaying === false) { // als er niks afspeelt, start loading animatie
        buttonImage.classList.toggle("loadingTrack");
        buttonLabel.textContent = buttonLabelStates.loading;
    } else { // als er wel wat afspeelt, pauzeer nummer en verander afbeelding en button label state
        isPlaying = false;
        currentTrack.pause();
        buttonImage.classList.remove("pause-track");
        buttonImage.classList.add("play-track");
        buttonLabel.textContent = buttonLabelStates.start; 
    }
}
```

https://github.com/user-attachments/assets/d1cd7845-be3f-4940-81d8-247ea39c9116