const isMobile = {
  Android: function () {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
      return (
              isMobile.Android() ||
              isMobile.BlackBerry() ||
              isMobile.iOS() ||
              isMobile.Opera() ||
              isMobile.Windows());
  }
};

if (isMobile.any()){
  document.body.classList.add('_touch');

  let menuArrows = document.querySelectorAll('.menu_arrow');
  if (menuArrows.length>0){
    for (let index = 0; index < menuArrows.length; index++){
      const menuArrow = menuArrows[index];
      menuArrow.addEventListener('click', function(e){
      menuArrow.parentElement.classList.toggle('_active')
      });
    }
  }
} else {
  document.body.classList.add('_pc');

}

const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
const menuLinksSub = document.querySelectorAll('.menu_sub_link[data-goto');
if(menuLinks.length>0){
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
    
  });
};
if (menuLinksSub.length>0){
  menuLinksSub.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  })
};

  function onMenuLinkClick(e){
    const menuLink = e.target;
    let gotoBlockValue
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      // if (document.body.classList.contains('_touch')){
      //   gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;
      // }
      // else{
      //   gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;
      // }
      gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;
      window.scrollTo( 0, 1000 );
      if (iconMenu.classList.contains('_active')){
        document.body.classList.remove('_lock');
        menuBody.classList.remove('_active');
        iconMenu.classList.remove('_active');
      }
      // этот код меняет поведение прокрутки на "smooth"
      window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth"
      });
      e.preventDefault();
    }
  }
  


const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu_body');
if (iconMenu){  
  iconMenu.addEventListener('click', function(e){
    document.body.classList.toggle('_lock');
    menuBody.classList.toggle('_active');
    iconMenu.classList.toggle('_active');
  });
}

// more news

const moreNews = document.querySelector('.arrow_more');
const newsSection = document.querySelectorAll('.wrapper_news_section');
moreNews.addEventListener('click', () => {
  for (let i = 1; i < newsSection.length; i++){
    newsSection[i].classList.toggle('hide')
  }
  moreNews.classList.toggle('arrow_less')
})
console.log(newsSection)

// registration
const enter = document.querySelector('.enter');
const gray = document.querySelector('.gray');
const loginBtn = document.querySelector('.menu_link_button');
const cross = document.querySelector('.cross')
loginBtn.addEventListener('click', () => {
  enter.classList.add('_active');
  gray.classList.add('_active');
  document.body.classList.add('_lock');

})
cross.addEventListener('click', () => {
  enter.classList.remove('_active');
  gray.classList.remove('_active');
  document.body.classList.remove('_lock');
})




const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
 const colors = ['#006466', '#065A60', '#0B525B', '#144552', '#1B3A4B', '#212F45', '#272640', '#312244', '#3E1F47', '#4D194D']
for (let i = 0; i<SQUARES_NUMBER; i++){
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))

  board.append(square)
}
function setColor(element){
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`

}
function getRandomColor (){
  const index = Math.floor(Math.random() * colors.length)
  return colors [index]
}