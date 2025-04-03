schrijf (kort) op wat je vandaag hebt gedaan 
* ik heb vandaag mijn presentatie gegeven van de deeltaak wcag audit, zie hier de deeltaak: https://github.com/julia-stevens/wcag-audit/wiki/Deeltaak-WCAG-audit-%E2%80%90-pathe.nl

* ik heb de workshop gevolgd over user experience in html: https://github.com/julia-stevens/all-human-accessible-website/commit/087b0d209852d119a310bc6ac0525a62dcdbf4de

benoem 3 dingen die je hebt geleerd
* hoe tijdlijn in ontwerp te verbergen voor screen reader, namelijk door `aria-hidden = true` te gebruiken
* `target` --> hiermee kun je met een link verwijzen naar een ander deel van de pagina, dit is handig voor bv een skip link
* `input` moet altijd een `label` hebben
* `article`s van showblokken in een `ul` zetten, zodat screen reader voorleest dat het om een lijst met items gaat

beschrijf alle 6 onderwerpen uit de workshop en noteer welke je toe kan passen in je opdracht 
* link
Ik ga een skip link maken, zodat een gebruiker niet alle programmering- en week menu's door hoeft voordat de gebruiker bij de daadwerkelijke programmering uitkomt. Dit kan ik doen door de `href=""` te koppelen aan de `id` van de programmering. 

* images
Ik heb een aantal images die puur visueel zijn, zoals bijvoorbeeld de afbeeldingen van de dj's. Voor een screen reader is het dus niet interessant om elke keer bij een nieuw show blok voor te gaan lezen dat er een afbeelding van de dj staat. Ik ga dus de `alt` tag leeg laten, door `alt=""` te noteren. 

* labels voor invoervelden
Ik maak geen gebruik van `label`s en `input`s in mijn project. Mocht dit wel het geval zijn, dan zorg ik er voor dat om iedere `input` een `label` staat. Dit zorgt voor een betere gebruiksvriendelijkheid en doordat je ook ook op het `label` kunt klikken zijn er meer mogelijkheden in CSS. 

* heading
Ik mijn HTML heb ik al heel bewust de heading toegepast. Deze reflecteren de inhoud op een structurele juiste manier. Dit ga ik nog testen met Polypane. 


* accordeons
In mijn project maak ik (nog) geen gebruik van accordeons. Ik denk eraan om dit toe te passen bij de show blokken in bv desktop versie, maar hier moet ik eerst nog verder mee aan de slag. Mocht ik wel gebruik maken van accordeons dan is het van belang dat de UX prettig is. Ik wil er dan voor zorgen dat je met je toetsenbord naar de accordeon kunt navigeren en dat je deze met bv de pijltjes toetsen kunt bedienen. 


* popups
Ik maak in mijn project geen gebruik van popups. 