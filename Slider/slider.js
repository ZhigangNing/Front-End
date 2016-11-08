window.onload = function() {
    var oli = document.getElementsByTagName('li');
    var index = 0;

    for (var i = 0, len = oli.length; i < len; i++) {
        oli[i].setAttribute('data-index', i);
    }
    var tabsController = document.getElementsByClassName('tabs-controller')[0];
    /*--给li绑定click事件--开始--*/
    tabsController.addEventListener('click', function(e) {
        var target = e.target;
        if (target.tagName.toUpperCase() !== 'LI') {
            return;
        }
        var index1 = target.getAttribute('data-index');
        index = index1;
        change(index);
    }, false);
    /*--给li绑定click事件--结束--*/

    /*  另一种方式去绑定click事件和改变index值
        div.addEventListener('click', function(e) {
            if (e.target && e.target.nodeName.toUpperCase() == "LI") { //判断目标事件是否为li
                index = (e.target.innerHTML) - 1;
                change(index);
            }
        }, false);
    */
        /*--自动轮播图片定时器--开始*/
    setInterval(function() {
        index = index % 4;
        change(index);
        index++;
    }, 3000);
    /*--自动轮播图片定时器--开始*/

    /*--显示对应的索引和图片--开始*/
    function change(x) {
        var oli = document.getElementsByTagName('li');
        var slide_div = document.getElementsByClassName("sub");
        for (var i = 0; i < oli.length; i++) {
            slide_div[i].setAttribute('data-index', i);
            if (i == x) {
                if ($(".sub").eq(i).hasClass("hidden")) {
                    $(".sub").eq(i).removeClass("hidden");
                }
                $(".sub").eq(i).addClass("show").animate({opacity: "1"}, "slow");
                oli[i].className = "on";
                //$("#tabs>div").eq(i).fadeOut().fadeIn(1000);
            } else {
                if ($(".sub").eq(i).hasClass("show")) {
                    $(".sub").eq(i).removeClass("show");
                }
                //$(".hidden").fadeOut();
                 //$("#tabs>div").eq(i).fadeOut(0);
                oli[i].className = "";
                $(".sub").eq(i).addClass("hidden").animate({opacity: "0.6"}, "normal");
            }
        }
    }
    /*--显示对应的索引和图片--结束*/
};
