import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) //Vue.prototype.$store = xxx

// 按需导入localStorage中的方法
import {addLocalGoods,getTotalCount,updateLocalGoods,deleteLocalGoods} from '../common/localStorage.js'

const store = new Vuex.Store({
    // 要操作的数据
    state:{
        buyCount:0
    },
    getters:{
        getBuyCount(state){
            return state.buyCount===0? getTotalCount():state.buyCount;
        }
    },
    mutations:{
        /**
         * state 就是上面的state，固定的
         * goods 载荷 参数 约定 goods = {goodsId:90,count:5}
         */
        addGoods(state,goods){
            // state.buyCount+=goods.count
            state.buyCount = addLocalGoods(goods);
            // console.log(state.buyCount);
        },
        update(state,goods){
            state.buyCount=updateLocalGoods(goods);
        },
        delete(state,id){
            state.buyCount=deleteLocalGoods(id);
        }
    }
})

export default store