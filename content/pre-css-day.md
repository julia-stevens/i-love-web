## [pre-CSS day](https://gath.io/KwVtysIkOWcUPPpSUO58z)

### Unwrapping Web Design, Nils Binder
- works @ 9elements
- @ichimnetz

#### Let's talk about wrappers
- old ways: 

```css
.wrapper {
    max-width: 75rem;
    margin: 0 auto; 
    padding: 0 1.5rem
}

.wrapper {
    width: min(var(--wrapper-max) - 3rem, 75rem);
    margin-inline: auto; 
}

.wrapper {
    margin-inline: max(1.5rem, ((100% - var(--wrapper-max, 75rem)) / 2));
}
```

- why always the wrapper? usually developers tell designers to
- distributing white space, use `grid` with some nice breakpoints 

```css
grid-template-columns: 
    minmax(1.5rem, 1fr)
        minmax(0, 8rem)
            min(30rem, 100% - 1.5rem * 2)
        minmax(0, 8rem)
    minmax(1.5rem, 1fr);
```

- check out a nice column layout: [dasruhrgebiet.de](dasruhrgebiet.de) 

### Tech continues to be political, Miriam Suzanne
- the "C" in CSS = cascade 
- 7 steps in the cascade from origin & importance to order of appearance 

- order: 
    - user agent defaults
    - user preferences 
    - 
    - 
    - 
    - 

- !important: for users to protect styles from future styles that might override them (so as a protective matter) 

#### What is friendly to the user? 
- watch demo: idea of hyptext/mouse/single-hand keyboard, etc 
- bootstrapping: augmenting human intellect 
- providing the means for users to create better tools 
- intuitive or taught it? easy for whom? for them to do what? 
- you cannot create results; you can only create the conditionts in in which something might happen, anne bogart

