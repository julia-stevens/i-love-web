# Sprint 6 - The Startup
## Week 2
### Maandag 13 januari 2025

#### Workshop Interaction Design 

Wireflows getekend van verschillende interacties:  

<img width="287" alt="image" src="https://github.com/user-attachments/assets/9e3ece7a-aa46-4b0b-9e2c-d26264b34140" />
<img width="166" alt="image" src="https://github.com/user-attachments/assets/4d8284f3-3312-4cff-a2a7-8be309851508" />

#### User story 

Zie issue: https://github.com/julia-stevens/the-startup-responsive-interactive-website/issues/29

Wireflow: 

![image](https://github.com/user-attachments/assets/6e3e5b68-cef3-426a-8579-e4cd0cd35548)

Button states: 

![image](https://github.com/user-attachments/assets/1a85c049-5403-4c5e-9776-437e54e5dcf2)

#### Infinite animerende banner 

https://github.com/user-attachments/assets/560a1381-6008-4184-9fc5-bc5d4beac97c

```css
.about-slider {
    /* Flex parent */
    display: flex; 
    gap: 0;

    width: calc(60vw * 7);

    --animation-xs: bannermove 19s linear infinite;
    --animation-s: bannermove 23s linear infinite;
    --animation-m: bannermove 28s linear infinite;
    --animation-l: bannermove 35s linear infinite;
    --animation-xl: bannermove 42s linear infinite;

    animation: var(--animation-xs);

    @media screen and (min-width: 580px) {
        animation: var(--animation-s);
    }

    @media screen and (min-width: 900px) {
        animation: var(--animation-m);
    }

    @media screen and (min-width: 1400px) {
        animation: var(--animation-l);
    }

    @media screen and (min-width: 1600px) {
        animation: var(--animation-xl);
    }

    @media screen and (prefers-reduced-motion) {
        animation-play-state: paused;
    }

    &:hover {
        animation-play-state: paused;
    }
}

@keyframes bannermove {
    0% {
        translate: 0 0;
    }
    100% {
        translate: -50% 0;
    }
}
```
