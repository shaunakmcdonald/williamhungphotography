$(document).ready(function(){

  $('.main-menu #commercial').click(function (e) {
    e.preventDefault();
    $('.commercial').show();
    $('.interior').hide();
    $('.environment').hide();
    $('.events').hide();
    $('.portraits').hide();
  });

  $('.main-menu #interior').click(function (e) {
    e.preventDefault();
    $('.commercial').hide();
    $('.interior').show();
    $('.environment').hide();
    $('.events').hide();
    $('.portraits').hide();
  });

  $('.main-menu #environment').click(function (e) {
    e.preventDefault();
    $('.commercial').hide();
    $('.interior').hide();
    $('.environment').show();
    $('.events').hide();
    $('.portraits').hide();
  });

  $('.main-menu #events').click(function (e) {
    e.preventDefault();
    $('.commercial').hide();
    $('.interior').hide();
    $('.environment').hide();
    $('.events').show();
    $('.portraits').hide();
  });

  $('.main-menu #portraits').click(function (e) {
    e.preventDefault();
    $('.commercial').hide();
    $('.interior').hide();
    $('.environment').hide();
    $('.events').hide();
    $('.portraits').show();
  });
 });

