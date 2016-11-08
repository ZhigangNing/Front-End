
$(document).ready(function(){
  $(window).scroll(function(){
    var top=$(document).scrollTop();
    var menu=$("#menu");
    var items= $("#content").find(".item");

    var currentId="";
    items.each(function(){
      var m=$(this);
      var itemTop=m.offset().top;

      if (top>itemTop-200) {
          currentId="#"+m.attr("id");
      }else {
        return false;
      }
    });

    //给相应楼层的a 设置 current，取消其他链接的current
    var currentLink= menu.find(".current");
    if(currentId&&currentLink.attr("href")!=currentId){
      currentLink.removeClass("current");
      menu.find("[href="+currentId+"]").addClass("current");
    }
  });
});
