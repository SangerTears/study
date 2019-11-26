// new:运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一

function Otaku(name,age){
    this.name = name
    this.age = age
    this.habit = 'Games'
}
Otaku.prototype.strength = 60
Otaku.prototype.sayYourName = function(){
    console.log('I am'+ this.name)
}
var person = new Otaku('kevin', '18')
console.log(person.sayYourName)

// 实例person可以 
// 1.访问到Otaku构造函数里的属性
// 2.可以访问到Otaku.prototype中的属性

function Otaku (){

}
// 使用new
var person = new Otaku();
// 使用objectFactory
var person = objectFactory(Otaku, )


function objectFactory(){
    var obj = new Object()
    Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype
    Constructor.apply(obj, arguments)
    return obj;
}
// 1.用new Object()方式建立了一个对象obj
// 2.取出第一个参数，就是我们要传入的构造函数，此外因为shift会修改原数组，所以arguments会被取出第一个参数
// 3.将obj的原型指向构造函数、这样obj就可以访问构造函数原型中的属性
// 4.使用apply，改变构造函数this的指向到新建的对象这样obj就可以访问到构造函数中的属性
// 5.返回obj

function Otaku(name, age){
    this.name = name
    this.age = age
    this.habit = 'Games'
}
Otaku.prototype.strength = 60
Otaku.prototype.sayYourName = function(){
    console.log('I am' + this.name)
}
function objectFactory(){
    var obj = new Object()
    Constructor = [].shift.call(arguments)
    obj.__proto__ = Constructor.prototype
    Constructor.apply(obj,arguments)
    return obj
}
var person =  objectFactory(Otaku, 'kenvin', '18')
console.log(person.name)
console.log(person.habit)
console.log(person.strength)

person.sayYourName


function Timer(){
    this.s1 = 0
    this.s2 = 0
    setInterval(() => this.s1++, 1000);
    setInterval(function(){
        this.s2++;
    },1000)
}
console.log(window)
var timer = new Timer()
setTimeout(() => console.log('s1',Timer.s1), 3100);
setTimeout(() => console.log('s2',Timer.s2), 3100);