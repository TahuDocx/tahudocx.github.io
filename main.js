const nav = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 15) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});