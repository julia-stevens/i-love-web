# Sprint 7 - Connect Your Tribe
## Week 3
### Maandag 24 februari 2025
#### Workshop User Generated Content
In de workshop zijn we aan de slag gegaan met `get` en `post` en hebben we een eenvoudig formulier aangemaakt om te oefenen met het doen van een `POST`. 

```liquid
<form method="post" action="/berichten">
    <label>Message
        <input type="text" name="messageInput">
    </label>
    <button type="submit">Submit</button>
</form>

<ul>
    {% for message in messages %}
        <li>{{ message }}</li>
    {% endfor %}
</ul>
```

```js
app.get('/berichten', async function (request, response) {
  response.render('messages.liquid', {messages: messages})
})

app.post('/berichten', async function (request, response) {
  messages.push(request.body.messageInput)
  response.redirect(303, '/berichten') // redirect en stuur daarna terug met GET route
})
```

#### Ideeën samenvoegen, schetsen en nieuw idee
Ook hebben we als groep nieuwe ideeën gegenereerd en ideeën samengevoegd: 

<img width="274" alt="image" src="https://github.com/user-attachments/assets/1a710abd-188a-4c3f-8c81-dc434f9965aa" />
<img width="299" alt="image" src="https://github.com/user-attachments/assets/b2133337-ac7c-4d85-a2d4-8ec74231e300" />
<img width="286" alt="image" src="https://github.com/user-attachments/assets/65b0df5f-f586-4aea-9694-79c5c518d26a" />
<img width="290" alt="image" src="https://github.com/user-attachments/assets/cf9fc3f6-fd45-46f2-96cd-fd8bcf698a00" />

#### Gezamenlijke schets & wireflow met URL design
<img width="487" alt="image" src="https://github.com/user-attachments/assets/410da253-2120-464c-a96b-cf6d725d1c9b" />
<img width="837" alt="image" src="https://github.com/user-attachments/assets/0f2c81a1-bbe2-4f7e-b4ee-b76208b7c1f4" />

Op basis van deze ideeën hebben zijn we tot één gezamenlijk idee gekomen, namelijk. Hier hebben we een gezamenlijk schets bij gemaakt en een wireflow met URL design

#### Samenwerking
* [Issues aangemaakt en verdeeld](https://github.com/julia-stevens/connect-your-tribe-team-squad-page-flex/issues?q=is%3Aissue%20state%3Aclosed)
* [Code conventies opgeschreven](https://github.com/julia-stevens/connect-your-tribe-team-squad-page-flex?tab=readme-ov-file#afspraken)
* [Gezamenlijke stylesheet gemaakt](https://github.com/julia-stevens/connect-your-tribe-team-squad-page-flex/blob/main/public/styles/stylesheet.css)

Ik ben vandaag ook aan de slag gegaan met mijn eerste issues: 
* [header partial](https://github.com/julia-stevens/connect-your-tribe-team-squad-page-flex/issues/2)
* [team cards](https://github.com/julia-stevens/connect-your-tribe-team-squad-page-flex/issues/7)

### Dinsdag 25 februari 2025
Ik ben vandaag verder gegaan met het maken van de team cards. Ik had gister een overzicht van de teams kunnen genereren met hierbij de bijbehorende leden per team. Ik ben verder gegaan met de styling van de cards en heb een start gemaakt met de functionaliteit om de teams te kunnen raten. 
* [team cards](https://github.com/julia-stevens/connect-your-tribe-team-squad-page-flex/issues/7)
* [rating functionaliteit](https://github.com/julia-stevens/connect-your-tribe-team-squad-page-flex/issues/8)

Formulier met `method="post"`

```liquid
        <form method="post" action="/">
          <h3>Rating</h3>
          <label for="ratingInput{{ team.teamName | replace: ' ', '-' }}" class="input-output"> Beoordeel de squadpage van Team {{ team.teamName }}</label>
          <div class="input-output">
              <input type="hidden" name="teamID" value="Team Flex / Rating for Team {{ team.teamName }}">
              <input type="range" id="ratingInput{{ team.teamName | replace: ' ', '-' }}" name="ratingInput" min="1" max="10" step="1" value="{{ team.rating  }}">
              <output id="amountOutput{{ team.teamName | replace: ' ', '-' }}" for="ratingInput">{{ team.rating  }}</output>
          </div>
          <button type="submit" class="btn-small">Verstuur</button>
        </form>
```

### Woensdag 26 februari 2025
#### Wrap up
We hebben vandaag gewerkt aan de wrap up. Hiervoor hebben we een stand-up gehouden om inzicht te krijgen in hoe iedereen ervoor staat, wat er is gedaan, wat er gedaan gaat worden en waar iedereen vastloopt. 
<img width="976" alt="image" src="https://github.com/user-attachments/assets/d3d6cdc0-6d1b-4186-8d08-3e979b9d9b41" />

Ik liep zelf vast bij de laatste stappen om de opgeslagen ratings aan de teams te koppelen en vervolgens het gemiddelde te berekenen. Hier heeft Dion mee bij geholpen en is deze code geschreven

```js
  const messages = messagesResponseJSON.data;
  teams.forEach(team => { // loop door de teams
    const ratings = messages.filter((a) => a.for === `Team Flex / Rating for Team ${team.teamName}`); // filter alle berichten per team en stop in nieuwe array (ratings)
    let rating = 0;

    if (ratings.length !== 0) { // als er ratings zijn
      rating = 0
      ratings.forEach((r) => {
        rating += parseInt(r.text); // zet om naar int en tel op (want ratings zijn strings)
      })
      rating /= ratings.length; // reken remiddelde uit (totaal ratings delen door aantal)
    };

    team.rating = rating.toFixed(1); // 1 decimaal achter komma
  })

  // sort ratings highest to lowest
  teams = teams.sort((a, b) => b.rating - a.rating); 
```

### Donderdag 27 februari 2025
Vandaag heb ik een `/admin` pagina gemaakt waarmee alle ingestuurde ratings uit de database verwijderd worden: https://github.com/julia-stevens/connect-your-tribe-team-squad-page-flex/blob/1c95cc390535614a80ac65e8717d9b859e494a13/server.js#L169-L185

Ook hebben we de README geschreven: https://github.com/julia-stevens/connect-your-tribe-team-squad-page-flex?tab=readme-ov-file#squad-page---team-flex

Daarnaast heb ik nog gewerkt aan het oplossen van verschillende W3C errors en de responsiviteit. 

### Vrijdag 28 februari 2025
Voor de retrospective hebben we verschillende tekeningen gemaakt. Hiervoor hebben we eerst do's en dont's beschreven: 
<img width="419" alt="image" src="https://github.com/user-attachments/assets/5567b522-3a27-4dcc-86a2-690652f309c3" />

Vervolgens hebben we de samenwerking gevisualiseerd met de piek en dal tekening: 
<img width="743" alt="image" src="https://github.com/user-attachments/assets/274c9167-97e1-411e-9186-610579677fd3" />

En gezamenlijk hebben we een tekening gemaakt met het samenwerkingsproces en hoe wij dit ervaren hebben, genaamd: _Van brainstorm tot meesterwerk_ 

<img width="406" alt="image" src="https://github.com/user-attachments/assets/c26cd31f-7d0f-4c53-9a2b-270041716fd2" />


