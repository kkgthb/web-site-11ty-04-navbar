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

// Helper:  toggleNavDropdown()
function toggleNavDropdown(event) {
  parent = this.closest(".topnav__dropdown");
  if (
    !this.classList.contains("topnav__dropdown__button") ||
    !parent ||
    (event.type !== "click" && event.type !== "keydown")
  ) {
    // Short-circuit; N/A
    return;
  }
  if (event.type === "click") {
    // Turns out I don't need to add 32/13 (space/enter) "keypress" -- it just fights w/ browser treating it as "click"
    parent.classList.toggle("exposed");
    // Also do some sizing on the "items" within
    adjustDropdownItemsSize(parent);
  } else if (event.type === "keydown") {
    let code = event.charCode || event.keyCode;
    if (code === 27) {
      // Escape key
      parent.classList.remove("exposed");
    }
  }
}

// Helper:  clearNavDropdownWhenFocusOutside()
var skipFocusOutClear = false;
function clearNavDropdownWhenFocusOutside(event) {
  if (event.type === "mousedown") {
    skipFocusOutClear = true;
  } else {
    for (exposed_dropdown of $$(".topnav__dropdown.exposed")) {
      if (event.type === "focusout" && skipFocusOutClear) {
        skipFocusOutClear = false;
        continue;
      }
      if (
        !exposed_dropdown.contains(event.target) ||
        (!!event.relatedTarget &&
          !exposed_dropdown.contains(event.relatedTarget))
      ) {
        exposed_dropdown.classList.remove("exposed");
      }
      skipFocusOutClear = false;
    }
  }
}

// Helper:  getViewportWidth() // Credit: https://css-tricks.com/snippets/javascript/viewport-size-screen-resolution-mouse-postition/, Googled thanks to Jason Lengstorf, plus https://stackoverflow.com/questions/8339377/how-to-get-screen-width-without-minus-scrollbar
function getViewportWidth() {
  if (document.documentElement.clientWidth) {
    return document.documentElement.clientWidth;
  } else if (document.body && document.body.offsetWidth) {
    return document.body.offsetWidth;
  } else {
    return 0;
  }
}

// Helper:  set an element's width if it's overflowing
function set_width_to_not_overflow_right(elem) {
  let bounding = elem.getBoundingClientRect();
  let screenwidth = getViewportWidth();
  if (bounding.right > screenwidth) {
    let subtract_me = bounding.right - screenwidth;
    let current_width = bounding.right - bounding.left;
    let new_width = current_width - subtract_me;
    elem.style.minWidth = "auto";
    elem.style.width = new_width + "px";
  }
}

// Helper:  adjust all "dropdown items'" size for a given parent element
function adjustDropdownItemsSize(parent) {
  for (dropdown_items_elem of parent.querySelectorAll(
    ".topnav__dropdown__items"
  )) {
    // First, reset them to their natural size
    dropdown_items_elem.style.minWidth = "160px";
    dropdown_items_elem.style.width = "auto";
    // Then handle them if they're overflowing
    set_width_to_not_overflow_right(dropdown_items_elem);
  }
}

//
//
//
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

// If you click/focus outside of a given "exposed dropdown," un-expose that dropdown. // Credit: https://laracasts.com/discuss/channels/vue/close-dropdown-when-click-another-element, https://jsfiddle.net/kym2rvyL/1/
window.addEventListener("mousedown", clearNavDropdownWhenFocusOutside);
window.addEventListener("click", clearNavDropdownWhenFocusOutside);
window.addEventListener("focusout", clearNavDropdownWhenFocusOutside);

// If you click/keystroke on a given "dropdown button", toggle "exposed" on its parent // Credit: https://flaviocopes.com/add-click-event-to-dom-list/, https://stackoverflow.com/a/59406548, https://gomakethings.com/listening-to-multiple-events-in-vanilla-js/ via @jemjam
for (let btn of $$(".topnav__dropdown__button")) {
  btn.addEventListener("click", toggleNavDropdown);
  btn.addEventListener("keydown", toggleNavDropdown);
}

// Resize dropdown items if someone resizes a screen while a dropdown is exposed
window.onresize = function () {
  adjustDropdownItemsSize(document);
};
