/*
//第2题
//获取页面元素
var txt1=document.getElementById("txt1");
var btn=document.getElementById("btn");
var ul=document.getElementById("ul");
//点击事件
btn.onclick=function()
{
	//创建li
	var li=document.createElement("li");
	//将li追加到ul里
	ul.appendChild(li);
	//设置li的内容
	li.innerHTML=txt1.value;
	txt1.value="";
}
*/




/*
//第四题
//获取页面元素
var txt1=document.getElementById("txt1");
var txt2=document.getElementById("txt2");
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var ch1=document.getElementById("ch1");
var tbody=document.getElementsByTagName("tbody")[0];
//添加学生按钮的  点击事件
btn1.onclick=function()
{
	//创建tr
	var tr=document.createElement("tr");
	//将tr追加到tbody里
	tbody.appendChild(tr);
	//创建3个td
	var td1=document.createElement("td");
	var td2=document.createElement("td");
	var td3=document.createElement("td");
	//将td追加到tr里
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	//td1
	var ch=document.createElement("input");
	ch.type="checkbox";
	ch.className="ch";//给多选框添加类
	td1.appendChild(ch);//将多选框追加到td1里
	//td2
	td2.innerHTML=txt1.value;
	//td3
	td3.innerHTML=txt2.value;
	//清除文本框的值
	txt1.value="";
	txt2.value="";
}
//全选框的点击事件
var chs=document.getElementsByClassName("ch");//通过类名获取元素，并放入一个伪数组里
ch1.onclick=function()
{
	for(var i=0;i<chs.length;i++)//遍历复选框伪数组
	{
		chs[i].checked=ch1.checked;//将全选按钮的checked值赋值给创建的复选框
	}
}

//删除按钮的点击事件
btn2.onclick=function()
{
	for(var i=0;i<chs.length;i++)//遍历复选框伪数组
	{
		if(chs[i].checked==true)//判断复选框的checked状态
		{
			chs[i].parentNode.parentNode.remove();
			i--;
		}
	}
	
}

*/



/*
//第5题
//获取页面元素
var txt1=document.getElementById("txt1");
var txt2=document.getElementById("txt2");
var btn=document.getElementById("btn");
//点击事件
btn.onclick=function()
{
	//创建div3，存放姓名
	var div3=document.createElement("div");
	//将div3追加到body里
	document.body.appendChild(div3);
	//创建div4,存放留言
	var div4=document.createElement("div");
	//将div4追加到body里
	document.body.appendChild(div4);
	//div3的内容
	div3.innerHTML=txt1.value;
	div3.style.color="blue";
	div3.style.fontWhite="600px";
	div3.style.margin="10px 0px ";
	//div4的内容
	div4.innerHTML=txt2.value;
	var a=document.createElement("a");//创建a标签
	div4.appendChild(a);//将a追加到div4里
	a.innerHTML="删除";//添加a标签的内容
	a.style.color="red";
	a.style.marginLeft="20px";
	
	//a标签的点击事件
	a.onclick=function()
	{
		div4.remove();
		div3.remove();
	}
	
}
*/



//第7题
//获取页面元素
var div1=document.getElementById("div1");
//点击事件
div1.onclick=function()
{
	var timer=window.setInterval(function()
	{
		fun1();	
		div1.onclick=function()
		{
			window.clearInterval(timer);
		}
	},1000)
}
//定义函数
function fun1()
{
	var r=parseInt(Math.random()*255);
	var g=parseInt(Math.random()*255);
	var b=parseInt(Math.random()*255);
	var color="rgb("+ r +","+ g +","+ b +")";
	div1.style.backgroundColor=color;
}




