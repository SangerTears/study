文章来源：https://juejin.im/post/5d6d0ee5f265da03f66ddba9
1. HMR是什么
    hot Moudle Replacement是指但你对代码进行重新打包并将改动的模块发送到浏览器端，
    浏览器用新的模块替换掉旧的模块，去实现局部更新而非整体刷新
2. HRM原理
    右侧使用Server端使用webpack-dev-server去启动本地服务，内部实现主要使用了
    webpack，express，websocket
    * 使用express启动本地服务，当浏览器访问资源时对此作出响应
    * 服务端和客户端使用websocket实现长链接
    * webpack监听源文件的变化，即当开发者保存文件时触发webpack的重新编译。
        * 每次编译都会生成hash值、一改动的模块的json文件、一改动模块代码的js文件
        * 编译完成后通过socket向客户端推送当前编译的hash戳
    * 客户端的websocket监听到有文件改动推送过来的hash戳，会和上一次对比
        * 一致则走缓存
        * 不一致则通过ajax和jsonp向服务端获取最新资源
    * 使用内存文件系统去替换有修改的内容实现局部刷新

    
    


    