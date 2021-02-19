<template>
  <div id="app">
    <router-view></router-view>
    <CampaignModal v-if="showcampaignModal" @close="showcampaignModal   = false"/>
  </div>
</template>

<script>
import store from '@/store'
import CampaignModal from '@/components/modals/CampaignModal.vue';

// something


export default {
  name: 'App',
  components:{
    CampaignModal,
  },
  data(){
    return{
      showcampaignModal: false
    }
  },
  created() {
    this.webSocket()
  },
  methods: {
    webSocket() {
      let connection = new WebSocket("ws://" + this.$socket + "/api/v1/ws")

      console.log("Connecting to the websocket server...")

      if (localStorage.getItem('user') == null || localStorage.getItem('phone') == null) {
        console.log("Username or phone still null,websocket connection failed, no user");
        store.dispatch("websocket", 'OFF');
        return;
      }

      connection.onopen = () => {

        connection.send(JSON.stringify({
          "username": localStorage.getItem('user'),
          "phone": localStorage.getItem('phone'),
          "campaign": localStorage.getItem('campaign')
        }))
        console.log(JSON.stringify({
          "username": localStorage.getItem('user'),
          "phone": localStorage.getItem('phone'),
          "campaign": localStorage.getItem('campaign')
        }))
        store.dispatch("websocket", 'ON');
        console.log("connected successfully")
      };

      connection.onmessage = (message) => {
        let data = JSON.parse(message.data);
        store.dispatch("websocket", 'ON');
        store.dispatch("fromWebsocket", data);
      };

      connection.onclose = () => { //event
        console.log("Socket closed: ON CLOSE"); //, event
        this.$parent.showcampaignModal = true
        store.dispatch("websocket", 'OFF');
      };

      connection.onerror = () => { //evt
        console.log("Socket closed : ON ERROR");
      };
    },
  },
  computed: {
    socket() {
      return store.state.socket
    },
  },
  watch: {
    socket(newValue) {
      if (newValue === 'OFF') {
        console.log('Socket off!')
        this.webSocket()
        true
      }
    }
  }
}
</script>

<style>

</style>
