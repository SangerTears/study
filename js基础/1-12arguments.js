// 类数组对象
// 拥有一个length属性和若干索引属性的对象
var array = ['name','age','sex']
var arrayLike = {
    0: 'name',
    1: 'age',
    2: 'sex',
    length: 3
}
console.log(array[0])
console.log(arrayLike[0])

// 读写
array[0] = 'new name'
arrayLike[0] = 'new name'
console.log(array[0])
console.log(arrayLike[0])

// 长度
console.log(array.length)
console.log(arrayLike.length)

// 遍历
for (let i = 0; i < array.length; i++) {
}
for (let i = 0; i < arrayLike.length; i++) {
}
arrayLike.push('4') //不支持数组的方法，类数组


// 调用数组的方法
var arrayLike = {0:'name', 1:'age', 2:'sex', length:3}
Array.prototype.join.call(arrayLike,'&')
Array.prototype.slice.call(arrayLike,0)
// slice可以作佛啊类数组转数组
Array.prototype.map.call(arrayLike, function(item){
    return item.toUpperCase()
});

// 类数组转数组的方法
var arrayLike = {0: 'name', 1:'age', 2: 'sex', length:3 }
// 1.slice
Array.prototype.slice.call(arrayLike)
// 2.splice
Array.prototype.splice.call(arrayLike, 0)
// 3.es6 Array.from
Array.form(arrayLike)
// 4.apply
Array.prototype.concat.apply([], arrayLike)

// Arguments对象
// Arguments对象只定义在函数体中，包含了函数的参数和其他属性，在函数体中，arguments指代
// 该函数的Arguments对象
function foo(name, age, sex){
    console.log(arguments)
}
foo('name', 'age', 'sex')

// 1.length属性
function foo(b, c, d){
    console.log('实参的长度为:' + arguments.length)//3
}
console.log('形参的长度为:'+ foo.length) //1
foo(1)



// callee属性
// 通过它可以调用函数自身
var data = []
for (let i = 0; i < 3; i++) {
    (data[i] = function(){
        console.log(arguments.callee.i)
    }).i = i   
}
data[0]();
data[1]();
data[2]();

// Arguments和对应参数的绑定
function foo(name, age, sex, hobbit) {
    console.log(name, arguments[0])
    // 改变形参
    name = 'new name'
    console.log(name, arguments[0]);

    // 改变arguments
    arguments[1] = 'new age'
    console.log(age, arguments[1])
    
    //测试未传入的是否会绑定
    console.log(sex) //undefined
    sex = 'new sex'
    console.log(sex, arguments[2])

    arguments[3] = 'new hobbit'
    console.log(hobbit, arguments[3])
}
foo('name', 'age')
// 传入的参数，实参和Arguments的值会共享，当没有传入时，实参雨Arguments的值不会共享
// 严格模式下不共享

// 传递参数
// 将参数从一个函数传递到另一个函数
// 使用apply将foo的参数传递给bar 
function foo(){
    bar.apply(this, arguments)
}
function bar(a,b,c){
    console.log(a,b,c)
}
foo(1,2,3)

// 强大的ES6
function func(...arguments){
    console.log(arguments)
}
func(1,2,3)
