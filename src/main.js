import Vue from 'vue'
import App from './App.vue'
import "./assets/css/tailwind.css";
import {Datetime} from "vue-datetime";
import "vue-datetime/dist/vue-datetime.css";

import Vuex from "vuex";
import store from "@/store";
import axios from "@/axios.js";
import router from "@/router";
import Swal from "sweetalert2";

window.Swal = Swal;
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: false,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
window.Toast = Toast;


//intercept unauthorized
axios.interceptors.response.use(function (response) {
    return response
}, function (error) {
    if (error.message === "Network Error") {
      console.log("Backend Server is down");
      Toast.fire({
        title: "Service is not running. Please Contact Admin",
        icon: "error",
      });
    }
    console.log(error)
    console.log(error.response)
    if (401 === error.response.status) {
        console.log(error.response)
        console.log(" logout the user response")
        store.dispatch('logout').then(() => {
            router.push('/')
        })
    }else if (400 === error.response.status) {
        Toast.fire({
            title: "Wrong Username or Password",
            icon: "warning",
        });
    } else {
    return Promise.reject(error);
    }
})

//Global variables to be used to collected from the environment settings
// Vue.prototype.$iframe = process.env.VUE_APP_EMBEDING_URL;
Vue.prototype.$iframe = `http://172.16.10.202/login`
// Vue.prototype.$socket = process.env.VUE_APP_SOCKET_URL;
// Vue.prototype.$socket = `172.16.10.201:9000`;
// Vue.prototype.$socket = `10.15.1.5:4001`;
// Vue.prototype.$socket = `172.16.10.201:9000`;
// Vue.prototype.$socket = `192.168.1.244:4001`;
// Vue.prototype.$socket = `172.16.10.209:8080`;
Vue.prototype.$socket = `172.16.10.204:4001`;
Vue.prototype.$http = axios;

let iframeUrl = process.env.VUE_APP_EMBEDING_URL;
store.dispatch("iframe", iframeUrl);

Vue.use(Vuex);
Vue.use(Datetime);
Vue.config.productionTip = false


new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
