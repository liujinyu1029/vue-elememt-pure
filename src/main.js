import Vue from 'vue'
import ElementUI from 'element-ui'
import './styles/theme/index.css';
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)

//因为router的拦截依赖于userInfo的权限
store.dispatch('GetUserInfo').then(() => {
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
}).catch(() => {
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
})



