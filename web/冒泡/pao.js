var a=[0,5,2,7,3,6,9,4,8,1];
function pao(a){
	var len=a.length;
    var i,j,temp;
	for(i=0;i<len-1;i++)
	{
		for(j=0;j<len-1;j++)
		{
			if(a[j]>a[j+1])
			{
				temp=a[j+1];
				a[j+1]=a[j];
				a[j]=temp;
			}
		}
	console.log("jieguo"+(i+1)+ ":",a);
	}
}
pao(a);
console.log("jieguo end:",a);