// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from '@/plugins/vuetify' 
import './assets/layouts/index.css'
import store from './store';
import localizeFilter from './filters/localize.filter'

Vue.config.productionTip = false

Vue.filter('localize', localizeFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  store,
  components: { App },
  template: '<App/>'
})
