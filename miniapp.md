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
11. 点击跳转
    handleClick(){
        wx.navigateTo({ //保留当前页面,跳转到应用内其他页面
            url: '/pages/list/list' //记得加根路径'/'
        })
        wx.redirectTo(){} //关闭当前,跳转到新的页面
    }
12. swiper组件
    <view>
        <swiper indicator-dots indicator-color = 'yellow'>
            <swiper-item>
                <image src=""></image>
            </wiper-item>
        </swiper>
    </view>
13. 模板
    template,可以在模板中定义代码片段,然后在不同的地方调用
    定义模板
    <template name="msgItem">
    </template>
    使用模板
    <template is="msgItem" data='{{...item}}'>
    </template>
    moudle.export = {list_data};//同名属性可以不写 require.js
    @import
    let datas = require('../../data/list-data.js')

14. 列表渲染
    wx:for = "{{array}}"
    <block wx:for = "{{array}}" wx:key ="{{key}}">
        <template is="msgItem" data='{{...item}}'>//...结构对象
        </template>
    </block>

15. 点击事件
    wx.navigationTo({ //保留当前页面onhide调用
        url:" ?index="+index //写参数都会传到onload里的option里
    })
    wx.redirectTo({ // onUnload页面销毁了
        onUnload
    })
    data-index ={{index}}
    toDetail(event){
        console.log(event)
        <!-- 获取点击跳转对应的下标 -->
    }
    this.set Data({
        detailObj:data.list_data[index]
    })

 16. 事件委托
    catchtop = "carouseToDetail"
    //点击轮博图跳转
    事件委托
    carouseToDetail(event){
        console.log(event.target)
        wx.navigationTo({ //保留当前页面onhide调用
            url:" ?index="+index //写参数都会传到onload里的option里
        })
    }
17. currentTarget 和 target 的区别
    1.target 指向的是触发事件的元素
    2.currentTarget 指向的是捕获事件的元素

18. 条件渲染   点击切换图片
    <images catchtap="hanleCollection" wx:if ='{{isShow}}' src=""></images>
    vx:if ='{{isShow}}'
    isCollected: false;
    hanleCollection(){
        let isCollected = !this.data.iscollected
        <!-- 更新状态 -->
        this.setData({
            isCollected
        })
        <!-- 提示用户 -->
        let title = isCollected?'收藏成功':'取消收藏'
        wx.showToast({
            title,
            icon:'success'
        })
        //缓存数据到本地
        <!-- {1:true, 2:false} -->
        let {index}= this.data
        <!-- 不可行 -->
        
        let obj =  
        wx.getStorage({
            key: "isCollected"
            success:(datas) =>{
                console.log(data,typeof data)
                let obj = datas.data //{0:true}
                obj[index] = iscollected
                wx.setStorage({
                    key:'iscollected',
                    data: obj,
                    success:()=>{
                        console.log('哈哈哈')
                    }
                })
            }
        })
        
    }
    // 根据用户缓存的数据判断用户是否收藏当前文章
    wx.showtoast(OBJECT) 显示消息提示框
    title提示内容

19. 数据存储
    wx.setStorage(Object)//异步的
    将数据存储在本地缓存中制定的key中,会覆盖掉原来该key对应内容,这是一个异步接口
    key
    data
    success
    fail
    complate

    let detailed = wx.setstorageSync("iscollected")//同步的 
    console.log(detailed)
    <!-- 判断用户是否收藏 -->
    if(detailed[index]){
        this.setData({
            isCollected: true
        })
    }
    if(!detailStorage){
        <!-- 在缓存中初始化空对象 -->
        wx.setStorageSync('isCollected',{})
    }

20. 音乐播放
    背景音乐播放
    wx.palyBackgroundAudio
    控制音乐播放
    wx.palyBackgroundAudio

    if(isMousicPlay){
        wx.palyBackgroundAudio({
            dataUrl: '',//音乐链接
            title:'' //标题
        })
    }
    //暂停音乐播放
    wx.pauseBackgroundAudio()


    onload里
    监视音乐
    wx.onBackgroundAudioPlay(()=>{
        console.log('音乐播放')
        this.setData({
            isMusicPlay:true
        })
        appDatas.data.ispaly = true
        appDatas.data.pageIndex = index
    })
    监听音乐暂停
    wx.onBackgroundAudioPause(()=>{
        this.setData({
            isMusicPlay:false
        })
        onsole.log('音乐暂停')
        appDatas.data.ispaly = false
        <!-- appDatas.data.pageIndex = index -->可以省略
    })
    监听音乐停止
    wx.onBackgroundAudioStop(CALLBACk)

    判断音乐是否在播放
    if(appDatas.data.isplay && appData.data.index){
        this.setData({
            isMusicPlay:true
        })
    }

21. App({
        data:{
            ispaly: false,
            pageIndex: null
        }
    })

    getApp(){}
    let appDatas = getApp();
    console.log(appDates, typeof appdatas)

    音乐播放的思路:
    1.点击播放背景图片换,播放的图片也在变化
    2.点击其他音乐页面此页面为暂停状态
    3.可以切换到当前页面的音乐
    4.在App.js全局中定义他的状态, AppData用到的时候getApp()调用拿到改变音乐的播放的状态

    onload中获取缓存的数据

22. 微信分享功能
    wx.showActionSheet(OBJECT)
    //显示操作菜单
    <!-- 处理点击分享功能 -->
    handleShare(){
        wx.showActionSheet({
            itemList:[
                '分享到朋友圈','分享到qq空间','分享到微博'
            ]
        })
    }
    <button open-type="share">分享</button>

23. tabBar tab栏切换
   "tabBar":{
       "list":[
           "pagePath":"pages/list/list",
           "text":
           "iconPage":
           "selectedIconPaath":
       ]
   }

24. 