const langBtn = document.querySelector('.navi-media > ul > li:first-child')
const firstSearch = document.querySelector('.navi-media > i')
const secondSearch = document.querySelector('.navi-menu > ul > i')
const thirdSearch = document.querySelector('.navi-fixed ul > i')
const close = document.querySelector('.navi-search > i')
const closeHiddenNavi = document.querySelector('.hiddenNavi-content > div > i')
const naviFixed = document.querySelector('.navi-fixed')
const naviHamb = document.querySelectorAll('.navi-hamb')
const scrollTopBtn = document.querySelector('.scrollToTop-btn')
const fruit = document.getElementById('fruit')
const vegetable = document.getElementById('vegetable')



// Scroll Button'un ve sabit nav bolmesinin gorunmesi
window.addEventListener('scroll', _ => {
    scrollTopBtn.classList.toggle('active', window.scrollY > 200)
    naviFixed.classList.toggle('active', window.scrollY > 50)
})

// Scroll Button klikleyende scroll'un sehifenin basina gelmesi
scrollTopBtn.addEventListener('click', _ => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    document.querySelector('.navi-search').classList.remove('active')
    document.querySelector('.navi-hidden').classList.remove('active')
})

// Nav bolmesinde dilin secilmesi
langBtn.addEventListener('click', _ => {
    document.querySelector('.langs').classList.toggle('active')
    document.querySelector('#lang-icon').classList.toggle('active')
})

// Nav bolmesinin navi-media sektorundaki search duymesine klikleyende axtaris penceresinin acilmasi
firstSearch.addEventListener('click', _ => {
    document.querySelector('.navi-search').classList.add('active')
})

// Nav bolmesinin navi-menu sektorundaki search duymesine klikleyende axtaris penceresinin acilmasi
secondSearch.addEventListener('click', _ => {
    document.querySelector('.navi-search').classList.add('active')
})

// Nav bolmesinin navi-fixed sektorundaki search duymesine klikleyende axtaris penceresinin acilmasi 
thirdSearch.addEventListener('click', _ => {
    document.querySelector('.navi-search').classList.add('active')
})

// Acilan navi-search sektorunun baglanmasi
close.addEventListener('click', _ => {
    document.querySelector('.navi-search').classList.remove('active')
})

// Hamburger ikonunu klikleyende navi-hidden sektorunun ortaya cixmasi
naviHamb.forEach(item => {
    item.addEventListener('click', _ => {
        document.querySelector('.navi-hidden').classList.add('active')
    })
})

// Close ikonuna klikleyende navi-hidden sektorunun baglanmasi
closeHiddenNavi.addEventListener('click', _ => {
    document.querySelector('.navi-hidden').classList.remove('active')
})

// Overlay'a klikleyende navi-hidden sektorunun baglanmasi
document.querySelector('.hiddenNavi-overlay').addEventListener('click', _ => {
    document.querySelector('.navi-hidden').classList.remove('active')
})

// Ekran olcusunu resize edende navi-hidden sektorunun baglanmasi
window.addEventListener('resize', _ => {
    if (window.innerWidth > 992) {
        document.querySelector('.navi-hidden').classList.remove('active')
    }
})

// Saytin dilinin deyisdirilmesi
Array.from(document.querySelectorAll('.langs > div')).forEach(item => {
    item.addEventListener('click', e => {
        if (e.target.textContent == 'EN') {
            document.querySelector('.navi-media > ul > li > span').textContent = e.target.textContent
            document.querySelector('.lang1').textContent = 'AZ'
            document.querySelector('.lang2').textContent = 'RU'
        } 
        else if (e.target.textContent == 'RU') {
            document.querySelector('.navi-media > ul > li > span').textContent = e.target.textContent
            document.querySelector('.lang1').textContent = 'AZ'
            document.querySelector('.lang2').textContent = 'EN'
        }
        else if (e.target.textContent == 'AZ') {
            document.querySelector('.navi-media > ul > li > span').textContent = e.target.textContent
            document.querySelector('.lang1').textContent = 'EN'
            document.querySelector('.lang2').textContent = 'RU'
        }
    })
})

// Home bolmesindeki slider'in ise salinmasi
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});






























// hambMenu.addEventListener('click', _ => {
//     document.querySelector('.hamb-toggle').classList.add('active')
//     document.querySelector('.overlay').classList.add('active')
// })


// hambMenu2.addEventListener('click', _ => {
//     document.querySelector('.hamb-toggle').classList.add('active')
//     document.querySelector('.overlay').classList.add('active')
// })


// hambClose.addEventListener('click', _ => {
//     document.querySelector('.hamb-toggle').classList.remove('active')
//     document.querySelector('.overlay').classList.remove('active')
// })


// document.querySelector('.overlay').addEventListener('click', _ => {
//     document.querySelector('.hamb-toggle').classList.remove('active')
//     document.querySelector('.overlay').classList.remove('active')
// })


// fruit.addEventListener('click', _ => {
//     document.querySelector('.product-fruit').classList.remove('active')
//     document.querySelector('.product-vegetable').classList.remove('active')
//     fruit.classList.remove('active')
//     vegetable.classList.remove('active')
// })


// vegetable.addEventListener('click', _ => {
//     document.querySelector('.product-fruit').classList.add('active')
//     document.querySelector('.product-vegetable').classList.add('active')
//     fruit.classList.add('active')
//     vegetable.classList.add('active')
// })

