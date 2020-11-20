import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import vant,{Lazyload} from 'vant'
import 'vant/lib/index.less'

import router from './router'
import { media_url } from '@/constant';

Vue.use(Lazyload);

Vue.use(vant)

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

Vue.prototype.media_url = media_url;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
