const nav = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 15) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

const dcnico = document.querySelector(".dcnico");
dcnico.addEventListener("click", () => {
    window.alert("Discord : NicoEmina#0446");
});
const telerosa = document.querySelector(".telerosa");
telerosa.addEventListener("click", () => {
    window.alert("Telegram : @Ocaaachaa");
});
const scrosa = document.querySelector(".scrosa");
scrosa.addEventListener("click", () => {
    window.alert("Snapchat : @chaocha06");
});