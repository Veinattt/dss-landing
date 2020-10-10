var $tabs = function (target) {
    var
      _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
      _eventTabsShow,
      _showTab = function (tabsLinkTarget) {
        var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
        tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
        tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__item_active');
        tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__block_show');
        // если следующая вкладка равна активной, то завершаем работу
        if (tabsLinkTarget === tabsLinkActive) {
          return;
        }
        // удаляем классы у текущих активных элементов
        if (tabsLinkActive !== null) {
          tabsLinkActive.classList.remove('tabs__item_active');
        }
        if (tabsPaneShow !== null) {
          tabsPaneShow.classList.remove('tabs__block_show');
        }
        // добавляем классы к элементам (в завимости от выбранной вкладки)
        tabsLinkTarget.classList.add('tabs__item_active');
        tabsPaneTarget.classList.add('tabs__block_show');
        document.dispatchEvent(_eventTabsShow);
      },
      _switchTabTo = function (tabsLinkIndex) {
        var tabsLinks = _elemTabs.querySelectorAll('.tabs__item');
        if (tabsLinks.length > 0) {
          if (tabsLinkIndex > tabsLinks.length) {
            tabsLinkIndex = tabsLinks.length;
          } else if (tabsLinkIndex < 1) {
            tabsLinkIndex = 1;
          }
          _showTab(tabsLinks[tabsLinkIndex - 1]);
        }
      };
  
    _eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });
  
    _elemTabs.addEventListener('click', function (e) {
      var tabsLinkTarget = e.target;
      // завершаем выполнение функции, если кликнули не по ссылке
      if (!tabsLinkTarget.classList.contains('tabs__item')) {
        return;
      }
      // отменяем стандартное действие
      e.preventDefault();
      _showTab(tabsLinkTarget);
    });
  
    return {
      showTab: function (target) {
        _showTab(target);
      },
      switchTabTo: function (index) {
        _switchTabTo(index);
      }
    }
  
  };
  
$tabs('.tabs');

$(document).ready(function(){
  $('.slider-review').slick({
      arrows:true,
      dots:true,
  });
});

$(document).ready(function(){
  $('.slider-carousel').slick({
    arrows:false,
    slidesToShow: 5,
    autoplay:true,
    autoplaySpeed: 2000,
    touchMove:false,
    centerMode: true,
    responsive:[
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth:true
        }
      },
    ]
  });
});

function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
      document.querySelector('body').classList.add('webp');
  } else {
      document.querySelector('body').classList.add('no-webp');
  }
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider_item");
  if (n > slides.length) {
      slideIndex = 1
  }
  if (n < 1) {
      slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  var out = "0" + slideIndex + "/0" + slides.length;
  document.getElementById("numberT").innerHTML = out;
  slides[slideIndex - 1].style.display = "block";
}

document.addEventListener('click', function (e) {
  if (document.activeElement.toString() == '[object HTMLButtonElement]') {
      document.activeElement.blur();
  }
});

function openSideNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("sideNavLinks").style.width = "80%";
  document.getElementById("sideNavExit").style.width = "20%";
}

function closeSideNav() {
  document.getElementById("sideNavLinks").style.width = "0";
  document.getElementById("sideNavExit").style.width = "0";
  setTimeout(function () {
      document.getElementById("mySidenav").style.width = "0";
  }, 400);
}