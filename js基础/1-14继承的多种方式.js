// 1.原型链继承
function Parent(){
    this.name = 'kevin'
}
Parent.prototype.getName = function(){
    console.log(this.name)
}
function Child(){

}
Child.prototype = new Parent()
var child1 = new Child()
console.log(child1.getName())


// 1.引用类型的属性被所有实例共享
function Parent(){
    this.names = ['kevin', 'daisy']
}
function Child() {
    
}
Child.prototype = new Parent()
var child1 = new Child()
child1.names.push('yayu')
console.log(child1.names)
var child2 = new Child()
console.log(child2.names)
// 2.在创建Child的实例时，不能向Parent传参


// 2.借用构造函数(经典继承)
function Parent (){
    this.names = ['kevin','daisy']
}
function Child() {
    Parent.call(this)
}
var child1 = new Child()
child1.names.push('yayu')
console.log(child1.names)
var child2 = new Child()
console.log(child2.names)
// 优点：1.避免了引用类型的属性被所有实例共享
//  2.可以在Child中向parent传递

function Parent(name){
    this.name = name
}
function Child(name){
    Parent.call(this,name)
}
var child1 = new Child('kevin')
console.log(child1.name)

var child2 =  new Child('daisy')
console.log(child2.name)
// 缺点：方法都在构造函数中定义，每次创建实例都会创建一遍方法


// 3.组合继承
// 原型链继承和经典继承双剑合璧
function Parent(name){
    this.name = name
    this.colors = ['red', 'blue', 'green']
}
Parent.prototype.getName = function(){
    console.log(this.name)
}
function Child(name, age) {
    Parent.call(this, name)
    this.age = age
}
Child.prototype = new Parent()
Child.prototype.constructor = Child

var child1 = new Child('kevin', '18')
child1.colors.push('block');
console.log(child1.name)
console.log(child1.age)
console.log(child1.colors)

var child2 = new Child('daisy', '20')
console.log(child2.name)
console.log(child2.age)
console.log(child2.colors)
// 优点：融合原型链继承和构造函数的有点

// 4.原型式继承
function createObj(o){
    function F(){}
    F.prototype = o
    return new F()
}
var person = {
    name: 'kevin',
    friends: ['daisy', 'kelly']
}
var person1 = createObj(person)
var person2 = createObj(person)
person1.name = 'person1'
console.log(person2.name)

person1.friends.push('taylor')
console.log(person2.friends)
// 给person1添加了 name 值，并非修改了原型上的 name 值。

// 5.寄生式继承
// 创建一个禁用月封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象
function createObj(o){
    var clone = Object.create(o)
    clone.sayName = function(){
        console.log('hi')
    }
    return clone
}
// 缺点：跟借用构造函数模式一样，每次创建对象都会创建一遍方法


// 6.寄生式组合式继承
function Parent(name){
    this.name = name
    this.colors = ['red', 'blue', 'green']
}
Parent.prototype.getName = function(){
    console.log(this.name)
}
function Child(name, age){
    Parent.call(this, name)
    this.age = age
}
Child.prototype = new Parent()
var child1 = new Child('kevin', '18')
console.log(child1)

//组合继承的缺点会调用两次父构造函数
// 设置子类型实例的原型
Child.prototype = new parent()
// 创建子类型实例的时候
var child1 = new Child('kevin','18')
Parent.call(this,name)


function Parent(name){
    this.name = name
    this.colors = ['red', 'blue', 'green']
}
Parent.prototype.getName = function(){
    console.log(this.name)
}
function Child(name, age){
    Parent.call(this, name)
    this.age = age
}
var F = function(){}
Child.prototype = new F()
var child1 = new Child('kevin', '18')
console.log(child1)

// 封装继承的番薯干发
function object(o){
    function F(){}
    F.prototype = o
    return new F()
}
function prototype(child, parent){
    var prototype = object(parent.prototype)
    prototype.constructor = child
    child.prototype = prototype
}
prototype(child, Parent)