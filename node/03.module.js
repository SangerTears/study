/* 引入其他的模块
    在node中，通过require()函数引入外部的模块,这里路径，如果使用相对路径必须以./或 ../开口
    require() 引入模块后，该海曙会返回一个对象
    我们使用require引入外部模块时，使用的就是模块标识来找到指定的模块

    模块分成两大类
        核心模块
            —— 由node引擎提供的模块
            —— 核心模块的表示就是，模块的名字
        文件模块
            —— 由用户自己创建的模块
            —— 相对路径使用./或者../开头
**/

var md = require("./02.module")
console.log(md)

var md2 = require('./math')
console.log(md2.add(1,3))
console.log(md2.mul(1,3))

var fs = require('fs')
console.log(fs)