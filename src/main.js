import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false



Vue.use(require('vue-moment'),{moment});
const moment = require('vue-moment')
require('moment/locale/th')

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
