document.addEventListener("DOMContentLoaded", () => {

    const menu = document.getElementById('menu-container');
    const mbTop = document.querySelector('.mb-top')
    const mbMid = document.querySelector('.mb-mid')
    const mbBottom = document.querySelector('.mb-bottom')
    const menuListContainer = document.getElementById('menu-list-container')
    const menuLi = document.querySelectorAll('#menu-list li')
    const casesMenu = document.querySelector('.cases-menu')
    const workImgContainer = document.getElementById('work-image-container')
    const lightboxContainer = document.querySelector('.lightbox-container')
    const casesSpecimenImg = document.querySelectorAll('.cases-specimen-img')
    const lightboxModalImg = document.querySelector('.lightbox-modal-img')
    const navWorkBtn = document.getElementById('nav-work-btn')
    const navContactBtn = document.getElementById('nav-contact-btn')
    const navMobileContactBtn = document.getElementById('mobile-nav-contact-btn')
    const navMobileContainer = document.getElementById('mobile-nav-container')
    const contactContainer = document.querySelector('.contact-container')
    const contactCloseBtn = document.getElementById('contact-close-btn')
    const spoiler = document.querySelector('.img-spoiler')
    const caseScreenContainer = document.querySelector('.case-screen-container')

    menu.addEventListener('click', menuFunction)
    navWorkBtn.addEventListener('click', menuFunction)

    function menuFunction() {
        if (casesMenu.classList.contains('cases-menu-open')) {
            // menuBtn
            mbMid.classList.remove('no-width')
            mbTop.classList.remove('mb-top-rotate')
            mbBottom.classList.remove('mb-bottom-rotate')
            // menuList
            menuListContainer.classList.add('invis')
            menuListContainer.classList.add('no-scale')
            // workImg
            workImgContainer.classList.add('invis')
            setTimeout(() => {
                menuListContainer.classList.add('no-display')
                workImgContainer.classList.add('no-display')
            }, 350)
            // Nav
            navMobileContainer.classList.remove('no-display')
            setTimeout(() => {
                navMobileContainer.classList.remove('invis')
            }, 30)
            // casesMenu
            casesMenu.classList.remove('cases-menu-open')
            casesMenu.classList.add('cases-menu-close')
            setTimeout(() => {
                casesMenu.classList.remove('cases-menu-close')
            }, 600)
            
            // prevent scroll on smaller screen sizes
            allowScroll()
        } else {
            // menuBtn
            mbMid.classList.add('no-width')
            mbTop.classList.add('mb-top-rotate')
            mbBottom.classList.add('mb-bottom-rotate')
            // menuList
            menuListContainer.classList.remove('no-display')
            // workImg
            workImgContainer.classList.remove('no-display')
            // Nav
            navMobileContainer.classList.add('invis')
            setTimeout(() => {
                navMobileContainer.classList.add('no-display')
            }, 350)
            setTimeout(() => {
                menuListContainer.classList.remove('invis')
                menuListContainer.classList.remove('no-scale')
                workImgContainer.classList.remove('invis')
            }, 350)
            // casesMenu
            setTimeout(() => {
                casesMenu.classList.remove('cases-menu-close')
                casesMenu.classList.add('cases-menu-open')
            }, 200)
            // prevent scroll on smaller screen sizes
            preventScroll()
        }

    }

    menuLi.forEach(item => {
        item.addEventListener('mouseover', () => {
            for (i = 0; i < menuLi.length; i++) {
                menuLi[i].classList.remove('li-selected')
            }
            item.classList.add('li-selected')
            workImgContainer.className = ""

            if (menuLi[0].classList.contains('li-selected')) {
                workImgContainer.classList.add('work-image0')
            } else if (menuLi[1].classList.contains('li-selected')) {
                workImgContainer.classList.add('work-image1')
            } else if (menuLi[2].classList.contains('li-selected')) {
                workImgContainer.classList.add('work-image2')
            } else if (menuLi[3].classList.contains('li-selected')) {
                workImgContainer.classList.add('work-image3')
            } else if (menuLi[4].classList.contains('li-selected')) {
                workImgContainer.classList.add('work-image4')
            } else if (menuLi[5].classList.contains('li-selected')) {
                workImgContainer.classList.add('work-image5')
            }
        })
    })

    // Lightbox functionality
    casesSpecimenImg.forEach(item => {
        item.addEventListener('click', () => {
            lightboxModalImg.src = item.src
            lightboxContainer.classList.remove('no-display')
            setTimeout(()=> {
                lightboxContainer.classList.remove('invis')
            },30)
            preventScroll()
        })
    })
    lightboxContainer.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox-modal-img')) {
            e.stopPropagation(); 
        } else {
            lightboxContainer.classList.add('invis')
        setTimeout(()=> {
                lightboxContainer.classList.add('no-display')
            },350)
            allowScroll()
        }
    })

    // Contact functionality
    navContactBtn.addEventListener('click', contactFunction)
    navMobileContactBtn.addEventListener('click', contactFunction)

    function contactFunction() {
        contactContainer.classList.remove('no-display')
        setTimeout(()=> {
            contactContainer.classList.remove('invis')
        },30)
        // prevent scroll on smaller screen sizes
        preventScroll()
    }


    contactCloseBtn.addEventListener('click', ()=> {
        contactContainer.classList.add('invis')
        setTimeout(()=> {
            contactContainer.classList.add('no-display')
        },350)
        // prevent scroll on smaller screen sizes
        allowScroll()
    })

    // Spoiler functionality
    if(caseScreenContainer.classList.contains('img-spoiler')) {
        spoiler.addEventListener('click', ()=> {
            caseScreenContainer.classList.remove('img-spoiler')
        })
    }

    function preventScroll() {
        document.querySelector('body').style.overflowY = "hidden"
        document.querySelector('html').style.overflowY = "hidden"
    }
    function allowScroll() {
        document.querySelector('body').style.overflowY = "auto"
        document.querySelector('html').style.overflowY = "auto"
    }
    







})