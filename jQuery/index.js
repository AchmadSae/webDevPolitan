$(document).ready(function() {
    console.log('jalan');
   $("button").click(function (e) { 
       $(".villages > li").css({
        "background-color": "white",
        "color": "black"
       });
   });
});