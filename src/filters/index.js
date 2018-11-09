import Vue from 'vue'
import moment from 'moment'

Vue.filter('dateFmt',(input,formatStr='YYYY-MM-DD')=>{//formatStr参数传值
    return moment(input).format(formatStr)
})