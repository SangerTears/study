// 1.工厂模式
function createPerson(name){
    var o = new Object()
    o.name = name
    o.getName = function(){
        console.log(this.name)
    }
    return o;
}
var person1 = createPerson('kevin')
console.log(person1)
// 缺点对象无法识别，因为所有的实例都指向一个原型


// 2.构造函数模式
function Person(name){
    this.name = name;
    this.getName = function(){
        console.log(this.name)
    }
} 
var person1 = new Person('kevin')
console.log(person1)
// 优点：实例可以识别为一个特定的类型
// 缺点：每次创建实例时，每个方法都要被创建一次


// 2.1构造函数模式优化
function Person(name){
    this.name = name;
    this.getName = getName;
}
function getName(){
    console.log(this.name)
}
var person1 = new Person('kevin')
// 优点：解决了每个方法都要被重新创建的问题
// 缺点：


// 3.原型模式
function Person(name){

}
Person.prototype.name = 'keivn'
person.prototype.getName = function(){
    console.log(this.name)
}
var person1 = new Person()
// 优点：方法不会重新创建
// 缺点：1.所有的属性和方法都共享 2.不能初始化参数


// 3.1原型模式优化
function Person(name){

}
Person.prototype = {
    name: 'keivn',
    getName: function(){
        console.log(this.name)
    }
}
var person1 = new Person()
console.log(person1)
// 优点：封装性好了一点
// 缺点：重写了原型丢失了constructor

// 3.2原型模式优化
function Person(name){

}
Person.prototype = {
    constructor: Person,
    name: 'kevin',
    getName: function(){
        console.log(this.name)
    }
}
var person1 = new Person()
console.log(person1)
// 优点：实例可以通过contructor属性找到所属构造函数
// 缺点：原型模式该有的缺点还是有


// 4.组合模式
// 构造函数与原型模式双剑合璧
function Person(){
    this.name = name
}
Person.prototype = {
    constructor: Person,
    getName: function(){
        console.log(this.name)
    }
}
var person1 = new Person()

// new的实现过程
// 1.首先新建一个对象
// 2.然后将对象的原型指向person.prototype
// 3.然后Person.apply(obj)
// 4.返回这个对象

function Person(name) {
    this.name = name
    if(typeof this.getName != 'function'){
        Person.prototype = {
            constructor: Person,
            getName: function(){
                console.log(this.name)
            }
        }
        return new Person(name)
    }
} 
var person1 = new Person('kevin')
var person2 = new Person('daisy')

person1.getName()
person2.getName()

// 5.1寄生构造函数模式
function Person(name){
    var o = new Object();
    o.name = name
    o.getName = function () {
        console.log(this.name)
    }
    return o;
}
var person1 = new Person('kevin')
console.log(person1 instanceof Person)
console.log(person1 instanceof Object)


function SpecialArray() {
    var values = new Array()
    for (let i = 0, len = arguments.length; i < len; i++) {
        values.push(arguments[i])        
    }
    values.toPipedString = function(){
        return this.join('|')
    }
    return values;
}
var colors = new SpecialArray('red','blue','green')
var colors2 = SpecialArray('red2', 'blue2', 'green2')

console.log(colors)
console.log(colors.toPipedString())
console.log(colors2)
console.log(colors2.toPipedString())

values.push.apply(values, arguments);


// 5.2稳妥的构造函数
function person(name){
    var o = new Object()
    o.sayName = function(){
        console.log(name)
    }
    return o
}
var person1 = person('kevin')
person1.sayName()
person1.name = 'daisy'
person1.sayName()
console.log(person1.name)