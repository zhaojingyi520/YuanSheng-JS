//获取页面元素
var txt1=document.getElementById("txt1");
var txt2=document.getElementById("txt2");
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");
var ch1=document.getElementById("ch1");
var tbody=document.getElementsByTagName("tbody")[0];//通过标签名获取页面元素

//添加按钮(btn1)的点击事件

var x=0;//设置td2里的序号，
btn1.onclick=function()
{
	//创建tr
	var tr=document.createElement("tr");
	//将tr追加到tbody里
	tbody.appendChild(tr);
	//创建6个td
	var td1=document.createElement("td");
	var td2=document.createElement("td");
	var td3=document.createElement("td");
	var td4=document.createElement("td");
	var td5=document.createElement("td");
	var td6=document.createElement("td");
	//将6个td追加到tr里
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	tr.appendChild(td5);
	tr.appendChild(td6);
	//td1
	var ch2=document.createElement("input");//创建多选框
	ch2.type="checkbox";
	td1.appendChild(ch2);//将多选框添加到td1里
	ch2.className="ch2";//给ch2添加类名
	//td2
	
	x++;//按钮点击一次x增加1
	td2.innerHTML=x;//设置td2的内容
	//td3
	td3.innerHTML=txt1.value;//设置td3的内容
	//td4
	td4.innerHTML=txt2.value;//设置td4的内容
	//td5
	var btn4=document.createElement("input");//创建一个删除按钮
	btn4.type="button";
	btn4.value="删除";
	td5.appendChild(btn4);//将删除按钮添加到td5里
	btn4.className="btn4";//给btn4添加一个类名
	//td6
	var myDate=new Date();//获取当前时间
	myDate=myDate.toLocaleString();//将Date对象转换为字符串
	td6.innerHTML=myDate;
	//隔行变色
	if(x%2!=0)
	{
		tr.style.backgroundColor="yellow";
	}
	else
	{
		tr.style.backgroundColor="green";
	}
	
	
	//删除按钮(btn4)的点击事件
	var btn4s=document.getElementsByClassName("btn4");//通过类名获取元素节点
	for(var i=0;i<btn4s.length;i++)
	{
		btn4s[i].onclick=function()
		{
			this.parentNode.parentNode.remove();
		}
	}
}

//全选全不选
//全选按钮(ch1)的点击事件
var ch2s=document.getElementsByClassName("ch2");//通过类名获取元素节点
ch1.onclick=function()
{
	for(var i=0;i<ch2s.length;i++)
	{
		ch2s[i].checked=this.checked;
	}
}



//全部删除(btn2)
btn2.onclick=function()
{
	for(var i=0;i<ch2s.length;i++)
	{
		ch2s[i].parentNode.parentNode.remove();//删除整行tr
		i--;
	}
}


//选中删除(btn3) 点击事件
btn3.onclick=function()
{
	for(var i=0;i<ch2s.length;i++)//遍历复选框
	{
		if(ch2s[i].checked==true)//判断复选框的checked状态
		{
			ch2s[i].parentNode.parentNode.remove();//删除整行tr
			i--;
		}
	}
}