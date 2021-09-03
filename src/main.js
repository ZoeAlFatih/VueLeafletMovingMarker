import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import VueSpeedMeter from "vue-speed-meter";
import Trend from "vuetrend"




import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVueIcons)
Vue.use(Trend)

Vue.component("vue-speed-meter", VueSpeedMeter);



Vue.config.productionTip = false




new Vue({
  render: h => h(App),

}).$mount('#app')
