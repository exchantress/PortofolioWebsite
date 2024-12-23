const menubar = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');
const section = document.querySelectorAll('section');
const navLink = document.querySelectorAll('header nav a');
const header = document.querySelector('.header');

menubar.onclick = () => {
    menubar.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    // Handle section scroll animation and active link update
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top > offset && top < offset + height) {
            sec.classList.add('start-animation');
            navLink.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
    });

    // Handle sticky header
    header.classList.toggle('sticky', window.scrollY > 100);

    // Reset menu state when scrolling
    menubar.classList.remove('bx-x');
    navbar.classList.remove('active');
};
