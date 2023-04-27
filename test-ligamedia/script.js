const imgHamburger = document.querySelector('img[alt="hamburger"]')
const headerNav = document.querySelector('.header-nav')
const divImgHamburger = document.querySelector('.hamburger')
const mainNav = document.querySelector('.main-nav')
const mainNavMenu = document.querySelector('.main-nav__menu');
const mainContainer = document.querySelector('.main__container')
const copyIcon = document.querySelector('img[alt="copy-icon"]');
const description = document.querySelector('.overview-description');
const overlayCopy = document.querySelector('.overlay-copy')
const html = document.querySelector('html')
const body = document.querySelector('body')




// Change view hamburger on mobile or desktop (like in Figma)
if (window.screen.width >= 320 && window.screen.width <= 540) {
    imgHamburger.setAttribute('src', "icons/hamburger-mobile.svg")
}


// Functions

// Open hamburger
const openMenu = (event) => {
    event.preventDefault()
    if (mainNav.classList.contains('none')) {
        mainNav.classList.remove('none')
        divImgHamburger.classList.add('hamburger-active')
        mainNav.classList.add('hamburger-active')
        headerNav.classList.add('header-nav-active')
        mainContainer.classList.add('header-nav-active')
        html.classList.add('scroll-off')
        body.classList.add('scroll-off')

    } else {
        mainNav.classList.add('none')
        divImgHamburger.classList.remove('hamburger-active')
        mainNav.classList.remove('hamburger-active')
        headerNav.classList.remove('header-nav-active')
        mainContainer.classList.remove('header-nav-active')
        html.classList.remove('scroll-off')
        body.classList.remove('scroll-off')
    }
}



// Open subtext on nav menu
const openSubtext = (event) => {
    event.preventDefault();
    const menuItem = event.target.closest('.main-nav__menu-item');
    const link = menuItem.querySelector('a');

    if (link && menuItem) {
        const subtext = menuItem.querySelector('.subtext');
        subtext.classList.toggle('none');
        const arrow = menuItem.querySelector('img');
        if (subtext.classList.contains('none')) {
            arrow.setAttribute('src', 'icons/arrow-bottom.svg');
        } else {
            arrow.setAttribute('src', 'icons/arrow-top.svg');
        }
    }
}



// Copy text description
let timeoutId = null;
const copyTextToClipboard = (event) => {
    event.preventDefault()
    const copIcon = event.target.closest('img')
    if (copIcon) {
        navigator.clipboard.writeText(description.innerText)
            .then(() => {
                clearTimeout(timeoutId);
                overlayCopy.classList.remove('none')
                timeoutId = setTimeout(() => {
                    overlayCopy.classList.add('none')
                }, 2000)
            })
            .catch(err => {
                console.log('Failed to copy text', err)
            })
    }
}


// Listeners
mainNavMenu.addEventListener('click', (event) => {
    openSubtext(event)
});


mainContainer.addEventListener('click', (event) => {
    copyTextToClipboard(event)
})

imgHamburger.addEventListener('click', (event) => {
    openMenu(event)
})