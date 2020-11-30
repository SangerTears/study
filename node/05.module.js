var hello = require("./helloModule")
console.log(hello.name);
console.log(hello.age);
hello.sayName()

/**
 * 包结构
 * 包其实局势一个压缩文件，解压以后还远为目录
 * 符合规范的目录应该包含如下文件
 * — package.json 描述文件
 * - bin 可执行的二进制文件
 * - lib js代码
 * - doc 文档
 * - test 单元测试
 * 
 */