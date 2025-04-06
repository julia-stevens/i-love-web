# Sprint 5 Fix the Flow
## Week 2
### Woensdag 11 december 2024

#### Wat heb je vandaag geleerd over HTML? Wat over CSS? En wat over JS? 
Ik heb geleerd dat je met JS de feedback van input velden kunt aanpassen. Zie onderstaande code: 

```html
<form>
  <fieldset>
    <legend>Zoeken</legend>
    <input required>
    <button type="submit">Zoek!</button>
  </fieldset>
</form>
```

```js
let inputElement = document.querySelector('input');

inputElement.addEventListener('invalid', function(ev) {
  inputElement.setCustomValidity('Dit veld mag niet leeg zijn hoor..');
});
```

#### Wat ga je vrijdag nog toevoegen aan je micro-interactie voor de opdrachtgever? 
Ik ga verder aan de slag met de lay-out. Ik wil nog tekst en iconen toevoegen om duidelijker te maken waar het menu geopend/gesloten kan worden

<img width="296" alt="image" src="https://github.com/user-attachments/assets/6093ce08-bf31-438f-9c4b-d9ade9671103" />

#### Welke functionaliteit wil je vrijdag laten testen? 
Vrijdag wil ik de player en de sidebar met de overige programmaties testen. 