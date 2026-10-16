// filter
const filterbtns=document.querySelectorAll(".filter-btn");
const menuCards=document.querySelectorAll(".menu-section .menu-card");


filterbtns.forEach(function(button) {
    button.addEventListener("click", function(){
        const chosen=button.dataset.filter;

       // show or hide every card 
        menuCards.forEach(function(card){
            if(chosen==="all" || card.dataset.category === chosen) {
                card.classList.remove("hide");
        
            } else {
                card.classList.add("hide");
            }
        
        });

        // yellow highlight only on the clicked button
                filterbtns.forEach(function (b) {
                    b.classList.remove("active");
                });
                button.classList.add("active");
            });
        });

//form

const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
    event.preventDefault();   // stops the page from reloading
    formMessage.textContent = "Thank you! We will get back to you soon.";
    form.reset();             // clears the fields
});

//menu button
const menuBtns=document.querySelectorAll(".menu-btn");
const menu=document.querySelector("#menu");

menuBtns.forEach(function (button) {
    button.addEventListener("click",()=>{
        menu.scrollIntoView({
            behavior:"smooth"
        });
    });
});

//contact
const contactbtn=document.querySelector(".contact-btn");
const contact=document.querySelector("#contact");

contactbtn.addEventListener("click",()=>{
    contact.scrollIntoView({
        behavior:"smooth"
    });
});

// back to top
const toTop = document.getElementById("to-top");

window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
        toTop.classList.add("show");
    } else {
        toTop.classList.remove("show");
    }
});


// mobile menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-container2");

hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("open");
});

// close the menu after clicking a link
const navLinkItems = document.querySelectorAll(".nav-container2 a");
navLinkItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
    });
});