//var audio = document.getElementById('music_btn');
//$("#btn").bind("touchstart", function bf() {
//if(audio !== null) {
////检测播放是否已暂停.audio.paused 在播放器播放时返回false.
//alert(audio.paused);
//if(audio.paused) {
//audio.play(); //audio.play();// 这个就是播放
//$("#btn").addClass("active")
//} else {
//audio.pause(); // 这个就是暂停
//$("#btn").removeClass("active")
//}
//}
//})
//
//$("html").one('touchstart',function(){
//audio.play();
//})

var curIndex = 0;
//时间间隔(单位毫秒)，每秒钟显示一张，数组共有3张图片放在img文件夹下。
var timeInterval = 2000;

                        //定义一个存放照片位置的数组，可以放任意个，在这里放3个
var arr = new Array();
arr[0] = "./pic/1.jpg";
arr[1] = "./pic/2.jpg";
arr[2] = "./pic/3.jpg";
setInterval(changeImg, timeInterval);
function changeImg() {

                                //获得id名为d1的对象
var obj = document.getElementById("bg");
if (curIndex == arr.length - 1) {
curIndex = 0;
} else {
curIndex += 1;
}
                        //设置d1的背景图片
//obj.style.backgroundImage= "URL("+arr[curIndex]+")";       //显示对应的图片
}

$(document).ready(function(){
	$('#img').animate({
		width:"200%",
		height:"200%",
		marginLeft:"-200px",
		marginTop:"-100px"
	},10000);
});
