1. 特点: 声明式, 组件化, 一次学习,随处编写,高效,单项数据流
    React Native可以打包安卓ios

    React高效的原因
    1).虚拟(virtual)Dom,不是直接操作Dom,映射到真实的dom
    2).Dom Diff 算法,最小化页面重绘
<!-- BootCDN -->

2. 相关的js库
    react.js:  React的核心库
    react-dom.js: 提供DOM的react扩展库
    babel.min.js:  解析JSX 语法代码转为纯JS语法代码的库

3. React JSX
    虚拟Dom
    1). React提供了一些API来创建爱你一种'特别'的一般js对象
        var element = Reat.createElement('h1',{id:'myTitle},'hello')
        上面创建的就是一个简单的虚拟DOM
    
    2).虚拟DOM都会转换成真实的DOM, 对应关系
    3).操作react的虚拟Dom相关数据,react会转换为真实DOM变换而更新界面,渲染的时候才会发生变化

4. JSX
    1).全称: javascriptXML
    2).React 定义了一种类似与XML的js扩展语法:XMl+JS
    3).作用:用来创建react虚拟Dom(元素)对象
        var ele = <h1>Hello JSX!</h1>
        注意1: 它不是字符串,也不是HTML/XML标签
        注意2: 它最终产生的就是一个js对象
    4).标签名任意:html标签或其他标签
    5).标签属性任意:HTML标签属性或其他
    6).基本语法规则
       遇到<>解析成同名的html同名元素
       遇到以{}开头的代码.以js语法解析:标签中的js代码必须用{}包含
    7). babel.js的作用
        浏览器不能直接解析jsx代码,需要babel转义为纯的js代码才能运行
        只要用了JSX,都要加上type="text/babel",生命需要babel来处理

5. 渲染虚拟DOM(元素)
    1).语法:ReactDOM.render(virtualDOM, containerDOM)

6. 模块与组件和模块化与组件化的理解
    a.模块
        1).理解:向外提供特定功能的js程序,一般是一个js文件
        2).为什么.js代码更多更复杂
        3).作用:复用js,简化js编写,提高js运行效率

    b. 组件 
        1).一个界面的特定功能的模块,包含(html/css/js)图片视频.

    c.模块化
        用来形容项目,编码方式是不是模块化的.
        一个个模块编写就是模块化的项目

    d.组件化
        以组件化的编写方式一个个组件的编写


第二章:React面向组件编程 js面向对象编程 面对模块 面对组件

1. 基本理解和使用
    MyComponent
    a.工厂函数定义组件
    b.ES6类组件
2. 组件的三大属性: state
    a.state 是组建对象组重要的属性,值是对象(可以包含多个数据)
    b. 组件被称为"状态机",通过更新组件的state来更新对应的页面显示(重新渲染组件)
3.  a.  初始化状态
        constructor(props){
            super(props)
            this.state ={
                stateProp1:value1,
                stateProp2:value2,
            }
        }
    b.  读取某个状态值
        this.state.statePropertyName
    c.  更新状态---->组件界面更新
        this.setState({
            stateProp1: value1,
            stateProp2: value2,
        })
4. props
    默认属性值
    Person.defaultProps = {
        name:'Mary'
    }

    对props中的属性值进行类型限制的和必要性限制
    Person.propTypes = {
        name:React.PropTypes.string.isRequired
        age:React.PropTypes.number.isRequired
    }
    外部传递的数据

5. refs
    绑定数据

6. 功能界面的组件化编码流程(重要的))
    1. 拆分组件: 拆分接卖弄,抽取组件
    2. 实现静态组件: 使用组件实现静态页面效果
    3. 实现动态组件
        1.动态显示初始化数据
        2.交互功能(从绑定时间监听开始)

7. 收集表单数据
    1. 包含表单的组件分类
        受控组件:表单项输入数据能自动收集成状态
        非受控组件: 需要时手动才能读取表单输入框的数据

8. 组件生命周期
    声明式编程,流程已经写好了
    1.初始化的一些方法
        constructor() 创业对象初始化state
        componentWillMount()挂载 render()之前
        render() 用于 插入虚拟DOM回调
        componentDidMount() render()之后已经显示
        生命周期的回调方法
    2.每次更新state
        componentWillUpdate()更新之前的回调
        render()更新
        componentDidUpdate()已经更新的回调
    3.移除组件之前的方法
        componentWillUnmount()
    移除组件:ReactDOM.unmountComponentAtNode(containerDom)
    *componentWillUnmount():组件将要被移除回调

### 重要的勾子
    1) render(): 初始化
    2) componentDidMount(): 开启监听,发送ajax请求
    3) componentWillUnmount():做些收尾工作,如:清理定时器
    4) componentWillReciveProps(): 

9. 虚拟DOM与DOM Diff算法
    初始化显示界面
        1.创建虚拟DOM(一般js对象) <div>跟标签
        2.真实DOM树(空的div)
        3.绘制界面显示
        4.setState()更新状态
        5.重新创建虚拟DOM树
        6.新/旧树比较差异
        7.更新差异对应真实DOM
        8.局部界面重绘
    Diff算法最小的重绘

10. package.json
    1.标识
    2.依赖
    3.运行打包

11. REACT 全家桶(基于react脚手架)
    一. 使用  reate-react-app创建react应用
        1) XXX 脚手架,用来帮助程序员快速创建一个基于XXX库的模板
            包含了所有需要的配置
            指定好了所有的依赖
            可以直接安装/编译/运行一个简单效果
        
        2) react 提供了一个用于创建react项目的脚手架: create-react-app
        3) 项目的整体技术构架为: react + webpack + es6 + eslint
        4) 使用脚手架开发的项目的特点:模块化,组件化,工程化(输入命令就可以打包编译)
    二. 创建项目启动
        npm install -g create-react-app
        create-react-app hello-react
        cd hello-react
        npm start
        npm root -g 检查是否有下载过


