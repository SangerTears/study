// 变量对象 是与执行上下文相关的数据作用域，存储了在上下文中定义的变量和函数声明

// 1.可以通过this引用，在客户端js中，全局对象是window
console.log(this)

// 2.全局对象是由Object构造函数实例化的一个对象
console.log(this instanceof Object)

// 3.预定义了一堆，函数和属性
console.log(Math.random())
console.log(this.Math.random())

// 4.作为全局变量的宿主
var a = 1
console.log(this.a)

// 5.客户端js中，全局对象有window属性指向自身
var a = 1
console.log(window.a)

this.window.b = 2
console.log(this.b)


// 执行过程
// 1.进入执行上下文
// 2.代码执行
// 调用函数时，会为其创建一个Arguments对象，并自动初始化局部变量arguments，
// 指代该Arguments对象。所有作为参数传入的值都会成为Arguments对象的数组元素。

// 变量对象会包括：

// 函数的所有形参 (如果是函数上下文)
// 由名称和对应值组成的一个变量对象的属性被创建
// 没有实参，属性值设为 undefined

// 函数声明
// 由名称和对应值（函数对象(function-object)）组成一个变量对象的属性被创建
// 如果变量对象已经存在相同名称的属性，则完全替换这个属性

// 变量声明
// 由名称和对应值（undefined）组成一个变量对象的属性被创建；
// 如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性

function foo(a){
    var b = 2
    function c() {}
    var d = function(){}
    b = 3
}
foo(1)


