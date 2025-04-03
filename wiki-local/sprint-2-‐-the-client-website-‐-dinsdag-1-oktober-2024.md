# Sprint 2
## The client website

### Week 2
### Dinsdag 1 oktober 2024

### Flexbox challenge
* https://codepen.io/js1909/pen/NWQxqvg
* https://codepen.io/js1909/pen/bGXEdJa

**Geleerd**
* `flex-grow` ruimte die overblijft opvullen 
* `flex-direction: column` align en justify draaien mee
* `overflow-x` `overflow-y` `auto` `scroll`

### Experiment JS, huidige tijd en scroll snap 
* eenvoudige code pen: https://codepen.io/js1909/pen/dyxGYXO
* pen scroll snap naar kaartje met huidige tijd: https://codepen.io/js1909/pen/BaXjopx

**Geleerd**
* Voeg een `id` toe aan HTML element

![image](https://github.com/user-attachments/assets/2e08d21e-fa22-4edf-b85e-9e709c2817fc)

* Haal huidige tijd op: 

  `let today = new Date();
  let currentHour = today.getHours();`

* Format tijd als xx:00
  
  `let currentHourFormatted = currentHour.toString().padStart(2, '0') + ":00";`

* Zoek element met overeenkomend ID

  `const currentHourElement = document.getElementById(currentHourFormatted);`

* Scroll snap in view als een match gevonden is: 

  `if (currentHourElement) {
    currentHourElement.scrollIntoView({
      behavior: "smooth", 
      block: "start"
    });
  }
};`

### Programmering cards gecodeerd
https://github.com/julia-stevens/the-client-website/issues/11

### Font geïmporteerd
https://github.com/julia-stevens/the-client-website/issues/18
