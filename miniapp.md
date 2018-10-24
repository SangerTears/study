1. 小程序大小不大于2M
2. 没有Dom元素,一切基于组建化
4.  4.1 事件机制
    4.2 组件化
    4.3 数据绑定
    4.4 flex布局
    4.5 移动单适配机制
5. 物理像素
    5.1 屏幕的分辨率
    5.2 可以吧物理像素看成像素点
    5.3 设备独立像素 & css像素
    5.4 dpr 设备像素比, 物理像素/设备独立像素 = dpr ip6的 dpr = 2
    5.5 ppI 一英寸显示屏上的像素点的个数
    5.6 DPI 打印机上单位面积上打印的墨点数
6. 小程序适配方案
    viewport 适配 
    rem root 布局视口 视觉视口
    1rpx = 1物理像素 = 0.5px
    微信官方提供的换算方式
    6.1. 以iphone6的物理像素个数为标准: 750;
    6.2. 1rpx = 目标设备宽度/750Px
    6.3. 底层做了viewport适配
    6.4 视网膜屏幕
7. 事件绑定和冒泡
    key value
    key有两种bind和catch bindtap.catchtouchstart
    bind事件绑定不会阻止事件向上冒泡, catch时间绑定可以阻止冒泡事件向上冒泡(非冒泡事件)
8. 对象的简写同名属性可以简写, function的简写
9. 生命周期函数
    chrome多进程多线程 进程程序完整执行的过程,操作系统管理 进程-> 线程,一个进程至少有一个线程
    多线程 好处 线程和线程不相互干扰, 单线程比较慢

    view Thread 线程        APPservice Thread 线程 服务
                    onLoad  //做初始化的工作
                    onShow
                    onReady  //监听页面初始完成
                    onHide    
                    onShow
                    onUnload  //销毁
10. 如何获取用户信息
    wx.getUserInfo(object)
    判断用户是否授权了
    wx.openSetting({
        success(data){
            console.log(data)
        }
    })