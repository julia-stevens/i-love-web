# Sprint 4 Look and Feel 
## Week 1
## Woensdag 13 november 2024

### Wat heb je vandaag gedaan? / Wat heb je geleerd? 
#### Custom Properties & Stylesheet
Tijdens de les zijn we aan de slag gegaan met custom properties en hebben we deze toegepast in onze eigen stylesheet. 

Zie hier het resultaat: https://vsheo.github.io/look-and-feel-styleguide/

Ik heb o.a. de `class`es in HTML aangepast, door een `class` toe te voegen: 

```html
<code class="brand-primary brand-primary-veronica">#0091FF</code>
```

In CSS definieer je dan één keer `brand-primary` en per radiozender geef je andere waarde (kleur) mee aan de custom property die in `brand-primary` de achtergrond kleur bepaald: 

```css
/* dit wordt dus per radiozender herhaald */
.brand-primary-veronica { 
    --brand-primary: #0091FF;
}

/* deze regel hoef ik dan maar één keer te definiëren */
.brand-secondary {
    background-color: var(--brand-secondary);
}
```

Daarnaast heb ik het font toegevoegd door het bestand met de juiste `font-face` toe te voegen en dit in CSS aan te roepen met `@font-face`
```css
/* Extra Light */
@font-face {
    font-family: 'Brutal Type';
    src: url('./font/BrutalType-ExtraLight.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
}
```

Eerst hadden we veel custom properties in de `:root` staan, maar vandaag hebben we geleerd dat het beter is om deze dieper in de DOM te stoppen, dit hebben we dus aangepast, door o.a. classes toe te voegen voor de kleuren: https://github.com/vsheo/look-and-feel-styleguide/blob/241f13059d4414676040bf38ee261966de9d70a5/mediahuis.css#L21-L161.

Daarnaast hebben we de `:root` vervangen voor `body` voor een aantal globale eenheden, zoals: `font-size`: https://github.com/vsheo/look-and-feel-styleguide/blob/241f13059d4414676040bf38ee261966de9d70a5/mediahuis.css#L9-L12. 

Ook heb ik geleerd dat specificity erg belangrijk is, met name bij het gebruiken en samenwerken van verschillende css bestanden. Hiervoor heb ik verschillende [experimenten uitgevoerd](https://github.com/julia-stevens/look-and-feel-corporate-identity/tree/main/specificity%20experimenten).

Ik heb geleerd dat `element` `class` `id` en `inline` een eigen 'weight' hebben en bepalen op welke volgorde stylen worden toegepast: 
| naam |  weight |
| ---- | ---- |
| element | 0 0 0 1 |
| class | 0 0 1 0|
| id | 0 1 0 0 |
| inline | 1 0 0 0 |

Zie hier de resultaten van de experimenten: https://github.com/julia-stevens/look-and-feel-corporate-identity/blob/main/specificity%20experimenten/specificity.html

### Hoe ga je de nieuwe CSS in code verwerken? 
Deze stylesheet ga ik koppelen aan mijn eigen werk. 

### Waar ga je afspraken noteren? 
Onze afspraken heb ik genoteerd in de [ReadMe](https://github.com/vsheo/look-and-feel-styleguide/blob/main/README.md)

Vandaag hebben we een nieuwe afspraak gemaakt, namelijk over de benaming van (nieuwe) custom properties. Dit doen we volgens deze regel: 
[element naam]-[element naam specificatie]-[beschrijving functie custom property]

### Figma
Gister ben ik aan de slag gegaan met het maken van nieuwe [schetsen](https://github.com/julia-stevens/i-love-web/wiki/sprint-4-%E2%80%90-week-1-%E2%80%90-dinsdag-12-november-2024#schetsen-mediahuis) voor mijn website voor de Mediahuis opdracht. Vandaag heb ik dit uitgewerkt in Figma, kijk hiervoor mijn 'SPRINT 4': https://www.figma.com/design/4i3L1RyzBQJ9AQWtMKp1Zr/Mediahuis-Gids-Design?node-id=0-1&t=Hcpn01ID35ABVajH-1. 

<img src="https://github.com/user-attachments/assets/3bd5a155-73f4-4d27-985c-86e71fba5194" width="400"><img src="https://github.com/user-attachments/assets/01d195a1-b096-4052-83f1-4ff98319198e" width="400"><img src="https://github.com/user-attachments/assets/aae4a043-cf7e-4677-9b6f-41b1bf0d9efa" width="800">


