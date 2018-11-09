<template>
    <div>
        <div class="section">
           <!--  <div class="location">
                <span>当前位置：</span>
                <a href="#/" class="router-link-active">首页</a> &gt;
                <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
            </div> -->
        </div>
        <div class="section">
            <div class="wrapper">
                <div class="wrap-box">
                    <div class="left-220" style="margin: 0px;">
                        <div class="banner-nav">
                            <ul>
                                <li>
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>手机数码</span>
                                        <p>
                                            <span>
                                                手机通讯&nbsp;
                                            </span>
                                            <span>
                                                摄影摄像&nbsp;
                                            </span>
                                            <span>
                                                存储设备&nbsp;
                                            </span>
                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <dl>
                                            <dt>
                                                <a href="/goods/40.html">手机数码</a>
                                            </dt>
                                            <dd>
                                                <a href="/goods/43.html">手机通讯</a>
                                                <a href="/goods/43.html">摄影摄像</a>
                                                <a href="/goods/43.html">存储设备</a>
                                            </dd>
                                        </dl>
                                    </div>
                                </li>
                                <li>
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>电脑办公</span>
                                        <p>
                                            <span>
                                                电脑整机&nbsp;
                                            </span>
                                            <span>
                                                外设产品&nbsp;
                                            </span>
                                            <span>
                                                办公打印&nbsp;
                                            </span>
                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <dl>
                                            <dt>
                                                <a href="/goods/40.html">电脑办公</a>
                                            </dt>
                                            <dd>
                                                <a href="/goods/43.html">电脑整机</a>
                                                <a href="/goods/43.html">外设产品</a>
                                                <a href="/goods/43.html">办公打印</a>
                                            </dd>
                                        </dl>
                                    </div>
                                </li>
                                <li>
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>影音娱乐</span>
                                        <p>
                                            <span>
                                                平板电视&nbsp;
                                            </span>
                                            <span>
                                                影音配件&nbsp;
                                            </span>
                                            <span>
                                                家用电器&nbsp;
                                            </span>
                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <dl>
                                            <dt>
                                                <a href="/goods/40.html">影音娱乐</a>
                                            </dt>
                                            <dd>
                                                <a href="/goods/43.html">平板电视</a>
                                                <a href="/goods/43.html">影音配件</a>
                                                <a href="/goods/43.html">家用电器</a>
                                            </dd>
                                        </dl>
                                    </div>
                                </li>
                                <li>
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>服装大牌</span>
                                        <p>
                                            <span>
                                                男装&nbsp;
                                            </span>
                                            <span>
                                                女装&nbsp;
                                            </span>
                                            <span>
                                                大牌&nbsp;
                                            </span>
                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <dl>
                                            <dt>
                                                <a href="/goods/40.html">服装类</a>
                                            </dt>
                                            <dd>
                                                <a href="/goods/43.html">男装</a>
                                                <a href="/goods/43.html">女装</a>
                                                <a href="/goods/43.html">大牌</a>
                                            </dd>
                                        </dl>
                                    </div>
                                </li>
                                    <li>
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>奢侈名表</span>
                                        <p>
                                            <span>
                                                劳力士&nbsp;
                                            </span>
                                            <span>
                                                浪琴&nbsp;
                                            </span>
                                            <span>
                                                卡地亚&nbsp;
                                            </span>
                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <dl>
                                            <dt>
                                                <a href="/goods/40.html">奢侈名表</a>
                                            </dt>
                                            <dd>
                                                <a href="/goods/43.html">劳力士</a>
                                                <a href="/goods/43.html">浪琴</a>
                                                <a href="/goods/43.html">卡地亚</a>
                                            </dd>
                                        </dl>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--幻灯片-->
                    <div class="left-705">
                        <div class="banner-img">
                            <div id="focus-box" class="focus-box">
                              <el-carousel height="341px"  :interval="3000" indicator-position="outside">
                                    <el-carousel-item >
                                    <img src="../statics/site/img/bannerphone.jpg" alt="">
                                  </el-carousel-item>
                                    <el-carousel-item >
                                    <img src="../statics/site/img/banner-diannao.jpg" alt="">
                                  </el-carousel-item>
                                  <el-carousel-item >
                                    <img src="../statics/site/img/banner-dq1.jpg" alt="">
                                  </el-carousel-item>
                                  <el-carousel-item >
                                    <img src="../statics/site/img/banner-fuzhuang.jpg" alt="">
                                  </el-carousel-item>
                                   <el-carousel-item >
                                    <img src="../statics/site/img/bnr-2.jpg" alt="">
                                  </el-carousel-item>
                                
                                </el-carousel>      
                            </div>

                        </div>
                    </div>
                    <!--/幻灯片-->
                    <div class="left-220">
                        <ul class="side-img-list">
                            <li v-for='(item,index) in  goodsData.toplist' :key='item.id'>
                                <div class="img-box">
                                    <label>{{index}}</label>
                                    <img :src="item.img_url">
                                </div>
                                <div class="txt-box">
                                    <a href="/goods/show-98.html">{{item.title}}</a>
                                    <span>{{item.add_time | dateFmt}}</span>
                                </div>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="section" v-for='item in goodsList' :key='item.level1cateid'>
            <div class="main-tit" >
                <h2>{{item.catetitle}}</h2>
                <p v-for='subitem in item.level2catelist' :key='subitem.subcateid'>
                    <a href="/goods/43.html">{{subitem.subcatetitle}}</a>
                    <a href="/goods/40.html">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">
                        <li v-for='subitem in item.datas' :key='subitem.artID'>
                            <router-link :to='"/goodsinfo/"+subitem.artID' class="">
                                <div class="img-box">
                                    <img v-lazy="subitem.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{subitem.artTitle}}</h3>
                                    <p class="price">
                                        <b>{{subitem.sell_price}}</b>元</p>
                                    <p>
                                        <strong>库存 {{subitem.stock_quantity}}</strong>
                                        <span>市场价：
                                            <s>{{subitem.market_price}}</s>
                                        </span>
                                    </p>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.el-carousel__item img {
  width: 100%;
  height: 100%;
  
}
</style>


<script>

//导出
export default {
  data() {
    return {
      goodsData: {},
      goodsList: []
    }
  },
  created() {
    //获取头部数据
    this.getGoodsData()
    //获取商品列表数据
    this.getGoodsList()
  },
  methods: {
    getGoodsData() {
      const url = 'site/goods/gettopdata/goods'
      this.$http.get(url).then(response => {
        this.goodsData = response.data.message
      })
    },
    getGoodsList() {
      const url = 'site/goods/getgoodsgroup'
      this.$http.get(url).then(response => {
        this.goodsList = response.data.message
      })
    }
  }
}
</script>
