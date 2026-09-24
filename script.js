const contact = document.querySelector(".contact");
const secondWrap = document.querySelector(".contact__second-wrap");
const hiddenWrap = document.querySelector(".contact__hidden-wrap");



contact.addEventListener("mouseenter", () => {
    contact.classList.add("contact-background-color");
    secondWrap.classList.add("hidden");
    hiddenWrap.classList.add("show");
})
contact.addEventListener("mouseleave", () => {
    contact.classList.remove("contact-background-color");
    secondWrap.classList.remove("hidden");
    hiddenWrap.classList.remove("show");
})