'use strict';

(function() {
  var body = document.body;
  var burgerMenu = document.getElementsByClassName('b-menu')[0];
  var burgerContain = document.getElementsByClassName('b-container')[0];
  var burgerNav = document.getElementsByClassName('b-nav')[0];

  burgerMenu.addEventListener('click', function toggleClasses() {
    [body, burgerContain, burgerNav].forEach(function (el) {
      el.classList.toggle('open');
    });
  }, false);
})();

$(document).ready(function(){
  $("#drop1").click(function(){
    $(".toggles").toggle(300);
    $(".toggle-icons-intro-1").toggle(300);
    $(".toggle-icons-intro-2").toggle(300);
  });
});
$(document).ready(function(){
  $("#drop2").click(function(){
    $(".toggles1").toggle(300);
    $(".toggle-icons-docs-1").toggle(300);
    $(".toggle-icons-docs-2").toggle(300);
    // Adapt code to webpage
    // $(this).toggleClass("is-active").next(".option-content").stop().slideToggle(500)
  });
});