const navMenuIcon = document.querySelector('#nav-menu');
const navBar = document.querySelector('#navbar')



function toggleNavMenu(e) {
    e.preventDefault();
    if (navBar.classList.contains('animation-open')) {
        navBar.classList.remove('animation-open');
        navBar.classList.add('animation-close');
    } else {
        navBar.classList.add('animation-open');
    }
}

navMenuIcon.addEventListener('click', toggleNavMenu);
navBar.addEventListener('animationend', () => navBar.classList.remove('animation-close'));