$(document).keydown(function(e) {

    if (e.keyCode === 37 || e.keyCode === 38) {
       $(".carousel-control-prev").click();
       return false;
    }
    
    if (e.keyCode === 39 || e.keyCode === 40) {
       $(".carousel-control-next").click();
       return false;
    }
});