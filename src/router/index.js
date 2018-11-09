import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//导入axios
import axios from 'axios' 

// 导出
axios.defaults.baseURL='http://47.106.148.205:8899/';
axios.defaults.withCredentials=true//把axios中的cookie携带上传给服务器;

//挂载到Vue的原型上去
Vue.prototype.$http = axios

// 导入组件
/* import goodslist from '../components/goodslist.vue';
import goodsinfo from '../components/goodsinfo.vue';
import shopCar from '../components/shopCar.vue';
import phoneList from '../components/phoneList.vue';
import order from '../order/order.vue';
import login from '../components/login.vue';
import appliances from '../components/homeAppliances.vue';
import clothing from '../components/clothing.vue';
import pay from '../pay/pay.vue';
import paySuccess from '../pay/paySuccess.vue';
import userVip from '../userVip/userVip.vue';
import orderList from '../userVip/orderList.vue';
import orderInfo from '../userVip/orderInfo.vue';
import famousWatch from '../components/famousWatch.vue';
import computerOffice from '../components/computerOffice.vue'; */

//使用vue-router优化组件
const goodslist = () => import(/* webpackChunkName: "goodslist" */ '../components/goodslist.vue')
const goodsinfo = () => import(/* webpackChunkName: "goodsinfo" */ '../components/goodsinfo.vue')
const shopCar = () => import(/* webpackChunkName: "shopCar" */ '../components/shopCar.vue')
const phoneList = () => import(/* webpackChunkName: "phoneList" */ '../components/phoneList.vue')
const order = () => import(/* webpackChunkName: "order" */ '../order/order.vue')
const login = () => import(/* webpackChunkName: "login" */ '../components/login.vue')
const appliances = () => import(/* webpackChunkName: "appliances" */ '../components/homeAppliances.vue')
const clothing = () => import(/* webpackChunkName: "clothing" */ '../components/clothing.vue')
const pay = () => import(/* webpackChunkName: "pay" */ '../pay/pay.vue')
const paySuccess = () => import(/* webpackChunkName: "paySuccess" */ '../pay/paySuccess.vue')
const userVip = () => import(/* webpackChunkName: "userVip" */ '../userVip/userVip.vue')
const orderList = () => import(/* webpackChunkName: "orderList" */ '../userVip/orderList.vue')
const orderInfo = () => import(/* webpackChunkName: "orderInfo" */ '../userVip/orderInfo.vue')
const famousWatch = () => import(/* webpackChunkName: "famousWatch" */ '../components/famousWatch.vue')
const computerOffice = () => import(/* webpackChunkName: "computerOffice" */ '../components/computerOffice.vue')
//注册组件
const router=new VueRouter({
    routes:[
        {path:'/',redirect:'/goodslist'},
        {path:'/goodslist',component:goodslist},
        {path:'/goodsinfo/:goodsId',component:goodsinfo},
        {path:'/shopCar',component:shopCar},
        {path:'/phoneList',component:phoneList},
        {path:'/login',component:login},
        {path:'/appliances',component:appliances},
        {path:'/clothing',component:clothing},
        {path:'/famousWatch',component:famousWatch},
        {path:'/computerOffice',component:computerOffice},
        // 下面路径需要登录校验
        {path:'/order',component:order, meta: { checkoutLogin: true }},
        {path:'/pay',component:pay, meta: { checkoutLogin: true }},
        {path:'/paySuccess',component:paySuccess, meta: { checkoutLogin: true }},
        {path:'/userVip',component:userVip, meta: { checkoutLogin: true }},
        {path:'/orderList',component:orderList, meta: { checkoutLogin: true }},
        {path:'/orderInfo',component:orderInfo, meta: { checkoutLogin: true }},
    ]
})
//拦截所有请求
router.beforeEach((to, from, next) => {
    if(to.path!=='/login'){
        localStorage.setItem('wantVisitPath',to.fullPath) //获取上一个url路径
    }
    if(to.meta.checkoutLogin){//需要登录验证
        axios.get('site/account/islogin').then(response=>{
            console.log(response.data.code);
            
             if(response.data.code=='logined'){
                next()
            }else{
                router.push({path:'/login'})
            } 
        });
    }else{
        next();//直接通过
    }
  })

//导出组件
export default router;