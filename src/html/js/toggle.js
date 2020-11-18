$(function(){
  $(".ac-top").on("click", function() {
    $(this).next().slideToggle();
    $(this).children(".button").children("span:last-child").toggleClass('opened')
  });
});
