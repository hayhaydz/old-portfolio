
// top apear/dissapear

$(document).scroll(function() {
  var distWindow = $(document).scrollTop() + 10;
  var distAbout = $(".about-page").offset().top;

console.log(distWindow);
console.log(distAbout);

 if (distWindow > distAbout){
  $(".top").removeClass("not-visible");
 }
 else {
  $(".top").addClass("not-visible");
 };

});

//Scrolling

$(document).ready(function() {

   var scrollLink = $('.scroll');

   //smooth scrolling
   scrollLink.click(function(e) {
     e.preventDefault();
     $('body,html').animate({scrollTop: $(this.hash).offset().top}, 1000);
   });
 });


 // //Window where left
 //
 //   var timeout;
 //   var clicked = 0
 // 
 //   function go_back() {
 //     timeout = window.setTimeout(clickedFunc, 5000);
 //    }
 //
 //    function clickedFunc() {
 //      clicked == 1
 //    }
 //
 //    $( document ).ready(function() {
 //      if (clicked == 1) {
 //        console.log("Clicked");
 //      }
 //    });
