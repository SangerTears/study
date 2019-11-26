// 构造函数创建一个对象
function Person(){
}
var person = new Person()
person.name = 'kevin'
console.log(person.name) //kevin


// prototype 
// 每个函数都有一个prototype属性
function Person(){
}
Person.prototype.name = 'lin'
var person1 = new Person()
var person2 = new Person()
console.log(person1.name)
console.log(person2.name)

// Person(构造函数)------>Person.prototype(实例原型)



// 这是每一个JavaScript对象(除了 null )都具有的一个属性，叫__proto__，这个属性会指向该对象的原型。

function Person(){
}
var person = new Person()
console.log(person.__proto__ === Person.prototype)

// Person(构造函数)---prototype--->Person.prototype(实例原型)
// person———__proto__—————>Person.prototype


// constructor 每个原型都有一个 constructor 属性指向关联的构造函数。
function Person(){

}
console.log(Person === Person.prototype.constructor)



function Person(){
}
var person = new Person()
console.log(person.__proto__ == Person.prototype)
console.log(Person.prototype.constructor == Person)
console.log(object.getPrototypeOf(person)===Person.prototype)


// 实例原型
// 当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，
// 如果还查不到，就去找原型的原型，一直找到最顶层为止。
function Person(){
}
Person.prototype.name = 'kevin'
var person = new Person()
person.name = 'dasiy'
console.log(person.name)
delete person.name
console.log(person.name)



// 原型的原型
// 原型也是一个对象，既然是对象，我们就可以用最原始的方式创建它
var obj = new Object()
obj.name = 'kevin'
console.log(obj.name)

console.log(Object.prototype.__proto__===null) //true
// null 表示“没有对象”，即该处不应该有值。

// constructor属性
function Person(){

}
var person = new person()
console.log(person.constructor === Person)
person.constructor === Person.prototype.constructor





function Bird(name){
    this.name = name
}
Bird.prototype.name = function(){
    return this.name
}
Bird.prototype.fly = function(){
    return 'I can fly'
}
function Ly(){
}
Ly.prototype = new Bird('老鹰')
Ly.prototype.eating = function(){
    return 'eating haha'
}

function MQ(){
}
MQ.prototype = new Bird('小鸡')
MQ.prototype.Infoha = function(){
    return 'go home'
}

var ly = new Ly()
console.log(ly.fly())

var mq = new MQ()
console.log(mq)