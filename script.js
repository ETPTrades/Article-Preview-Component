const footer = document.querySelector("footer");
const secondWrap = document.querySelector(".footer__second-wrap");
const share = document.querySelector(".footer__share-text");
const hiddenWrap = document.querySelector(".footer__hidden-wrap");



footer.addEventListener("mouseenter", () => {
    secondWrap.classList.toggle("hidden");
    hiddenWrap.classList.toggle("show");
    share.innerText = "SHARE";
})
footer.addEventListener("mouseleave", () => {
    secondWrap.classList.toggle("hidden");
    share.innerText = "";
})