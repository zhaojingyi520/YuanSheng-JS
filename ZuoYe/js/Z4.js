
//26页第四题，未添加图片，不能在最上面添加

//获取页面元素
var txt1=document.getElementById("txt1");
var btn1=document.getElementById("btn1");
var box=document.getElementById("box");
var c1=document.getElementsByClassName("c1");
var c2=document.getElementsByClassName("c2");
//发表按钮(btn1)的点击事件
btn1.onclick=function()
{
	//创建div2
	var div2=document.createElement("div");
	//将div2追加到box里
	box.appendChild(div2);
	//给div2添加一个类名，设置样式
    div2.className="c1";
    //给div2定位
    div2.style.position="relative";
    //创建3个div加一个删除按钮
	var div3=document.createElement("div");
	var div4=document.createElement("div");
	var div5=document.createElement("div");
	var del=document.createElement("input");//创建删除按钮
    del.type="button";
    del.value="删除";
    //将3个div和删除按钮放到div2里
	div2.appendChild(div3);
	div2.appendChild(div4);
	div2.appendChild(div5);
	div2.appendChild(del);
    //div3
    div3.innerHTML=;
    div3.className="c2";//添加类名
    //div4
    div4.innerHTML=txt1.value;
    div4.className="c2";//添加类名
    //div5
    var myDate=new Date();//创建当前时间
    myDate=myDate.toLocaleString();//将Date转换为字符串
    div5.innerHTML=myDate;
    div5.className="c3";//添加类名
    //del
    del.style.position="absolute";
	del.style.bottom="0px";
	del.style.right="0px";
    //删除按钮(del)的点击事件
    del.onclick=function()
    {
    	this.parentNode.remove();
    }
}
