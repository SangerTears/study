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




