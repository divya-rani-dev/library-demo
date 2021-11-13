import Vue from 'vue'
import App from './App.vue'
import './plugins/vuetify'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import vuescroll from 'vue-scroll'
import store from './store';
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.config.productionTip = false
Vue.use(vuescroll)

let app
  if (!app) {
    app = new Vue({
      store,
      router,
      vuetify: new Vuetify({
        theme: {
          primary: '#ffe574',
          libprimary:'#17a2b8',
          secondary: '#424242',
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
        icons: {
          iconfont: 'md'
        }
      }),
      render: h => h(App),
    }).$mount('#app')
  }