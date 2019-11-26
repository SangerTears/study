var count = 1;
var container = document.getElementById('container')

function getUserAction(e){
    console.log(e)
    container.innerHTML = count++
}
// container.onmousemove = getUserAction

// 防抖
// 防抖的原理就是：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件
// 触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行，总之，
// 就是要等你触发完事件 n 秒内不再触发事件，我才执行，真是任性呐!

// 第一版
// function debounce(func, wait){
//     var timeout;
//     return function(){
//         clearTimeout(timeout)
//         timeout = setTimeout(func, wait)
//     }
// }
// container.onmousemove = debounce(getUserAction, 1000)


// 第二版
// function debounce(func, wait){
//     var timeout;
//     return function(){
//         var context = this
//         var args = arguments
//         clearTimeout(timeout)
//         timeout = setTimeout(function(){
//             func.apply(context, args)
//         }, wait)
//     }
// }
// container.onmousemove = debounce(getUserAction, 1000)

// 1.修复this指向
// 2.event对象


// 立即执行
// function debounce(func, wait, immediate){
//     var timeout, result;
//     return function(){
//         var context = this
//         var args = arguments
//         if(timeout) clearTimeout(timeout)
//         if(immediate){
//             // 如果执行过不再执行
//             var callNow = !timeout
//             timeout = setTimeout(function(){
//                 timeout = null
//             },wait)
//             if(callNow) result = func.apply(context,args)
//         }else{
//             timeout = setTimeout(function(){
//                 func.apply(context, args)
//             },wait)
//         }
//         return result
//     }
// }

// 取消
function debounce(func, wait, immediate){
    var timeout, result
    var debounced = function(){
        var context = this
        var args = arguments
        if(immediate){
            // 如果执行过，不在执行
            var callNow = !timeout
            timeout = setTimeout(() => {
                timeout = null
            }, wait)
            if(callNow) result = func.apply(context, args)
        }else{
            timeout = setTimeout(function(){
                func.apply(context, args)
            },wait)
        }
        return result
    }
    debounce.cancel = function(){
        clearTimeout(timeout)
        timeout = null
    }
    return debounced;
}


var conunt = 1
var container = document.getElementById('container')
function getUserAction(e){
    container.innerHTML = conunt++;
}
var setUserAction = debounce(getUserAction, 10000, true);
container.onmousemove = setUserAction
document.getElementById('button').addEventListener('click',function(){
    setUserAction.cancel()
})