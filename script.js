const contact = document.querySelector(".contact");
const secondWrap = document.querySelector(".contact__second-wrap");
const share = document.querySelector(".contact__share-text");
const hiddenWrap = document.querySelector(".contact__hidden-wrap");



contact.addEventListener("mouseenter", () => {
    secondWrap.classList.add("hidden");
    hiddenWrap.classList.add("show");
    share.innerText = "SHARE";
})
contact.addEventListener("mouseleave", () => {
    secondWrap.classList.remove("hidden");
    hiddenWrap.classList.remove("show");
    share.innerText = "";
})