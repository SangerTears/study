// module.exports.name = '你好'
// module.exports.age = 18
// module.exports.sayName = function () {
//     console.log("我是孙悟空---");
// }

// module.exports = {
//     name: 'zhubajie',
//     age: 17,
//     sayName: function(){
//         console.log('我是猪八戒');
//     }
// }

// exports = module.exports 

/**
 *  改对象和改变量
 *  exports 和 Moudle.exports
 *      - 通过exports只能使用.的方式来向外暴露内部变量
 *          exports.xxx = xxx
 *      - 而module.exports既可以通过.的形式也可以直接赋值
 *          module.exports.xxx = xxxx
 *          moudle.exports = {}
 */

    var a = 10;
    var b = a;
    a++
    // console.log('a = '+a);
    // console.log('b = '+b);

    var obj = new Object();
    obj.name = "孙悟空";

    var obj2 = obj;
    obj2.name = "猪八戒"
    obj2 = null
    console.log("obj1 ="+ obj.name);
    console.log("obj2 ="+ obj2)

    
