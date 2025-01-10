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












