let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login_form_container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBtn.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', ()=>{
    searchBtn.classList.toggle('fa-times');
    searchBtn.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

menu.addEventListener('click', () =>{
    menu.classList.toggle();
    navbar.classList.toggle()
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        $('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src= btn.getAttribute('')



    });

});