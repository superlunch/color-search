const xcolors = "https://x-colors.herokuapp.com/api/random";

// fetch random color
function getColor(number) {
  return fetch(xcolors + `/${number}`).then((res) => res.json());
}

// fetch random colors by hue
function getHue(hue) {
  return fetch(xcolors + `/${hue}`).then((res) => res.json());
}

getColor().then((json) => console.log(json));
getHue("blue").then((json) => console.log(json));

// populates color cards on launch
function onLaunch() {
  getColor().then(launchColor).then(exploreColors);
}

// displays launch color card
function launchColor() {
  getColor();
}

// displays explore color cards
function exploreColors(color) {
  let hex = document.getElementById("hex");
  hex.innerText = color.hex;

  let rgb = document.getElementById("rgb");
  rgb.innerText = color.hsl;

  let hsl = document.getElementById("hsl");
  hsl.innerText = color.hsl;
}

// displays launch color card filtered by hue
function launchHue() {}

// displays explore color cards filtered by hue
function exploreHue() {}

// toggle between light & dark mode
// needs .dark-mode in CSS to work
function lightDarkMode() {
  const mode = document.body;
  mode.classList.toggle("dark-mode");
}

// explore card hover event
// const exploreCards = document.getElementById("explore-cards");
// exploreCards.addEventListener("mouseover", function () {
//   // zoom function here - CSS?
// });

// getting data back from the promise and looping through it to render explore cards
// getColor().then((random) => {
//     random.forEach((color) => {
//       exploreColors(color);
//     });
//   });

// etc.

/*

  
*/
