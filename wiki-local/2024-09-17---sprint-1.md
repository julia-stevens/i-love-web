# sprint 1: your tribe 
## squad page
## disndag 17 september 

### bouwen 
Vandaag heb ik samen met mijn groepje een plan gemaakt voor het samenvoegen van onze code. Voor een groot deel hebben wij deze code individueel namelijk al geschreven. Om dit op een gestructureerde manier te doen, hebben we onze code en het resultaat naast elkaar gehouden en per onderdeel bepaald welke code het best past bij het ontwerp, en welke code al het verst ontwikkeld is, denk bijvoorbeeld aan responsive. Zo hebben we een nieuwe index.html aangemaakt en per onderdeel hier code in geplakt en in een gekoppeld css document de css toegevoegd. 
Terwijl we dit aan het doen waren, besproken we ook per onderdeel wat er aangepast of veranderd moet worden. Hierdoor kregen we direct een concreet overzicht van to do's en konden we deze gaan verdelen, zie foto: 
* <img width="396" alt="image" src="https://github.com/user-attachments/assets/e48a7ef1-a295-4b20-9d99-c3fab60229aa">


### wat heb ik geleerd? 
### workshop css transform en transition
Vanochtend heb ik de workshop over css transform en transitions gevolgd. Ik heb hier heel veel geleerd, omdat ik niet echt ervaring had met dit onderwerp. Ik heb de eerste opdracht volledig kunnen afronden, zie hier: https://codepen.io/js1909/pen/vYqqXYZ?editors=0100

```css
     aria-label="linkje" a {
	position:relative;
        // geen standaard streepje 	
	text-decoration:none;
	// geen standaard focus ring
	outline:none;
        }

        // het nieuwe streepje
        [aria-label="linkje"] a::after {
	content:"";
	position:absolute;
	top:100%;
	left:0%;
	right:0%;
	height:.2em;
	background-color:currentcolor;
	
	// JOUW CODE HIER 
	// horizontaal helemaal plat (0), verticaal normale maat (1)
	// transform-origin rechts
	// alleen de scale in .3s veranderen
	scale:0 1;
	transform-origin:right;
	transition:scale .3s;
}

        // hover en focus
       [aria-label="linkje"] a:is(:hover, :focus)::after {
	// JOUW CODE HIER
	// transform-origin links
	// horizontaal weer normaal (1), verticaal normale maat (1)
	scale:1 1;
	transform-origin:left;
}
```

Een toepasselijk onderdeel vind ik bijvoorbeeld deze, omdat deze vrij eenvoudig gebruikt kan worden op de squad page: 

https://github.com/user-attachments/assets/7678874c-a26c-4b43-8703-eabc4648cd26

### werken met een slider van swiper
Ik heb vandaag een slider gemaakt met behulp van swiper, hiervoor heb ik een tutorial gevolgd. [hier komt nog een link naar de code, maar deze staat voor nu nog niet online]

### wat wil ik gaan uitzoeken 
1. Hoewel de slider wel werkt, werkt het nog niet helemaal zoals ik wil. Ik wil namelijk niet dat het de gehele breedte van het beeld in neemt en dat de next en previous knoppen meer witruimte hebben. Dit is mij vandaag nog niet gelukt, dus ik ga me hier verder in verdiepen, door de documentatie goed door te nemen. 



