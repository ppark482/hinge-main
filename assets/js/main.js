$('#inc').mouseover (function(){
    $('#inc').addClass('hinge');
});

$('.dashboard li').mouseover(function(){
        $(this).children('i').toggleClass('hover-icon');
});

$('.dashboard li').mouseover(function(){
        $(this).children('li').toggleClass('hover-words');
});
