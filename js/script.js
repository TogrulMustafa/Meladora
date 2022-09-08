const lang = document.getElementById('lang')
const firstSearch = document.getElementById('firstSearch')
const secondSearch = document.getElementById('secondSearch')
const thirdSearch = document.getElementById('thirdSearch')
const close = document.getElementById('close')
const navfixed = document.querySelector('.nav-fixed')
const hambMenu = document.querySelector('.hamb-menu')
const hambMenu2 = document.querySelector('.hamb-menu2')
const hambClose = document.querySelector('.hamb-up i')
const scrollTopBtn = document.querySelector('.scrollToTop-btn')
const fruit = document.getElementById('fruit')
const vegetable = document.getElementById('vegetable')




window.addEventListener('scroll', _ => {
    scrollTopBtn.classList.toggle('active', window.scrollY > 200)
})

scrollTopBtn.addEventListener('click', _ => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    document.querySelector('.hamb-toggle').classList.remove('active')
    document.querySelector('.overlay').classList.remove('active')
    document.getElementById('navi-search').classList.remove('active')
})



window.addEventListener('scroll', _ => {
    navfixed.classList.toggle('active', window.scrollY > 50)
})

lang.addEventListener('click', _ => {
    document.getElementsByClassName('lang')[0].classList.toggle('active')
    document.getElementById('lang-icon').classList.toggle('active')
})

firstSearch.addEventListener('click', _ => {
    document.getElementById('navi-search').classList.add('active')
})

secondSearch.addEventListener('click', _ => {
    document.getElementById('navi-search').classList.add('active')
})

thirdSearch.addEventListener('click', _ => {
    document.getElementById('navi-search').classList.add('active')
})

close.addEventListener('click', _ => {
    document.getElementById('navi-search').classList.remove('active')
})

hambMenu.addEventListener('click', _ => {
    document.querySelector('.hamb-toggle').classList.add('active')
    document.querySelector('.overlay').classList.add('active')
    console.log('Test')
})

hambMenu2.addEventListener('click', _ => {
    document.querySelector('.hamb-toggle').classList.add('active')
    document.querySelector('.overlay').classList.add('active')
    console.log('Test')
})

hambClose.addEventListener('click', _ => {
    document.querySelector('.hamb-toggle').classList.remove('active')
    document.querySelector('.overlay').classList.remove('active')
})

document.querySelector('.overlay').addEventListener('click', _ => {
    document.querySelector('.hamb-toggle').classList.remove('active')
    document.querySelector('.overlay').classList.remove('active')
})

fruit.addEventListener('click', _ => {
    document.querySelector('.product-fruit').classList.remove('active')
    document.querySelector('.product-vegetable').classList.remove('active')
    fruit.classList.remove('active')
    vegetable.classList.remove('active')
})
vegetable.addEventListener('click', _ => {
    document.querySelector('.product-fruit').classList.add('active')
    document.querySelector('.product-vegetable').classList.add('active')
    fruit.classList.add('active')
    vegetable.classList.add('active')
})



var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    });