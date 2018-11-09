<template>
   <div>
        <div class="section">
            <div class="wrapper">
                <div class="bg-wrap">
                    <!--购物车头部-->
                    <div class="cart-head clearfix">
                        <h2>
                            <i class="iconfont icon-cart"></i>我的购物车</h2>
                        <div class="cart-setp">
                            <ul>
                                <li class="first active">
                                    <div class="progress">
                                        <span>1</span>
                                        放进购物车
                                    </div>
                                </li>
                                <li class="active">
                                    <div class="progress">
                                        <span>2</span>
                                        填写订单信息
                                    </div>
                                </li>
                                <li class="last">
                                    <div class="progress">
                                        <span>3</span>
                                        支付/确认订单
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--购物车头部-->
                    <div class="cart-box">
                        <h2 class="slide-tit">
                            <span>1、收货地址</span>
                        </h2>
                        <div id="orderForm" name="orderForm" url="">
                            <div class="form-box  address-info">
                               <el-form :model="order" status-icon :rules="rules" ref="orderRef" label-width="150px">
                                    <el-form-item label="收货人姓名" prop="accept_name">
                                       <el-input style='width:500px' v-model="order.accept_name"></el-input>
                                     </el-form-item>
                                      <el-form-item label="所属地区" prop="area">
                                      <v-distpicker @selected="onSelected" :province="order.area.province.value" :city="order.area.city.value" :area="order.area.area.value"></v-distpicker>
                                     </el-form-item>
                                      <el-form-item label="详细地址" prop="address">
                                       <el-input style='width:500px' v-model="order.address"></el-input>
                                     </el-form-item>
                                     <el-form-item label="手机号码" prop="mobile">
                                          <el-input style='width:500px' v-model.number="order.mobile"></el-input>
                                        </el-form-item>
                                         <el-form-item label="电子邮箱" >
                                          <el-input style='width:300px' v-model.number="order.email"></el-input>
                                        </el-form-item>
                                          <el-form-item label="收货邮编" >
                                          <el-input style='width:300px' v-model.number="order.post_code"></el-input>
                                        </el-form-item>
                               </el-form>
                            </div>
                            <h2 class="slide-tit">
                                <span>2、支付方式</span>
                            </h2>
                            <ul class="item-box clearfix">
                                <!--取得一个DataTable-->
                                <li>
                                    <label>
                                       <el-radio style='margin-right:5px' v-model="order.payment_id" label="6">在线支付</el-radio><em>手续费：0.00元</em>
                                    </label>
                                </li>
                            </ul>
                            <h2 class="slide-tit">
                                <span>3、配送方式</span>
                            </h2>
                            <ul class="item-box clearfix">
                                <!--取得一个DataTable-->
                                <el-radio-group v-model="order.express_id" @change='expressChange'>
                                <li>
                                    <label>
                                       <el-radio style='margin-right:5px' label="1">顺丰快递</el-radio><em>费用：20.00元</em>
                                        <span class="Validform_checktip"></span>
                                    </label>
                                </li>
                                 <li>
                                    <label>
                                       <el-radio style='margin-right:5px' label="2">圆通快递</el-radio><em>费用：10.00元</em>
                                        <span class="Validform_checktip"></span>
                                    </label>
                                </li>
                                 <li>
                                    <label>
                                       <el-radio style='margin-right:5px' label="3">韵达快递</el-radio><em>费用：8.00元</em>
                                        <span class="Validform_checktip"></span>
                                    </label>
                                </li>
                                </el-radio-group>
                            </ul>
                            <h2 class="slide-tit">
                                <span>4、商品清单</span>
                            </h2>
                            <div class="line15"></div>
                            <table width="100%" border="0" align="center" cellpadding="8" cellspacing="0" class="cart-table">
                                <tbody>
                                    <tr>
                                        <th colspan="2" align="left">商品信息</th>
                                        <th width="84" align="left">单价</th>
                                        <th width="84" align="center">购买数量</th>
                                        <th width="104" align="left">金额(元)</th>
                                    </tr>
                                    <tr v-for='item in goodsList' :key='item.id'>
                                        <td width="68">
                                            <a target="_blank" href="/goods/show-89.html">
                                                <img :src="item.img_url" class="img">
                                            </a>
                                        </td>
                                        <td>
                                            <a target="_blank" href="/goods/show-89.html">{{item.title}}</a>
                                        </td>
                                        <td>
                                            <span class="red">
                                                ￥{{item.sell_price}}
                                            </span>
                                        </td>
                                        <td align="center">{{item.buycount}}</td>
                                        <td>
                                            <span class="red">
                                                ￥{{item.sell_price*item.buycount}}
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="line15"></div>
                            <h2 class="slide-tit">
                                <span>5、结算信息</span>
                            </h2>
                            <div class="buy-foot clearfix">
                                <div class="left-box">
                                    <dl>
                                        <dt>订单备注(100字符以内)</dt>
                                        <dd>
                                            <textarea name="message"  v-model="order.message" class="input" style="height:200px;resize:none;width:800px"></textarea>
                                        </dd>
                                    </dl>
                                </div>
                                <div class="right-box" style='margin-top:20px;'>
                                    <p>
                                        商品
                                        <label class="price">{{totalNumber}}</label> 件&nbsp;&nbsp;&nbsp;&nbsp; 商品金额：￥
                                        <label id="goodsAmount" class="price">{{totalPrice}}</label> 元&nbsp;&nbsp;&nbsp;&nbsp;
                                    </p>
                                    <p>
                                        运费：￥
                                        <label id="expressFee" class="price">{{order.expressMoment}}</label> 元
                                    </p>
                                    <p class="txt-box">
                                        应付总金额：￥
                                        <label id="totalAmount" class="price">{{getTotalAmount}}</label>
                                    </p>
                                    <p class="btn-box">
                                        <a class="btn button" @click='goBack' href="/cart.html">返回购物车</a>
                                        <a id="btnSubmit" @click='btnSubmit'  class="btn submit">确认提交</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import VDistpicker from 'v-distpicker'
import {getLocalGoods} from '../common/localStorage.js'
export default {
  components: { VDistpicker }, //局部注册
  data() {
    var checkMobile = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号码不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (/^1[34578][0-9]{9}$/.test(value)) {
            callback()
          } else {
            callback(new Error('请输入正确的手机号码'))
          }
        }
      }, 1000)
    }
    return {
        goodsList:[],
        totalNumber:0,//总数量
        totalPrice:0,//总金额

      //提交给后台的参数
      order: {
        goodsAmount:0,//总金额
        expressMoment:20,
        accept_name: 'zhangsan',
        address: '广东省广州市天河区天河路241号',
        mobile: '13888888889',
        post_code: '510000',
        email: '123456@163.com',
        payment_id:'6',
        express_id:'1',
        message:'',
        area: {
          // 所属区域
          province: {
            code: '440000',
            value: '广东省'
          },
          city: {
           "code": "440100",
          "value": "广州市"
          },
          area: {
            "code": "440106",
            "value": "天河区"
          }
        }
      },
      //表单验证
      rules: {
        accept_name: [
          { required: true, message: '请输入正确的收货人姓名', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入正确的所属区域', trigger: 'blur' }
        ],
        mobile: [{ required: true, validator: checkMobile, trigger: 'blur' }]
      }
    }
  },
  computed:{
      getTotalAmount(){
          return this.order.goodsAmount+this.order.expressMoment;
      }
  },
  created(){
    this.getGoodsListData();
  },    
  methods: {
    onSelected(data) {
     this.order.area=data;
    },
    expressChange(label){
        switch(label){
            case '1':
            this.order.expressMoment=20
            break;
             case '2':
            this.order.expressMoment=10
            break;
             case '3':
            this.order.expressMoment=8
            break;
        }
    },
    //发送网络请求
    getGoodsListData(){
        const localGoods=getLocalGoods();
        this.order.goodsids=this.$route.query.ids
        const tempObj={};
        this.$http.get(`site/validate/order/getgoodslist/${this.$route.query.ids}`).then(response=>{
            response.data.message.forEach(item => {
                //重新从本地取出数量赋值给数组
                item.buycount=localGoods[item.id];
                this.totalNumber+=item.buycount;
                this.totalPrice+=item.buycount * item.sell_price
                tempObj[item.id]=item.buycount;
            });
            this.order.goodsAmount=this.totalPrice;
            this.goodsList=response.data.message;
            this.order.cargoodsobj=tempObj;
        })
    },
    //返回购物车
    goBack(){
         this.$router.go(-1)
        
    },
    //确定提交
    btnSubmit(){
        //验证表单是否通过
        this.$refs.orderRef.validate((valid)=>{
            if(!valid){
                return;
            }
            //验证通过发送请求
            this.$http.post('site/validate/order/setorder',this.order).then(response=>{
                if(response.data.status==0){
                    this.$router.push({path:'/pay',query:{orderid:response.data.message.orderid}});
                    //删除购物车数据
                    const idArray=this.$route.query.ids.split(',');
                    idArray.forEach(id=>{
                       this.$store.commit('delete',id);
                    })
                    
                }else{
                    alert('提交失败!')
                }
                
            })
            
            
        })
    }
  }
}
</script>