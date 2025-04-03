# Sprint 5 Fix the Flow
## Week 1
### Woensdag 4 december 2024

#### Schrijf hoe ver je bent gekomen de 3d opdracht en wat moet je daar nog voor doen? 
Mijn eerste opdracht m.b.t. tot deze opdracht had ik met name dinsdag al afgerond, zie issue: https://github.com/julia-stevens/fix-the-flow-interactive-website/issues/4 

Verder ben ik vandaag aan de slag gegaan met maken van een verbeterde lay-out. Oorspronkelijk dacht ik hier ook JavaScript voor nodig te hebben, maar achteraf bleek dit niet nodig te zijn. Zie hier de issue: https://github.com/julia-stevens/fix-the-flow-interactive-website/issues/22

Met `details` en `summary` heb ik de layout vorm kunnen geven, zoals ik had ontworpen. Zie hier de bron: https://codepen.io/web-dot-dev/pen/VwoBQjY?editors=1100

Hiervoor wil ik nog wel meer doen met transitions. 

#### Schrijf welk lesje je aan het doen bent van de JS Fundamentals deeltaak. Wat heb je bij de vorige les geleerd? 

<img src="https://github.com/user-attachments/assets/e502dc1b-bda6-48d3-93b9-674eb6a16536" width="350">

**Dit heb ik geleerd bij de vorige les**

A common array method is the .filter() method. When you call this method on an array, you will get back another array that contains some of the items from the original array, based on the condition you specify.

_Opdracht_: Complete the function getFreezingTemperatures such that it returns an array containing the freezing temperatures (the temperatures that are below 0).

```js
// Sample usage - do not modify
console.log(getFreezingTemperatures([-5, 12, 3])); // [-5]
console.log(getFreezingTemperatures([1, -3, -2, 4, 10])); // [-3, -2]
```

_Antwoord_:
```js
function getFreezingTemperatures(temperatures) {
    return temperatures.filter(function(temperature) {
        return temperature < 0;
    })
}
```
