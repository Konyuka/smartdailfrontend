import Vue from 'vue'
import App from './App.vue'
import "./assets/css/tailwind.css";
import { Datetime } from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";

import Vuex from "vuex";
import store from "@/store";
import axios from "@/axios.js";
import router from "@/router";


//intercept unauthorized
axios.interceptors.response.use(function(response) {
    return response
}, function(error) {
    if ('undefined' == error.response) {
        console.log('Backend Server is down')
    }
    console.log(error.response)
    if (401 === error.response.status) {
        console.log(error.response)
        console.log(" logout the user response")
        store.dispatch('logout').then(() => {
            router.push('/')
        })
    } else {

        return Promise.reject(error)

    }
})

//Global variables to be used to collected from the environment settings
Vue.prototype.$iframe = `http://172.16.10.202/login` // Pick the variable from the .env(production)
Vue.prototype.$socket = `172.16.10.209:8080` // Pick the variable from the .env(production)
Vue.prototype.$http = axios;

let iframeUrl = "http://172.16.10.202/login"; // Pick the variable from the .env(production)
store.dispatch("iframe", iframeUrl);



Vue.use(Vuex);
Vue.use(Datetime);
Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
