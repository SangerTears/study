// 1.变量对象 VO
// 2.作用域链 scope
// 3.this

// 函数的创建
function foo() {
    function bar(){
    }
}

// foo.[[scope]] = [
//     globalContext.VO
// ]
// bar.[[scope]] = [
//     fooContext.AO,
//     globalContext.VO
// ]

// 函数激活
Scope = [AO].concat([[Scope]])


// 示例
var scope = "global scope"
function checkscope(){
    var scope2 = 'local scope'
    return scope2
}
checkscope()

// 执行过程
// 1.checkscope函数被创建，保存作用域链到内部属性[[scope]]
// checkscope.[[scope]] = [
//     globalContext.VO
// ]

// 2.执行checkscope函数，创建checkscope函数执行上下文，checkscope函数执行上下文被压入执行上下文栈
ECStack = [
    checkscopeContent,
    globalContext
]

// 3.checkscope函数并不立刻执行,开始做准备工作，第一步复制函数[[scope]]属性创建作用域
checkscopeContent = {
    Scope:checkscope.[[scope]]
}

// 4.第二步：用arguments创建活动对象，随后初始化活动对象，加入形参，函数声明，变量声明
checkscopeContent = {
    AO:{
        arguments:{
            length: 0
        },
        Scope: checkscope.[[scope]]
    }
}

// 5.第三步：将活动对象压入checkscope作用域顶端
checkscopeContent = {
    AO:{
        arguments:{
            length: 0
        },
        scope2: undefined
    },
    Scope: [AO,[[scope]]]
}

// 6.准备工作做完，开始执行函数，随着函数的执行，修改AO的属性值
checkscopeContent = {
    AO:{
        arguments: {
            length: 0
        },
        scope2: 'local scope'
    },
    Scope: [AO,[[Scope]]]
}

// 7.查找scope2的值，返回后函数执行完毕，上下文执行弹出
ECStack = [
    globalContext
]