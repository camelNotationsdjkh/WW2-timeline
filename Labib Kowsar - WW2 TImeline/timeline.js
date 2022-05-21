
/* Handles the horizontal scroll on the timeline page*/
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = ($(window).scrollTop() < 4000)? $(window).scrollTop(): 4000,
            dh = $(document).height(),
            wh = $(window).height();
            value = (scroll /(dh-wh)) * 100;
            $('#container').css('left', -value * 4.001 + '%');
    })
});

// Opens the timeline page on a new window
// Mostly to make sure the window dimentions are right
function openWindow(){
    myWindow = window.open("timeline.html", "", "width=100, height=100");
    myWindow.resizeTo(1670, 858);
}

// Moves the timline page forward when button is clicked
function goForward(){
    $('html,body').animate({
        scrollTop: $(window).scrollTop() + 730
    });
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
    document.getElementById("container").style.filter = "blur(3px)";
    document.getElementById("legend").style.zIndex = 0;
    document.getElementById("forwardButton").style.zIndex = 0;
  }
  
/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("legend").style.zIndex = 2;
    document.getElementById("container").style.filter = "blur(0px)";
    document.getElementById("forwardButton").style.zIndex = 2;
}

// Gets the current dimentions of the body
function getWindow(){
    return [document.getElement("body").style.width, document.getElement("body").style.length]
}

console.log(getWindow())