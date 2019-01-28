// Promise 的学习
// .then .catch
// 在javascript的世界中,所有的代码都是单线程执行的,由于这个"缺陷,导致javascript所有网络操作,
// 浏览器事件,必须都是异步执行,异步执行可以用回调函数实现
function callback() {
    console.log('done');
}
console.log('before setTimeout()');
setTimeout(callback, 1000); //1秒钟后调用callback函数
console.log('after setTimeout()');

request.onreadystatechange = function (){
    if(request.readyState === 4){
        if(request.status === 200){
            return success(request.responseText);
        }else{
            return fail(request.status);
        }
    }
}
'use strict';
new Promise(function(){});
// 直接运行测试
console.log('支持promise');


// promise例子
function test(resolve,reject) {
    var timeOut = Math.random()*2;
    log('set timeout to:'+ timeOut + 'seconds');
    setTimeout(function(){
        if(timeOut < 1){
            log('call resolve()...');
            resolve('200 ok');
        }else{
            log('call reject()...');
            reject('timeout in'+ timeOUt + 'seconds')
        }
    }, timeOut*1000);
}

var p1 = new Promise(test);
var p2 = P1.then(function(result){
    console.log('成功:'+ result)
})
var p3 = p2.catch(function (reason){
    console.log('失败'+ reason);
})

p1.then(function(result){
    console.log('成功:'+ result);
})
p2.catch(function (reason) {
    console.log('失败:'+ reason);
})

new Promise(test).then(function(result){
    console.log('成功'+'result');
}).catch(function(reason){
    console.log('失败:'+ reason)
})