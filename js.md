一.js的数据类型
    1.String 字符串     var myVariable = 'Bob';
    2.Number 数字       var myVariable = 10;
    3.Boolean 布尔值    var myVariable = true;
    4.Array 数组        var myVariable = [1,'Bob','Steve',10];
    5.Object 对象       var myVariable = document.querySelector('h1')

二.js的运算符
    1.加/连接           + "Hello " + "world!"
    2.减、乘、除         -, *, / 和数学运算符一样
    3.赋值运算符         = 
    4.相等              === 会返回布尔值
    5.非不等            !== 布尔值

三.条件语句
    if...else

四.函数
    函数是一种封装你想重复使用的功能的方法，这样你就可以需要使用其中的功能的时候通过函数名称来调用函数，而不用老是重复写下整段代码.

五.事件
    点击事件 onclick

六.添加一个图像切换器
    var myImage = document.querySelector('img');

    myImage.onclick = function(){
        var mySrc = myImage.getAttribute('src');
        if(mySrc ==='images/firefox-icon.png'){
            myImge.setAttribute('src', 'images/firefox2.png')
        } else {
            myImge.setAttribute('src', 'images/firefox-icon.png')
        }
    }

