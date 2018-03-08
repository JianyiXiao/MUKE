window.onload=function(){
		var list=document.getElementById('pic');
		var turnleft=document.getElementById('ql');
		var turnright=document.getElementById('qr');
		var act_con=document.getElementById('active');
		var dot=document.getElementById('dot').getElementsByTagName('li');
		var timer;
		var index=1;
		var title=document.getElementById('box_inside').getElementsByTagName('li');
		var cons=document.getElementById('box_hide').getElementsByClassName('list_con1');
		var Rinput=document.getElementById('box_con1').getElementsByTagName('input');
		var uname=Rinput[0];
		var uaccount=Rinput[1];
		var pwd1=Rinput[2];
		var pwd2=Rinput[3];
		var uemail=Rinput[4];
		var Pmsg=document.getElementById('box_con1').getElementsByTagName('p');
		var name_msg=Pmsg[0];
		var acc_msg=Pmsg[1];
		var pwd1_msg=Pmsg[2];
		var pwd2_msg=Pmsg[3];
		var email_msg=Pmsg[4];
					<!-- 表单验证-->
					function getLength(str){
						return str.replace(/[^\x00-\xff]/g,"xx").length;	
					}
					function findSameNum(str,n){
						var num=0;
						for(var i=0;i<str.length;i++){
							if(str.charAt(i)==n){
								num++
							}
						}
						return num;
					}	
					uname.onfocus=function(){
						name_msg.innerHTML='*5-25字符内，不能使用特殊字符。';
					}
					uname.onblur=function(){
						var re=/[^\w\u4e00-\u9fa5]/g;
						var name_length=0;
						name_length=getLength(this.value);
						console.log(name_length);						
						if (re.test(this.value)) {
							name_msg.innerHTML='*含有非法字符。'
						}
						else if (this.value=="") {
							name_msg.innerHTML='*用户名不能为空。'
						}
						else if (name_length<5) {
							name_msg.innerHTML='*用户名不能少于5个字符。'
						}
						else if (name_length>25) {
							name_msg.innerHTML='*用户名不能大于25个字符。'
						}else{
							name_msg.innerHTML='*该用户名可用。'
						}
					}
					uaccount.onfocus=function(){
							acc_msg.innerHTML='*只能使用字母跟数字。'
					}
					uaccount.onblur=function(){
						var re=/[^\w]/g;
						//var acc_length=0;
						//acc_length=getLength(this.value);
						if (re.test(this.value)) {
							acc_msg.innerHTML='*仅限字母跟数字的组合,8~16个字符之内。'
						} 
						else if(this.value.length<8){
							acc_msg.innerHTML='*账号长度不能少于8个字符。'
						}
						else if(this.value.length>16){
							acc_msg.innerHTML='*账号长度不能大于16个字符。'
						}
						else {
							acc_msg.innerHTML='*该账号名可用。'
						}
					}
					pwd1.onfocus=function(){
							pwd1_msg.innerHTML='*仅限数字加字母或符号的组合，8~16个字符之内。'
					}
					pwd1.onkeyup=function(){
						if (this.value.length>7) {
							pwd2.removeAttribute('disabled');
						} 
						else {
							pwd2.setAttribute('disabled','disabled');
						}
						if (this.value.length>16) {
							pwd2.setAttribute('disabled','disabled');
						} 
						else {
							pwd2.removeAttribute('disabled');
						}

					}
					pwd1.onblur=function(){
						var n=findSameNum(pwd1.value,pwd1.value[0]);
						var re_num=/[^\d]/g;
						var re_eg=/[^a-zA-Z]/g;
						if (this.value=="") {
							pwd1_msg.innerHTML='*密码不能为空。'
						}
						else if (this.value.length>16) {
							pwd1_msg.innerHTML='*密码长度不能大于16个字符。'
							pwd2.setAttribute('disabled','disabled');
						}
						else if (this.value.length<8) {
							pwd1_msg.innerHTML='*密码长度不能少于8个字符。'
							pwd2.setAttribute('disabled','disabled');
						}
						else if (n==this.value.length) {
							pwd1_msg.innerHTML='*密码不能使用同一个字符。'
						}
						else if (!re_num.test(this.value)) {
							pwd1_msg.innerHTML='*密码不能全部使用数字。'
						}
						else if (!re_eg.test(this.value)) {
							pwd1_msg.innerHTML='*密码不能全部使用字母。'
						}
						else{
							pwd1_msg.innerHTML='*密码可用。'
						}
					}
					pwd2.onblur=function(){
						if (this.value!=pwd1.value) {
							pwd2_msg.innerHTML='*两次输入的密码不一致。'
						}
						else{
							pwd2_msg.innerHTML='*两次输入的密码一致。'
						}
					}
					uemail.onblur=function(){
						var re=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
						if (re.test(this.value)) {
							email_msg.innerHTML='*邮箱可用。'
						}
						else{
							email_msg.innerHTML='*邮箱格式错误。'
						}
					}
					<!-- 表单验证-->
					<!-- 首页轮播图-->
					function animate(offset){
						var move=parseInt(list.style.left)+offset;
						//console.log(move);
						list.style.left=move+"px";
						if (move<-4800) {
							list.style.left=-960+"px";
						}
						if (move>-960) {
							list.style.left=-4800+"px";
						}
					}
					turnleft.onclick=function(){
						index-=1;
						if (index<1) {
							index=5;
						};
						dotShow();
						animate(960);
					}
					turnright.onclick=function(){
						index+=1;
						if (index>5) {
							index=1;
						};
						dotShow();
						animate(-960);
					}
					function autoplay(){
						timer=setInterval(function(){
							turnleft.onclick();
						},1500);
					}
					autoplay();
					function stop(){
						clearInterval(timer);
					}

					act_con.onmouseover=function(){
						stop();
					}
					act_con.onmouseout=function(){
						autoplay();
					}
						
					function dotShow(){
						for (var i = 0; i<dot.length; i++) {
							if (dot[i].className="on") {
								dot[i].className="";
							};
							dot[index-1].className="on";
						};
					}
					for(var i=0;i<dot.length;i++){
						(function(i){
							dot[i].onclick=function(){
								var clickIndex=parseInt(this.getAttribute('index'));
								var offset=960*(index-clickIndex);
								animate(offset);
								index=clickIndex;
								dotShow();
							}
						})(i)
					}
					<!-- 首页轮播图-->
					<!-- 首页选项卡-->
					for (var i=0;i<title.length;i++) {
						title[i].id=i;
						title[i].onmouseover=function(){
							/**for(var j=0;j<title.length;j++){
								cons[j].style.display="none";
							};**/
							cons[this.id].style.display="block";
						};
						title[i].onmouseout=function(){
							///alert(ison);
							
								cons[this.id].style.display="none";			
							};
						};
					for (var i=0;i<cons.length;i++) {
						(function(i){
							cons[i].onmouseover=function(){
								cons[i].style.display="block";
							}
							cons[i].onmouseout=function(){
								cons[i].style.display="none";
							}
						})(i)
					}
					<!-- 首页选项卡-->
}