var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var pageHeader = document.querySelector('.page-header');
var deviceBG = document.querySelector('.device');
var pageMainWrapper = document.querySelector('.page-main__wrapper');

navMain.classList.remove('main-nav--nojs');
pageHeader.classList.remove("page-header--full");
deviceBG.classList.remove('device--short');
pageMainWrapper.classList.remove('page-main__wrapper--short');

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');

    if (pageHeader.classList.contains('page-header--full')) {
      pageHeader.classList.remove('page-header--full');
    }
    else {
      pageHeader.classList.add('page-header--full');
    };

    if (deviceBG.classList.contains('device--short')) {
      deviceBG.classList.remove('device--short');
    } else {
      deviceBG.classList.add('device--short');
    };

    if (pageMainWrapper.classList.contains('page-main__wrapper--short')) {
      pageMainWrapper.classList.remove('page-main__wrapper--short');
    } else {
      pageMainWrapper.classList.add('page-main__wrapper--short');
    };

  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    pageHeader.classList.remove('page-header--full');
    deviceBG.classList.remove('device--short');
    pageMainWrapper.classList.remove('page-main__wrapper--short');
  }
});
