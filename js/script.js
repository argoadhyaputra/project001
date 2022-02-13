const navbar = document.querySelector('.hamburger');
const navmenu = document.querySelector('.navMenu');

// navbar.on('click', function(){
//     navbar.classList.toggle('is-active')
// })

navbar.addEventListener('click', function(){
    navbar.classList.toggle('is-active');
    navmenu.classList.toggle('is-active');
})