# Sprint 5 Fix the Flow
## Week 1
### Donderdag 5 december 2024

#### Wat heb je vandaag gedaan? 

Ik heb gewerkt aan het maken van de layout voor de programmering pagina. Dit heb ik gedaan met `details`, `summary`, en `@container`

Zie hier de issue: https://github.com/julia-stevens/fix-the-flow-interactive-website/issues/22

**`@container`**

```css
/* FLEX layout details wanneer open */
details[open] {
    flex-grow: 1; 
    padding: 0 1rem 1rem 1rem;
    height: fit-content;
    /* height: 100vh;
    overflow: auto; */
    container: overig-details / inline-size;

    /* FLEX als parent */
    display: flex; 
    flex-direction: column;
    align-items: center;
}

/* Bij container kleiner dan 20rem, andere GRID LAYOUT show-cards */
@container overig-details (width < 20rem) {
    /* GRID layout show-cards op desktop */
    .others-program .show-card {
        /* Grid layout overige show cards */
        .show-card {
            grid-template-columns: .1fr auto;
            grid-template-rows: auto auto auto auto 1fr;
        }

        /* Gekleurde lijn */
        .colored-line {
            grid-column: 1/2;
            grid-row: 1/7;
        }

        /* Titel programmering */
        .title-card {
            grid-row: 1/2;
            grid-column: 2/-1;
            align-self: start; 
            justify-self: center;
            padding-top: .5rem;
            white-space: nowrap; 
        }

        /* Title wordt niet afgebroken en animatie gekoppeld */
        .scroll-title {
            animation: scroll-title 7s linear infinite;
            display: inline-block; 
            padding-left: 1.5rem; 
            white-space: nowrap;
        }
        
        .scroll-title::after {
            content: ''; 
            display: inline-block;
            width: 1rem; 
        }
                
        /* Tijd programmering */
        .time-card {
            grid-row: 2/3; 
            grid-column: 2/-1;
            align-self: end; 
            justify-self: center;
        }

        /* Beschrijving show */
        .info-card {
            display: none;
        }

        /* Afbeelding show */
        .thumbnail-card {
            grid-row: 3/4;
            grid-column: 2/-1;
            align-self: center; 
            justify-self: center;
            width: 40%;
        }

        /* Naam DJ op card */
        .dj-card {
            grid-row: 4/5; 
            grid-column: 2/-1;
            align-self: start; 
            justify-self: center;
            margin: 0; 
            padding: 0; 
        }

        /* Link op card */
        .link-card {
            grid-row: 5/6; 
            grid-column: 2/-1;
            align-self: center;
            justify-self: center;
            margin: .5rem;
        }
    }
}
```