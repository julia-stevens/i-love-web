# Sprint 8 - Server-Side Rendering
## Week 1
### Maandag 3 maart 2025
#### Sprintplanning
We zijn de sprint begonnen met het maken van een sprint planning

<img width="655" alt="image" src="https://github.com/user-attachments/assets/e1fcfb2b-5dd9-439f-9a3e-9217bf5e22bf" />

#### Briefing/Debriefing
Voor de voorbereiding van de briefing van de opdrachtgever, hebben we een mindmap gemaakt en daarop in kaart gebracht wat we al wel weten en wat nog niet: 

<img width="546" alt="image" src="https://github.com/user-attachments/assets/98daa800-6a83-4e4e-92ff-ee5e3cee5ce7" />

Tijdens de briefing heb ik aantekeningen gemaakt en deze gebruikt tijdens het schrijven van de individuele debrief. 

In deze issue heb ik alles rondom de briefing gedocumenteerd: https://github.com/julia-stevens/server-side-rendering-server-side-website/issues/1

#### Interface inventory
Vandaag hebben we ook gezamenlijk de interface inventory gemaakt, zie [Figma(https://www.figma.com/design/BfNlwlghQo4GKty5b9saOC/Oncollaboration?node-id=0-1&t=P8qR5i0ueChNkMp0-1)

<img src="https://github.com/user-attachments/assets/c3b9ee8d-1076-4499-a351-d1edebad6916" width="450">

### Dinsdag 4 maart 2025
Vandaag ben ik aan de slag gegaan met het maken van schetsen en wireflows voor Oncollaboration. Dit heb ik allemaal gedocumenteerd in deze issues: 
* [prototype naar HTML](https://github.com/julia-stevens/server-side-rendering-server-side-website/issues/2)
* [one column layout](https://github.com/julia-stevens/server-side-rendering-server-side-website/issues/3)

### Woensdag 5 maart 2025
Tijdens de les heb ik geleerd hoe je verschillende databases kunt 'koppelen' in één Directus fetch, namelijk met bv `.*.*` 
Hiermee heb ik mijn code flink kunnen vereenvoudigen, aangezien de databases in één link al gekoppeld worden. Ik heb een variabele aangemaakt waarin ik de databases van de webinars, speakers, resources en categories koppel: `const webinarFields = "?fields=*,speakers.*.*,resources.*.*,categories.*.*"`

#### Routes aangemaakt
Ook heb ik gewerkt aan het aanmaken van de routes voor de detail pagina's van de webinars. In de index.liquid heb ik een `a` tag met de `href` die verwijst naar de slug van de webinar: `<a href="/webinar/{{ webinar.slug }}">`

In de server.js heb ik vervolgens een .get geschreven die de slug ophaald en de juiste webinar hierbij zoekt, aan de hand van de filter in de Directus link

```js
app.get("/webinar/:slug", async function (request, response) {
  // Variabelen fetch link individuele webinar pagina
  const slug = request.params.slug
  const filter = `&filter={"slug":"${slug}"}` 
  
  const webinarResponse = await fetch(`${apiEndpoint}${apiWebinarEndpoint}${webinarFields}${filter}`)
  const webinarResponseJSON = await webinarResponse.json()

  const contouringResponse = await fetch(`${apiEndpoint}${apiContouringEndpoint}`)
  const contouringResponseJSON = await contouringResponse.json()


  response.render("webinar.liquid", { webinars: webinarResponseJSON.data, contourings: contouringResponseJSON.data })
})
```

### Donderdag 6 maart 2025
Vandaag ben ik aan de slag gegaan met de styling van de pagina's en heb ik met name gewerkt aan de one column layout, dus aan de mobiele versie. Dit heb ik allemaal gedocumenteerd in: 
* [one column layout](https://github.com/julia-stevens/server-side-rendering-server-side-website/issues/3)

Ook heb ik feedback gevraagd en gekregen van [Krijn (prototype naar HTML)](https://github.com/julia-stevens/server-side-rendering-server-side-website/issues/2#issuecomment-2703741129)

### Vrijdag 7 maart 2025
#### Code/design review
##### Gegegeven feedback 
* [Iris - DRY in server.js](https://github.com/irisvw/server-side-rendering-server-side-website/issues/5)
* [Anouk - get routes aanmaken](https://github.com/AnoukdeRooij24/server-side-rendering-server-side-website/issues/4)
* [Sebastiaan - get routes aanmaken](https://github.com/Sebastiaan-hva/server-side-rendering-server-side-website/issues/6)
* [Sebastiaan - server.js & liquid](https://github.com/Sebastiaan-hva/server-side-rendering-server-side-website/issues/7)

##### Ontvangen feedback 
* [Feedback Iris server.js](https://github.com/julia-stevens/server-side-rendering-server-side-website/issues/7)
* [Feedback Anouk ontwerp](https://github.com/julia-stevens/server-side-rendering-server-side-website/issues/3#issuecomment-2706100037)
* [Koop - filter functie](https://github.com/julia-stevens/server-side-rendering-server-side-website/issues/4)
* [Koop - sorteer functie](https://github.com/julia-stevens/server-side-rendering-server-side-website/issues/5)

#### We love web
https://github.com/julia-stevens/i-love-web/wiki/We-love-Web#cassie-evans---gsap-07-03-25