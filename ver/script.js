var base_w = window.innerWidth / 2;
var base_h = window.innerWidth / 2;


$("#wrapper").append("<div class='box spin'></div>");

var w = $(".box").width();
var h = $(".box").height();

$(".box").css("top",20);
$(".box").css("left",base_h - h/2);