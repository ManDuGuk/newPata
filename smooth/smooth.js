$(document).ready(function () {

    var mHtml = $("html");
    
    var page = 1;


    //스크롤시 스크롤 이동을 부드럽게 해주는 코드이다. 뒤에 10은 0.1초동안 수행하는것을 뜻한다.
    //부드러운 이동을 위해 50으로 만들어줘보겠다.
    // $("html,body").animate({ scrollTop: 0 }, 1000);
    

    $(window).on("wheel", function (e) {
        if (mHtml.is(":animated")) return;
        if (e.originalEvent.deltaY > 0) {
            if (page == 4) return;
            page++;
        } else if (e.originalEvent.deltaY < 0) {
            if (page == 1) return;
            page--;
        }
        var posTop = (page - 1) * $(window).height();
        mHtml.animate({scrollTop: posTop},500,'ease');
    })
});