import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import routes from './routes'
import axios from 'axios'
import VueDND from 'awe-dnd'
import 'lib-flexible/flexible.js'
Vue.prototype.$ajax = axios
import * as echarts from 'echarts'
import 'echarts-wordcloud'
import zhejiang from './assets/map.json'
echarts.registerMap('zhejiang', zhejiang)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueDND)

//NProgress.configure({ showSpinner: false });

const router = new VueRouter({
  // 部署
  mode: 'history',
  // base: 'iotPage',
  routes
});

router.beforeEach((to, from, next) => {
  console.log(to.path);
  // let token = sessionStorage.getItem('token');
  // if (to.path === '/login') {
  //     sessionStorage.removeItem('user');
  //     next();
  // }
  // else if (!token) {
  //   next({ path: '/login' })
  // }
  // else if(to.path === '/'){
  //     next({path:'/dashboardIndex'});
  // }
  // else {
  //     next();
  // }
  next();
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



