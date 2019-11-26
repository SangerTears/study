// call()方法在使用一个指定的this值和若干个指定的参数值的前提下调用某个函数或方法
var foo ={
    value: 1
}
function bar(){
    console.log(this.value,222)
}
bar.call(foo)
// 1.call改变了this的指向，指向到foo
// 2.bar 函数执行了


模拟实现第一步
// 改造
var foo = {
    value:1,
    bar: function(){
        console.log(this.value)
    }
}
foo.bar()
// 1.将函数设为对象的属性
// 2.执行该函数
// 3.删除该函数
foo.fn = bar
foo.fn()
delete foo.fn

Function.prototype.call2 = function(context){
    // 首先要先获取调用call的函数，用this可以获取
    context.fn = this
    context.fn()
    delete context.fn
}
var foo = {
    value: 1
}
function bar(){
    console.log(this.value)
}
bar.call2(foo)


模拟实现第二步
var foo = {
    value:1
}
function bar(name,age){
    console.log(name)
    console.log(age)
    console.log(value)
}
bar.call(foo, 'kenvin', 18)
// 我们可以从 Arguments 对象中取值，取出第二个到最后一个参数，然后放到一个数组里÷
arguments = {
    0: foo,
    1: 'kevin',
    2: 18,
    length: 3
}
// 因为arguments是类数组对象，所以可以用for循环
var args = []
for(var i =1, len = arguments.length; i<len; i++){
    args.push('arguments['+i+']')
}
args为[arguments[1],arguments[2],arguments[3]]

context.fn(args.join(','))
eval('context.fn('+args+')')

Function.prototype.call2 = function(context){
    context.fn = this;
    var args = []
    for(var i = 1, len = arguments.length; i<len; i++){
        args.push('arguments['+i+']')
    }
    eval('context.fn('+args+')')
    delete context.fn
}
var foo = {
    value:1
}
function bar(name, age){
    console.log(name)
    console.log(age)
    console.log(this.value)
}
bar.call2(foo, 'kevin', 18)


第三步
// 1.this参数可以传null,当为null的时候，视为指向window
var value = 1
function bar(){
    console.log(this.value)
}
bar.call(null)

// 2.函数式可以与返回值的
var obj = {
    value:1
}
function bar(name,age){
    return {
        value: this.value,
        name: name,
        age: age
    }
}
console.log(bar.call(obj,'kevin',18))

Function.prototype.call2 = function(context){
    var context = context||window
    context.fn = this

    for(var i = 1, len = arguments.length; i<len; i++){
        args.push('arguments['+i+']')
    }
    var result = eval('context.fn('+args+')')
    delete context.fn
    return result
}

var value = 2
var obj = {
    value: 1
}
function bar(name,age){
    console.log(this.value)
    return {
        value: this.value,
        name: name,
        age: age
    }
}
bar.call2(null)
console.log(bar.call2(obj,'kevin',18))


apply的模拟实现
Function.prototype.apply = function(context, arr){
    var context = object(context) || window
    context.fn = this

    var result
    if(!arr){
        result = context.fn()
    }else{
        var args = [];
        for(var i = 0, len = arr.length; i<len; i++){
            args.push('arr['+i+']')
        }
        result = eval('context.fn('+args+')')
    }
    delete context.fn
    return result
}