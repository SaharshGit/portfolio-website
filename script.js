// for popup(contact button) in window screen

contactPopup = document.querySelector(".contact-popup");
openContact = document.querySelector(".open-contact");
closeContact = document.querySelector(".close-contact");
body = document.querySelector("body");

openContact.addEventListener("click", () => {    
    contactPopup.showModal();
    
    contactPopup.style.display = "flex";
    body.classList.add('no-scroll'); 
  
});

closeContact.addEventListener("click", () => {
    contactPopup.close();
    contactPopup.style.display = "none";
    body.classList.remove('no-scroll'); 
    
});

contactPopup.addEventListener("click", (event) => {
    
    if (event.target === contactPopup) {
        contactPopup.close();
        body.classList.remove('no-scroll'); 
    }
});

contactPopup.addEventListener("close", () => {
    contactPopup.style.display = "none";
    body.classList.remove('no-scroll'); 
    
});


// for menu button in mobile screen


menu = document.querySelector(".menu");
openMenu = document.querySelector(".open-menu");
closeMenu = document.querySelector(".close-menu");

openMenu.addEventListener("click", () => {
    
    body.classList.add('no-scroll'); 
    menu.showModal();
    menu.style.display = "flex";
   
})

closeMenu.addEventListener("click", () => {
   
    body.classList.remove('no-scroll'); 
    menu.close();
    menu.style.display = "none";

   
})

menu.addEventListener("click", (event) => {
    
    if (event.target === menu) {
        menu.style.display = "none";
        body.classList.remove('no-scroll'); 
        menu.close();
    }
})

menu.addEventListener("click", (event) => {
    if (event.target === menu) {
        menu.style.display = "none";
        body.classList.remove('no-scroll');
        menu.close();
    }
}
)

menu.addEventListener("click", (event) => {

    if (event.target !== openMenu && event.target !== closeMenu) {
        menu.style.display = "none"; 
        body.classList.remove('no-scroll'); 
        menu.close();
    }
})








