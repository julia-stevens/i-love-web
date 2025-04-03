# Sprint 4 Look and Feel 
## Week 3
### Woensdag 28 november 2024

#### Wat heb je vandaag gedaan? & Wat was je code vraag, hoe heb je het opgelost? Link naar de oplossing

##### 1. Voorbereiding sprint review

Ik heb vandaag de sprint review voorbereid. Dit heb gedaan door vast te stellen wat mijn doelen zijn, mijn demonstratie voor te bereiden en concrete feedback vragen op te stellen. Zie hier het document met alle voorbereiding: https://docs.google.com/document/d/1aGELZ31Uqxx284060BJQSLiAVzfrhFJp0QmmZ4eAKfw/edit?usp=sharing

##### 2. Code vraag opgesteld en opgelost

Zie onderstaande afbeelding voor het overzicht van onze code vragen: 

<img src="https://github.com/user-attachments/assets/fd391bd1-1a20-4013-8203-000b33a14aa1" width="700">

Mijn vraag was: **_Hoe maak ik een accessible, responsive hamburger menu?_** 

Ik liep er namelijk tijdens het handmatig testen van de website tegenaan, dat de links onder het hamburger menu focusable zijn wanneer het menu gesloten is. Ik dacht op te kunnen lossen met een `tabindex="-1"`, maar hiermee leest een screen reader de links alsnog voor én zijn de links niet focusable op een grotere scherm breedte, waar de links altijd zichtbaar zijn en de hamburger weg is. 

Sanne heeft mij op [`inert`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inert) gewezen. Hiermee wordt een element door een screen reader genegeerd én krijgt het geen focus. Met Javascript kun je vervolgens deze `inert` toggelen. Dit hebben we samen toegepast op de hamburger én we hebben een functie geschreven die de scherm breedte checkt en op basis daarvan bepaalt of er überhaupt een `inert` getoggled moet worden. 

Zie [hier](https://github.com/julia-stevens/look-and-feel-corporate-identity/issues/31) de issue waarin ik dit beschrijf

En zie hier de code:  

```html
<ul class="nav-links primary veronica-primary" inert>
    <li> Item in hamburger</li>
    <li> Item in hamburger</li>
    <li> Item in hamburger</li>
</ul>
```

```js
// Hamburger navigatie in nav
const navHamburger = document.querySelector("nav button");
const navMenu = document.querySelector("nav ul");
const navButton = document.querySelector(".nav-button img");

navHamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
    navMenu.classList.toggle("showMenu");
    navButton.classList.toggle("showMenu");

    if (navMenu.hasAttribute("inert")) {
        navMenu.removeAttribute("inert");
    } else {
        navMenu.setAttribute("inert", true);
    }
}

// hamburger als je resized
function reportWindowSize() {
    const windowWidth = window.innerWidth;

    if (windowWidth >= 800) {
        navMenu.removeAttribute("inert");
    } else {
        navMenu.setAttribute("inert", true);
    }
}

// checken als het schermbreedte verandert
window.onresize = reportWindowSize;

// checken bij laden pagina
reportWindowSize();
```