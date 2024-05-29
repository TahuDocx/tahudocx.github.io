// On page load set the theme.
const body = document.body;
const themeButton = document.querySelector(".theme-button");

// On page load set the theme.
body.onload = () => {
  let onpageLoad = localStorage.getItem("theme") || "";
  // let element = document.body;
  if(onpageLoad) body.classList.add(onpageLoad);
  // document.getElementById("theme").innerHTML = localStorage.getItem("theme") || "light";
  startTime();
};

themeButton.addEventListener("click", () => {
  // let element = document.body;
  body.classList.toggle("dark");

  let theme = localStorage.getItem("theme");
  if (theme && theme === "dark") {
    localStorage.setItem("theme", "");
  } else {
    localStorage.setItem("theme", "dark");
  }

  // document.getElementById("theme").innerHTML = localStorage.getItem("theme");
});

// document.body = startTime();

function startTime() {
  const today = new Date();
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  let d = weekday[today.getDay()];
  let dd = today.getDate();
  let mm = month[today.getMonth()];
  let yy = today.getFullYear();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  // document.getElementById("day").innerHTML = d;
  // document.getElementById("ddmmyy").innerHTML = dd + " " + mm + " " + yy;
  // document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
  document.getElementById("day").innerText = d;
  document.getElementById("ddmmyy").innerText = dd + " " + mm + " " + yy;
  document.getElementById("clock").innerText = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
};

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
};