const gridItems = document.querySelectorAll('.process-parent__item');

window.addEventListener('scroll', function () {
    const sticky = document.querySelector('.process-parent'),
        scroll = window.pageYOffset - sticky.offsetTop,
        height = sticky.scrollHeight;
        
    let i = 0;

    scroll < (1 * (height / 6) - 500) ? i = 0 :
    scroll < (2 * (height / 6) - 500) ? i = 1 :
    scroll < (3 * (height / 6) - 500) ? i = 2 :
    scroll < (4 * (height / 6) - 500) ? i = 3 :
    scroll < (5 * (height / 6) - 500) ? i = 4 : i = 5;

    for (let j = 0; j < gridItems.length; j++){
        gridItems[j].classList.remove('view');
        gridItems[j].classList.remove('active');
        if (j <= i) {
            gridItems[j].classList.add('view');
        }
    }
    gridItems[i].classList.add('active')
});

function reScroll(num, e){
    const sticky = document.querySelector('.process-parent'),
        scroll = window.pageYOffset + sticky.offsetTop,
        height = sticky.scrollHeight,
        targ = e.target;
        
    window.scrollTo(0, sticky.offsetTop + (num * (height / 6) - (height / 6 / 2)))    
}

let swiper = new Swiper(".swiper-slider", {
    slidesPerView: "auto",
}),
    swiper2 = new Swiper(".vision-slider", {
        loop: true,
        slidesPerView: "auto",
        on: {
            slideChangeTransitionStart: function () {
                const active = document.querySelector('.vision-slider__item.swiper-slide-active'),
                    i = active.getAttribute('data-swiper-slide-index');

                visionReActive(i);
            }            
        }
    }),
    swiper3 = new Swiper(".features-slider", {
        loop: true,
        pagination: {
            el: '.features-slider__pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<div class="' + className + '"> </div>';
            },
        },
        navigation: {
            prevEl: '.features-slider__prev',
            nextEl: '.features-slider__next'
        },
        on: {
            slideChangeTransitionStart: function() {
                const active = document.querySelector('.features-slider__item.swiper-slide-active'),
                    i = active.getAttribute('data-swiper-slide-index');

                featuresReActive(i);
            },
        },
    });

window.addEventListener('scroll', function(){
    if(window.innerWidth > 1024) {
        const sticky = document.querySelector('.vision'),
            scroll = window.pageYOffset - sticky.offsetTop + 500,
            height = sticky.scrollHeight;

        let i = 0;

        scroll < (1 * (height / 7)) ? i = 0 :
        scroll < (2 * (height / 7)) ? i = 1 :
        scroll < (3 * (height / 7)) ? i = 2 :
        scroll < (4 * (height / 7)) ? i = 3 :
        scroll < (5 * (height / 7)) ? i = 4 :
        scroll < (6 * (height / 7)) ? i = 5 : i = 6;  
        
        visionReActive(i);
    }
});

function visionReActive (i) {
    const face = document.querySelectorAll('.vision-main__face img'),
        planets = document.querySelectorAll('.vision-main__planet img'),
        planetActive = document.querySelector('.vision-main__planet img.active'),
        texts = document.querySelectorAll('.vision-main__text div'),
        triangle = document.querySelector('.vision-main__triangle');

    for(let j = 0; j < planets.length; j++){
        planets[j].classList.remove('active');
    }
    planets[i].classList.add('active');

    for(let j = 0; j < texts.length; j++){
        texts[j].classList.remove('active');
    }
    texts[i].classList.add('active');
    
    if(planetActive !== planets[i]){
        triangle.classList.remove('active');

        setTimeout(() => {
            triangle.classList.add('active');
            reNum(document.querySelector('.vision-main__triangle span'), 31);
        }, 100)
        setTimeout(() => {
            face[0].classList.add('active');
            face[1].classList.remove('active');
        }, 500)
        face[0].classList.remove('active');
        face[1].classList.add('active');
    }
}

function featuresReActive (i) {
    const images = document.querySelectorAll('.features-scroller__images img'),
        text = document.querySelectorAll('.features-scroller__info div');

    for(let j = 0; j < images.length; j++){
        images[j].classList.remove('active');
    }
    images[i].classList.add('active');
    for(let j = 0; j < text.length; j++){
        text[j].classList.remove('active');
    }
    text[i].classList.add('active');
}

function reNum (el, num) {
    let i = 0;
    let numer = setInterval(() => {
        el.innerHTML = ++i;
        if(i == num) clearInterval(numer);
    }, 40);
}

function menuToggle() {
    const btn = document.querySelector('.header-button'),
        menu = document.querySelector('.header-content'),
        logoText = document.querySelector('.header-name');

    btn.classList.toggle('active');
    menu.classList.toggle('active');
    logoText.classList.toggle('active');
    document.body.classList.toggle('hidd');
}

window.addEventListener('load', function () {
    const mainBg = document.querySelector('.main-back'),
        head = document.querySelector('.main-back__head');

    mainBg.classList.add('active');
    setTimeout(() => {
        head.classList.add('active');
    }, 800);
    setTimeout(() => {
        head.classList.remove('active');
    }, 1200);
})