来源:https://juejin.im/entry/5bc9aae56fb9a05d20687bf3#1-%E8%B0%83%E7%94%A8%E5%A0%86%E6%A0%88

一. 调用栈
    调用栈是解析器(如浏览器中的的javascript解析器)的一种机制，可以在脚本调用多个函数时，跟踪每个函数在完成执行时应该返回控制的点。（如什么函数正在执行，什么函数被这个函数调用，下一个调用的函数是谁）

    当脚本要调用一个函数时，解析器把该函数添加到栈中并且执行这个函数。
    任何被这个函数调用的函数会进一步添加到调用栈中，并且运行到它们被上个程序调用的位置。
    当函数运行结束后，解释器将它从堆栈中取出，并在主代码列表中继续执行代码。
    如果栈占用的空间比分配给它的空间还大，那么则会导致“堆栈溢出”错误。

二,原始类型
    除了 null 和 undefined之外，所有基本类型值都有包裹这个基本类型值的等价对象：

    String 为字符串基本类型。
    Number 为数值基本类型。
    Boolean 为布尔基本类型。
    Symbol 为字面量基本类型。
    这个包裹对象的valueOf()方法返回基本类型值。

三. 引用类型
    引用类型通常叫做类（class），也就是说，遇到引用值，所处理的就是对象。

四. 隐式, 显式, 名义和鸭子类型
    1. 3 种主要的原始类型 Boolean 值、数字和字符串都有 toString() 方法，可以把它们的值转换成字符串。
    2. ECMAScript 提供了两种把非数字的原始值转换成数字的方法，即 parseInt() 和 parseFloat()。
        var iNum1 = parseInt("12345red");	//返回 12345
        var iNum1 = parseInt("0xA");	//返回 10
        var iNum1 = parseInt("56.9");	//返回 56
        var iNum1 = parseInt("red");	//返回 NaN

        当然，对二进制、八进制甚至十进制（默认模式），都可以这样调用 parseInt() 方法：

        var iNum1 = parseInt("10", 2);	//返回 2
        var iNum2 = parseInt("10", 8);	//返回 8
        var iNum3 = parseInt("10", 10);	//返回 10
        如果十进制数包含前导 0，那么最好采用基数 10，这样才不会意外地得到八进制的值。例如：

        var iNum1 = parseInt("010");	//返回 8
        var iNum2 = parseInt("010", 8);	//返回 8
        var iNum3 = parseInt("010", 10);	//返回 10

        下面是使用 parseFloat() 方法的一些示例：

        var fNum1 = parseFloat("12345red");	//返回 12345
        var fNum2 = parseFloat("0xA");	//返回 NaN
        var fNum3 = parseFloat("11.2");	//返回 11.2
        var fNum4 = parseFloat("11.22.33");	//返回 11.22
        var fNum5 = parseFloat("0102");	//返回 102
        var fNum1 = parseFloat("red");	//返回 NaN
    
    3.强制类型转换
        ECMAScript 中可用的 3 种强制类型转换如下：

        Boolean(value) - 把给定的值转换成 Boolean 型；
        Number(value) - 把给定的值转换成数字（可以是整数或浮点数）；
        String(value) - 把给定的值转换成字符串；
        用这三个函数之一转换值，将创建一个新值，存放由原始值直接转换成的值。这会造成意想不到的后果。
        
        3-1. Boolean() 函数
            当要转换的值是至少有一个字符的字符串、非 0 数字或对象时，Boolean() 函数将返回 true。
            如果该值是空字符串、数字 0、undefined 或 null，它将返回 false。

            可以用下面的代码测试 Boolean 型的强制类型转换：
            var b1 = Boolean("");		//false - 空字符串
            var b2 = Boolean("hello");		//true - 非空字符串
            var b1 = Boolean(50);		//true - 非零数字
            var b1 = Boolean(null);		//false - null
            var b1 = Boolean(0);		//false - 零
            var b1 = Boolean(new object());	//true - 对象
        
        3-2.Number() 函数
            Number() 函数的强制类型转换与 parseInt() 和 parseFloat() 方法的处理方式相似，只是它转换的是整个值，而不是部分值。
            Number(false)	0
            Number(true)	1
            Number(undefined)	NaN
            Number(null)	0
            Number("1.2")	1.2
            Number("12")	12
            Number("1.2.3")	NaN
            Number(new object())	NaN
            Number(50)	50

        3-3.String() 函数
            最后一种强制类型转换方法 String() 是最简单的，因为它可把任何值转换成字符串。
            var s1 = String(null);	//"null"
            var oNull = null;
            var s2 = oNull.toString();	//会引发错误

五. == vs ===, typeof vs instanceof
    `===` 严格相等，会比较两个值的类型和值
    `==`  抽象相等，比较时，会先进行类型转换，然后再比较值

    js 在底层是怎么存储数据的类型信息
    js 在底层存储变量的时候，会在变量的机器码的低位1-3位存储其类型信息👉

    000：对象
    010：浮点数
    100：字符串
    110：布尔
    1：整数
    null：所有机器码均为0
    undefined：用 −2^30 整数来表示
    typeof 在判断 null 的时候就出现问题了，由于 null 的所有机器码均为0，因此直接被当做了对象来看待。

    null instanceof null // TypeError: Right-hand side of 'instanceof' is not an object
    instanceof 操作符的实现原理
    之前我们提到了 instanceof 来判断对象的具体类型，其实 instanceof 主要的作用就是判断一个实例是否属于某种类型
    其实 instanceof 主要的实现原理就是只要右边变量的 prototype 在左边变量的原型链上即可。因此，instanceof 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 prototype，如果查找失败，则会返回 false，告诉我们左边变量并非是右边变量的实例。

六.this, call, apply 和 bind
    https://juejin.im/post/5b9f176b6fb9a05d3827d03f
    this 的引用必须先看函数的定义，在实际地查看函数定义时，我们设立了四条规则来查找引用，它们是

    隐式绑定
    显式绑定
    new 绑定
    window 绑定

    6-1.隐式绑定
        