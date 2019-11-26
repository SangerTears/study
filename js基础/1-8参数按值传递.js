// 把函数外部的值赋值给函数内部的参数，就和把值从一个变量复制到另一个变量一样

var value = 1
function foo(v){
    v = 2;
    console.log(v)
}
foo(value)
console.log(value)


// 引用传递
var obj = {
    value: 1
}
function foo(o){
    o.value = 2
    console.log(o.value)
}
foo(obj)
console.log(obj.value)