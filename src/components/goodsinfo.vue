<template>
   <div>
        <div class="section">
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <div class="left-925">
                        <div class="goods-box clearfix" v-if='goodsData.goodsinfo'>
                            <!-- 放大镜的代码写在这里 -->
                            <div class="pic-box">
                                <div class="magnifier" id="magnifier1">
                                    <div class="magnifier-container">
                                        <div class="images-cover"></div>
                                        <!--当前图片显示容器-->
                                        <div class="move-view"></div>
                                        <!--跟随鼠标移动的盒子-->
                                    </div>
                                    <div class="magnifier-assembly">
                                        <div class="magnifier-btn">
                                            <span class="magnifier-btn-left">&lt;</span>
                                            <span class="magnifier-btn-right">&gt;</span>
                                        </div>
                                        <!--按钮组-->
                                        <div class="magnifier-line">
                                            <ul class="clearfix animation03">
                                                <li v-for="item in goodsData.imglist" :key="item.id">
                                                    <div class="small-img">
                                                        <img :src="item.original_path" />
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <!--缩略图-->
                                    </div>
                                    <div class="magnifier-view"></div>
                                    <!--经过放大的图片显示容器-->
                                </div>
                            </div>
                            <div class="goods-spec">
                                <h1>{{goodsData.goodsinfo.title}}</h1>
                                <p class="subtitle">{{goodsData.goodsinfo.sub_title}}</p>
                                <div class="spec-box">
                                    <dl>
                                        <dt>货号</dt>
                                        <dd id="commodityGoodsNo">{{goodsData.goodsinfo.goods_no}}</dd>
                                    </dl>
                                    <dl>
                                        <dt>市场价</dt>
                                        <dd>
                                            <s id="commodityMarketPrice">{{goodsData.goodsinfo.market_price}}</s>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dt>销售价</dt>
                                        <dd>
                                            <em id="commoditySellPrice" class="price">{{goodsData.goodsinfo.sell_price}}</em>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="spec-box">
                                    <dl>
                                        <dt>购买数量</dt>
                                        <dd>
                                            <div class="stock-box">
                                               <el-input-number size="mini" :min='1' :max='goodsData.goodsinfo.stock_quantity' v-model="num7"></el-input-number>
                                            </div>
                                            <span class="stock-txt">
                                                库存
                                                <em id="commodityStockNum">{{goodsData.goodsinfo.stock_quantity}}</em>件
                                            </span>
                                        </dd>
                                    </dl>
                                    <dl>
                                        <dd>
                                            <div id="buyButton" class="btn-buy">
                                                <button  class="buy">立即购买</button>
                                                <button  @click='addCar' ref='addCarRef'  class="add">加入购物车</button>
                                            </div>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div id="goodsTabs" class="goods-tab bg-wrap">
                            <Affix>
                            <div id="tabHead" class="tab-head" style="position: static; top: 517px; width: 925px;">
                                <ul>
                                    <li>
                                        <a href="javascript:;" @click='isShow=false' :class="isShow? '':'selected'">商品介绍</a>
                                    </li>
                                    <li>
                                        <a href="javascript:;"  @click='isShow=true' :class="isShow? 'selected':''">商品评论</a>
                                    </li>
                                </ul>
                            </div>
                            </Affix>
                            <!-- 商品介绍 -->
                            <div v-show='!isShow'  class="tab-content entry" style="display: block;" >
                                <div v-if='goodsData.goodsinfo' style='padding:10px' v-html='goodsData.goodsinfo.content'></div>
                            </div>
                            <!-- 商品评论 -->
                            <div v-show='isShow' class="tab-content" style="display: block;">
                                <div class="comment-box">
                                    <div id="commentForm" name="commentForm"
                                        class="form-box">
                                        <div class="avatar-box">
                                            <i class="iconfont icon-user-full"></i>
                                        </div>
                                        <div class="conn-box">
                                            <div class="editor">
                                                <textarea id="txtContent" ref='textareaRef' name="txtContent" sucmsg=" " datatype="*10-1000" nullmsg="请填写评论内容！"></textarea>
                                                <span class="Validform_checktip"></span>
                                            </div>
                                            <div class="subcon">
                                                <input id="btnSubmit"  @click='postComment' name="submit" type="submit"  class="submit">
                                                <span class="Validform_checktip"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <ul id="commentList" class="list-box">
                                        <p v-if="commentList.length===0" style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);">暂无评论，快来抢沙发吧！</p>
                                        <li  v-for='item in commentList' :key='item.id' >
                                            <div class="avatar-box">
                                                <i class="iconfont icon-user-full"></i>
                                            </div>
                                            <div class="inner-box">
                                                <div class="info">
                                                    <span>{{item.user_name}}</span>
                                                    <span>{{item.add_time | dateFmt('YYYY-MM-DD HH:mm:ss')}}</span>
                                                </div>
                                                <p>{{item.content}}</p>
                                            </div>
                                        </li>
                                     
                                    </ul>
                                    <div class="page-box" style="margin: 5px 0px 0px 62px;">
                                         <div class="block">
                                               <el-pagination
                                                 @size-change="handleSizeChange"
                                                 @current-change="handleCurrentChange"
                                                 :current-page="pageIndex"
                                                 :page-sizes="[2, 5, 10, 20]"
                                                 :page-size="pageSize"
                                                 layout="total, sizes, prev, pager, next, jumper"
                                                 :total="total">
                                               </el-pagination>
                                             </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="left-220">
                        <div class="bg-wrap nobg">
                            <div class="sidebar-box">
                                <h4>推荐商品</h4>
                                <ul class="side-img-list">
                                    <li v-for='item in goodsData.hotgoodslist' :key='item.id'>
                                        <div class="img-box">
                                            <router-link :to='"/goodsinfo/"+item.id' class="">
                                                <img :src="item.img_url">
                                            </router-link>
                                        </div>
                                        <div class="txt-box">
                                            <router-link :to='"/goodsinfo/"+item.id' class="">{{item.title}}</router-link>
                                            <span>{{item.add_time | dateFmt}}</span>
                                        </div>
                                    </li>
                                  
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          <!-- 动画元素 -->
    <transition
      v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:after-enter="afterEnter">
        <div v-if='goodsData.imglist' class="animationDiv" ref='animationRef' v-show='show'>
            <img :src="goodsData.imglist[0].original_path" alt="">
        </div>
    </transition>
    </div>

</template>

<style scoped>
/* 导入放大镜样式 */
@import '../statics/site/jquery_plugins/jqimgzoom/css/magnifier.css';
.animationDiv {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 0;
  top: 0;
  z-index: 9999;
}
.animationDiv img {
  width: 50px;
  height: 50px;
}
</style>




<script>
//导入iView插件
import { Affix } from 'iview'
//导入放大镜插件js
import '../statics/site/jquery_plugins/jqimgzoom/js/magnifier.js'
//导出
export default {
  //局部注册iView
  components: {
    Affix: Affix
  },
  data() {
    return {
      goodsData: {},
      num7: 1,
      isShow: false, //商品评论
      show:false,//购物车动画
      commentList: [],
      pageIndex: 1, //评论条数
      pageSize: 2, //评论容量
      total: 0, //总条数
      addShopCar: null, //购物车开始元素偏移量
      stopShopCar: null, //购物车结束偏移量
    }
  },
  created() {
    //获取商品列表详情
    this.getGoodsData()
    this.getGoodsCommentData()
    
  },
  updated() {
    //放在这里是因为，我们点击了右边的连接之后，要重新图册
  $('#magnifier1').imgzoon({magnifier:'#magnifier1'});
  },
  watch: {
    $route: function() {
      this.getGoodsData()
      this.getGoodsCommentData()
    
    }
  },
  methods: {
    //获取商品信息
    getGoodsData() {
      const url = `site/goods/getgoodsinfo/${this.$route.params.goodsId}`
      this.$http.get(url).then(response => {
        this.goodsData = response.data.message
        setTimeout(() => {
          //获取加入购物车元素的偏移量
          this.addShopCar = $(this.$refs.addCarRef).offset()

          //给动画元素设置开始偏移值
          $(this.$refs.animationRef).css({
            top: this.addShopCar.top,
            left: this.addShopCar.left
          })
          //获取购物车动画结束偏移量
          this.stopShopCar = $('#shoppingCartCount').offset()
        }, 200)
      })
    },
    //获取商品评论信息
    getGoodsCommentData() {
      const url = `site/comment/getbypage/goods/${
        this.$route.params.goodsId
      }?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`
      this.$http.get(url).then(response => {
        this.total = response.data.totalcount
        this.commentList = response.data.message
      })
    },
    handleSizeChange(pageSize) {
      //重置pageIndex==1,让他显示第一页
      this.pageIndex = 1
      this.pageSize = pageSize
      this.getGoodsCommentData()
    },
    handleCurrentChange(pageIndex) {
      this.pageIndex = pageIndex
      this.getGoodsCommentData()
    },
    //提交评论
    postComment() {
      const content = this.$refs.textareaRef.value
      if (content.trim().length == 0) {
        this.$message({
          message: '输入的内容不能为空，请重新输入!',
          type: 'warning'
        })
        return false
      }
      const url = `site/validate/comment/post/goods/${
        this.$route.params.goodsId
      }`
      this.$http.post(url, { commenttxt: content }).then(response => {
        this.$message({
          message: '提交成功',
          type: 'success'
        })
        //清空textarea
        this.$refs.textareaRef.value = ''
        //重新发起请求
        this.pageIndex = 1
        this.getGoodsCommentData()
      })
    },
    // 加入购物车购物车
    addCar() {
      this.show = true
      //准备好载荷(参数)
        const goods={
            goodsId:this.$route.params.goodsId,
            count:this.num7,
        }
        this.$store.commit('addGoods',goods);
    },
      beforeEnter: function (el) {
          el.style.top=this.addShopCar.top+'px';
          el.style.left=this.addShopCar.left+'px';
          el.style.transform='scale(1)';
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  enter: function (el, done) {
      el.style.transition='all 1s';
      //刷新动画帧
      el.offsetHeight;
      //设置动画结束状态
      el.style.top=this.stopShopCar.top-15+'px';
    el.style.left=this.stopShopCar.left+5+'px';
    el.style.transform='scale(0.4)';
    done()
  },
  afterEnter: function (el) {
   this.show = false;
  },
  }
}
</script>