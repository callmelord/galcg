//author:cp
//data:2019/9/16

function login(){
	var username = document.getElementById("username");
	var pass = document.getElementById("password");

	if(username.value == ""){
		alter("请输入用户名");
	}
	else if(pass.value == ""){
		alter("请输入密码");
	}
	else if(username.value == "root" && pass.value == "123456"){
		window.location.href="http://www.galcg.com";
	}
	else{
		alter("请输入正确的用户名和密码！")
	}
}
