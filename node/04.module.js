var a = 10;
/*
    在node中有一个全局对象global,它的作用和网页的window类似
        在全局中创建的变量都会作为global的属性保存
        在全局中创建的函数都作为global的方法保存
    
        当node在执行模块中的代码时，它会先在代码的最顶部，添加如下代码
        function (exports, require, module, __filename, __dirname) {
            在代碼最底部，添加如下代碼
        ｝
        实际上模块中的代码都包装在一个函数中执行，并且函数执行时，同事传递进了5个参数
        exports
            ——该对象用来讲变量或函数暴露到外部
        require
            —— 函数引入外部的模块
        module
            ——代表当前模块本身
            ——exports就是module属性
            __既可以实行exports导出，也可以使用module.exports导出
        __filename
            /Users/tears/workspaces/study-font/study/node/04.module.js
            ——当前模块完整的路径
        __dirname
            /Users/tears/workspaces/study-font/study/node
            ——当前文件文件夹的路径
**/
// console.log(global.a)

/*
    arguments.callee
    _ 这个属性保存的是当前执行的函数对象
**/
console.log(arguments.callee + "");

console.log(module.exports === exports)

console.log(__filename)
console.log(__dirname)
