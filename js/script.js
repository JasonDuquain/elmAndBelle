let hdr = document.querySelector('header');
let fullNav = document.querySelector('.fullNavWrapper');

document.addEventListener('scroll', () => {
    let navBottom = hdr.getBoundingClientRect().bottom;
    if (navBottom <= 450) {
        fullNav.classList.add('sticky');
    } else {
        fullNav.classList.remove('sticky');
    }
});




