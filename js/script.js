/*******    STICKY HEADER    *********/
let hdr = document.querySelector('header');
let fullNav = document.querySelector('.fullNavWrapper');

function stickee() {
    let navBottom = hdr.getBoundingClientRect().bottom;
    if (navBottom <= 450) {
        fullNav.classList.add('sticky');
    } else {
        fullNav.classList.remove('sticky');
    }
}
    
document.addEventListener('scroll', stickee);


/*******    HIGHLIGHT ON SCROLL    *********/
let sects = document.querySelectorAll('section:not(.intro)');
let anchs = document.querySelectorAll('.navs a:not(.logoAnch)');

function scrollHighlight() {
     anchs.forEach((el, i) => {
        if (sects[i].getBoundingClientRect().top <= 50 && sects[i].getBoundingClientRect().bottom >= 50) {
            el.classList.add('scrollHighlight');
        } else {
            el.classList.remove('scrollHighlight');
        }
    });
}

document.addEventListener('scroll', scrollHighlight);


/*********   UPDATE COPYRIGHT YEAR   ***********/
let dateSpan = document.querySelector('span');

dateSpan.textContent = new Date().getFullYear();





