// bind()方法会创建一个新函数，当这个心函数被调用时，bind()的第一个参数将作为它运行时的this，
// 之后的一序列参数将会在传递的实参前传入作为他的参数

// 1.返回一个函数
// 2.可以传入参数

var foo = {
    value: 1
}
function bar(){
    console.log(this.value)
}
var bindFoo = bar.bind(foo)
bindFoo();

Function.prototype.bind2 = function(context){
    var self = this
    return function(){
        return self.apply(context)
    }
}

var foo = {
    value: 1
}
function bar() {
    return this.value
}
var bindFoo = bar.bind(foo)
console.log(bindFoo())


// 传参模拟实现
var foo = {
    value: 1
}
function bar(name,age){
    console.log(this.value);
    console.log(name);
    console.log(age);
}
var bindFoo = bar.bind(foo,'daisy')
bindFoo('18')


Function.prototype.bind2 = function (context){
    var self = this;
    // 获取bind2函数从第二个参数到最后一个参数
    var args = Array.prototype.slice.call(arguments, 1)
    return function() {
        // 这个时候的arguments是指bind返回的函数传入的参数
        var bindArgs = Array.prototype.splice.call(arguments)
        return self.apply(context,args.context(bindArgs))
    }
}


构造函数效果的模拟实现
// 一个绑定函数也能使用new操作符创建对象，这种行为就像吧原函数当成构造器，提供this值被忽
// 略同时调用时参数被提供给模拟函数

var value = 2;
var foo = {
    value: 1
}
function bar(name,age){
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}
bar.prototype.friend = 'kevin'
var bindFoo = bar.bind(foo, 'daisy')
var obj = new bindFoo('18')
// undefined
// daisy
// 18
console.log(obj.habit)
console.log(obj.friend)

// 尽管在全局和 foo 中都声明了 value 值，最后依然返回了 undefind，
// 说明绑定的 this 失效了，如果大家了解 new 的模拟实现，就会知道这个时候的 this 已经指向了 obj。

Function.prototype.bind2 = function(context){
    var self = this
    var args = Array.prototype.slice.call(arguments,1)
    var fBound =  function(){
        var bindArgs = Array.prototype.slice.call(argsuments)
        return self.apply(this instanceof fBound?this: context,args.concat(bindArgs))
    }
    fBound.prototype = this.prototype
    return fBound
}

构造函数效果的优化实现
Function.prototype.bind2 = function (context){
    var self = this
    var args = Array.prototype.slice.call(arguments,1);
    var fNOP = function(){}
    var fBound = function(){
        var bindArgs = Array.prototype.slice.call(arguments)
        return self.apply(this instanceof fNOP? this: context,args.concat(bindArgs))
    }
    fNOP.prototype = this.prototype
    fBound.prototype = new fNOP()
    return fBound
}

// 三个问题
// 1.apply和MDN不同
// 2.bind不是函数怎么办、？
if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
}

// 3.做兼容
Function.prototype.bind = Function.prototype.bind || function () {
};


Function.prototype.bind2 = function (context) {

    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }

    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);

    var fNOP = function () {};

    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}