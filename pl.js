// JavaScript Document
function submitpl() {
	var plly = document.getElementById('pl').value;
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var m = date.getMinutes();
	var sj ="匿名"+ year + "年" + month + "月" + day + "号" + hour + ":" + m;
	var showpl1 = document.getElementById('showpl');
	var newdiv = document.createElement('div');
	newdiv.innerHTML = '<img src="imgs/user.png" class="commentpic" /><font class="pltime">' + sj + '</font><div class="textbox"><font class="plk">' + plly + '</font></div><p><br></p>';
	showpl1.appendChild(newdiv);
}