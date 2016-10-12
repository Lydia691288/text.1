
			
function set()
		{
			num=document.getElementById("Number").value; 
			var x2=Math.floor(Math.random()*num);
			var x1=Math.floor(Math.random()*num+1);
			var job = [];
			var l="";
				for (var i=1;i<=num ;i++)
				{
					if(num<=8)
					{
						if(i==x1)
						{
							job[i]= "杀手";
						}
						else
						{
							job[i]= "平民";
						}
					}
					else
					{
						if(i==x1||i==x2)
						{
							job[i]= "杀手";
						}
						else
						{
							job[i]= "平民";
						}
					}
					
					l= l +i +"号"+job[i]+"<br>";
					document.getElementById("input").innerHTML=l;
				}
				//数组变成字符串储存
				jobStr=JSON.stringify(job);
				localStorage.sth=jobStr;
				console.log("数组变成字符串储存" + jobStr);
		}
/*		
function next(){
	if(job !=null){
		location.href = "task3-js-1.html";
	} else{
		alert(亲，请先进行玩家分配);
	}
}		
*/

		
		