// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require dresssed
//= require docs
//= require prettify
//= require_self

$(document).ready(function(){
  prettyPrint();

  $('.size-mobile').on('click', function(){
    sizeiframe(480, true);
  });

  $('.size-tablet').on('click', function(){
    sizeiframe(980, true);
  });

  $('.size-laptop').on('click', function(){
    sizeiframe(document.body.clientWidth, true);
  });

  $(function () {
    $('[data-toggle="popover"]').popover()
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });
});

function sizeiframe(size) {
    var $sgViewport = $('#sg-viewport');
    $('#sg-gen-container,#sg-viewport').addClass("vp-animate");
    $sgViewport.width(size);
}