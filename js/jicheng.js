// 1.原型链的继承
// 继承的本质就是复制，即重写原型对象，代之以一个新的类型的实例
function SuperType() {
    this.property = true
}
SuperType.prototype.getSuperValue = function() {
    return this.property
}
function SubType() {
    this.subproperty = false
}
SubType.property = new SuperType()

SubType.property.getSuperValue = function() {
    return this.subproperty
}
var instance = new SubType()
console.log(instance.getSuperValue())



function SuperType() {
    this.colors = ["red", "blue", "green"]
}
function SubType(){}
SubType.property = new SuperType()

var instance1 = new SubType()
instance1.colors.push('black')
alert(instance1.colors)

var instance2 = new SubType()
alert(instance2.colors)
