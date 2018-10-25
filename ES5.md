一. ES5语法
1. 语法和行为改变
    1.1 必须使用var 声明变量
    1.2 禁止自定义的函数中的this指向window
    1.3 创建eval作用域
    1.4 队形不能有重名的属性

2.  JSON.stringify(obj/arr)
    js对象（数组）转换成json对象（数组）
    JSON.parse(json)
    json对象转换为js对象（数组）
3. ES5给object扩展了静态的方法
    Object.create(prototype, [descriptors])
        为新的对象指定新的属性，并对属性进行描述
        1. value：指定值
        2. writable：标识当前属性值是否可修改， 默认false
        3. configurable： 标识当前属性值是否可以被删除，默认false
        4. enumerable： 标识当前属性值是否可以能用for in 枚举
    
    var obj = {username: 'haha', age:'23'};
    var obj1 = {}
    obj1 = Object.create(obj,{
        sex:{
            value: '男',
            writable:true,
            configurable: true
        }
    })
    cosole.log(obj1.sex)
    object.defineProperties(object,descriptors)
        为指定对象扩展多个属性
        get： 用来获取当前属性值得回调函数
        set： 修改当前属性值得触发回调函数，并且实参为修改后的值
        存取器属性：setter， getter一个用来存值一个用来取值
    var obj2 = {firstName: 'kebi', lastName: 'bulai'};
    Object.defineProperties(obj2,{
        fullName:{
            get: function(){ //获取
                return this.firstName + ''+ this.lastName
            },
            set: function(data) {
                //监听扩展属性发生变化的时候自动调用,自动调用后会将变化的值注入到实参中
                console.log('set()', data)
                var names = data.split('')
                this.firstName = names[0]
                this.lastName = names[1]
            }
        }
    })
    console.log(obj2)
    obj2.fullName = 'haode'

    对象本身的两个方法
    ...惰性求值
    get propertyName(){}
    set propertyName(){}
    var obj = {
        firstName: 'kebi', 
        lastName: 'bulai',
        get: function(){ //获取
                return this.firstName + ''+ this.lastName
            },
        set: function(data) {
            //监听扩展属性发生变化的时候自动调用,自动调用后会将变化的值注入到实参中
            console.log('set()', data)
            var names = data.split('')
            this.firstName = names[0]
            this.lastName = names[1]
        }
    }

4. 数组
    Array.prototype.indexOf(value):得到值在数组中第一个下标
    Array.prototype.lastindexOf(value):得到值在数组中最后第一个下标
    Array.prototype.foreach(function(item,index){})
    Array.prototype.map(function(item,index){}) //遍历一个数组，返回加工一个新的数组
    Array.prototype.filter(function(item,index){}) //遍历过滤一个新的数组，返回条件为true的值

    var arr = [2,3,4,5,1,6,7,4]
    arr.forEach(function(item,index){
        console.log(item,index)
    })

    var arr2 = arr.map(function(item,index){
        return item+10;
    })
    console.log(arr2);

    var arr3 = arr.filter(function(item,index){
        return item > 3;
    })

5.  Function 的扩展
    Function.prototype.bind(obj);
    作用是将函数内的this绑定为obj，并将函数返回 
    call 一个个 apply 数组 是立即调用函数 bind()是将函数返回
    bind() 是将函数

    var obj = {username: 'kobe'}
    function foo(data){
        console.log(this,data);
    }
    //传入参数的形式
    foo.apply(obj，33)  //直接从第二个参数开始，一次传入
    foo.call(obj,[33])  // 第二个参数必须是数组，传入放在数组里

    foo.bind(obj)() //bind的特点：绑定完this不会立即调用当前的函数，而是将函数返回
    //bind传参的方式和call一样 bind用来指定回调函数的this

    回调函数
    setTimeout(function(){
        console.log(this); window
    }.bind(obj),1000)
