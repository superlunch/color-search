const xcolors = "https://x-colors.herokuapp.com/api/random";

// fetch random color
function getColor(number) {
  return fetch(xcolors + `/${number}`).then((res) => res.json());
}

// fetch random colors by hue
function getHue(hue) {
  return fetch(xcolors + `/${hue}`).then((res) => res.json());
}

// getColor().then((json) => console.log(json));
// getHue("blue").then((json) => console.log(json));

// populates color cards on launch
// function onLaunch() {
//   getColor().then(launchColor).then(exploreColors);
// }

// // displays launch color card
// function launchColor() {
//   getColor();
// }

// displays explore color cards (WIP)
// function exploreColors(color) {
//   let hex = document.getElementById("hex");
//   hex.innerHTML = `HEX: ${color.hex}`;

//   let rgb = document.getElementById("rgb");
//   rgb.innerHTML = `RGB: ${color.hsl}`;

//   let hsl = document.getElementById("hsl");
//   hsl.innerHTML = `HSL: ${color.hsl}`;
// }

// displays launch color card filtered by hue
// function launchHue() {}

// displays explore color cards filtered by hue
// function exploreHue() {}

// toggle between light & dark mode
function toggleAppearance() {
  const body = document.body;
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const toggleBtn = document.querySelector("div.toggleAppearance");
  const logo = document.querySelector("a.logo");
  const exploreCont = document.querySelector("div.exploreContainer");
  const footer = document.querySelector("footer");
  //   const refresh = document.querySelector("button.refreshBtn");
  //   const cards = document.getElementsByClassName("cards");
  //   const homeColor = document.querySelector("");
  //   const exploreBtn = document.querySelector(".exploreBtn");
  //   const hueFilter = document.querySelector("div.filter.toggle");
  //   const hueList = document.querySelector("a.link");

  header.classList.toggle("dark-mode");
  body.classList.toggle("dark-mode");
  nav.classList.toggle("dark-mode");
  toggleBtn.classList.toggle("dark-mode");
  logo.classList.toggle("dark-mode");
  exploreCont.classList.toggle("dark-mode");
  footer.classList.toggle("dark-mode");

  //   refresh.classList.toggle("dark-mode");
  //   cards
  //   homeColor
  //   exploreBtn.classList.toggle("dark-mode");
  //   hueFilter.classList.toggle("dark-mode");
  //   hueList.classList.toggle("dark-mode");

  console.log("test");
}

//   homeColor.classList.toggle("dark-mode");
//   explore.classList.toggle("dark-mode");

//   if (toggleBtn.dark - mode === true) {
//     toggleBtn.innerText = "☾";
//   } else {
//     toggleBtn.innerText = "☀";
//   }


toggleFilter();
scrollHeader();

function toggleFilter() {
  const filter = document.querySelector(".filter");
  const openFilter = document.querySelector("#openFilter");
  const closeFilter = document.querySelector("#closeFilter");
  const items = document.querySelectorAll(".link");

  openFilter.addEventListener("click", (e) => {
    filter.classList.add("toggle");
  });

  closeFilter.addEventListener("click", (e) => {
    filter.classList.remove("toggle");
  });

  items.forEach((item) =>
    item.addEventListener("click", (e) => {
      filter.classList.remove("toggle");
    })
  );
}

function scrollHeader() {
  window.onscroll = () => {
    const header = document.querySelector(".header");

    if (this.scrollY >= 1) {
      header.classList.add("dropShadow");
    } else {
      header.classList.remove("dropShadow");
    }
  };
}
