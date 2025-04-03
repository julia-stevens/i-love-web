# Sprint 6 The Startup
## Week 3
### Donderdag 23 januari 2025

#### Sprint review
Zie hier de issue waarin ik alles heb gedocumenteerd voor de sprint review: 

#### `:hover > :not(:hover)`

Voor mijn digital garden heb ik een collage gemaakt, waarbij er bij een hover over een van de afbeeldingen, de rest van de afbeeldingen vervagen. Dit heb ik toen met vrij omslachtige JS gedaan, omdat ik toen niet wist hoe ik dit anders kon doen. 
Nu heb ik een artikel gevonden die met vrij eenvoudige CSS dit probleem oplost. Zie hier dit artikel: https://nerdy.dev/hover-not-hover-sorry-not-sorry

Ik heb dit uitgetest als experiment in mijn I love web pagina. En ga dit komende tijd toepassen op mijn digital garden. 

Zie hier het experiment: https://julia-stevens.github.io/i-love-web/experimenten/not-hover.html

https://github.com/user-attachments/assets/f67cfb61-4359-4714-a61e-75eb41444df3

```css
ul {
  @media (hover) and (prefers-reduced-motion: no-preference) {
    & > li {
      transition: opacity .3s var(--ease-3);
    }
    
    &:hover > li:not(:hover) {
      opacity: .25;
    }
  }
}
```