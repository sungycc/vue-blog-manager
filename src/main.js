import Vue from 'vue'
import 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './router/index.js'
import '@/styles/index.less'

Vue.config.productionTip = false

Vue.use(ElementUI)
// medium/small/mini
Vue.use(ElementUI, { size: 'medium', zIndex: 3000 })

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
