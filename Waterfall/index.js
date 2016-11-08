$(window).on('load',function(){
  //waterfall();
  //满足加载条件后加载图片；
  var dataInt={"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"}]};
  $(window).on("scroll",function(){
    if(checkScorllSlide){
      $.each(dataInt.data,function(key,value){
        var obox=$("<div>").addClass("box").appendTo($("#main"));
        var opic=$("<div>").addClass("pic").appendTo($(obox));
        var oImg=$("<img>").attr("src","img/"+$(value).attr("src")).appendTo($(opic));
      });
      //waterfall();
    }
  });
});

//瀑布排列图片，将图片加在高度最小的一列；

// function waterfall(){
//   var $boxs = $("#main>div");
//   var w = $boxs.eq(0).outerWidth();
//   var cols = Math.floor($(window).width()/w);
//   $("#main").width(w*cols).css("margin","0 auto");
//   var hArr=[];
//   $boxs.each(function(index,value){
//     var h=$boxs.eq(index).outerHeight();
//     if(index<cols){
//       hArr[index]=h;
//     }else {
//       var minH=Math.min.apply(null,hArr);
//       var minHIndex=$.inArray(minH,hArr);
//       $(value).css({
//         "position":"absolute",
//         "top":minH+"px",
//         "left":minHIndex*w+"px",
//       });
//       hArr[minHIndex]+=$boxs.eq(index).outerHeight();
//     }
//   });
// }

//判断是否满足加载图片的条件；
function checkScorllSlide(){
  var $lastBox=$("#main>div").last();
  var lastBoxDis=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
  var scrollTop= $(window).scrollTop();
  var documentH= $(window).height();
  return (lastBoxDis<scrollTop+documentH)?true:false;

}
