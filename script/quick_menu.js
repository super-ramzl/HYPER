$(document).ready(function(){
  var currentPosition = parseInt($(".helper").css("top"));

  $(window).scroll(function() {
    var position = $(window).scrollTop(); 
    $(".helper").stop().animate({"top":position+currentPosition+"px"},900);


  });

});

