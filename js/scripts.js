$(document).ready(function(){
  $(function(){
      $(".flip").flip({
          trigger: 'click'
      });
  });
$(".theme").click(function() {
  $('body').toggleClass('dark-theme');
  $('.col-xs-3').toggleClass('dark-theme');
  $('.light').toggle();
  $('.dark').toggle();
  $('h1').toggleClass('dark-header');
});


  $(".back").css("display", "block");
});
