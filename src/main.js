import Vue from 'vue'
import App from './App.vue'
import VueCompositionAPI from '@vue/composition-api'


new Vue({
    render: h => h(App),
}).$mount('#app')

import "bootstrap/dist/css/bootstrap.min.css"
// require('./bootstrap');// BSV Plugin Registration

// Composition API
Vue.use(VueCompositionAPI)

// import core styles
// require('@core/scss/core.scss')

// import assets styles
// require('@/assets/scss/style.scss')