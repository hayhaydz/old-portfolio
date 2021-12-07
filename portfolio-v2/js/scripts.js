// PreLoader Start
    $(window).on('load', function(){
      $("body").removeClass("stop-scrolling");
        $("#preLoader").fadeOut();
        $("#preLoader").delay(500).fadeOut();
    });
// PreLoader End

$(document).ready(function() {

  var randomInterval;
  $(function repeat(){
    randomInterval = Math.floor((Math.random()*8000)+5000);
    backgroundChange();
    h1BackgroundChange();
    scrollH4Change();
    scrollChange();
    scrollWheelChange();
    setTimeout(repeat,randomInterval);
  });

  //Background H1 color aniamtion state $Finish$
  // Landing Screen Finish

  // Parallax

  var scroll;
  var scrollN;
  var $scroll;
  var didScroll = false;
  var projectHeightValue = $("#projectExample1").height();
  var landingScreenHeight = $("#landingScreen").outerHeight();
  var landingScreenLocBottom = $("#landingScreen").offset().top + landingScreenHeight;
  var portfolioLoc = landingScreenLocBottom-100;
  var aboutLoc = $("#about").offset().top - 100;
  var i;

  $(window).scroll(function(){
    scroll = $(window).scrollTop();
    $scroll = $(window).scrollTop() + projectHeightValue;
    didScroll = true;
  });

  setInterval(function() {
    if(didScroll){
      didScroll = false;
      if (scroll >= portfolioLoc) {
        showNav();
      }
      if (scroll <= portfolioLoc) {
        hideNav();
      }
      if (scroll >= aboutLoc) {
        changeNavColor();
      }
      if (scroll <= aboutLoc) {
        resetNavColor();
      }
      for (i = 1; i < 3; i++) {
        if ($scroll >= locationPos[i]) {
          elementsReveal();
        }
      }
    }
  }, 500);


  //Elements revealing

  var locationPos = [];
  var portfolioImageCover = [];
  var viewContainer = [];
  var titleCover = [];
  var title = [];
  var titlePosTop = [];
  var titleHeight = [];
  var titleWidth = [];
  var titleB = [];
  var titleBPos = [];
  var titleBHeight = [];
  var titleBWidth = [];
  var titleBCover = [];

  for (var b = 1; b < 3; b++) {
  title[b] = $("#title"+b);
  titlePosTop[b] = title[b].position().top+5;
  titleHeight[b] = title[b].outerHeight();
  titleWidth[b] = title[b].outerWidth();
  titleCover[b] = $("#titleCover"+b);
  titleCover[b].css({"top": titlePosTop[b]+"px","height": titleHeight[b]+"px","width":titleWidth[b]+"px"});
  }
  for (var a = 1; a < 3; a++) {
  titleB[a] = $("#titleB"+a);
  titleBPos[a] = titleB[a].position().top+5;
  titleBHeight[a] = titleB[a].outerHeight();
  titleBWidth[a] = titleB[a].outerWidth();
  titleBCover[a] = $("#titleBCover"+a);
  titleBCover[a].css({"top": titleBPos[a]+"px","height": titleBHeight[a]+"px","width":titleBWidth[a]+"px"});
  }

  for (var p = 1; p < 3; ++p) {
    portfolioImageCover[p] = $("#portfolioImageCover"+p);
    viewContainer[p] = $("#viewContainer"+p);
    locationPos[p] = portfolioImageCover[p].offset().top;
  }

  function elementsReveal() {
    portfolioImageCover[i].animate({width: "0"}, 600);
     for (var x = 1; x < 3 ; x++) {
       title[x].delay(x*100).animate({"margin-left": "0"}, 100);
       titleCover[x].delay(x*100).animate({"margin-left": "0"}, 100);
       titleCover[x].delay(x*100).animate({"width": "0"}, 100);
     }
     viewContainer[1].delay(i*800).animate({left: "0", opacity: "1"}, 200);
      if (i >= 2) {
        for (var n = 1; n < 3 ; n++) {
          titleB[n].delay(n*100).animate({"margin-left": "0"}, 100);
          titleBCover[n].delay(n*100).animate({"margin-left": "0"}, 100);
          titleBCover[n].delay(n*100).animate({"width": "0"}, 100);
          }
      }
      if (i >= 2) {
        viewContainer[2].delay(i*300).animate({left: "0", opacity: "1"}, 200);
      }
  }


  var pauseScroll;
  var windowHeight = $(window).height();
  var scrollP;
  $(window).scroll(function(){
      // Landing Screen Name
        scrollP = $(window).scrollTop();
      // Project Title
      var introPos = $('#portfolioIntro').offset().top;
      var introHeight = $('#portfolioIntro').outerHeight();

      if (scrollP <=introPos) {
        $('#portfolioIntro').css({'top' : '+'+scrollP/5+'px'});
      }
      else {
        $('#portfolioIntro').css({'top' : ''+pauseScroll+''});
      }
  });

var changingNavColor = false;
var navOpen = false;

  //Scroll Navigation
  function showNav() {
    $("#headerNavigation").css({'visibility': 'visible'});
  }
  function hideNav() {
    $("#headerNavigation").css({'visibility': 'hidden'});
  }
  function changeNavColor() {
    $("#showMenu").animate({'color':'white'}, 20);
    $("#hideMenu").animate({'color':'black'}, 20);
    $("#navigation a").animate({'color':'black'}, 100);
    if (navOpen) {
      $("#headerNavigation").animate({'background-color': 'white'},100);
    }
    else {
      $("#headerNavigation").animate({'background-color': 'transparent'},100);
    }
    changingNavColor = true;
  }
  function resetNavColor() {
    $("#showMenu").animate({'color':'black'}, 20);
    $("#hideMenu").animate({'color':'white'}, 20);
    $("#navigation a").animate({'color':'white'}, 100);
    if (navOpen) {
      $("#headerNavigation").animate({'background-color': 'black'},100);
    }
    else {
      $("#headerNavigation").animate({'background-color': 'transparent'},100);
    }
    changingNavColor = false;
  }

  //Show Navigation
  $("#showMenu").click(function(event) {
    event.preventDefault();
    $("#navigation").animate({"margin-left": "0"}, 300);
    $("#showMenu").css({"display": "none"});
    $("#hideMenu").css({"display": "block"});
    if (changingNavColor) {
      $("#headerNavigation").animate({"background-color": "white"}, 500);
      $("#hideMenu").animate({"color": "black"}, 200);
    }
    else {
      $("#headerNavigation").animate({"background-color": "rgb(0, 0, 0)"}, 500);
      $("#hideMenu").animate({"color": "white"}, 200);
    }
    navOpen = true;
  });
  // Hide Navigation
  $("#hideMenu").click(function(event) {
    event.preventDefault();
    $("#navigation").animate({"margin-left": "-100%"}, 300);
    $("#hideMenu").css({"display": "none"});
    $("#showMenu").css({"display": "block"});
    if (changingNavColor) {
      $("#showMenu").css({"color": "white"});
    }
    else {
      $("#showMenu").css({"color": "black"});
    }
    navOpen = false;
    $("#headerNavigation").animate({"background-color": "transparent"}, 500);
  });

  $(".scrollTo").click(function(event) {
    $("#navigation").animate({"margin-left": "-100%"}, 300);
    $("#headerNavigation").animate({"background-color": "transparent"}, 500);
    $("#hideMenu").css({"display": "none"});
    $("#showMenu").css({"display": "block"});
    if (changingNavColor) {
      $("#showMenu").css({"color": "white"});
    }
    else {
      $("#showMenu").css({"color": "black"});
    }
    navOpen = false;
  });


  // Scroll Down
  $("#scrollDown").click(function(event) {
    event.preventDefault();
    var scrollTarget = $("#scrollProjects").offset().top;
    $('html, body').animate({scrollTop: scrollTarget}, 1000);
  });


  // Scroll to location
  var scrollLink = $('.scrollTo');
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({scrollTop: $(this.hash).offset().top}, 1000);
  });

  //Change active Link

  var scrollHome = $("#scrollHome").offset() - 100;
  var scrollProjects = $("#scrollProjects").offset();
  var scrollAbout = $("#scrollAbout").offset();
  var scrollContact = $("#scrollContact").offset();

    $(window).scroll(function() {

      var screenPosition = $(document).scrollTop() + 50;

      if (screenPosition <= scrollHome.top) {
        $( ".activeHome" ).removeClass( "active" );
      }
      if (screenPosition >= scrollHome.top) {
        $( ".activeHome" ).addClass( "active" );
        $( ".activeProjects" ).removeClass( "active" );
      }
      if (screenPosition >= scrollProjects.top) {
        $( ".activeProjects" ).addClass( "active" );
        $( ".activeHome" ).removeClass( "active" );
        $( ".activeAbout" ).removeClass( "active" );
      }
      if (screenPosition >= scrollAbout.top) {
        $( ".activeAbout" ).addClass( "active" );
        $( ".activeProjects" ).removeClass( "active" );
        $( ".activeContact" ).removeClass( "active" );
      }
      if (screenPosition >= scrollContact.top) {
        $( ".activeContact" ).addClass( "active" );
        $( ".activeAbout" ).removeClass( "active" );
      }
    });

});

// Functions Start
// Landing Screen Start

var  animationDuration = Math.floor((Math.random()*5000)+2000);
function h1BackgroundChange() {
  document.getElementById("landingScreenName").style["animation-duration"] = animationDuration + "ms";
  setTimeout(function(){ h1play(); }, 700);
  setTimeout(function(){ h1stop(); }, animationDuration + 1000);
}
function backgroundChange() {
  document.getElementById("landingScreen").style["animation-duration"] = animationDuration + "ms";
  setTimeout(function(){ play(); }, 1000);
  setTimeout(function(){ stop(); }, animationDuration + 1000);
}
function scrollH4Change() {
  document.getElementById("scroll").style["animation-duration"] = animationDuration + "ms";
  setTimeout(function(){ playScrollH4(); }, 700);
  setTimeout(function(){ stopScrollH4(); }, animationDuration + 1000);
}
function scrollChange() {
  document.getElementById("scroll-btn").style["animation-duration"] = animationDuration + "ms";
  setTimeout(function(){ playScroll(); }, 700);
  setTimeout(function(){ stopScroll(); }, animationDuration + 1000);
}
function scrollWheelChange() {
  setTimeout(function(){ playScrollWheel(); }, 700);
  setTimeout(function(){ stopScrollWheel(); }, animationDuration + 1000);
}
//Background color aniamtion state $Start$
function play() {
  var name = document.getElementById("landingScreen");
  name.classList.remove("stop");
  name.classList.add("play");
}
function stop() {
  var name = document.getElementById("landingScreen");
  name.classList.remove("play");
  name.classList.add("stop");
}
//Background color aniamtion state $Finsish$
//Background H1 color aniamtion state $Start$
function h1play() {
  var name = document.getElementById("landingScreenName");
  name.classList.remove("h1stop");
  name.classList.add("h1play");
}
function h1stop() {
  var name = document.getElementById("landingScreenName");
  name.classList.remove("h1play");
  name.classList.add("h1stop");
}
// Scroll colours changing
function playScrollH4() {
  var name = document.getElementById("scroll");
  name.classList.remove("scrollh4stop");
  name.classList.add("scrollh4play");
}
function stopScrollH4() {
  var name = document.getElementById("scroll");
  name.classList.remove("scrollh4play");
  name.classList.add("scrollh4stop");
}
function playScroll() {
  var name = document.getElementById("scroll-btn");
  name.classList.remove("scrollstop");
  name.classList.add("scrollplay");
}
function stopScroll() {
  var name = document.getElementById("scroll-btn");
  name.classList.remove("scrollplay");
  name.classList.add("scrollstop");
}
function playScrollWheel() {
  var name = document.getElementById("scrollWheel");
  name.classList.remove("scrollwheelstop");
  name.classList.add("scrollwheelplay");
}
function stopScrollWheel() {
  var name = document.getElementById("scrollWheel");
  name.classList.remove("scrollwheelplay");
  name.classList.add("scrollwheelstop");
}
// Functions End
