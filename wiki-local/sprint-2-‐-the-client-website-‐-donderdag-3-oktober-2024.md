# Sprint 2
## The client website

### Week 2
### Donderdag 4 oktober 

Ik heb o.a. een hamburger menu gemaakt: 

https://github.com/user-attachments/assets/bcf80a36-b83c-4e73-8377-48d51ccb9a7b

En hiervoor deze JS gebruikt
`const primaryMenu = document.getElementById("primary-menu");`
`const checkBox = document.getElementById("hamburger-menu");`

`checkBox.addEventListener("click", function() {`
    `primaryMenu.classList.toggle("clicked")`
  `});`

Hiermee trigger ik in de CSS de class "clicked" - d.m.v. translate verschuift het menu

