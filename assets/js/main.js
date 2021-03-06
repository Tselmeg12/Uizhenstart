/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle =document.getElementById('nav-toggle'),
      navClose= document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
/*==================== ACCORDION SKILLS ====================*/
const skillsContent =document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')
function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0; i <skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills_close '){
        this.parentNode.className = 'skills__content skills__open'
    }
}
skillsHeader.forEach((eL) =>{
    eL.addEventListener('click', toggleSkills)
})
/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll('[data-target'),
      tabContents = document.querySelectorAll('[data-content]')
tabs.forEach(tab=> {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)


        tabContents.forEach(tabContent=>{
            tabContent.classList.remove('qualification__active')
        })

        target.classList.add('qualification__active')

        tabs.forEach(tab=> {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})
/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 