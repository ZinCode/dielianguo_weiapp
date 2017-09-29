const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    bannerArr:[],
    themeArr: [],
    recentProductsArr: []
  },

  onLoad() {
    this.getBanner();
    this.getTheme();
    this.getRecentProduct();
  },
  getBanner(){
    app.HttpService.getBannerById({id:1})
      .then(res => {
        this.setData({
          bannerArr: res
        })
      })
  },
  getTheme(){
    app.HttpService.getThemeList({ids: '1,2,3'})
    .then(res => {
      this.setData({
        themeArr:res
      })
    })
  },
  getRecentProduct(){
    app.HttpService.getRecentProducts()
      .then(res=> {
        this.setData({
          productsArr: res
        })
      })
  },

  // 点击某件商品图片
  onProductsItemTap(e) {
    app.WxApi.navigateTo('/pages/product/product', {
      id: e.currentTarget.dataset.id
    })
  },

  // 点击主题图片跳转
  onThemesItemTap(e){
    var data = e.currentTarget.dataset
    app.WxApi.navigateTo('/pages/theme/theme', {
      id: data.id,
      name: data.name
    })
  },

  onPullDownRefresh() {
    // 下拉刷新
  },
  // 分享
  onShareAppMessage(){
    return {
      title: '碟恋果',
      path: '/pages/home/home'
    }
  }

})

