# Sprint 2
## The client website

### Woensdag 9 oktober 2024

### Sprint review voorbereiden 
Ik heb met mijn groepje de sprint review voorbereid. Dit hebben we gedaan door individueel doelen op te stellen en de demonstratie's voor te bereiden. Vervolgens hebben we elkaar feedback gegeven en onze demo's aangescherpt. 

Zie hier het document: https://docs.google.com/document/d/1Ch_OdGQMXksxTuk-CDjSvibddJzWGnsQnC6eBpQgqEw/edit?usp=sharing

### Leervragen Sprint Review: 
- Wat laat je zien tijdens een sprint review? 
- Hoe stel je de juiste vragen, waarmee je concrete feedback krijgt? 
- Wat kan ik doen met de feedback die ik krijg? 
- Wat is het doel van de sprint review? 
- Hoe schrijf je een read me? Wat zet je hier in? 


### I love web - experiment lettertype
Ik heb een start gemaakt met mijn I love web website. Als concept wil ik graag een kijkje bieden in mijn notebook en het leek mij een gaaf idee om mijn eigen handschrift te digitaliseren tot een font. Dit is gelukt, ik hiervoor gebruik gemaakt van: https://www.calligraphr.com/en/

Ik heb via deze website letters en cijfers geschreven, deze geüpload en gedownload als .ttf bestand. Daarnaast heb ik met een `radial-gradient` een bullet journal achtergrond nagemaakt

Vervolgens heb ik volgens deze bron mijn eigen font kunnen toepassen in mijn I love web: https://www.hacksoft.io/blog/using-multiple-font-files-the-right-way

Hiervoor heb ik deze code geschreven: 

```css
@font-face {
  font-family: 'Julia Stevens';
  src: url(/assests/Juliastevens-Regular.ttf) format('truetype');
}

body {
  font-family: 'Julia Stevens', sans-serif;
  font-size: 16px; 

  background-image: 
    radial-gradient(
        grey 1px,
        transparent 0px
  );
  background-size: 30px 30px;
  overflow: hidden;
}
```

<img width="1440" alt="image" src="https://github.com/user-attachments/assets/4259a1f0-6c49-4367-8e5d-f0e8c21e74e9">

 
