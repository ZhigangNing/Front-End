
    // //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    // $(function() {
    //     $(window).scroll(function() {
    //         if ($(window).scrollTop() > 100) {
    //           $("#btn").fadeIn(1500);
    //           } else {
    //                  $("#btn").fadeOut(1500);
    //               }
    //         });
    //        //当点击跳转链接后，回到页面顶部位置
    //         $("#btn").click(function() {
    //               $('body,html').animate({scrollTop: 0}, 1000);
    //               return false;
    //         });
    //    });

window.onload = function() {
    var btn = document.getElementById('btn');
    var timer = null;
    var otop;
    window.onscroll = function() {
        otop = document.documentElement.scrollTop || document.body.scrollTop;
        if (otop >= 300) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    };
    btn.onclick = function() {
        clearInterval(timer);
        timer = setInterval(function() {
            otop = document.documentElement.scrollTop || document.body.scrollTop;
            var ispeed = Math.ceil(otop / 6);
            if (otop <= 0) {
                clearInterval(timer);
            }
            document.documentElement.scrollTop = document.body.scrollTop = (otop - ispeed);
        }, 30);
    };
};
