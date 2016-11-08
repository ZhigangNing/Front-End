
	function show(){
		document.getElementById('kind').style.display="block";
	}
	
	function hide(){
		document.getElementById('kind').style.display="none";
	}
	
	/*--weibo show--*/
	window.onload = function(){ 
		var height=0;
		var area = document.getElementById('weiboshow');
		var sourceNode = document.getElementsByClassName("sub_show"); // 获得被克隆的节点对象 
		for(var i=0;i<sourceNode.length;i++){   //获取需要滚动的div的高度；
			height +=  sourceNode[i].offsetHeight;
			//console.log(height);
		}
		var clonedNode1 = sourceNode[0].cloneNode(true); // 克隆节点 
		sourceNode[0].parentNode.appendChild(clonedNode1); // 在父节点插入克隆的节点 
		var clonedNode2 = sourceNode[1].cloneNode(true); // 克隆节点 
		sourceNode[0].parentNode.appendChild(clonedNode2); // 在父节点插入克隆的节点
		area.scrollTop = 0;
		var time= 5;
		function scrollup(){
			if(area.scrollTop >= height){
					area.scrollTop = 0;				
				}else{
					area.scrollTop++;
				}
		}
		var myscroll= setInterval(scrollup,time);
		
		area.onmouseover = function(){
			clearInterval(myscroll);
		}
		area.onmouseout = function(){
			myscroll= setInterval(scrollup,time);
		}

  }
  /*--weibo above--*/