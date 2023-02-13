$(document).ready(function(){
    
    var originalSize;
    $("#animation").click(function(){
      var heading = $("h1");
      var image = $("img");
      heading.animate({fontSize: "24px"}, 500);
      heading.css({"color":"#A020F0"},500);
      setTimeout(function(){
        heading.animate({fontSize: originalSize}, 500);
        heading.css({"color":"#333"},500);
        image.css("border", "5px solid purple");
      }, 500);
      originalSize = heading.css("font-size");
    });
  });
