// 双层循环
var array = [1, 1, '1', '1']
function unique(array) {
    // res存储结果
    var res = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < res.length; j++) {
            if(array[i] === res[j]){
                break;
            }
        }
        // 如果array[i]是惟一的，那么执行完循环，j等于reslen
        if(j === res.length){
            res.push(array[i])
        }        
    }
    return res;
} 
console.log(unique(array))


// indexOf
var array = [1, 1, '1']
function unique(array){
    var res = []
    for(var i = 0, len = array.length; i < len; i++){
        var current = array[i]
        if(res.indexOf(current) === -1){
            res.push(current)
        }
    }
    return res;
}
console.log(unique(array))


// 排序去重
var array = [1, 1, '1']
function unique(array){
    var res = []
    var sortedArray = array.concat().sort()
    var seen
    for (let i = 0; i < sortedArray.length; i++) {
        //如果是第一个元素或者相邻的元素不相同
        if(!i||seen!==sortedArray[i]){
            console.log(i)
            res.push(sortedArray[i])
        }
        seen = sortedArray[i]
    }
    return res;
}
console.log(unique(array))


// unique API 

var array1 = [1, 2, '1', 2, 1]
var array2 = [1, 1, '1', 2, 2]
function unique(array, isSorted) {
    var res = []
    var seen = []
    for (let i = 0; i < array.length; i++) {
        var value = array[i]
        if(isSorted){
            if(!i || seen !== value) {
                res.push(value)
            }
            seen = value
        }
        else if(res.indexOf(value) === -1){
            res.push(value)
        }
    }
    return res
}
console.log(unique(array1))
console.log(unique(array2, true))

// 优化
var array3 = [1, 1, 'a', 'A', 2, 2]
function unique(array, isSorted, iteratee) {
    var res = []
    var seen = []
    for (var i = 0,len = array.length; i<len; i++){
        var value = array[i]
        var computed = iteratee?iteratee(value,i,array):value
        if(isSorted){
            if(!i||seen!==computed){
                res.push(value)
            }
            seen = computed
        }else if(iteratee){
            if(seen.indexOf(computed) === -1){
                seen.push(computed)
                res.push(value)
            }
        }else if(res.indexOf(value) === -1){
            res.push(value)
        }
    }
    return res
}
console.log(unique(array3))


// filter
var array = [1,2,1,1,'1']
debugger
function unique(array){
    debugger
    var res = array.filter(function(item,index,array){
        return array.indexOf(item) === index
    })
    console.log(res)
    return res
}
console.log(unique(array))

// 排序去重的方法
var array = [1,2,1,1,'1']
function unique(array){
    return array.concat().sort().filter(function(item,index,array){
        return !index||item !==array[index-1]
    })
}
console.log(unique(array))


// Object键值对
var array = [1,2,1,1,'1']
function unique(array){
    var obj = {}
    return array.filter(function(item,index,array){
        return obj.hasOwnProperty(item)?false: (obj[item]=true)
    })
}
console.log(unique(array))


var array = [1,2,1,1,'1']
function unique(array){
    var obj = {}
    return array.filter(function(item,index,array){
        return obj.hasOwnProperty(typeof item + item)?false:(obj[typeof(item + item)]=true)
    })
}
console.log(unique(array))

var array = [{value: 1},{value: 1},{value:2}]
function unique(array){
    var obj = {}
    return array.filter(function(item, index, array){
        console.log(typeof item + JSON.stringify(item))
        return obj.hasOwnProperty(typeof item +JSON.stringify(item))?false:(obj[typeof(item + JSON.stringify(item))]=true)
    })
}
console.log(unique(array))

// ES6

var array = [1,2,1,1,'1']
function unique(array){
    return Array.from(new Set(array))
}
console.log(unique(array))

function unique(array){
    return [...new Set(array)]
}

var unique = (a) =>[...new Set(a)]
function unique(arr){
    const seen = new Map()
    return arr.filter((a)=> !seen.has(a)&&seen.set(a,1))
}