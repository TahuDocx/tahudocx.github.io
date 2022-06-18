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

const morePhotoOne = document.getElementById("more-photo1");
const morePhotoTwo = document.getElementById("more-photo2");
const morePhotoThree = document.getElementById("more-photo3");
const morePhotoFour = document.getElementById("more-photo4");
const morePhotoFive = document.getElementById("more-photo5");
const lessPhoto = document.getElementById("less-photo");
const photosMoreOne = document.querySelector(".photos-content.more.one");
const photosMoreTwo = document.querySelector(".photos-content.more.two");
const photosMoreThree = document.querySelector(".photos-content.more.three");
const photosMoreFour = document.querySelector(".photos-content.more.four");
const photosMoreFive = document.querySelector(".photos-content.more.five");

morePhotoOne.addEventListener("click", () => {
    photosMoreOne.style.display = "grid";
    morePhotoTwo.style.display = "block";
    morePhotoOne.style.display = "none";
});

morePhotoTwo.addEventListener("click", () => {
    photosMoreTwo.style.display = "grid";
    morePhotoThree.style.display = "block";
    morePhotoTwo.style.display = "none";
});

morePhotoThree.addEventListener("click", () => {
    photosMoreThree.style.display = "grid";
    morePhotoFour.style.display = "block";
    morePhotoThree.style.display = "none";
});

morePhotoFour.addEventListener("click", () => {
    photosMoreFour.style.display = "grid";
    morePhotoFive.style.display = "block";
    morePhotoFour.style.display = "none";
});

morePhotoFive.addEventListener("click", () => {
    photosMoreFive.style.display = "grid";
    lessPhoto.style.display = "block";
    morePhotoFive.style.display = "none";
});

lessPhoto.addEventListener("click", () => {
    photosMoreOne.style.display = "none";
    photosMoreTwo.style.display = "none";
    photosMoreThree.style.display = "none";
    photosMoreFour.style.display = "none";
    photosMoreFive.style.display = "none";
    lessPhoto.style.display = "none";
    morePhotoOne.style.display = "block";
});
