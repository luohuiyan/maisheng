// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// mint-UI引入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

// 使用fastclick
fastclick.attach(document.body);

// 引入jQuery
import $ from 'jquery'
Vue.config.productionTip = false

// 引入字体文件和公共样式文件
import './assets/common/common.css'
import './assets/iconfont/iconfont.css'



// 引入vue-wechat-title组件，每个单页面显示title值
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)


// 使用mint-ui插件信息
Vue.use(MintUI)

import {Actionsheet,Swipe, SwipeItem,Popup,CellSwipe,Toast,DatetimePicker } from 'mint-ui';
Vue.component(Actionsheet.name, Actionsheet);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Popup.name, Popup);
Vue.component(CellSwipe.name, CellSwipe);
Vue.$toast = Vue.prototype.$toast = Toast;
Vue.component(DatetimePicker.name, DatetimePicker);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})






