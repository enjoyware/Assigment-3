/* global $ */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 


// $('li a').on('click', function(event) {
//     const clickedEl = event.target
//     $(clickedEl).css('color', 'pink');
// })

//$('#menu').on('click', (event) => {
    //if ($('#menu > ul').hasClass('closed')) {
        //$('#menu > ul').removeClass('closed')
        //$('#hamburger').css('background-image', 'url("img/X-Icon.png")')
    //} else {
        //$('#menu > ul').addClass('closed')
        //$('#hamburger').css('background-image', 'url("img/Hamburger.png")')
    //}
//})

