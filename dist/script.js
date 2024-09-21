let scene = document.querySelector(".scene");
let txtWrapper = document.querySelector(".txt-wrapper");
let mainTitle = document.querySelector("h1");
let stars = document.querySelector(".allStar");
let moon = document.querySelector(".moon");
let sun = document.querySelector(".sun");

scene.addEventListener("click", () => {
  scene.classList.toggle("changeColor");
  txtWrapper.classList.toggle("changeTxtColor");
  if (mainTitle.innerHTML.includes("Day Sky")) {
    mainTitle.innerHTML = "Aegean Sea<br>Night Sky";
  } else {
    mainTitle.innerHTML = "Aegean Sea<br>Day Sky";
  }
  stars.classList.toggle("starFade");
  moon.classList.toggle("moonFade");
  sun.classList.toggle("sunRise");
});
