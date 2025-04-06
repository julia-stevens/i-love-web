# Sprint 4 Look and Feel 
## Week 1
## Dinsdag 12 november 2024

### Wat heb je vandaag gedaan? 

#### Workshop Playful Figma
Ik heb de workshop _Playful Figma_ van Wes gevolgd. Het was de bedoeling om binnen 1,5 uur 3 verschillende variaties te maken hetzelfde ontwerp. Zie hier mijn werk: https://www.figma.com/design/SLPSLjvW63V9go8FCGWmI9/playful-figma-workshop?node-id=0-1&t=MfO5NdmZR3YZayz9-1

Als feedback kreeg ik om bij bv het eerste ontwerp één kleur te kiezen voor hightlights. Bij het tweede ontwerp is er te weinig contrast tussen de call to action knop en de paarse tekst. 

<img src="https://github.com/user-attachments/assets/a49204a1-41c1-4b5e-b1d6-299dd07ff237" width="800">

#### Experiment Custom Properties
Aan de hand van de les van maandag, was ik nieuwsgierig naar het gebruik van custom properties i.c.m. een stylesheet. Voorheen zag ik dit vooral terug in de `:root`, maar ik las dat dit juist niet liever niet gedaan wordt, maar dat custom properties beter verder in de DOM kunnen staan. Ik heb daarom wat onderzoek gedaan aan de hand van deze sites: 
* https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
* https://www.smashingmagazine.com/2018/05/css-custom-properties-strategy-guide/
* https://css-tricks.com/breaking-css-custom-properties-out-of-root-might-be-a-good-idea/
* https://lea.verou.me/blog/2021/10/custom-properties-with-defaults/

Zie hieronder mijn aantekeningen: 

<img src="https://github.com/user-attachments/assets/4d3a8c67-6063-4213-8978-bc978e86cf42" width="400"> <img src="https://github.com/user-attachments/assets/620a7aef-36a3-4567-a587-c39eff016a47" width="400"> <img src="https://github.com/user-attachments/assets/b1c8560d-f7ff-41dd-b047-cdff7b45178b" width="400"> <img src="https://github.com/user-attachments/assets/4e7aa5f6-add9-4c49-ad97-f099e1d91497" width="400">

Op basis van deze informatie, heb ik één van de [voorbeelden](https://css-tricks.com/breaking-css-custom-properties-out-of-root-might-be-a-good-idea/) gemaakt in mijn i love web omgeving, om beter bekend te worden met custom properties. 

Zie hier het resultaat: https://julia-stevens.github.io/i-love-web/experimenten/customProperties.html

In HTML kan je meerdere `class`es koppelen 
```html
<ul class="icon-list checkbox-list"></ul>
```

En deze in CSS stylen aan de hand van custom properties
```css
.checkbox-list {
    --icon: var(--checkbox);
    --icon-color: cadetblue;
}

.icon-list li::before {
    content: var(--icon);
    color: var(--icon-color);
    font-family: "Font Awesome 5 Free";
    font-weight: 900; 
    float: left; 
    margin-left: -1.5em;
}
```

#### Schetsen Mediahuis
Op basis van de feedback van de opdrachtgever vanuit de [sprint review](https://github.com/julia-stevens/i-love-web/wiki/sprint-3-%E2%80%90-week-2-%E2%80%90-donderdag-24-oktober-2024)(sprint 3), heb ik nieuwe schetsen gemaakt voor de radiozenders. Zie onderstaande afbeeldingen. 

<img src="https://github.com/user-attachments/assets/97455e9f-bf25-4427-a864-cf05b72a4822" width="400"><img src="https://github.com/user-attachments/assets/3cdd6c29-db1b-4644-a02d-766e6246b705" width="400"><img src="https://github.com/user-attachments/assets/1c55968f-1751-4435-be81-5aa606344b34" width="400"><img src="https://github.com/user-attachments/assets/9b33fbed-b90c-466a-970f-5067c7d5ba89" width="400"><img src="https://github.com/user-attachments/assets/19ce3718-01d2-4cf2-bf37-c06f6eac0dbc" width="400"><img src="https://github.com/user-attachments/assets/ff93d65f-cb2e-49b9-b28b-3cfb8e0f2d55" width="400"><img src="https://github.com/user-attachments/assets/d93e5ac8-2ad2-401e-8b65-bd22e19a5aae" width="400"><img src="https://github.com/user-attachments/assets/f87d32a6-3659-4dbf-8ff0-28d433af38c9" width="400"><img src="" width="400"><img src="https://github.com/user-attachments/assets/207ff97f-ecd8-4e0f-bb74-203ff3b70a1c" width="400"><img src="https://github.com/user-attachments/assets/af36891b-9c27-46b3-b61b-3bd99005dbd7" width="400"><img src="https://github.com/user-attachments/assets/c8a22a51-3cb6-41c2-b62b-97efb1040ccf" width="400">

#### I love web
Tijdens de vakantie heb ik een nieuw ontwerp gemaakt voor mijn I love web omgeving. Dit wordt een 9-delige grid weergave van verschillende collages die ik heb gemaakt. Ik wil uiteindelijk dat bij het hoveren over een afbeelding er nieuw informatie tevoorschijn komt, en bv experimenteren te zien zijn. Voor nu richt ik me op het visuele gedeelte. 

Zie hier het ontwerp in Figma: https://www.figma.com/design/otb3AD4m9dY7Uv1wDWN2yO/i-love-web?node-id=0-1&t=OnPg9NzJG7vT65Pj-1

Zie hier de website: https://julia-stevens.github.io/i-love-web/i-love-web/iloveweb.html

Zie hier de update van vandaag: 

https://github.com/user-attachments/assets/1a6c5f78-7583-4a7b-87ec-e76a2fab895b


