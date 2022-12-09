"use strict"

window.addEventListener("load", windowLoad);

function windowLoad(){
   const htmlBlock = document.documentElement;

   const saveUserTheme = localStorage.getItem('user-theme');

   let userTheme;
   if (window.matchMedia){
      userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';  
   }
   window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e =>{
      !saveUserTheme ? changeTheme() : null;
   });

   const themeButton = document.getElementById('eee');
   const resetButton = document.querySelector('.page__reset');
   if(themeButton){
      themeButton.addEventListener("click", function(e){
         resetButton.classList.add('active');
         changeTheme(true);
      });
   }
   if(resetButton){
      resetButton.addEventListener("click", function(e){
         resetButton.classList.remove('active');
         localStorage.setItem('user-theme', '');
      });
   }

   function setThemeClass(){
      if(saveUserTheme){
         htmlBlock.classList.add(saveUserTheme)
         resetButton.classList.add('active');
      } else{
         htmlBlock.classList.add(userTheme);
      }
   }

   setThemeClass();

   function changeTheme(saveTheme = false){
      let currentTheme = htmlBlock.classList.contains('light') ? 'light' : 'dark';
      let newTheme;

      if(currentTheme === 'light'){
         newTheme = 'dark';
      } else if (currentTheme === 'dark'){
         newTheme = 'light';
      }
      htmlBlock.classList.remove(currentTheme);
      htmlBlock.classList.add(newTheme);
      saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
   }
}

// MENU BURGERRRRRR ===============
let iconMenu = document.querySelector('.menu__icon');
let menuBody = document.querySelector('.header__menu');
const menuLinks = document.querySelectorAll('.menu__link');
if (iconMenu){
   iconMenu.addEventListener('click', function(e){
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   })
};
console.log(menuLinks);
if (menuLinks.length > 0){
   menuLinks.forEach(menuLink =>{
      menuLink.addEventListener('click', clickButton);
   });


function clickButton(e){
   let menuLink = e.target;
      if(iconMenu.classList.contains('_active')){
         iconMenu.classList.remove('_active');
         menuBody.classList.remove('_active');
      }
   }
};


const main = document.querySelector('.main');
const aLink = main.querySelectorAll('a');
console.log(aLink);

if (aLink.length > 0){
   aLink.forEach(menuLinkss =>{
      menuLinkss.addEventListener('click', nonSsilka);
   });


function nonSsilka(e){
   let menuLinkss = e.target;
   alert('Это просто макет, ссылка никуда не ведёт!!!');
   }
};

// const alll = document.querySelectorAll('.main, .footer');
// console.log(alll);

// console.log(ssilka);
// ПРОКРУТКА
/*const mLinks = document.querySelectorAll('.eee_link[data-goto]');
if (mLinks.length > 0){
   mLinks.forEach(menuLink => {
      menuLinks.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e){
      let menuLink = e.target;
      if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();
      }
   }
}*/