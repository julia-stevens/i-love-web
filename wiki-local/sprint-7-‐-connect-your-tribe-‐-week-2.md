# Sprint 7 - Connect Your Tribe
## Week 2

### Maandag 10 februari 2025
#### Sprintplanning
Ik heb een sprintplanning gemaakt met mijn groepje: 

<img src="https://github.com/user-attachments/assets/82c685f3-76e4-45c9-a83b-395113a2edb2" width="400">

#### Sorteren, Filteren, Zoeken & Squadpage ontwerpen 
Zie in [deze issue](https://github.com/julia-stevens/connect-your-tribe-squad-page/issues/1#issue-2843485111) mijn schetsen en high-fi ontwerpen in Figma. Bekijk hier ook de uitwerkingen van de workshop m.b.t. het zoeken, filteren en sorteren met Directus. 

### Dinsdag 11 februari 2025
Vandaag ben ik verder gaan werken aan het bouwen van de squadpage. Ik heb een stylesheet gemaakt en gewerkt aan de vormgeving van de pagina. 

Ik merk dat ik erg vastloop met het filteren op de favoriete kleuren, en ik weet nog niet goed ik doe moet toepassen met een filter. 

Ik heb inmiddels wel de juiste fetch link, namelijk: 

```js
"https://fdnd.directus.app/items/person/?fields=fav_color&filter[fav_color][_neq]=null&groupBy=fav_color&aggregate[count]=fav_color&sort=-count.fav_color&filter{_and:[{squads:{squad_id:{tribe:{name:FDND%20Jaar%201}}}},{squads:{squad_id:{cohort:2425}}}]}"
```

### Woensdag 12 februari 2025
#### URL design
<img src="https://github.com/user-attachments/assets/182616f8-809f-4863-954f-234442e33474" width="450">

Ik loop nog erg vast met het maken van nieuwe routes en url's. Ik begrijp nog niet helemaal hoe ik dit moet verwezenlijken. 

### Donderdag 13 februari 2025
Met hulp van Suus begrijp ik hoe ik nieuwe routes kan aanmaken in de `server.js` hiermee heb ik een statische en dynamischere `app.get` gemaakt:

```js
// statisch
app.get('/kleur/zwart', async function (request, response){
  const hexcode = "9914e1";
  const personResponse = await fetch(`https://fdnd.directus.app/items/person/?sort=name&fields=name,github_handle,avatar,fav_color&filter={"fav_color":"%23${hexcode}"}&filter{_and:[{squads:{squad_id:{tribe:{name:FDND%20Jaar%201}}}},{squads:{squad_id:{cohort:2425}}}]}`)
  const personResponseJSON = await personResponse.json()
  response.render('kleur.liquid', {persons: personResponseJSON.data})
}) 

// dynamisch --> kleur is nieuwe pagina
app.get('/kleur/:fav_color', async function (request, response){
  let hexColor = request.params.fav_color;
  hexColor = hexColor.slice(1);
  const personColorResponse = await fetch(`https://fdnd.directus.app/items/person/?sort=name&fields=name,github_handle,avatar,fav_color&filter={"fav_color":"%23${hexColor}"}&filter{_and:[{squads:{squad_id:{tribe:{name:FDND%20Jaar%201}}}},{squads:{squad_id:{cohort:2425}}}]}`);
  const personColorResponseJSON = await personColorResponse.json();
  response.render('kleur.liquid', {persons: personColorResponseJSON.data})
})
```

Op basis van deze code, heb ik met Joost met de `request.query.fav_color` een vernieuwde `app.get` gemaakt: 

```js
app.get('/', async function (request, response) {
  const colorsResponse = await fetch(`${apiEndpoint}/${fieldFavColor}${filterOnlyFilledFavColor}${groupByFavColor}${countFavColor}${sortByCountFavColorDesc}${filterStudentsCurrentYear}`)
  const colorsResponseJSON = await colorsResponse.json()
  let personResponseJSON

  if(request.query.fav_color) {
    let hexColor = request.query.fav_color;
    hexColor = hexColor.slice(1);
    const personResponse = await fetch(`${apiEndpoint}/${sortByName}${fields}&filter={"fav_color":"%23${hexColor}"}${filterStudentsCurrentYear}`)
    personResponseJSON = await personResponse.json();  
  } else { 
      const personResponse = await fetch(`${apiEndpoint}/${sortByName}${fields}${filterOnlyFilledFavColor}${filterStudentsCurrentYear}`)
      personResponseJSON = await personResponse.json();  
  }
  response.render('index.liquid', {persons: personResponseJSON.data, squads: squadResponseJSON.data, colors: colorsResponseJSON.data})
})
```

Ik ben ook aan de slag gegaan met het leesbaarder schrijven van de fetch links & het vertonen van de actieve filter radio: 
* [Issue leesbare links met template literals](https://github.com/julia-stevens/connect-your-tribe-squad-page/issues/2)
* [Issue tonen actieve filter](https://github.com/julia-stevens/connect-your-tribe-squad-page/issues/3)

### Vrijdag 14 februari 2025
#### Code/design review

<img src="https://github.com/user-attachments/assets/778101de-5b8e-440d-84f6-845bdf3fcf4a" width="450">

##### Gegeven feedback
* [Amber](https://github.com/ambersr/connect-your-tribe-squad-page/issues/6)
* [Marcin](https://github.com/MarsGotBars/connect-your-tribe-squad-page/issues/3)
* [Colin](https://github.com/ColindeGroot/connect-your-tribe-squad-page/issues/6)

##### Ontvangen feedback 
https://github.com/julia-stevens/connect-your-tribe-squad-page/issues/4

#### Concepten vergelijken & nieuwe ideeën schetsen 
<img src="https://github.com/user-attachments/assets/704c2b6a-6c9b-402b-a252-db8b65e6176f" width="450">
<img width="290" alt="image" src="https://github.com/user-attachments/assets/e351441c-c45a-44a8-82e9-75edc691fa6a" />
<img width="303" alt="image" src="https://github.com/user-attachments/assets/65076343-c019-4b33-9b51-7b6dd47cb654" />
<img width="274" alt="image" src="https://github.com/user-attachments/assets/fc399c8c-965f-4ea1-bfbe-a004e15fe095" />

#### We love web - Kilian Valkhof
Bekijk [hier](https://github.com/julia-stevens/i-love-web/wiki/We-love-Web#kilian-valkhof---polypane-14-12-25) mijn aantekeningen van de We love web van Kilian 
