1. let关键字
    作用：与var类似，用于声明变量
    特点： a. 在块作用域有效
          b. 不能重复声明
          c. 不会预处理， 不存在提升
    应用： 循环遍历加监听
          使用let取代var是趋势
    预解析
    let username = 'kobe'
    let btns = document.getElementByTagName('button')
    for( var i = 0; i< btns.length; i++){
        var btn = btns[i];
        btn.onclick = function(){
            alert(i); //这样弹出来的只有3，外面的函数执行完才会，执行这个钩子函数
        }
    }
    for( var i = 0; i< btns.length; i++){
        var btn = btns[i];
        (function(i){
            btn.onclick = function(){
                alert(i); 
            }
        })(i)//立即执行函数，闭包，解决这个问题，函数作用域
    }

    for( let i = 0; i< btns.length; i++){
        var btn = btns[i];
        btn.onclick = function(){
            alert(i); 
        }
      //块级作用域，当前自己的块级作用域的数据
    }

2.  const 常量
    特点：不能修改
         其他用法和let一样
    应用：保存不用修改的数据

3. 变量的解构赋值
    理解： 从对象或数组中提取的数据，并赋值给变量（多个)
    对象的解构赋值
    let {n, a} = {n:'tom', a:12}
    数组的解构赋值
    let [a,b] = [1, 'atuigu']
    用法： 给多个形参赋值
    let {age} = obj

    let arr = [1, 2, 3, 4, 5, 6]
    let [, ,a,b] = arr

    function foo(username, age){
        console.loh(username, age)
    }
    foo(obj);

4. 模板字符串
    模板支付穿：简化字符串拼接
    模板字符串使用``包含
    变化部分使用${}定义

5. 简化的对象写法
    let username = 'kobe'
    let age = 39
    let obj ={
        username,//同名的属性可以省略不写
        age,
        getName(){ //可以省略函数的function
            return this.userName
        }

    }

6. 箭头函数
    let fun =function(){

    }
    let fun =()=> console.log('箭头函数‘)
    （）形参 
    // 形参
    //1.没有形参的时候
    let fun1 = ()=>

    //  2.只有一个形参的时候
    let fun2 = a => console.log(a);
    fun2('aaa');

    //3.两个及两个以上的形参的时候 （）不能省略
    let fun 3 = (x,y)=> 
    fun3(2, 4);

    函数体的情况
    // 1.函数体只有一条语句或者是表达式的时候   {} 可以省略 --->会自动返回语句执行的结果或者是表达式的结果
    let fun4 =(x,y) => x+y;
    {return X+Y}
    console.log(fun4(24,36));

    // 2.函数体不止一条语句或者是表达式的情况 {} 不可以省略
    let fun5 = (x, y) =>{
        console.log(x+y);
        return x + y;
    }
    fun5(3,4);

    箭头函数的特点
    1.简洁
    2.箭头函数没有自己的this, 箭头函数的this不是调用的时候决定的，而是在定义的时候处在对象就是他的this
    3.扩展理解,看他外层有没有函数，外层有函数当前函数的this和外层的this一样，没有指向window
 
    //测试箭头函数的this
    let btn1 = document.getElementById('btn1')
    let btn2 = document.getElementById('btn2')

    btn1.onclick = function(){
        alert(this);
    }
    btn2.onclick = ()=>{
        alert(this);
    }
    let obj ={
        name:'箭头函数',
        getName: function(){
            btn2.onclick = ()=>{
                console.log(this);
            } 
        }
    }
    obj.getname();

7. 三点运算符
    用途
    1. rest(可变)参数
    *用来取代arguments 但比argumrnts灵活，只能是最后部分形参参数

    function foo(a,b){
        console.log(arguments);
        arguments.callee();
    }
    foo(2, 3)


    function foo(...value){
        console.log(value)
        value.forEach(function (item,index){
            console.log(item, index);
        })
    }
    value前面要是有站位符。使用三点的形参必须放在最后面
    foo(2, 3, 4, 5)

    let arr = [1,6]
    let arr1 = [2,3,4,5];
    arr =  [1,...arr1,6];
    console.log(arr)

8. 形参默认值
    形参的默认值 ---当不传入参数的时候默认使用形参的默认值

    function point(x, y){
        this.x = x;
        this.y = y;
    }
    let point = new point(23, 35)
    console.log(point)

    let point1 = new point();
    function point(x=0,y=0){
    }
    point1 = (0,0)

9. promise对象
    1.理解:
        promise对象,代表了未来某个将要发生的事件(通常是一个异步操作)
        有了promise对象,可以将异步操作以同步的流程表达出来.避免层层嵌套(熟称"回调地域")
        ES6的Promise是一个构造函数,用来生成Promise实例

    3.Promise对象的3个状态
        pedding: 初始化状态
        fullfilled: 成功状态
        rejected: 失败的状态

10. Symbol:
    ES5中对象的属性名都是字符串,容易造成重名,污染环境
    Symbol:
        概念:ES6中添加了一种原始数据类型symbol(已有的原始数据类型:String,Number,Boolean,null,undefined,对象)
    特点:
        1.Symbol属性值对应的值是惟一的,解决命名冲突问题
        2.Symbol值不能与其他数据进行计算,包括同字符串拼接
        3.for in, for of遍历事不会遍历symbol属性
        使用
        1.调用symbol函数得到symbol值
        2.传参标识
        3.内置Symbol值
            除了定义自己使用的Symbol值以外,ES6还提供了11个内置的Symbol值,指向语言内部使用的方法
            Symbol.iterator
                对象的Symbol.iteration属性,指向该对象的默认遍历器方法

11. iterator 
    概念: iterator是一种接口机制,为各种不同的数据结构提供统一的访问机制
    作用: 
        1.为各种数据结构,提供一个统一的,简便的访问接口;
        2.是的数据结构的成员能够按某种次序排序
        3.ES6创造了一种新的遍历命令for...of循环,Iteration接口主要供for...of消费
    工作原理
        创建一个指针对象(遍历器对象),指向数据结构的起始位置.
        第一次调用next方法,指针自动指向数据结构的第一个成员
        接下来不断的调用next方法,指针会一直往后移动,知道指向最后一个成员
        每调用方法返回的是一个包含value和done的对象,{value:当前成员的值,done:布尔值}
        * value表示当前成员的值,done对象的布尔值表示当前的数据的结构是否遍历结束.
        *   当遍历结束的时候返回的是value值是undefined,done值为true
        原生具备iteration接口的数据(可用for of遍历)
        将iteration接口部署到指定的数据类型上,可以使用for of去循环遍历
        数组, 字符串, arguments, set容器, map容器
        obj没有这个接口属性
    
        
12. Generator函数
    概念:
        1.ES6提供的解决一步编程的方案之一
        2.Generator函数是一个状态机智,内部封装了不同状态的数据
        