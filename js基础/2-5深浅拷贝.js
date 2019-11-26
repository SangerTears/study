// 数组的深浅拷贝
var arr = ['old',1,true,null,undefined]
var new_arr = arr.concat()
new_arr[0] = 'new'
console.log(arr)
console.log(new_arr)

var arr = ['old',1,true,null,undefined]
var new_arr = arr.slice()
new_arr[0] = 'new'
console.log(arr)
console.log(new_arr)


// 如果数组嵌套了对象或者数组的话
var arr = [{old: 'old'},['old']]
var new_arr = arr.concat()
console.log(new_arr)
arr[0].old = 'new'
arr[1][0] = 'new'
console.log(arr)
console.log(new_arr)
// 无论是新数组还是旧数组都发生了变化,concat 和 slice 是一种浅拷贝。

// 数组的深拷贝
var arr = ['old',1,true,['old1','old2'],{old:1}]
var new_arr = JSON.parse(JSON.stringify(arr))
console.log(new_arr)

// 缺点不能拷贝函数
var arr = [function(){
    console.log(a)
},{
    b:function(){
        console.log(b)
    }
}]
var new_arr = JSON.parse(JSON.stringify(arr))
console.log(new_arr)


// 浅拷贝的实现
// concat, slice, JSON.stringify技巧类
var shallowCopy = function (obj) {
    // 只拷贝对象
    if(typeof obj !== 'object') return;
    // 根据obj的类型判断是新建一个数组还是对象
    var newObj = obj instanceof Array? []:{};
    // 遍历obj，并且判断是obj属性才拷贝
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = obj[key]
        }
    }
    return newObj
}

// 深拷贝的实现
var deepCopy = function(obj){
    if(typeof obj !== 'object') return;
    var newObj = obj instanceof Array? []:{};
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = typeof obj[key] === 'object'? deepCopy(obj[key]): obj[key]
        }
    }
    return newObj
}