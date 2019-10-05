//使user图标变亮&三角形旋转
function show_userIcon_triangle(){
	$('#user_icon').css('color','#FFFFFF');    //点亮图标
	$('#triangle2').css('transform','rotateX(180deg)');   //旋转三角形
	$('#user_icon_list').css('display','1');   
	$('#user_icon_list').css('z-index','1002');   
}
function unshow_userIcon_triangle(){
	$('#user_icon').css('color','#00DDD8');   //点亮图标
	$('#triangle2').css('transform','none');  //旋转三角形
	//$('#user_icon_list').css('display','none');   
	//$('#user_icon_list').css('z-index','999');   
}
function show_top_menu_2_text5(){
	$('#top_menu_2_text5').css('color','#FFFFFF');   //点亮图标
	$('#triangle').css('transform','rotateX(180deg)');  //旋转三角形
}
function unshow_top_menu_2_text5(){
	$('#top_menu_2_text5').css('color','#00DDD8');   //点亮图标
	$('#triangle').css('transform','none');  //旋转三角形
}
function show_top_menu_3_1(){
	//var t=setTimeout("alert('5 seconds!')",5000)
	$('#top_menu_3_text_1').css('color','#FFFFFF');   //点亮图标
	$('#search_icon').css('color','#FFFFFF');   //点亮图标
}
function unshow_top_menu_3_1(){
	//var t=setTimeout("alert('5 seconds!')",5000)
	$('#top_menu_3_text_1').css('color','#00DDD8');   //点亮图标
	$('#search_icon').css('color','#00DDD8');   //点亮图标
}
function show_start_your_engine(){
	$('#start_your_engine').css('border-color','#6D9B96');    //点亮图标
	$('#start_your_engine').css('color','#6D9B96');    //点亮图标
}
function unshow_start_your_engine(){
	$('#start_your_engine').css('border-color','#CCCCCC');    //不点亮图标
	$('#start_your_engine').css('color','#CCCCCC');    //不点亮图标
}
//function unshow_login_list(){
//$('#user_icon_list').css('display','none');   
//$('#user_icon_list').css('z-index','999');   
//}
//function show_login_list(){
//$('#user_icon_list').css('display','1');   
////////////////////////}
