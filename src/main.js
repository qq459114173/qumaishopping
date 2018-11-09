import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui';
//导入全局样式
// import 'element-ui/lib/theme-chalk/index.css';
import './statics/site/css/bootstrap.min.css' //bootstrap样式
import './statics/site/css/style.css'//中间内容样式
import './statics/site/css/common.css'//头部样式
import './statics/site/css/iconfont/iconfont.css' //字体样式

import './statics/site/css/font-awesome.min.css'//尾部字体样式
import './statics/site/css/animate.css' //动画样式
import './statics/site/css/footerStyle.css' //尾部样式
// import './statics/site/js/base.js'//导入返回顶部js
//按需导入ElementUI
import {
  Button,
  Pagination,
  Input,
  InputNumber,
  Switch,
  Form,
  FormItem,
  Radio,
  RadioGroup,
  MessageBox,
  Message,
  Carousel,
  CarouselItem,
  Row,
  Col
} from 'element-ui'

Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Button) //自动导入element-ui/lib/theme-chalk/button.css
Vue.use(Pagination)
Vue.use(InputNumber)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Input)
Vue.use(Switch)
Vue.use(Row)
Vue.use(Col)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

Vue.config.productionTip = false

//图片懒加载的导入
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
    loading:require('./statics/site/images/01.gif')
});



// Vue.use(ElementUI);

// 导入过滤器,我这样写只是为了让webpack打包的时候，找到它打包
import './filters/index.js'

//导入路由对象
import router from './router/index.js'
//导入Vuex对象
import store from './store/index';
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
