window.addEventListener("scroll", scrollShowButton);
toggleFilter();
changeAppearanceEvent();
hoverCards();
randomBGColor();
clickToChangeBGColor();
randomColorCards();
refreshBtnEvent();
filterEvents();

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

function scrollShowButton() {
  let y = window.scrollY;
  const toggleAppearance = document.querySelector("#toggleAppearance");

  if (y <= 750) {
    toggleAppearance.style.color = "white";
    toggleAppearance.classList.add("visiblities");
  } else {
    toggleAppearance.classList.remove("visiblities");
    toggleAppearance.style.color = "black";
  }
}

function changeAppearanceEvent() {
  const toggleAppearance = document.querySelector("#toggleAppearance");
  const cards = document.querySelectorAll(".cards");
  const hex = document.querySelectorAll(".hex");
  const hsl = document.querySelectorAll(".hsl");
  const rgb = document.querySelectorAll(".rgb");
  let white = false;

  toggleAppearance.addEventListener("click", (e) => {
    white = !white;
    if (white) {
      cards.forEach((card) => {
        card.style.backgroundColor = "white";
      });

      hex.forEach((color) => {
        color.style.color = "black";
      });

      hsl.forEach((color) => {
        color.style.color = "black";
      });

      rgb.forEach((color) => {
        color.style.color = "black";
      });
    } else {
      cards.forEach((color) => {
        color.style.backgroundColor = "black";
      });

      hex.forEach((color) => {
        color.style.color = "white";
      });

      hsl.forEach((color) => {
        color.style.color = "white";
      });

      rgb.forEach((color) => {
        color.style.color = "white";
      });
    }
  });
}

function hoverCards() {
  const cards = document.querySelectorAll(".cards");
  cards.forEach((card) => {
    card.addEventListener("mouseover", (e) => {
      card.classList.add("cardsHover");
    });

    card.addEventListener("mouseout", (e) => {
      card.classList.remove("cardsHover");
    });
  });
}

function randomBGColor() {
  fetch("https://x-colors.herokuapp.com/api/random")
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      const home = document.querySelector("#home");
      const rgbNumber = document.querySelector("#homeRgbNumber");
      const hexNumebr = document.querySelector("#homeHexNumber");
      const hslNumber = document.querySelector("#homeHslNumber");

      home.style.backgroundColor = data.hex;
      rgbNumber.textContent = data.rgb;
      hexNumebr.textContent = data.hex;
      hslNumber.textContent = data.hsl;
    });
}

function clickToChangeBGColor() {
  const home = document.querySelector("#home");
  const rgbNumber = document.querySelector("#homeRgbNumber");
  const hexNumebr = document.querySelector("#homeHexNumber");
  const hslNumber = document.querySelector("#homeHslNumber");

  home.addEventListener("click", (e) => {
    fetch("https://x-colors.herokuapp.com/api/random")
      .then((resp) => resp.json())
      .then((data) => {
        home.style.backgroundColor = data.hex;
        rgbNumber.textContent = data.rgb;
        hexNumebr.textContent = data.hex;
        hslNumber.textContent = data.hsl;
      });
  });
}

function randomColorCards() {
  const cards = document.querySelectorAll(".cards");
  cards.forEach((card) => {
    fetch("https://x-colors.herokuapp.com/api/random")
      .then((resp) => resp.json())
      .then((data) => {
        card.childNodes[1].style.backgroundColor = data.hex;
        card.childNodes[3].childNodes[3].textContent = data.hex;
        card.childNodes[5].childNodes[3].textContent = data.rgb;
        card.childNodes[7].childNodes[3].textContent = data.hsl;
      });
  });
}

function refreshBtnEvent() {
  const refreshBtn = document.querySelector("#refreshBtn");
  refreshBtn.addEventListener("click", (e) => {
    const exploreContainer = document.querySelector(".exploreContainer");
    exploreContainer.style.visibility = "hidden";
    randomColorCards();
    setTimeout(() => {
      exploreContainer.style.visibility = "visible";
    }, 700);
  });
}

function filterEvents() {
  const colors = document.querySelectorAll(".link");
  colors.forEach((color) => {
    color.addEventListener("click", (e) => {
      filter(color.textContent);
    });
  });
}

function filter(color) {
  console.log(color);
  const cards = document.querySelectorAll(".cards");
  const exploreContainer = document.querySelector(".exploreContainer");
  exploreContainer.style.visibility = "hidden";
  cards.forEach((card) => {
    fetch(`https://x-colors.herokuapp.com/api/random/${color.toLowerCase()}`)
      .then((resp) => resp.json())
      .then((data) => {
        card.childNodes[1].style.backgroundColor = data.hex;
        card.childNodes[3].childNodes[3].textContent = data.hex;
        card.childNodes[5].childNodes[3].textContent = data.rgb;
        card.childNodes[7].childNodes[3].textContent = data.hsl;
      });
    setTimeout(() => {
      exploreContainer.style.visibility = "visible";
    }, 700);
  });
}
