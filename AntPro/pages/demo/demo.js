Page({
  data: {
    name: '王浩',
    age: '25',
    arr:[1,2,3,4,5]
  },
  onLoad() {},
  handler () {
    my.showToast({
      type: 'success',
      content: `我被点击了我是${this.data.name}`,
      duration: 3000,
      success: () => {
        my.alert({
          title: 'toast 消失了',
        });
      },
    });
  },
  changeText () {
    // 设置数据
    this.setData({
      name: Math.random().toString().substring(2)
    })
  },
  onShareAppMessage () {
    my.alert({
      title: '点击了分享', // alert 框的标题
      success: (res) => {
        
      },
    });
  },
  onTitleClick () {
    my.alert({
      title: '标题被点击', // alert 框的标题
      success: (res) => {
        
      },
    });
  }
});
