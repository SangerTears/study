// bind()方法创建一个新的函数，在bind()被调用时，这个新的函数this被bind的第一个参数指定，其余的参数将作为新的函数的参数。
// var module = {
//     x: 42
//     getX: function(){
//         return this.x
//     }
// }
// var unboundGetX = module.getX;
// console.log(unboundGetX)

// var boundGetX = unboundGetX.bind(module)
// console.log(boundGetX)

function list(){
    return Array.prototype.slice.call(arguments)
}
function addArguments(arg1, arg2){
    return arg1 + arg2
}
var list1 = list(1, 2, 3);
var result1 = addArguments(1, 2);
var leadingThirtySevenList = addArguments.bind(null, 37)
var addThirtySeven = addArguments.bind(null, 37)
var list2 = leadingThirtySevenList(1,2,3)