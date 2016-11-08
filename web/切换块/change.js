function show(x){
	var li = document.getElementsByTagName('li');
	var div=document.getElementById("tabs");
	var div1 = div.getElementsByTagName('div');
	
	
	for(var i=0; i<3; i++){
		if(li[i] == x){
			div1[i].className='show';
			li[i].className="on";
		}
		else{
			div1[i].className='hidden';
			li[i].className="";
		}
	}
}