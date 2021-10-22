// Scripts

//Wait for document to be ready

//Interval Delay
var intervalDelay;
var intervalStart;

intervalStart = window.setInterval(function() {
    startDocument();
    window.clearInterval(intervalStart);
}, 2000);

//Navigation Links
var menuIconOpen = $('#menuIconOpen');
var menuIconClose = $('#menuIconClose');
var navLink = $('.navLink');
var navLinkMedia = $('.navLinkMedia');
var scrollLink = $('.scrollLink');



//Functions

    //Start Scripts
    function startDocument() {
        $( document ).ready(function() {
            //Pre-Loader
                var intervalDisplay;
                //Remove Pre-Loader
                    $('#preLoad').animate({'opacity': '0'}, 1000);
                    intervalDisplay = window.setInterval(function() {
                        $('#preLoad').css({'display': 'none'});
                        window.clearInterval(intervalDisplay);
                    }, 1200);
                //Add Scrolling
                    $('body').removeClass('stop-scrolling');


                //Navigation Menu
            
                    menuIconClose.click( function(e) {
                        e.preventDefault();
                        navMenuClose();
                    });

                    menuIconOpen.click( function(e) {
                        e.preventDefault();
                        navMenuOpen();
                    });

                    navLink.click( function(e) {
                        e.preventDefault();
                        navMenuClose();
                        var l = $(this);
                        scrollTo(l);
                    });

                    scrollLink.click( function(e) {
                        e.preventDefault();
                        var scrollLink = $(this);
                        scrollTo(scrollLink);
                    });

        });
    }

    //Open Navigation
    var fullNav = $('#fullNav');


    function navMenuOpen() {
        fullNav.css({'display': 'block'});
        fullNav.animate({'opacity': '1'}, 250);
        navLink.animate({'opacity':'1'}, 250);
        navLinkMedia.animate({'opacity':'1'}, 250);
        menuIconOpen.css({'display': 'none'});
        menuIconClose.css({'display': 'inline-block'});
        $('body').addClass('stop-scrolling');
    }

    //Close Navigation
    function navMenuClose() {
        navLink.animate({'opacity':'0'}, 250);
        navLinkMedia.animate({'opacity':'0'}, 250);
        fullNav.animate({'opacity': '0'}, 250);
        intervalDelay = window.setInterval( function() {
            fullNav.css({'display': 'none'});
            window.clearInterval(intervalDelay);
        }, 300);
        menuIconClose.css({'display': 'none'});
        menuIconOpen.css({'display': 'block'});
        $('body').removeClass('stop-scrolling');
    }

    function scrollTo(e) {
        // Scroll to location
            $('body,html').animate({scrollTop: $(e.prop('hash')).offset().top + -100}, 1000);
    }