// typeof
// typeof是一元操作符，放在其单个操作数的前面，操作数可以是任意类型。返回值为表示操作数类型的的一个字符串

undefined,null,Boolean,Number,String,Object
// null返回object
function a(){}
console.log(typeof a) //function



Object.prototype.toString
// 1.如果this值是undefined，就返回[object Undefined]
// 2.如果this的值是null，就返回[object null]
// 3.让O成为ToObject(this)的结果
// 4.让class成为O的内部属性[[Class]]的值
// 5.最后返回由[object和class]三部分组成的字符串


var number = 1;          // [object Number]
var string = '123';      // [object String]
var boolean = true;      // [object Boolean]
var und = undefined;     // [object Undefined]
var nul = null;          // [object Null]
var obj = {a: 1}         // [object Object]
var array = [1, 2, 3];   // [object Array]
var date = new Date();   // [object Date]
var error = new Error(); // [object Error]
var reg = /a/g;          // [object RegExp]
var func = function a(){};

function checkType(){
    for(var i = 0;i<arguments.length;i++){
        console.log(Object.prototype.toString.call(arguments[i]))
    }
}
checkType(number, string, boolean, und, nul, obj, array, date, error, reg, func)


typeof API 
var class2type = {}
// 生成class2type映射
"Boolean Number String Function Array Date RegExp Object Error Null Undefinded"
.split(' ').map(function(item,index){
    class2type["[object"+item+"]"] = item.toLowerCase()
})
function type(obj) {
    return typeof obj === 'object'|| typeof object ==='function'?
    class2type[object.prototype.toString.call(obj)] || "object":
    typeof obj;
}

// 兼容性
var class2type = {}
// 生成class2type映射
"Boolean Number String Function Array Date RegExp Object Error"
.split(" ").map(function(item,index){
    class2type["[object"+item+"]"] = item.toLowerCase()
})
function type(obj) {
    if(obj == null){
        return obj+ ''
    }
    return typeof obj === 'object'|| typeof object ==='function'?
    class2type[object.prototype.toString.call(obj)] || "object":
    typeof obj;
}
function isFunction(obj) {
    return type(obj) === 'function'
}

plainObject
// 纯粹对象用过{}或者'new Object'会为false

var class2type = {}
// 相当于Object.prototype.toString
var toString = class2type.toString
// 相当于object.prototype.hasOwnProperty
var hasOwn = class2type.hasOwnProperty
function isPlainObject(obj){
    var proto, Ctor
    // 排除掉明显不是obj的以及一些宿主对象如Window
    if(!obj||toString.call(obj)!=="[Object Object]"){
        return false
    }
    // getPrototypeOf es5方法,获取obj的原型
    // 以 new Object 创建对象为例的话
    // obj.__proto__ === Object.prototype
    proto = Object.getPrototypeOf(obj)
    // 没有原型的对象是纯粹的，Object.create(null)就在这里返回true
    if(!Proto){
        return true
    }
    // 以下判断通过new Object 方式创建对象
    // 判断proto 是否有constructor属性，如果有就让ctor的值为proto.constructor
    // 如果 Object函数创建对象，ctor在这里就等于Object构造函数
    Ctor = hasOwn.call(proto,'constructor')&&proto.constructor
    // 在这里判断Ctor构造函数是不是Object构造函数，用于区分自定义构造函数和Object构造函数
    return typeof Ctor === 'function'&& hasOwn.toString.call(Ctor)===hasOwn.toString.call(object)
}

// EmptyObject
function isEmptyObject(obj){
    var name
    for(name in obj){
        return false
    }
    return true
}
console.log(isEmptyObject({})); // true
console.log(isEmptyObject([])); // true
console.log(isEmptyObject(null)); // true
console.log(isEmptyObject(undefined)); // true
console.log(isEmptyObject(1)); // true
console.log(isEmptyObject('')); // true
console.log(isEmptyObject(true)); // true


// window对象
function isWindow(obj){
    return obj !=null && obj === obj.window
}

// isArrayLike
function isArrayLike(obj){
    //  obj必须有length属性
    var length = !!obj && 'length' in obj && obj.length
    var typeRes = type(obj)
    // 删除掉函数和window对象
    if(typeRes ==='function'||isWindow(obj)){
        return false
    }
    return typeRes === "array" || length ===0 ||
    typeof length === 'number'&& length > 0 && (length-1) in obj
}