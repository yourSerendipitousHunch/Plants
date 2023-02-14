document.addEventListener('click', documentClick);

function documentClick(i) {

// Smooth scroll from navigation to the parts of the page

  const targetItem = i.target;

  if (targetItem.closest('[data-goto]')) {

    const goTo = targetItem.closest('[data-goto]').dataset.goto;
    const goToItem = document.querySelector(goTo);

    if(goToItem) {
      window.scrollTo({
        top: goToItem.offsetTop,
        behavior: 'smooth'
      });
    }
  }
  i.preventDefault();

// Burger menu

if (targetItem.closest('.burger-menu')) {
   document.documentElement.classList.toggle('burger-open');
 } else if (targetItem.closest('.nav-link')) {
   document.documentElement.classList.toggle('burger-open');
 }
 //
 const selectionBoxActive = document.querySelector('.contacts-dropdown-menu-select');
 if (targetItem.closest('.contacts-selection-box')) {
   selectionBoxActive.classList.toggle('activated');
 } 
}

// Servise selection n blur

const gardensSwitcher = document.querySelector('.gardens-switcher');
const lawnSwitcher = document.querySelector('.lawn-switcher');
const plantingSwitcher = document.querySelector('.planting-switcher');
const gardens = Array.from(document.querySelectorAll('.gardens'));
const lawn = Array.from(document.querySelectorAll('.lawn'));
const planting = Array.from(document.querySelectorAll('.planting'));

gardensSwitcher.addEventListener("click", function () {
   if (lawnSwitcher.classList.contains('btn-on') === true && plantingSwitcher.classList.contains('btn-on') === true) {
      gardensSwitcher.classList.disabled = true
   } else {
      gardensSwitcher.classList.toggle('btn-on');
   }
   checkButtonSelection();
});

lawnSwitcher.addEventListener("click", function () {

   if (gardensSwitcher.classList.contains('btn-on') === true && plantingSwitcher.classList.contains('btn-on') === true) {
      lawnSwitcher.classList.disabled = true
   } else {
      lawnSwitcher.classList.toggle('btn-on');
   }
   checkButtonSelection();
});

plantingSwitcher.addEventListener("click", function () {

   if (gardensSwitcher.classList.contains('btn-on') === true && lawnSwitcher.classList.contains('btn-on') === true) {
      plantingSwitcher.classList.disabled = true
   } else {
      plantingSwitcher.classList.toggle('btn-on');
   }
   checkButtonSelection();
});


let blurCards = [];
let blurCardsOne = [];
let brightCards = [];


function checkButtonSelection() {
   if (gardensSwitcher.classList.contains('btn-on') === false && lawnSwitcher.classList.contains('btn-on') === false && plantingSwitcher.classList.contains('btn-on') === false) {

      brightCards = [...lawn, ...gardens, ...planting];

   } else if (gardensSwitcher.classList.contains('btn-on') === true && lawnSwitcher.classList.contains('btn-on') === true && plantingSwitcher.classList.contains('btn-on') === false) {
      brightCards = [...lawn, ...gardens];
      blurCardsOne = [...planting];

   } else if (gardensSwitcher.classList.contains('btn-on') === true && plantingSwitcher.classList.contains('btn-on') === true && lawnSwitcher.classList.contains('btn-on') === false) {

      brightCards = [...planting, ...gardens];
      blurCardsOne = [...lawn];

   } else if (lawnSwitcher.classList.contains('btn-on') === true && plantingSwitcher.classList.contains('btn-on') === true && gardensSwitcher.classList.contains('btn-on') === false) {

      brightCards = [...lawn, ...planting];
      blurCardsOne = [...gardens];

   } else if (gardensSwitcher.classList.contains('btn-on') === true && plantingSwitcher.classList.contains('btn-on') === false && lawnSwitcher.classList.contains('btn-on') === false) {

      brightCards = [...gardens];
      blurCards = [...lawn, ...planting];

   } else if (lawnSwitcher.classList.contains('btn-on') === true && plantingSwitcher.classList.contains('btn-on') === false && gardensSwitcher.classList.contains('btn-on') === false) {

      brightCards = [...lawn]
      blurCards = [...gardens, ...planting];


   } else if (plantingSwitcher.classList.contains('btn-on') === true && gardensSwitcher.classList.contains('btn-on') === false && gardensSwitcher.classList.contains('btn-on') === false) {

      brightCards = [...planting]
      blurCards = [...gardens, ...lawn];
   }

   blurCards.forEach(x => x.classList.toggle('blur'));
   blurCardsOne.forEach(x => x.classList.contains('blur') === true ? x : x.classList.add('blur'));
   brightCards.forEach(x => x.classList.remove('blur'));

}

// Choosing price

const priceItems = document.querySelectorAll('.price-item');

priceItems[0].addEventListener('click', () => {
   priceItems[0].classList.add('activated');
   priceItems[1].classList.remove('activated');
   priceItems[2].classList.remove('activated');
})

priceItems[1].addEventListener('click', () => {
   priceItems[1].classList.add('activated');
   priceItems[0].classList.remove('activated');
   priceItems[2].classList.remove('activated');
})

priceItems[2].addEventListener('click', () => {
   priceItems[2].classList.add('activated');
   priceItems[1].classList.remove('activated');
   priceItems[0].classList.remove('activated');
})

const orderBtn = document.querySelectorAll('.price-item-btn')
const contactSection = document.querySelector('.contacts-container')

orderBtn.forEach(el => {
   el.addEventListener('click', e => {
      contactSection.scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
})

//select значение

const canandaiguaBtn = document.querySelector('#Canandaigua');
const newYorkBtn = document.querySelector('#NewYork');
const yonkersBtn = document.querySelector('#Yonkers');
const sherrillBtn = document.querySelector('#Sherrill');

const cityItem = document.querySelector('#city');
const officeItem = document.querySelector('#phone');
const adressItem = document.querySelector('#adress');

const cityItemArrow = document.querySelector('.contacts-btn');
const cityItemHead = document.querySelector('.contacts-city-selection');
const tableActive = document.querySelector('.contacts-chosed-block');
const selectHeaderColor = document.querySelector('.contacts-selection-box');
const numbCall = document.querySelector('.numb-call');



function callNumbContact() {
  let phoneNumber = Number(officeItem.textContent.replace(/ /g,''));
  numbCall.setAttribute('href', 'tel:' + phoneNumber);
}


function canandaiguaAdd () {
  canandaiguaBtn.addEventListener('click', () => {
    cityItem.innerHTML = 'Canandaigua, NY';
    officeItem.innerHTML = '+1 585 393 0001';
    adressItem.innerHTML = '151 Charlotte Street';
    tableActive.classList.add('activated');
    selectHeaderColor.classList.add('activated');
    cityItemHead.innerHTML = 'Canandaigua, NY';
    cityItemArrow.classList.add('activated');
    callNumbContact();
  });
}


function newYorkAdd () {
  newYorkBtn.addEventListener('click', () => {
    cityItem.innerHTML = 'New York City';
    officeItem.innerHTML = '+1 212 456 0002';
    adressItem.innerHTML = '9 East 91st Street';
    tableActive.classList.add('activated');
    selectHeaderColor.classList.add('activated');
    cityItemHead.innerHTML = 'New York City';
    cityItemArrow.classList.add('activated');
    callNumbContact();
  });
}


function yonkersAdd () {
  yonkersBtn.addEventListener('click', () => {
    cityItem.innerHTML = 'Yonkers, NY';
    officeItem.innerHTML = '+1 914 678 0003';
    adressItem.innerHTML = '511 Warburton Ave';
    tableActive.classList.add('activated');
    selectHeaderColor.classList.add('activated');
    cityItemHead.innerHTML = 'Yonkers, NY';
    cityItemArrow.classList.add('activated');
    callNumbContact();
  });
}


function sherrillAdd () {
  sherrillBtn.addEventListener('click', () => {
    cityItem.innerHTML = 'Sherrill, NY';
    officeItem.innerHTML = '+1 315 908 0004';
    adressItem.innerHTML = '14 WEST Noyes BLVD';
    tableActive.classList.add('activated');
    selectHeaderColor.classList.add('activated');
    cityItemHead.innerHTML = 'Sherrill, NY';
    cityItemArrow.classList.add('activated');
    callNumbContact();
  });
}

canandaiguaAdd ();
newYorkAdd ();
yonkersAdd ();
sherrillAdd ();