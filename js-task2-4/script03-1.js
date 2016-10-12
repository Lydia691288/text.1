//读取字符串再转为数组
jobStr = localStorage.sth;
job = JSON.parse(jobStr);
console.log("读取字符串再转为数组" + jobStr + "长度" + job.length);

var n=0;
function next3(){
	n=n+1;	
	if(n>=(2 * job.length-2)){
		return location.href="task2-js.html";
	}else{
		if(n%2==0){
			delivery();	
		}else{
			check();	
		}
	}
	function delivery(){
		$("#number3-1").text(n/2+1);
		$("#next3-1").text("请查看"+(n/2+1)+"号身份");
		$(".h2").text("");
		$("#image").css({"background":"url(imgs3-1/3.png)","background-size":"cover"});
	}
	function check(){
		$("#number3-1").text((n+1)/2);
		if(n==(2*job.length-2)-1){
			$("#next3-1").text("查看法官台本");
		}else{
			$("#next3-1").text("隐藏并传递"+((n+1)/2+1)+"号");	
		}
		$("#image").css({"background":"url(imgs3-2/3.png)","background-size":"cover"});
		$(".h2").text("角色："+job[(n+1)/2]);
	}
}
