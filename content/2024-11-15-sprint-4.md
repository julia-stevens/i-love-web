# Sprint 4 Look and Feel 
## Week 1
## Vrijdag 15 november 2024

### Wat heb je vandaag gedaan? 

#### Code review Stylesheet
Ik heb samen met mijn groep feedback gegeven op de stylesheet van 4 andere groepjes, zie hier de issues **(zie vooral de gesloten issues)**
* [Bieb in bloei, squad G](https://github.com/kimnikitaschijf/look-and-feel-styleguide/issues)
* [Biek in bloei, squad H](https://github.com/Sidopjescherm/look-and-feel-styleguide/issues)
* [Drop and heel, squad G](https://github.com/Matthijs217/look-and-feel-styleguide/issues)
* [Drop and heel, squad H](https://github.com/RickFDND/look-and-feel-styleguide/issues)

#### Ontvangen feedback verwerkt
Ook wij hebben issues met feedback gekregen om de stylesheet te verbeteren. Deze issues hebben we verdeeld tussen de aanwezige groepsleden. Ik ben aan de slag gegaan met de volgende issues: 

##### [1. Feedback op naamgeving](https://github.com/vsheo/look-and-feel-styleguide/issues/3)
**Commit:** [8dd8363](https://github.com/vsheo/look-and-feel-styleguide/commit/8dd8363a5168ca585bd8ebd5d1b876c4ce7174c6) 

De class names zijn aangepast: 
* `brand-primary` is nu `primary`
* `brand-primary-veronica` is nu `veronica-primary`

In HTML kan dit niet herschreven worden als `"brand-primary veronica"`, omdat Radio Veronica meerdere kleuren heeft en dit kan dus niet één class zijn. Het leek ons dus het overzichtelijkste om dit dezelfde naam te geven als de class die daarvoor staat, in dit geval dus: `veronica-primary`

##### [2. Classes en custom properties](https://github.com/vsheo/look-and-feel-styleguide/issues/6)
**Commit:** [8dd8363](https://github.com/vsheo/look-and-feel-styleguide/commit/8dd8363a5168ca585bd8ebd5d1b876c4ce7174c6)

1. 100p staat voor de radiozender 100%NL, aangezien je geen '%' kunt gebruiken, is dit aangegeven met een 'p'. Om het leesbaarder te maken hebben we '100' veranderd naar 'honderd', dus `100p` is nu `honderdp`

2. De class names zijn aangepast: 
* `brand-primary` is nu `primary`
* `brand-primary-veronica` is nu `veronica-primary`

3. In de [README](https://github.com/vsheo/look-and-feel-styleguide/blob/main/README.md) staat een uitleg over hoe de twee classes toegepast kunnen worden. Hieronder een uitleg: 

Kort gezegd, in de `primary` class wordt bv. de achtergrond kleur bepaald met de variabele `--brand-primary`. Voor elk radiostation (Veronica, SLAM, 100%NL en Sublime) is een class gemaakt waarin er een achtergrond wordt meegegeven aan de `--brand-primary` variabele. Hiermee zorgen we ervoor dat we maar één moeten aangegeven dát een element een achtergrond kleur krijgt en kunnen we in HTML, door het toevoegen van een class (zoals `primary-veronica`), bepalen welke kleur dit moet zijn.  

##### [3. Uitleg README](https://github.com/vsheo/look-and-feel-styleguide/issues/4)
**Commit**:  4a01c02

README aangepast en meer uitleg toegevoegd van hoe de code kan worden toegepast, met concrete voorbeelden en een korte uitleg, waarom er 2 classes worden gebruikt in HTML

#### README aangepast
Op basis van de feedback van medestudenten heb ik in de ReadMe meer uitleg gezet over hoe de code werkt en hoe deze toegepast kan worden. 

Zie [README](https://github.com/vsheo/look-and-feel-styleguide/blob/main/README.md)

### Welke code, die je hebt gezien, neem je mee? 
Ik zag bij een van de groepjes die wij feedback gegeven hebben, dat zij ook voor globale elementen style hebben toegepast in hun stylesheet. Dit was, bijvoorbeeld, onderstaande code en wij zouden dit ook nog kunnen verwerken in onze stylesheet. 

```css
* {
 padding: 0; 
 margin: 0; 
 box-sizing: border-box; 
}
```