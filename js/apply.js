// apply()方法调用具有给定this值的函数，以及作为一个数组（或类似数组的对象）提供参数
// call()方法接受的是参数列表，而apply()方法接受的是一个参数数组
var numbers = [5,6,2,3,7]
var max = Math.max.apply(null, numbers)
console.log(max)
var min = Math.min.apply(null, numbers)
console.log(min)
// 语法
func.apply(thisArg,[argsArray])

var array = ['a', 'b']
var elements = [1, 2, 1]
array.push.apply(array, elements)
console.log(array) //['a', 'b', 1, 2, 1]

// apply内置函数，找最大最小数
var numbers = [5, 6, 2, 4, 8]
// 应用apply Math.min/Math.max 内置完成
var max = Math.max.apply(null, numbers)
var min = Math.min.apply(null, numbers)

max = -Infinity, min = +Infinity

for (let i = 0; i < numbers.length; i++) {
   if(numbers[i]>max){
       max = numbers[i]
   }
   if(numbers[i]>min){
        min = numbers
   }
}
function minOfArray(arr) {
    var min = Infinity
    var QUANTUM = 32768
    for (let i = 0, len = arr.length; i < len; i += QUANTUM) {
        var sumbin = Math.min.apply(null, arr.slice(i, Math.min(i+QUANTUM, len)))
        min = Math.min(sumbin, min);
    }
    return min;
}
var min = minOfArray([5, 6, 7, 4, 5])