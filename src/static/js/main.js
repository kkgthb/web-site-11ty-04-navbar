// Helper:  returns first element selected - $('input[name="food"]') // Credit: https://twitter.com/wesbos/status/608341616173182977
var $ = document.querySelector.bind(document);
// Helper:  return array of selected elements - $$('img.dog') // Credit: https://twitter.com/wesbos/status/608341616173182977
var $$ = document.querySelectorAll.bind(document);

// To indicate that JavaScript is turned on, replace the "no-js" class on the "html" element with "js" instead
(function (html) {
  html.className = html.className.replace(/\bno-js\b/, "js");
})(document.documentElement);
