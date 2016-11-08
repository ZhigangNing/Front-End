	
		function getStyle(obj,attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}
			else{
				return getComputedStyle(obj,false)[attr];
			}
		}
	  	 function startmove(obj,json,fn){	
			var flag=0;//设置flag以保证所以运动完成
			clearInterval(obj.time);
			obj.time=setInterval(function(){
			flag=true;
			for(var attr in json){
				//获取当前的属性值
				var cur=0;
				if(attr=='opacity'){
					cur=Math.round(parseFloat(getStyle(obj,attr))*100);
				}else{
					cur=parseInt(getStyle(obj,attr));
				}
				//计算速度
				var speed=(json[attr]-cur)/5;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				//物体缓冲运动
				if(cur!=json[attr]){
					flag=false;
					if(attr=='opacity'){
						obj.style.filter='alpha(opacity:'+(cur+speed)+')';
						obj.style[attr]=(cur+speed)/100; 
					}else{
					obj.style[attr]=cur+speed+'px';	
					}
				}
				//console.log(flag+"+"+attr);
			}
			//检查停止
			if(flag){
				clearInterval(obj.time);
				if(fn){
					fn();
				}
			}
			},10);	
	    }
