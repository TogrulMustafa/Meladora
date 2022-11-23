const langBtn = document.querySelector('.navi-media > ul > li:first-child')
const firstSearch = document.querySelector('.navi-media > i')
const secondSearch = document.querySelector('.navi-menu > ul > i')
const thirdSearch = document.querySelector('.navi-fixed ul > i')
const close = document.querySelector('.navi-search > i')
const closeHiddenNavi = document.querySelector('.hiddenNavi-content > div > i')
const naviFixed = document.querySelector('.navi-fixed')
const naviHamb = document.querySelectorAll('.navi-hamb')
const scrollTopBtn = document.querySelector('.scrollToTop-btn')



// Bezen ele olur ki HTML strukturunu HTML-de yox JS(innerHTML) ile yaziriq ve bu zaman null errorunu aliriq.Bu prblemi hell etmek ucun asagidaki bu koda baxaraq istifade etmeye calis
// product-hidden bolmesinin acilmasi
function showProductInfo() {
    Array.from(document.querySelectorAll('.product-item')).forEach(item => {
        item.addEventListener('click', _ => {
            document.querySelector('.product-hidden').classList.add('active')

            const productItemEN = productData.find(x => x.titleEN == item.children[1].children[1].children[0].textContent)
            if (productItemEN) {
                document.querySelector('.product-hidden').innerHTML = 
            `
            <i class="fa-solid fa-circle-xmark"></i>
            <div>
                <div class="product-info">
                    <img src=${productItemEN.img}>
                    <div>
                        <h4>${productItemEN.titleEN}</h4>
                        <span>${productItemEN.cost} ₼</span>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur nostrum veritatis repellat non in. Minus saepe eum nihil excepturi accusamus reprehenderit odio eius voluptatem non ducimus corporis, error, placeat quod qui harum quaerat vero commodi eaque asperiores rerum voluptates? Labore voluptatem maxime veniam eligendi, doloremque saepe, illum iure culpa quia rerum aut animi autem ullam nihil aspernatur enim pariatur dolores expedita voluptates a. Maiores voluptates natus corrupti, labore inventore reprehenderit iure consectetur voluptatem ut consequuntur.</p>
                    </div>
                </div>
                <div class="product-slider">
                    <div class="product-sliders">
                        <div>
                            <img src=${productItemEN.sliderImg1}>
                        </div>
                        <div>
                            <img src=${productItemEN.sliderImg2}>
                        </div>
                        <div>
                            <img src=${productItemEN.sliderImg3}>
                        </div>
                    </div>
                </div>
            </div>
            `
            }
            const productItemAZ = productData.find(x => x.titleAZ == item.children[1].children[1].children[0].textContent)
            if (productItemAZ) {
                document.querySelector('.product-hidden').innerHTML = 
            `
            <i class="fa-solid fa-circle-xmark"></i>
            <div>
                <div class="product-info">
                    <img src=${productItemAZ.img}>
                    <div>
                        <h4>${productItemAZ.titleAZ}</h4>
                        <span>${productItemAZ.cost} ₼</span>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur nostrum veritatis repellat non in. Minus saepe eum nihil excepturi accusamus reprehenderit odio eius voluptatem non ducimus corporis, error, placeat quod qui harum quaerat vero commodi eaque asperiores rerum voluptates? Labore voluptatem maxime veniam eligendi, doloremque saepe, illum iure culpa quia rerum aut animi autem ullam nihil aspernatur enim pariatur dolores expedita voluptates a. Maiores voluptates natus corrupti, labore inventore reprehenderit iure consectetur voluptatem ut consequuntur.</p>
                    </div>
                </div>
                <div class="product-slider">
                    <div class="product-sliders">
                        <div>
                            <img src=${productItemAZ.sliderImg1}>
                        </div>
                        <div>
                            <img src=${productItemAZ.sliderImg2}>
                        </div>
                        <div>
                            <img src=${productItemAZ.sliderImg3}>
                        </div>
                    </div>
                </div>
            </div>
            `
            }
            const productItemRU = productData.find(x => x.titleRU == item.children[1].children[1].children[0].textContent)
            if (productItemRU) {
                document.querySelector('.product-hidden').innerHTML = 
            `
            <i class="fa-solid fa-circle-xmark"></i>
            <div>
                <div class="product-info">
                    <img src=${productItemRU.img}>
                    <div>
                        <h4>${productItemRU.titleRU}</h4>
                        <span>${productItemRU.cost} ₼</span>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur nostrum veritatis repellat non in. Minus saepe eum nihil excepturi accusamus reprehenderit odio eius voluptatem non ducimus corporis, error, placeat quod qui harum quaerat vero commodi eaque asperiores rerum voluptates? Labore voluptatem maxime veniam eligendi, doloremque saepe, illum iure culpa quia rerum aut animi autem ullam nihil aspernatur enim pariatur dolores expedita voluptates a. Maiores voluptates natus corrupti, labore inventore reprehenderit iure consectetur voluptatem ut consequuntur.</p>
                    </div>
                </div>
                <div class="product-slider">
                    <div class="product-sliders">
                        <div>
                            <img src=${productItemRU.sliderImg1}>
                        </div>
                        <div>
                            <img src=${productItemRU.sliderImg2}>
                        </div>
                        <div>
                            <img src=${productItemRU.sliderImg3}>
                        </div>
                    </div>
                </div>
            </div>
            `
            }

            // product-hidden bolmesinin baglanilmasi
            document.querySelector('.product-hidden > i').addEventListener('click', _ => {
                document.querySelector('.product-hidden').classList.remove('active')
            })
    
            // product-hidden bolmesinde slayder qisminin kodu
            const aboutSlider = document.querySelector('.product-sliders')
            const sliderItems = document.querySelectorAll('.product-sliders > *')
            const sliderLength = sliderItems.length
    
            const perView = 3
            let totalScroll = 0
            const delay = 2000
    
            aboutSlider.style.setProperty('--per-view', perView)
            for(let i = 0; i < perView; i++) {
                aboutSlider.insertAdjacentHTML('beforeend', sliderItems[i].outerHTML)
            }
    
            let autoVisibleScroll = setInterval(scrolling, delay)
    
            function scrolling() {
                totalScroll++
                if(totalScroll == sliderLength + 1) {
                    clearInterval(autoVisibleScroll)
                    totalScroll = 1
                    aboutSlider.style.transition = '0s'
                    aboutSlider.style.left = '0'
                    autoVisibleScroll = setInterval(scrolling, delay)
                }
                const widthEl = document.querySelector('.product-sliders > :first-child').offsetWidth
                aboutSlider.style.left = `-${totalScroll * widthEl}px`
                aboutSlider.style.transition = '.3s'
            }
        })
    })
}

// Product bolmesinde mehsullarin filtrlenmesi
Array.from(document.querySelectorAll('.product-type > span')).forEach(item => {
    item.addEventListener('click', _ => {
        filterData.forEach(thing => {
            if (thing.nameEN === item.textContent) {
                document.querySelector('.products').innerHTML = ''
                document.querySelector('.products').innerHTML += thing.data.map(item => {
                    return `
                    <div class="product-item">
                        <div></div>
                        <div>
                            <img src=${item.img}>
                            <div>
                                <span class="change-lang">${item.titleEN}</span>
                                <span>${item.cost} ₼</span>
                            </div>
                        </div>
                    </div>
                    `
                }).join(' ')
            }
            else if (thing.nameAZ === item.textContent) {
                document.querySelector('.products').innerHTML = ''
                document.querySelector('.products').innerHTML += thing.data.map(item => {
                    return `
                    <div class="product-item">
                        <div></div>
                        <div>
                            <img src=${item.img}>
                            <div>
                                <span class="change-lang">${item.titleAZ}</span>
                                <span>${item.cost} ₼</span>
                            </div>
                        </div>
                    </div>
                    `
                }).join(' ')
            }
            else if (thing.nameRU === item.textContent) {
                document.querySelector('.products').innerHTML = ''
                document.querySelector('.products').innerHTML += thing.data.map(item => {
                    return `
                    <div class="product-item">
                        <div></div>
                        <div>
                            <img src=${item.img}>
                            <div>
                                <span class="change-lang">${item.titleRU}</span>
                                <span>${item.cost} ₼</span>
                            </div>
                        </div>
                    </div>
                    `
                }).join(' ')
            }
        })
        showProductInfo()
    })
})

showProductInfo()

// navi-menu,navi-hidden ve navi-fixed bolmesinde menyulari klikleyerken menyularin stilinin deyisdirilmesi
Array.from(document.querySelectorAll('.menu-item')).forEach(item => {
    item.addEventListener('click', e => {
        Array.from(document.querySelectorAll('.menu-item')).forEach(x => {
            x.classList.remove('active')
            if (x.textContent === e.target.textContent) {
                x.classList.add('active')
            }
        })
    })
})

// Window'u skroll edende navi-menu,navi-hidden ve navi-fixed bolmelerinde menyularin stilinin deyisdirilmesi
window.addEventListener('scroll', _ => {
    let sections = document.querySelectorAll('section')
    let scrollY = window.pageYOffset

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight
        let sectionTop = current.offsetTop - 50
        let id = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            Array.from(document.querySelectorAll('.menu-item')).forEach((item, i) => {
                item.classList.remove('active')
            })
            document.querySelector(`.navi-menu > ul > li > a[href*=${id}]`).classList.add('active')
            document.querySelector(`.navi-fixed ul > li > a[href*=${id}]`).classList.add('active')
            document.querySelector(`.hiddenNavi-content > ul > li > a[href*=${id}]`).classList.add('active')
        }
        else {
            document.querySelector(`.navi-menu > ul > li > a[href*=${id}]`).classList.remove('active')
            document.querySelector(`.navi-fixed ul > li > a[href*=${id}]`).classList.remove('active')
            document.querySelector(`.hiddenNavi-content > ul > li > a[href*=${id}]`).classList.remove('active')
        } 
    })   
})

// Saytin dilinin deyisdirilmesi
Array.from(document.querySelectorAll('.langs > div')).forEach(item => {
    item.addEventListener('click', e => {
        if (e.target.textContent == 'EN') {
            document.querySelector('.navi-media > ul > li > span').textContent = e.target.textContent
            document.querySelector('.lang1').textContent = 'AZ'
            document.querySelector('.lang2').textContent = 'RU'
            if (!document.querySelector('.product-type > span#all').classList.contains('active')) {
                document.querySelectorAll('.change-lang').forEach((item,i) => {
                    item.innerHTML = changeLangToEn[i]
                })
            }
            else if (document.querySelector('.product-type > span#fruit').classList.contains('active')) {
                document.querySelectorAll('.change-lang').forEach((item,i) => {
                    item.innerHTML = changeLangToEn2[i]
                })
            }
            else if (document.querySelector('.product-type > span#vegetable').classList.contains('active')) {
                document.querySelectorAll('.change-lang').forEach((item,i) => {
                    item.innerHTML = changeLangToEn3[i]
                })
            }
            else if (document.querySelector('.product-type > span#grain').classList.contains('active')) {
                document.querySelectorAll('.change-lang').forEach((item,i) => {
                    item.innerHTML = changeLangToEn4[i]
                })
            }
            else if (document.querySelector('.product-type > span#other').classList.contains('active')) {
                document.querySelectorAll('.change-lang').forEach((item,i) => {
                    item.innerHTML = changeLangToEn5[i]
                })
            }
            document.querySelectorAll('.placeholderEl').forEach((item,i) => {
                item.setAttribute('placeholder', changeLangToEnForPlaceholder[i])
            })
            document.querySelectorAll('.valueEl').forEach((item,i) => {
                item.value = changeLangToEnForValue[i]
            })
        } 
        else if (e.target.textContent == 'RU') {
            document.querySelector('.navi-media > ul > li > span').textContent = e.target.textContent
            document.querySelector('.lang1').textContent = 'AZ'
            document.querySelector('.lang2').textContent = 'EN'
            if (!document.querySelector('.product-type > span#all').classList.contains('active')) {
                document.querySelectorAll('.change-lang').forEach((item,i) => {
                    item.innerHTML = changeLangToRu[i]
                })
            }
            else if (document.querySelector('.product-type > span#fruit').classList.contains('active')) {
                document.querySelectorAll('.change-lang').forEach((item,i) => {
                    item.innerHTML = changeLangToRu2[i]
                })
            }
            else if (document.querySelector('.product-type > span#vegetable').classList.contains('active')) {
                document.querySelectorAll('.change-lang').forEach((item,i) => {
                    item.innerHTML = changeLangToRu3[i]
                })
            }
            else if (document.querySelector('.product-type > span#grain').classList.contains('active')) {
                document.querySelectorAll('.change-lang').forEach((item,i) => {
                    item.innerHTML = changeLangToRu4[i]
                })
            }
            else if (document.querySelector('.product-type > span#other').classList.contains('active')) {
                document.querySelectorAll('.change-lang').forEach((item,i) => {
                    item.innerHTML = changeLangToRu5[i]
                })
            }
            document.querySelectorAll('.placeholderEl').forEach((item,i) => {
                item.setAttribute('placeholder', changeLangToRuForPlaceholder[i])
            })
            document.querySelectorAll('.valueEl').forEach((item,i) => {
                item.value = changeLangToRuForValue[i]
            })
        }
        else if (e.target.textContent == 'AZ') {
            document.querySelector('.navi-media > ul > li > span').textContent = e.target.textContent
            document.querySelector('.lang1').textContent = 'EN'
            document.querySelector('.lang2').textContent = 'RU'
            if (!document.querySelector('.product-type > span#all').classList.contains('active')) {
                document.querySelectorAll('.change-lang').forEach((item,i) => {
                    item.innerHTML = changeLangToAz[i]
                })
            }
            else if (document.querySelector('.product-type > span#fruit').classList.contains('active')) {
                document.querySelectorAll('.change-lang').forEach((item,i) => {
                    item.innerHTML = changeLangToAz2[i]
                })
            }
            else if (document.querySelector('.product-type > span#vegetable').classList.contains('active')) {
                document.querySelectorAll('.change-lang').forEach((item,i) => {
                    item.innerHTML = changeLangToAz3[i]
                })
            }
            else if (document.querySelector('.product-type > span#grain').classList.contains('active')) {
                document.querySelectorAll('.change-lang').forEach((item,i) => {
                    item.innerHTML = changeLangToAz4[i]
                })
            }
            else if (document.querySelector('.product-type > span#other').classList.contains('active')) {
                document.querySelectorAll('.change-lang').forEach((item,i) => {
                    item.innerHTML = changeLangToAz5[i]
                })
            }
            document.querySelectorAll('.placeholderEl').forEach((item,i) => {
                item.setAttribute('placeholder', changeLangToAzForPlaceholder[i])
            })
            document.querySelectorAll('.valueEl').forEach((item,i) => {
                item.value = changeLangToAzForValue[i]
            })
        }
    })
})

// Product bolmesinde mehsullar filterlenirken mehsul tiplerinin renginin deyisdirilmesi
Array.from(document.querySelectorAll('.product-type > span')).forEach(item => {
    item.addEventListener('click', e => {
        Array.from(document.querySelectorAll('.product-type > span')).forEach(x => {
            x.classList.remove('active')
        })
        if (e.target.id == 'all') {
            document.querySelector('#all').classList.remove('active')
        } 
        else {
            document.querySelector('#all').classList.add('active')
            e.target.classList.add('active')
        }
    })
})

// Sehife yuklenib bitdikden sonra animasiyanin ortaya cixmasi ve daha sonra yigisdirilmasi
window.addEventListener('DOMContentLoaded', _ => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    document.querySelector('.entry').classList.add('active')
    setTimeout(_ => {
        document.querySelector('.entry').classList.remove('active')
    },2000)
})

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

// navi-hidden'da menyu elementlerine klikleyende hemin menyu elementine gederken navi-hiddenin baglanmasi
document.querySelectorAll('.navi-hidden ul > li').forEach(item => {
    item.addEventListener('click', _ => {
        document.querySelector('.navi-hidden').classList.remove('active')
    })
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

// Cumlede eyni sozden nece dene varin tapilmasi alqoritmasi
const text  = 'Nahid kungfu sicandir beli kungfu'

const count = text.split(' ').filter(item => item.endsWith('fu'))
console.log(count.length)



/*
Sual:
    navi-menu,navi-hidden ve navi-fixed bolmelerinde menyu elementlerine klikleyende
    hemin bolmelere gedir lakin bolmenin tam ustunde dayanir biraz geride dayanmasi lazimdir mene ?

Cavab:
    navi-fixed'in hundurluyu qeder her sectionun padding-topuna olcu ver.Daha sonra men navdaki
    menyu elementlerine klikleyende hemin sectionlara gedecek ve sectionun tam ustunde deyil 
    istediyim kimi biraz gerisinde duracaq

*/



