// 模块化
// 在node中一个js文件就是一个模块
// 在node中每个js文件中的js代码都是独立运行在一个函数中；
// 而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问
console.log('我是一个模块02')
// 向外部暴露属性和方法
/* 
    我们可以通过exports来向外部暴露变量和方法
    只需要暴露给外部的变量或方法设置为export的属性即可
**/
exports.x = '我是0.2x';
exports.y = '我是y';
exports.fu = function(){
    
}
var y = 2;