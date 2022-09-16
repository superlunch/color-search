window.addEventListener('scroll', scrollShowButton);
toggleFilter();
randomBGColor();
clickToChangeBGColor();
randomColorCards();
refreshBtnEvent();
filterEvents();

function toggleFilter() {
    const filter = document.querySelector('.filter')
    const openFilter = document.querySelector('#openFilter');
    const closeFilter = document.querySelector('#closeFilter');
    const items = document.querySelectorAll('.link');

    openFilter.addEventListener('click', e => {
        filter.classList.add('toggle');
    })

    closeFilter.addEventListener('click', e => {
        filter.classList.remove('toggle');
    })

    items.forEach(item => item.addEventListener('click', e =>{
        filter.classList.remove('toggle');
    }))   
}

function scrollShowButton() {
    let y = window.scrollY;
    const toggleAppearance = document.querySelector('#toggleAppearance');

    if(y <= 750){
        toggleAppearance.style.color = 'white'
        toggleAppearance.classList.add('visiblities')
    } else {
        toggleAppearance.classList.remove('visiblities');
        toggleAppearance.style.color = 'black';
    }
}

function randomBGColor() {
    fetch('https://x-colors.herokuapp.com/api/random')
    .then(resp => resp.json())
    .then(data => {
        const home = document.querySelector('#home');
        const rgbNumber = document.querySelector('#homeRgbNumber');
        const hexNumebr = document.querySelector('#homeHexNumber');
        const hslNumber = document.querySelector('#homeHslNumber');

        home.style.backgroundColor = data.hex;
        rgbNumber.textContent = data.rgb;
        hexNumebr.textContent = data.hex;
        hslNumber.textContent = data.hsl;
    })
}

function clickToChangeBGColor() {
    const home = document.querySelector('#home');
    const rgbNumber = document.querySelector('#homeRgbNumber');
    const hexNumebr = document.querySelector('#homeHexNumber');
    const hslNumber = document.querySelector('#homeHslNumber');

    home.addEventListener('click', e => {       
        fetch('https://x-colors.herokuapp.com/api/random')
        .then(resp => resp.json())
        .then(data => {
            home.style.backgroundColor = data.hex;
            rgbNumber.textContent = data.rgb;
            hexNumebr.textContent = data.hex;
            hslNumber.textContent = data.hsl;
        })       
    })   
}

function randomColorCards() {
    fetch('https://x-colors.herokuapp.com/api/random?number=12')
    .then(resp => resp.json())
    .then(data => {
        data.forEach(color => {
            renderCards(color);
        })
    })
}

function renderCards(color){
    const exploreContainer = document.querySelector('.exploreContainer');
    const card = document.createElement('div');
    card.setAttribute('class', 'cards');

    card.addEventListener('mouseover', e => {
        card.classList.add('cardsHover');
    })

    card.addEventListener('mouseout', e => {
        card.classList.remove('cardsHover');
    })

    const colors = document.createElement('div');  
    colors.setAttribute('class', 'colors');
    colors.style.backgroundColor = color.hex;

    const hex = document.createElement('div');
    hex.setAttribute('class', 'hex');

    const hexTitle = document.createElement('p');
    hexTitle.setAttribute('class', 'title');
    hexTitle.textContent = 'HEX';

    const hexDetails = document.createElement('p');
    hexDetails.setAttribute('class', 'HexDetails');
    hexDetails.textContent = color.hex;

    const rgb = document.createElement('div');
    rgb.setAttribute('class', 'rgb');

    const rgbTitle = document.createElement('p');
    rgbTitle.setAttribute('class', 'title');
    rgbTitle.textContent = 'RGB';

    const rgbDetails = document.createElement('p');
    rgbDetails.setAttribute('class', 'RGBDetails');
    rgbDetails.textContent = color.rgb;

    const hsl = document.createElement('div');
    hsl.setAttribute('class', 'hsl');

    const hslTitle = document.createElement('p');
    hslTitle.setAttribute('class', 'title');
    hslTitle.textContent = 'HSL';

    const hslDetails = document.createElement('p');
    hslDetails.setAttribute('class', 'HSLDetails');
    hslDetails.textContent = color.hsl;

    hex.append(hexTitle, hexDetails);
    rgb.append(rgbTitle, rgbDetails);
    hsl.append(hslTitle, hslDetails);
    card.append(colors, hex, rgb, hsl);
    exploreContainer.append(card);

    const toggleAppearance = document.querySelector('#toggleAppearance');
    let white = false;
    toggleAppearance.addEventListener('click', e => {
        white = !white;
        if(white){
            card.style.backgroundColor = 'white';
            hex.style.color = 'black';
            rgb.style.color = 'black';
            hsl.style.color = 'black';
        } else {
            card.style.backgroundColor = 'black';
            hex.style.color = 'white';
            rgb.style.color = 'white';
            hsl.style.color = 'white';
        }
    })
}

function refreshBtnEvent() {
    const refreshBtn = document.querySelector('#refreshBtn');
    refreshBtn.addEventListener('click', e => {
        window.scrollTo(870,870);
        const exploreContainer = document.querySelector('.exploreContainer');
        exploreContainer.innerHTML = ' ';
        randomColorCards();
    })
}

function filterEvents(){
    const colors = document.querySelectorAll('.link');
    colors.forEach(color => {
        color.addEventListener('click', e => {
            const exploreContainer = document.querySelector('.exploreContainer');
            exploreContainer.innerHTML = ' ';
            filter(color.textContent);
        })
    })
}

function filter(color) {
    fetch(`https://x-colors.herokuapp.com/api/random/${color.toLowerCase()}?number=12`)
    .then(resp => resp.json())
    .then(data => {
        data.forEach(color => {
            renderCards(color);
            window.scrollTo(870,870);
        })    
    })
}