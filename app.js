document.addEventListener("DOMContentLoaded", () => {

    const menu = document.getElementById('menu-container');
    const mbTop = document.querySelector('.mb-top')
    const mbMid = document.querySelector('.mb-mid')
    const mbBottom = document.querySelector('.mb-bottom')
    const menuListContainer = document.getElementById('menu-list-container')
    const menuLi = document.querySelectorAll('#menu-list li')
    const headCircle = document.getElementById('head-circle');
    const headSquare = document.getElementById('head-square');
    const title = document.getElementById('title');
    const subtitle = document.getElementById('sub-title')
    const viewWork = document.getElementById('view-work-header')
    const workImgContainer = document.getElementById('work-image-container')
    const navContainer = document.getElementById('nav-container')
    const navWorkBtn = document.getElementById('nav-work-btn')
    const navContactBtn = document.getElementById('nav-contact-btn')
    const navMobileContactBtn = document.getElementById('mobile-nav-contact-btn')
    const navMobileContainer = document.getElementById('mobile-nav-container')
    const contactContainer = document.querySelector('.contact-container')
    const contactCloseBtn = document.getElementById('contact-close-btn')

    menu.addEventListener('click', menuFunction)
    navWorkBtn.addEventListener('click', menuFunction)

    function menuFunction() {
        if (headCircle.classList.contains('menu-open')) {
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
            navContainer.classList.remove('no-display')
            navMobileContainer.classList.remove('no-display')
            
            // Circle
            headCircle.classList.remove('menu-open')
            headCircle.classList.add('menu-close')
            // Square
            setTimeout(() => {
                headSquare.classList.remove('down')
                subtitle.classList.remove('downleft')
                viewWork.classList.remove('downleft')
                title.classList.remove('downleft')
                navContainer.classList.remove('invis')
                navMobileContainer.classList.remove('invis')
            }, 30)
            setTimeout(() => {
                headCircle.classList.remove('menu-close')
            }, 600)
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
            navContainer.classList.add('invis')
            navMobileContainer.classList.add('invis')
            setTimeout(() => {
                menuListContainer.classList.remove('invis')
                menuListContainer.classList.remove('no-scale')
                workImgContainer.classList.remove('invis')
                navContainer.classList.add('no-display')
                navMobileContainer.classList.add('no-display')
            }, 350)

            // Square
            title.classList.add('downleft')
            headSquare.classList.add('down')
            subtitle.classList.add('downleft')
            viewWork.classList.add('downleft')
            // Circle
            setTimeout(() => {
                headCircle.classList.remove('menu-close')
                headCircle.classList.add('menu-open')
            }, 200)
        }
    }



    viewWork.addEventListener('click', () => {
        if (viewWork.classList.contains('view-work-open')) {
            // viewWork text
            viewWork.classList.remove('view-work-open')
            viewWork.classList.add('invis')

            // Square
            headSquare.classList.remove('head-square-view-work-open')
            headSquare.classList.add('head-square-view-work-close')
            subtitle.classList.remove('invis')

            // Circle
            headCircle.classList.remove('head-circle-shrink')
            headCircle.classList.add('head-circle-grow')

            // menuBtn
            menu.classList.remove('no-display')

            // menuList
            menuListContainer.classList.add('invis')
            menuListContainer.classList.add('no-scale')

            // workImg
            workImgContainer.classList.add('invis')
            setTimeout(() => {
                menuListContainer.classList.add('no-display')
                workImgContainer.classList.add('no-display')
            }, 350)

            // Delays
            setTimeout(() => {
                menu.classList.remove('invis')
                viewWork.innerHTML = "view work"
                viewWork.setAttribute("data-text", "view work")
                viewWork.classList.remove('invis')
            }, 150)

            setTimeout(() => {
                headCircle.classList.remove('head-circle-grow')
            }, 600)
        } else {
            //  viewWork text
            viewWork.classList.add('view-work-open')
            viewWork.classList.add('invis')

            // Square
            headSquare.classList.remove('head-square-view-work-close')
            headSquare.classList.add('head-square-view-work-open')
            subtitle.classList.add('invis')

            // Circle
            headCircle.classList.remove('head-circle-grow')
            headCircle.classList.add('head-circle-shrink')

            // menuBtn
            menu.classList.add('invis')

            // menuList
            menuListContainer.classList.remove('no-display')

            // workImg
            workImgContainer.classList.remove('no-display')
            setTimeout(() => {
                menuListContainer.classList.remove('invis')
                menuListContainer.classList.remove('no-scale')
                workImgContainer.classList.remove('invis')
            }, 350)

            // Delays
            setTimeout(() => {
                viewWork.innerHTML = "home"
                viewWork.setAttribute("data-text", "home")
                viewWork.classList.remove('invis')
            }, 150)
            setTimeout(() => {
                menu.classList.add('no-display')
            }, 350)
        }
    })

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









})