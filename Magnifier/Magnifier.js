window.onload = function(){
 var yidong = document.getElementById('yidong');
 var xiaotu = document.getElementById('xiaotu');
 var datu = document.getElementById('datu');
 var img1 = document.getElementById('img1');
 var mouseX = 0;
 var mouseY = 0;
 document.onmousemove = function(e){
  //获取鼠标当前位置
  e = e||window.event;
  mouseX = e.clientX;
  mouseY = e.clientY;
  //显示移动的块及大图在规定的范围内，超出范围隐藏
  if(mouseX>xiaotu.offsetLeft&&mouseX<xiaotu.offsetLeft+xiaotu.offsetWidth&&mouseY>xiaotu.offsetTop&&mouseY<xiaotu.offsetHeight+xiaotu.offsetTop){
   yidong.style.display = datu.style.display = 'block';
   var a = yidong.offsetWidth/2;
   var b = yidong.offsetHeight/2;
   if(mouseX>xiaotu.offsetLeft+a&&mouseX<xiaotu.offsetLeft+xiaotu.offsetWidth-a&&mouseY>xiaotu.offsetTop+b&&mouseY<xiaotu.offsetHeight+xiaotu.offsetTop-b){
    yidong.style.left = mouseX - xiaotu.offsetLeft - a + 'px';
    yidong.style.top = mouseY - xiaotu.offsetTop - b + 'px';
   }else if(mouseX>xiaotu.offsetLeft&&mouseX<xiaotu.offsetLeft+a&&mouseY>xiaotu.offsetTop+b&&mouseY<xiaotu.offsetTop+xiaotu.offsetHeight-b){
    yidong.style.left = 0;
    yidong.style.top = mouseY - xiaotu.offsetTop - b + 'px';
   }else if(mouseX>xiaotu.offsetLeft+xiaotu.offsetWidth-a&&mouseX<xiaotu.offsetLeft+xiaotu.offsetWidth&&mouseY>xiaotu.offsetTop+b&&mouseY<xiaotu.offsetTop+xiaotu.offsetHeight-b){
    yidong.style.left = xiaotu.offsetWidth - a*2 + 'px';
    yidong.style.top = mouseY - xiaotu.offsetTop - b + 'px';
   }else if(mouseY>xiaotu.offsetTop&&mouseY<xiaotu.offsetTop+b&mouseX>xiaotu.offsetLeft+a&&mouseX<xiaotu.offsetLeft+xiaotu.offsetWidth-a){
    yidong.style.left = mouseX - xiaotu.offsetLeft - a + 'px';
    yidong.style.top = 0;
   }else if(mouseY>xiaotu.offsetTop+xiaotu.offsetHeight-b&&mouseY<xiaotu.offsetTop+xiaotu.offsetHeight&mouseX>xiaotu.offsetLeft+a&&mouseX<xiaotu.offsetLeft+xiaotu.offsetWidth-a){
    yidong.style.left = mouseX - xiaotu.offsetLeft - a + 'px';
    yidong.style.top = xiaotu.offsetHeight - b*2 + 'px';
   }
   //改变大图位置
   var i = img1.offsetWidth/xiaotu.offsetWidth;
   img1.style.left = -yidong.offsetLeft * i + 'px';
   img1.style.top = -yidong.offsetTop * i + 'px';
  }else{
   yidong.style.display = datu.style.display = 'none';
  }
 }
}
