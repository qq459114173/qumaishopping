<template>
  <div>
        <div class="section">
            <div class="wrapper">
                <div class="bg-wrap">
                    <div class="nav-tit pay">
                        <a href="javascript:;" class="selected">支付宝扫码支付</a>
                    </div>
                    <div class="form-box payment">
                        <div class="el-row">
                            <div class="el-col el-col-18" v-for='item in payList' :key='item.id'>
                                <div class="el-row">
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>订 单 号：</dt>
                                            <dd style='margin-left:30%'>{{item.order_no}}</dd>
                                        </dl>
                                    </div>
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt class="userName">收货人姓名：</dt>
                                            <dd style='margin-left:30%'>{{item.accept_name}}</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="el-row">
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>送货地址：</dt>
                                            <dd style='margin-left:30%'>{{item.area}} {{item.address}}
                                            </dd>
                                        </dl>
                                    </div>
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>手机号码：</dt>
                                            <dd style='margin-left:30%'>{{item.mobile}}</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="el-row">
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>支付金额：</dt>
                                            <dd style='margin-left:30%'>{{item.order_amount}} 元</dd>
                                        </dl>
                                    </div>
                                    <div class="el-col el-col-12">
                                        <dl class="form-group">
                                            <dt>支付方式：</dt>
                                            <dd>在线支付</dd>
                                        </dl>
                                    </div>
                                </div>
                                <div class="el-row">
                                        <div class="el-col el-col-12">
                                                <dl class="form-group">
                                                    <dt>备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：</dt>
                                                    <dd>{{item.message}}</dd>
                                                </dl>
                                            </div>
                                </div>
                            </div>
                            <div class="el-col el-col-6">
                                <img id="imgLogo" src="../statics/site/images/alipay.png" hidden>
                                <div id="container2">
                                    <canvas width="400" height="400"></canvas>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scopend>
 .userName{
     margin-left: 15px;
 }
</style>


<script>
import '../statics/site/jquery_plugins/QRcode/qrcode.js'
export default {
  data() {
    return {
      payList: {},
      timeInterval:-1,
    }
  },
  created() {
    this.getPlayList();
    this.task();
  },
  updated(){
  $('#container2').erweima({
      mode: 4,
      mSize: 28,
      image: $('#imgLogo')[0],
      text:`http://47.106.148.205:8899/site/validate/pay/alipay/${
        this.$route.query.orderid
      }`
    })
  },
  methods: {
      //进入伦询访问服务器
      task(){
          this.timeInterval=setInterval(()=>{
              this.getPlayList();
          },3000)
      },
    getPlayList() {
      this.$http
        .get(`site/validate/order/getorder/${this.$route.query.orderid}`)
        .then(response => {
            if(response.data.message[0].status==2){
                this.$router.push({path:'/paySuccess'})
                return
            }
          this.payList = response.data.message
        })
    }
  },
  beforeDestroy(){
      clearInterval(this.timeInterval);
  },
}
</script>