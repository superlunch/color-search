toggleFilter();
srollHeader();


function toggleFilter(){
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

function srollHeader(){
    window.onscroll = () => {
        const header = document.querySelector('.header');

        if(this.scrollY >= 1){
            header.classList.add('dropShadow');
        } else {
            header.classList.remove('dropShadow');
        }
    }
}


