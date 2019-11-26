//使用时间戳
// 第一版
function throttle(params) {
    var context, args;
    var previous = 0;
    return function(){
        var now = +new Date()
        context = this
        args = arguments
        if(now - previous>wait){
            func.apply(context,args)
            previous = now
        }
    }
}
container.onmousemove = throttle(getUserAction, 1000)

// 第二版
function throttle(func, wait) {
    var timeout
    var previous = 0
    return function(){
        context = this
        args = arguments
        if(!timeout){
            timeout = setTimeout(function () {
                timeout = null
                func.apply(context, args)
            },wait)
        }
    }
}

// 第三版
function throttle(func, wait) {
    var timeout, context, args, result
    var previous = 0
    var later = function(){
        previous = +new Date()
        timeout = null
        func.apply(context, args)
    }
    var throttled = function(){
        var now = +new Date()
        // 下次触发func剩余时间
        var remaining = wait -(now - previous)
        context = this
        args = arguments
        //如果没有剩余时间了或者你改了系统时间
        if(remaining <= 0 || remaining > wait){
            if(timeout){
                clearTimeout(timeout)
            }
            previous = now;
            func.apply(context,args)
        }else if(!timeout){
            timeout = setTimeout(later, remaining)
        }
    }
    return throttled
}

// 优化
function throttle(func, wait, options){
    var timeout, context, args, result
    var previous = 0
    if(!options)options = {}
    var later = function () {
        previous = option.leading === false? 0: new Date().getTime()
        timeout = null
        func.apply(context, args)
        if(!timeout)context = args = null
    }
    var throttled = function () {
        var now = new Date().getTime()
        if(!previous&&options.leading === false)previous = now
        var remaining = wait - (now - previous)
        context = this
        args = arguments
        if(remaining <= 0 || remaining > wait){
            if(timeout){
                clearTimeout(timeout)
                timeout = null
            }
            previous = now
            func.apply(context, args)
            if(!timeout)context = args = null
        } else if(!timeout&&options.trailing !== false){
            timeout = setTimeout(later, remaining)
        }
    }
    return throttled
}

throttled.cancel = function(){
    clearTimeout(timeout)
    previous = 0
    timeout = null
}