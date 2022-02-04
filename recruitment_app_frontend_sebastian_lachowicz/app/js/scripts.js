var slideNum = Math.floor(Math.random()*3)+1;
var timer1 = 0;
var timer2 = 0;
/*
function setSlide(slideNumber) {
    clearTimeout(timer1);
    clearTimeout(timer2);
    slideNum = slideNumber-1;
    hide();
    setTimeout('slider()',500);
}
*/
function slider() {
    slideNum++;
    if(slideNum>3) slideNum=1;

    var file = '<img src="img/slider'+slideNum+'.png">';
    document.getElementById('sliderBox').innerHTML=file;

    $('#sliderBox').fadeIn(500);

    timer1 = setTimeout("slider()",3000);
    timer2 = setTimeout("hide()",2500);
}

function hide(){
    $("#sliderBox").fadeOut(500);
}
window.onload=slider;