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
                                <li>
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
                    <!--商品列表-->
                    <div class="cart-box">
                        <input id="jsondata" name="jsondata" type="hidden">
                        <table width="100%" align="center" class="cart-table" border="0" cellspacing="0" cellpadding="8">
                            <tbody>
                                <tr>
                                    <th width="48" align="center">
                                        <a>选择</a>
                                    </th>
                                    <th align="left" colspan="2">商品信息</th>
                                    <th width="84" align="left">单价</th>
                                    <th width="104" align="center">数量</th>
                                    <th width="104" align="left">金额(元)</th>
                                    <th width="54" align="center">操作</th>
                                </tr>
                                <tr v-for='(item,index) in getShopData' :key='item.id'>
                                    <td width="48" align="center">
                                        <el-switch v-model="item.isSelect">
                                        </el-switch>
                                    </td>
                                    <td align="left" colspan="2">
                                        <div class="shopInfo"><img :src="item.img_url" alt="" style="width: 50px; height: 50px; margin-right: 10px;">
                                            <span>{{item.title}}</span>
                                        </div>
                                    </td>
                                    <td width="84" align="left">{{item.sell_price}}</td>
                                    <td width="104" align="center">
                                        <div data-v-2be32b7a="">
                                            <inputNumber :goodsId='item.id' :count='item.buycount' @onInputNumberChange='inputChange'></inputNumber>
                                        </div>
                                    </td>
                                    <td width="104" align="left">{{item.sell_price*item.buycount}}</td>
                                    <td width="54" align="center">
                                         <el-button type="text" @click="deleteMessage(index)">删除</el-button>
                                    </td>
                                </tr>
                                
                                <tr v-if='getShopData.length===0'>
                                    <td colspan="10">
                                        <div class="msg-tips">
                                            <div class="icon warning">
                                                <i class="iconfont icon-tip"></i>
                                            </div>
                                            <div class="info">
                                                <strong>购物车没有商品！</strong>
                                                <p>您的购物车为空，
                                                    <router-link to="/goodslist" style='color:#f00'>马上去购物</router-link>吧！</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th class="shopRight" align="right" colspan="8">
                                        已选择商品
                                        <b class="red" id="totalQuantity">{{getSumNumber}}</b> 件 &nbsp;&nbsp;&nbsp; 商品总金额（不含运费）：
                                        <span class="red">￥</span>
                                        <b class="red" id="totalAmount">{{getSumPrice}}</b>元
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!--/商品列表-->
                    <!--购物车底部-->
                    <div class="cart-foot clearfix">
                        <div class="right-box">
                            <button class="button" @click='continueBuy' >继续购物</button>
                            <button class="submit" @click='goToPay' >立即结算</button>
                        </div>
                    </div>
                    <!--购物车底部-->
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .shopInfo{
        display: flex;
        align-items: center;
    }
    .shopRight{
        text-align: right;
    }
</style>

<script>
//导入本地localStorage数据,按需导入
import { getLocalGoods } from '../common/localStorage.js';
//导入计数器的子组件
import inputNumber from './subcomponents/inputNumber';
import {addLocalGoods} from '../common/localStorage.js';

//导出
export default {
  data() {
    return {
      getShopData: []
    }
  },
  components:{
      inputNumber
  },
  created() {
    this.getShopCarData()
  },
  computed:{
      //获取总数量
      getSumNumber(){
          let sumNumber=0;
          this.getShopData.forEach(item=>{
              if(item.isSelect){
                  sumNumber+=item.buycount;
                  
              }
          });
          return sumNumber;
      },
      //获取总价格
      getSumPrice(){
          let sumPrice=0;
          this.getShopData.forEach(item=>{
              if(item.isSelect){
                  sumPrice+=item.buycount*item.sell_price;
              }
          });
          return sumPrice;
      }
  },
  methods: {
    //获取购物车商品数据
    getShopCarData() {
      //获取准备好url所需要的id值
      const localGoods = getLocalGoods()
      //获取对象里面的key;
      const keys = Object.keys(localGoods)
      if (keys.length === 0) {
        return
      }
      const url = `site/comment/getshopcargoods/${keys.join(',')}`
      this.$http.get(url).then(response => {
        response.data.message.forEach(item => {
          item.buycount = localGoods[item.id] //设置数量的自定义属性
          item.isSelect = true //设置按钮的自定义属性
        })
        this.getShopData = response.data.message
      })
    },
    //对inputNumber子组件传递过来的参数进行处理
    inputChange(changeGoods){
        this.getShopData.forEach(item=>{
            if(item.id===changeGoods.goodsId){
                item.buycount=changeGoods.count
            }
        });
    //准备好载荷，调用Vuex的mutation的update方法
    this.$store.commit('update',changeGoods);
    },
    deleteMessage(index){
        this.$confirm('你确定要删除此条信息么?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            // console.log(index);
            //根据id去删除本地的数据,同时更新总数
            this.$store.commit('delete',this.getShopData[index].id);
            //干掉getShopData里面的数组
            this.getShopData.splice(index,1);
        }).catch(() => {
                
        });
    },
    //继续购物
    continueBuy(){
        this.$router.push({path:'/goodslist'})
    },
    //立即结算
    goToPay(){
        const ids=[];
        this.getShopData.forEach(item=>{
            if(item.isSelect){
                ids.push(item.id)
            }
        });
        if(ids.length==0){
             this.$message({
          message: '至少要有一条下单结算',
          type: 'warning'
        });
        return 
        }
        this.$router.push({
            path:'/order',
            query:{ids:ids.join(',')}
        })
    }
  }
}
</script>
