# Sprint 8 - Server-side Rendering 
## Week 2
### Maandag 10 maart 2025
Maandag kregen we een workshop over routing, request en response. Dit ging ook over URL design. 

<img width="514" alt="image" src="https://github.com/user-attachments/assets/aa6abf29-c703-4d08-b893-a1f99b6b7ce9" />

Op basis van de les, heb ik de issue aangemaakt en hieraan gewerkt: 
* [URL redesign & refactor](https://github.com/julia-stevens/server-side-rendering-server-side-website/issues/8)
* [404 pagina](https://github.com/julia-stevens/server-side-rendering-server-side-website/issues/9)
* [breadcrumbs](https://github.com/julia-stevens/server-side-rendering-server-side-website/issues/10)

### Dinsdag 11 maart 2025
Vandaag heb ik o.a. gewerkt aan het maken van dynamische titles. 

```liquid
<title>{{ pageTitle | default: "Oncollaboration" }}</title>
```

```liquid
{% assign pageTitle = "Home | Oncollaboration" %}
{% include "partials/head.liquid" %}
```

### Woensdag 12 maart 2025

#### 👉 Experiment 1: Ik wil alle studenten gesorteerd op name
`https://fdnd.directus.app/items/person?fields=name&sort=name`

#### 👉 Experiment 2: Ik wil alle names van studenten die een name hebben die begint met de letter D
`https://fdnd.directus.app/items/person?fields=name&filter[name][_starts_with]=D`

#### 👉 Experiment 3: Ik wil alle names van studenten die een name hebben die begint met de letter D of K
`https://fdnd.directus.app/items/person?fields=name&filter[_or][0][name][_starts_with]=D&filter[_or][1][name][_starts_with]=K`

#### 👉 Experiment 4: Ik wil alle names en birthdates van studenten die een birthdate hebben ingevuld
`https://fdnd.directus.app/items/person?fields=name,birthdate&filter[birthdate][_nnull]`

#### 👉 Experiment 5: Ik wil alle names en birthdates van studenten met een birthdate in 2002
`https://fdnd.directus.app/items/person?fields=name,birthdate&filter[year(birthdate)][_eq]=2002`

#### 👉 Experiment 6: Haal een lijst van alle unieke fav_tag op, en laat zien hoeveel mensen die tag hebben
`https://fdnd.directus.app/items/person?fields=fav_tag&filter[fav_tag][_neq]=null&aggregate[count]=fav_tag&groupBy=fav_tag`

[liquid filters](https://shopify.github.io/liquid/)
#### concat
Concatenates (joins together) multiple arrays. The resulting array contains all the items from the input arrays.

```
{% assign fruits = "apples, oranges, peaches" | split: ", " %}
{% assign vegetables = "carrots, turnips, potatoes" | split: ", " %}

{% assign everything = fruits | concat: vegetables %}

{% for item in everything %}
- {{ item }}
{% endfor %}
```
> - apples
> - oranges
> - peaches
> - carrots
> - turnips
> - potatoes

#### floor
Rounds an input down to the nearest whole number. Liquid tries to convert the input to a number before the filter is applied.

```
{{ 1.2 | floor }}
{{ 2.0 | floor }}
{{ 183.357 | floor }}
```
> 1
> 2
> 183

#### escape
Escapes a string by replacing characters with escape sequences (so that the string can be used in a URL, for example). It doesn’t change strings that don’t have anything to escape.

```
{{ "Have you read 'James & the Giant Peach'?" | escape }}
```
> Have you read &#39;James &amp; the Giant Peach&#39;?

#### default
Sets a default value for any variable with no assigned value. default will show its value if the input is nil, false, or empty.
`<title>{{ pageTitle | default: "Oncollaboration" }}</title>`

#### strip_html
Removes any HTML tags from a string.
`<p>{{ webinar.description | strip_html }}</p>`

### Donderdag 13 maart 2025
Vandaag heb ik de sprint review gehouden met mijn groep en de opdrachtgever. Op basis van de gegeven feedback heb ik vervolgstappen opgesteld. 
Zie dit issue voor de hele documentatie: https://github.com/julia-stevens/server-side-rendering-server-side-website/issues/11

### Vrijdag 14 maart 2025
> Hoe kunnen we goed werken in de studio? 

#### Wat gaat goed in de studio? 
* Fijne open ruimte met veel licht
* Makkelijk samenwerken en overleggen 
* Whiteboard voor iedere groep

#### Wat gaat minder goed in de studio? 
* Veel lawaai
* Snel warm 
* Soms erg vol 
* Veel heen en weer geloop van allerlei mensen 
* Hele irritante stoelen als je met veel mensen op elkaar zit

#### Ideeën 
* Timestamps voor lessen (misschien stilte momenten)
* Ruimte afsluiten voor mensen die samen willen zitten/ mensen die stilte willen