let menu = document.querySelector('#menu');
let btn = document.querySelector('#menuBtn');

btn.onclick = ()=> {
    menu.classList.toggle('active');
};