
  <template>
  <div>
    <!-- 头部区域 -->
         <!--头部-->
    <div class="topper">
        <div class="wrapper">
            <div class="left-bar">
                <div class="change-city"><a class="name">广州</a><a class="toggle" href="city-select.html">[切换]</a></div>
                <div class="back-home divider">
                    <em></em><a href="index.html">商城首页</a>
                </div>
                <div class="item"><a href="">商家中心</a></div>
            </div>
            <div class="right-bar">
                <div class="login-user sub-menu" v-if='!isLogin'>
                    <span><router-link to="/login" >请先登录/注册<em></em></router-link></span>
                </div>
                <div class="item" v-if='isLogin'><span><a class="menu-hd" href="">zhangsan<em></em></a></span></div>
                <div class="logout divider"  v-if='isLogin'><a  @click='logout'>退出</a></div>
                <span class=""></span>
                <div class="cart" id='shoppingCartCount'><em></em><router-link to="/shopCar">购物车(<span class="txt-theme">{{this.$store.getters.getBuyCount}}</span>)</router-link></div>
                <div class="order"><em></em><router-link to="/userVip">会员中心</router-link></div>
                <div class="fav"><em></em><a href="">我的收藏</a></div>
                <div class="help"><em></em><a href="">帮助中心</a></div>
            </div>
        </div>
    </div>
    <div class="header-wrap">
        <div class="header wrapper">
            <a href="" class="logo">
                <img src="./statics/site/img/logo.jpg" alt="" />
            </a>
            <div class="header-schbox">
                <div class="inner clearfix">
                <form action="" method="">
                    <div class="search-switch">
                        <i class="arrow"></i>
                        <div class="item">商品</div>
                        <div class="item active">店铺</div>
                    </div>
                    <input class="search-txt" placeholder="请搜索你想要的宝贝">
                    <button class="search-btn"></button>
                    <div class="suggest-box">
                        <div class="item" data-title="上衣 短款 短袖">上衣 短款 短袖<div class="tags"><span>雪纺</span><span>蕾丝</span><span>一字领</span></div></div>
                    </div>
                </form>
                </div>
                <div class="hot-words">
                    <a href="">华为</a><a href="">相机</a><a href="">衬衫</a><a href="">名表</a><a href="">电脑</a>
                </div>
            </div>
            <div class="contact">
                <div class="item">
                    <span class="ico iconfont">&#xe61b;</span>
                    <span class="tel">4007-1111-00</span>
                </div>
                <div class="item">
                     <span class="ico iconfont">&#xe61d;</span><a class="kefu">在线客服</a>
                </div>
            </div>
        </div>
    </div>
    <div class="nav-box">
        <div class="nav wrapper">
            <div class="slogan"></div>
            <ul class="nav-ul">
                <li @click='navClick' class="active"><router-link  to="/goodslist">首页</router-link></li>
                <li @click='navClick'><router-link to="/phoneList">手机数码</router-link></li>
                <li @click='navClick'><router-link to="/computerOffice">电脑办公</router-link></li>
                <li @click='navClick'><router-link to="/appliances">家用电器</router-link></li>
                <li @click='navClick'><router-link to="/clothing">服装大牌</router-link></li>
                <li @click='navClick'><router-link to="/famousWatch">奢侈名表</router-link></li>
                <li @click='navClick'><router-link to="/userVip">会员中心</router-link></li>
            </ul>
        </div>
    </div>
    

    <!-- 中间路由区域 -->
<router-view></router-view>
        <!-- 尾部部分 -->
          <div class="service-area">
            <div class="container">
                <div class="service-padding">
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                            <div class="single-service">
                                <span class="fa fa-truck"></span>
                                <h3>包邮发货</h3>
                                <p>一周内到达</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                            <div class="single-service">
                                <span class="fa fa-dropbox"></span>
                                <h3>特别礼品卡</h3>
                                <p> 给予完美的礼物</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                            <div class="single-service">
                                <span class="fa fa-calendar-o"></span>
                                <h3>每日促销</h3>
                                <p>设置时间提醒</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 hidden-sm col-xs-12">
                            <div class="single-service">
                                <span class="fa fa-comments-o"></span>
                                <h3>特别礼品卡</h3>
                                <p>给予完美的礼物</p>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
     
        <div class="footer-widget-area">
            <div class="container">
                <div class="footer-widget-padding"> 
                    <div class="row">
                        <div class="col-xs-2">
                            <div class="single-widget">
                                <div class="footer-widget-title">
                                    <h3>购物指南</h3>
                                </div>
                                <div class="footer-widget-list">
                                    <ul>
                                        <li><a href="#">购物流程</a></li>
                                        <li><a href="#">账户安全</a></li>
                                        <li><a href="#">联系客服</a></li>
                                        <li><a href="#">会员介绍</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-2">
                            <div class="single-widget">
                                <div class="footer-widget-title">
                                    <h3>技术支持</h3>
                                </div>
                                <div class="footer-widget-list ">
                                    <ul>
                                        <li><a href="#">网站支持</a></li>
                                        <li><a href="#">隐私政策</a></li>
                                        <li><a href="#">你的帐户</a></li>
                                        <li><a href="#">高级搜索</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-2">
                            <div class="single-widget">
                                <div class="footer-widget-title">
                                    <h3>售后服务</h3>
                                </div>
                                <div class="footer-widget-list ">
                                    <ul>
                                        <li><a href="#">售后政策</a></li>
                                        <li><a href="#">价格保护</a></li>
                                        <li><a href="#">退单说明</a></li>
                                        <li><a href="#">取消订单</a></li>
                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-2">
                            <div class="single-widget">
                                <div class="footer-widget-title">
                                    <h3>联系我们</h3>
                                </div>
                                <div class="footer-widget-list ">
                                    <ul>
                                        <li><a href="#">商家入驻</a></li>
                                        <li><a href="#">营销服务</a></li>
                                        <li><a href="#">关于我们</a></li>
                                        <li><a href="#">广告服务</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-2">
                            <div class="single-widget">
                                <div class="footer-widget-title">
                                    <h3>支付方式</h3>
                                </div>
                                <div class="footer-widget-list ">
                                    <ul>
                                        <li><a href="#">信用卡支付</a></li>
                                        <li><a href="#">支付宝支付</a></li>
                                        <li><a href="#">微信支付</a></li>
                                        <li><a href="#">苹果支付</a></li>
                                    
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-2">
                            <div class="single-widget">
                                <div class="footer-widget-title">
                                    <h3>联系方式</h3>
                                </div>
                                <div class="footer-widget-list ">
                                    <ul class="address">
                                        <li><span class="fa fa-map-marker"></span> 地址: 广州市天河区天河路241号</li>
                                        <li><span class="fa fa-phone"></span>4007-1111-00</li>
                                        <li class="support-link"><span class="fa fa-clock-o"></span>周一至周日 9:00-18:00 (仅收市话费）</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>     
            </div>
            <a  href="#" id='top' @click='returnTop'>
                        <i class="fa fa-arrow-up"></i>
                        
                    </a>
        </div>
      
        <footer class="footer">
                    <div class="row">
                        <div class="title">
                                <ul id="footer-menu">
                                    <li><a href="#">关于我们</a></li>
                                    <li><a href="#">联系我们</a></li>
                                    <li><a href="#">客户服务</a></li>
                                    <li><a href="#">隐私政策</a></li>
                                </ul>
                                <p class="author">广州趣买网络科技有限公司 版权所有 Copyright ©2018  保留所有权利。</p>
                        </div>
                    </div>
        </footer>
  </div>
      
</template>

<script>

//导入公共bus
import {bus} from './common/commonvue.js'
// 导出的vue对象
export default {
    data(){
        return {
            isLogin:false
        }
    },
    created(){
    bus.$on('loginSuccess',()=>{
        this.isLogin=true;
       
        
    })
    this.checkOutLogin();
    },
    mounted(){
              $('#top').hide();      
         $(window).scroll(function(){
             if($(this).scrollTop() > 100){
                 $('#top').fadeIn();
             }else{
                 $('#top').fadeOut();
             }
         });
         this.returnTop(); 
    },
    methods:{
        //检查登录状态
        checkOutLogin(){
            this.$http.get('site/account/islogin').then(response=>{
                if(response.data.code=='logined'){
                    this.isLogin=true;
                }else{
                    this.isLogin=false;
                }  
            })
        },
        // 退出
        logout(){
             this.$confirm('你确定要退出么?', '提示', {
          confirmButtonText: '退出',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {//退出成功
            this.$http.get('site/account/logout').then(response=>{
                if(response.data.status==0){
                    this.isLogin=false;
                    this.$router.push({path:'/login'})
                }
            });
        }).catch(() => {
                  
        });
        },
        navClick(event){
            $(event.currentTarget).addClass('active').siblings('li').removeClass('active');
        },
       returnTop(){
             $('html ,body').animate({scrollTop: 0}, 1000);
       }
    },
}
</script>

<style scoped>
/* 导入hoverNav的样式 */
@import './statics/nav/css/style.css';
</style>



