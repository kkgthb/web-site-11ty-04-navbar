// -------- HELPER FUNCTIONS --------

// Helper:  returns first element selected - $('input[name="food"]') // Credit: https://twitter.com/wesbos/status/608341616173182977
var $ = document.querySelector.bind(document);
// Helper:  return array of selected elements - $$('img.dog') // Credit: https://twitter.com/wesbos/status/608341616173182977
var $$ = document.querySelectorAll.bind(document);

// Helper:  toggleCollapsedNav()
function toggleCollapsedNav(event) {
  if (event.type === "click") {
    // Turns out I don't need to add 32/13 (space/enter) "keypress" -- it just fights w/ browser treating it as "click"
    $(".topnav__body").classList.toggle("collapsed-if-appropriate");
  } else if (event.type === "keydown") {
    let code = event.charCode || event.keyCode;
    if (code === 27) {
      // Escape key
      $(".topnav__body").classList.remove("collapsed-if-appropriate");
    }
  }
}



// -------- ACTION --------

// To indicate that JavaScript is turned on, replace the "no-js" class on the "html" element with "js" instead // Credit: https://stackoverflow.com/a/34448613
// TO DO:  Make this a little fancier than just "is JS on" -- also add "no-js" if the JS in this document is too new for the browser.
(function (html) {
  html.className = html.className.replace(/\bno-js\b/, "js");
})(document.documentElement);

// Start the body "collapsed-if-appropriate"
$(".topnav__body").classList.toggle("collapsed-if-appropriate");

// Make the hamburger toggle a "collapsed-if-appropriate" class on the nav body
$(".topnav__hamburger").addEventListener("click", toggleCollapsedNav);
$(".topnav__hamburger").addEventListener("keydown", toggleCollapsedNav);