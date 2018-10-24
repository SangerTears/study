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
