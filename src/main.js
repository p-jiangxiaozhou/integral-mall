import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import vant,{Lazyload} from 'vant'
import 'vant/lib/index.less'

import router from './router'

Vue.use(Lazyload);

Vue.use(vant)

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
