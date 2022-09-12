const xcolors = "https://x-colors.herokuapp.com/api/random";

function randomColor() {
  return fetch(xcolors).then((res) => res.json());
}

function randomHue(hue) {
  return fetch(xcolors + `/${hue}`).then((res) => res.json());
}

// randomColor().then((json) => console.log(json));
// randomHue("blue").then((json) => console.log(json));

// populates color cards on launch
function onLaunch() {
  randomColor().then(launchColor).then(exploreColors);
}

// displays launch color card
function launchColor() {}

// displays explore color cards
function exploreColors() {}

// displays launch color card filtered by hue
function launchHue() {}

// displays explore color cards filtered by hue
function exploreHue() {}

// toggle between light & dark mode
function lightDarkMode() {
    const bodyMode = document.body;
    bodyMode.classList.toggle("dark-mode");
}

// explore card hover event
exploreCard.addEventListener("mouseover", function(){
    // zoom function here
});