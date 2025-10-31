$(document).ready(function(){
  $(".btn").hover(function(){
    $(this).animate({opacity: 0.8}, 150).animate({opacity: 1}, 150);
  });
});

