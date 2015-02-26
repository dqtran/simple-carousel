function handleSlidechange (slideNum){
    $('.main__content--images.active').animate({opacity: 0}, 500,function ()
    {
        $(this).removeClass('active');
        $('.main__content--images')
            .eq(slideNum)
            .addClass('active')
            .animate({
                opacity:1
            });
    })
};

function nextSlide(slideNum){
    var slideNum = $('.main__content--images.active').index();
    
    if (slideNum == 3){
        handleSlidechange(0);
    }else{
        handleSlidechange(slideNum + 1);
    }
}

function prevSlide(slideNum){
    var slideNum = $('.main__content--images.active').index();
    
    if (slideNum == 0){
        handleSlidechange(3);
    }else{
        handleSlidechange(slideNum - 1);
    }
}

$(window).scroll(function(){
    var position = $(this).scrollTop();
    console.log(position);
    
    if (position > 105)
    {
        $('.header__top--logo').css({
            top: -(position - 105)
        });
    } else {
        $('.header__top--logo').css({top: 0});
    }
})

$(".navigation__primary-list").click(function(event){
    var link = $(this);
    var linkIndex = link.index();

    var carouselImages = $(".main__content--images");
    
    handleSlidechange(linkIndex);     
})

$('.main__content--images').eq(0).addClass('active').css({
    opacity:1
});


$('#next').click(function() {
    nextSlide()
});

$('#previous').click(function() {
    prevSlide()
});
