const xcolors = "https://x-colors.herokuapp.com/api/random";

// fetch random color
function getColor(number) {
  return fetch(xcolors + `/${number}`).then((res) => res.json());
}

// fetch random colors by hue
function getHue(hue) {
  return fetch(xcolors + `/${hue}`).then((res) => res.json());
}

const htmlTag = document.firstElementChild;

function toggleAppearance() {
  if (htmlTag.dataset.theme == "light") {
    htmlTag.dataset.theme = "dark";
  } else {
    htmlTag.dataset.theme = "light";
  }
}

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
