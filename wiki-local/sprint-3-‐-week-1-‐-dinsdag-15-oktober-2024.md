Dit heb gedaan: 

**Workshop positioning gevolgd:**
* Menu button: https://codepen.io/js1909/pen/abeJada

Deze tutorial kan ik goed gebruiken voor mijn project. Ik heb namelijk een muziek player onderaan het scherm en hierop komt een knop, zodat je als gebruik een menu naar boven kunt uitklappen, zie afbeelding

<img width="273" alt="image" src="https://github.com/user-attachments/assets/64ec50b9-8237-4f5a-982a-3ec1913968a8">

In deze tutorial heb ik geleerd hoe ik dit kan maken: 
* `ul` met menu items moeten een `fixed` zijn & een `top, left, right en/of bottom`
* `button` moet een `absolute` positie hebben
* met `transition` de hele `nav` uit beeld positioneren (bv `translate: 0 -100%;`)
* met `sticky` of `fixed` de header op een vaste plek zetten

in JS: 
* gebruik `querySelector` om het menu in een variabele op te slaan
* `addEventListener` gebruik je om de klik van de gebruiker te registeren & een functie aan te roepen
* de aangeroepen functie `toonMenu` `toggle`d de class `toonMenu` --> deze class verwijst naar CSS waarin de position van de `nav` weer in beeld wordt gepositioneerd
* en onderstaande code kun je gebruiken om de hamburger te veranderen in een kruis: 

```css
nav.toonMenu button img {
  /* JOUW CODE HIER - stap 6 */
  /* url kruisje: https://assets.codepen.io/274456/ui-icon-cross.svg */
  content: url(https://assets.codepen.io/274456/ui-icon-cross.svg);
  
}
``` 

* https://codepen.io/js1909/pen/NWQpLLv
* https://codepen.io/js1909/pen/bGXqjyE


**Opnieuw code geschreven voor project Triple**
Commits: 
* [opzet mappen & opzet HTML show blokken](https://github.com/julia-stevens/all-human-accessible-website/commit/0f9263d6eec5d36bce7db8ee2a52d6824dca3a45)
* [grid: vormgeving show blokken](https://github.com/julia-stevens/all-human-accessible-website/commit/7db2f2986cc77ac7f64d43aa42506b6fe02f0643)
* [tijdlijn toegevoegd & hoogte show blokken aangepast](https://github.com/julia-stevens/all-human-accessible-website/commit/5e6ad019bbf8a719d97f5cc29012612f7cf89b4e)


