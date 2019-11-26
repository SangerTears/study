// 作用域是指程序源代码中定义变量的区域
// 作用域规定了如何查找变量也就是确定当前执行代码对变量的访问权限
var value = 1
function foo() {
    console.log(value)
}
function bar() {
    var value = 2
    foo()
}
bar()
// js是静态作用域console.log打印的是1


var scope = "global scope"
function checkscope() {
    var scope = 'local scope'
    function f(){
        return scope
    }
    return f()
}
checkscope()

var scope = 'global scope'
function checkscope(){
    var scope = 'local scope'
    function f(){
        return scope
    }
    return f
}
checkscope()()