//获取页面元素
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var txt1=document.getElementById("txt1");
var sub=document.getElementById("sub");
var ch1=document.getElementById("ch1");
var ch2s=document.getElementsByClassName("ch2");//通过类名获取元素
var del=document.getElementsByClassName("del");//通过类名获取元素
var table=document.getElementsByTagName("table")[0];
var frus=document.getElementsByClassName("fru");//通过类名获取元素
console.log(del);

//搜索
sub.onclick=function()
{
	for(var i=0;i<frus.length;i++)
	{
		if(frus[i].innerHTML!=txt1.value)
		{
			frus[i].parentNode.style.display="none";
		}
	}
	
}


//全选全不选
ch1.onclick=function()
{
	for(var i=0;i<ch2s.length;i++)
	{
		ch2s[i].checked=this.checked;
	}
}


//删除
for(var i=0;i<del.length;i++)
{
	del[i].onclick=function()
	{
	 	this.parentNode.remove();
	}
}


//选中删除
btn2.onclick=function()
{
	for(var i=0;i<ch2s.length;i++)
	{
		if(ch2s[i].checked==true)
		{
			ch2s[i].parentNode.parentNode.remove();
			i--;
		}
	}
}


//全部删除
btn1.onclick=function()
{
	table.remove();
}



