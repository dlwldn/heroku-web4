  //bxslider 효과
$('.bxslider').bxSlider({
    auto: true,
    autoControls: false,
    stopAutoOnClick: true,
    controls: false,
    pager: true,
    slideWidth: 2568
    });

  //기관소개 스크롤에 따른 픽스효과
$(window).scroll(function(){
    const scroll = $(document).scrollTop();

    if(scroll > 50) {
        $(".main-left-navbar").css("top","0");
    }
    else if(scroll < 100) {
        $(".main-left-navbar").css("top","100px");
    }
});


   //오페라 슬라이드 효과
function rightOpen() {
    document.getElementsByClassName("opera")[0].style.display = "block";
}

function closeOpera() {
    document.getElementsByClassName("opera")[0].style.display = "none";
}

function moveSlide() {
$(".slide").animate({
        'margin-left': '-218px'
    }, 2000, replace)
}

function replace() {
    const li = $(".slide > li:eq(0)");
    li.remove();
    $(".slide").css("margin-left","20px");
    $(".slide").append(li);
}

let slide = setInterval(function() {
    moveSlide();
}, 2000);