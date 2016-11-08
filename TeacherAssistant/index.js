$(document).ready(function() {
    $('#fullPage').fullpage({
        verticalCentered: false,
        //sectionsColor: ['aqua','crimson','green','darkviolet'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        navigation: true,
        navigationTooltips: ['page1', 'page2', 'page3', 'page4', 'page5'],
        // slidesColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        // slidesNavigation: true,
        controlArrowColor: '#FED78D',
        //滚动到某一屏后产生的动画效果
        afterLoad: function(link, index) {
            switch (index) {
                case 1:
                    move('.section1 h1').scale(1.5).end();
                    move('.section1 p').set('margin-top', '5%').end();
                    break;
                case 2:
                    move('.section2 h1').scale(0.7).end();
                    move('.section2 img.book_main_img').set('margin-left', '10px').end();
                    move('.section2 .book_img').set('margin-right', '10px').end();
                    move('.section2 .book_img').set('margin-right', '10px').end();
                    move('.section2 img.sub1').set('margin-top', '-120px').end(function() {
                        move('.section2 img.sub2').set('margin-top', '-120px').end(function() {
                            move('.section2 img.sub3').set('margin-top', '-120px').end(function() {
                                move('.section2 img.sub1').set('margin-top', '30px').end(function() {
                                    move('.section2 img.sub2').set('margin-top', '30px').end(function() {
                                        move('.section2 img.sub3').set('margin-top', '30px').end();

                                    });
                                });
                            });
                        });
                    });
                    break;
                case 3:
                    move('.section3 h1').set('margin-left', '20%').end();
                    move('.section3 p').set('margin-left', '20%').end();
                    break;
                case 4:
                    move('.section4 img.primary').rotate(360).end(function() {
                        move('.section4 img.sport').rotate(360).end(function() {
                            move('.section4 img.edition').rotate(360).end(function() {
                                move('.section4 h4.primary').scale(1.2).end(function() {
                                    move('.section4 h4.sport').scale(1.2).end(function() {
                                        move('.section4 h4.edition').scale(1.2).end();
                                    });
                                });
                            });
                        });
                    });
                    break;
                default:
                    break;
            }
        },
        //离开某一屏后恢复到初始效果
        onLeave: function(link, index) {
            switch (index) {
                case 1:
                    move('.section1 h1').scale(1).end();
                    move('.section1 p').set('margin-top', '800px').end();
                    break;
                case 2:
                    move('.section2 h1').scale(1).end();
                    move('.section2 img.book_main_img').set('margin-left', '-3500px').end();
                    move('.section2 .book_img').set('margin-right', '-1500px').end();
                    move('.section2 img.sub1').set('margin-top', '30px').end();
                    move('.section2 img.sub2').set('margin-top', '30px').end();
                    move('.section2 img.sub3').set('margin-top', '30px').end();
                    break;
                case 3:
                    move('.section3 h1').set('margin-left', '-1500px').end();
                    move('.section3 p').set('margin-left', '1500px').end();
                    break;
                case 4:
                    move('.section4 img.primary').rotate(-360).end();
                    move('.section4 img.sport').rotate(-360).end();
                    move('.section4 img.edition').rotate(-360).end();
                    move('.section4 h4.primary').scale(1).end();
                    move('.section4 h4.sport').scale(1).end();
                    move('.section4 h4.edition').scale(1).end();
                    break;
                default:
                    break;
            }
        },
    })
});
