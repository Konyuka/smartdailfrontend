<template>
  <div>
    <!-- Campaign Modal -->
    <div v-if="modal" class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div
            class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
            role="dialog" aria-modal="true" aria-labelledby="modal-headline">

          <div v-if="select">
            <div>
              <label id="listbox-label" class="text-center block text-md font-medium text-black">
                Select User Campaign
              </label>
              <div class="mt-4 px-20">
                <select v-model="selectedCampaign" class="w-full border bg-white rounded px-3 py-2 outline-none">
                  <option v-for="option in options" :key="option">{{ option }}</option>
                </select>
              </div>
            </div>

            <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
              <button @click="submitCampaign" type="button"
                      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-900 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">
                Submit
              </button>
              <button @click.prevent="logout" type="button"
                      class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm">
                Logout
              </button>
            </div>
          </div>

          <div v-else class="m-auto w-1/2">
            <div>
              <h3 class="text-lg font-bold text-gray-700">
                Answer Phone Conference
              </h3>
              <svg
                  class="h-28 w-28 ml-14 pt-5 transition duration-500 ease-in-out text-indigo-400 hover:text-indigo-900 transform hover:-translate-y-1 hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
          </div>

        </div>


      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

window.Swal = Swal;
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: false,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
window.Toast = Toast;

export default {
  name: 'CampaignModal',
  data() {
    return {
      modal: true,
      options: [],
      selectedCampaign: null,
      seen: false,
    }
  },
  mounted() {
    this.options = this.$store.state.campaigns
  },
  computed: {
    isDisable() {
      return this.selectedCampaign == null;
    },
    select() {
      return this.$parent.select
    },
    campaigns() {
      return this.$store.state.campaigns;
    }
  },
  methods: {
    async submitCampaign() {
      console.log(this.selectedCampaign)
      try {
        let payload = {username: localStorage.getItem('user'), campaign: this.selectedCampaign}
        localStorage.setItem('campaignTemp', this.selectedCampaign)
        this.$parent.select = false;
        let response = await this.$http.post("/api/v1/campaign/login ", payload, {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          }
        });
        console.log(response)
        this.afterLogin()
        response.data.campaign = this.selectedCampaign
        console.log(response.data)
        this.$store.dispatch("setPhoneCamps", response.data);
        if (this.$store.state.dial_method == 'RATIO') {
          this.$parent.blendModal = true
        }
      } catch (error) {
        console.log(error)
        if (error.response.data.error == 'login timeout') {
          let payload = {
            title: 'Call Agent Again',
            text: 'Kindly pick the call to start a conference.You must select a campaign to successfully login to the system and recieve the call',
          }
          this.$store.dispatch("resetError", payload);
        } else {
          let payload = {title: 'Login Failed ', text: error.response.data.error}
          this.$store.dispatch("resetError", payload);
        }


        this.$parent.campaignModal = true
        this.$parent.tryAgain = true
        this.$parent.errorModal = true
        //console.log(error)
      }
    },
    afterLogin() {
      this.$parent.select = false
      this.webSocket()

    },
    webSocket() {
      let connection = new WebSocket("ws://" + this.$socket + "/api/v1/ws")
      connection.onopen = () => {
        console.log("Successfully connected to the  websocket server")
        let payload = {
          "username": localStorage.getItem('user'),
          "phone": localStorage.getItem('phone'),
          "campaign": localStorage.getItem('campaign')
        }
        connection.send(JSON.stringify(payload))
        Toast.fire({
          type: 'success',
          title: 'Successful Login',
          icon: 'success',
        });
      };
      connection.onmessage = (message) => {
        let data = JSON.parse(message.data);
        this.$store.dispatch("fromWebsocket", data);
      };
      connection.onclose = function (e) {
        console.log('Socket is closed. Reconnect will be attempted in 1 second.', e.reason);
        this.$parent.showcampaignModal = true
        setTimeout(function () {
          this.webSocket();
        }, 2000);
      };
      connection.onerror = (evt) => {
        console.log("Socket closed: ", evt);
      };
    },
    logout() {
      let payload = {"username": localStorage.getItem('user'),}
      let token = localStorage.getItem('token')
      return this.$http
          .post("/api/v1/logout", payload, {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": `Bearer ${token}`
            },
          })
          .then((response) => {
            if (response) {
              console.log(response.data)
            }
            this.$store.dispatch("logout");
            this.$router.push("/");

          })
          .catch((error) => {
            console.log(error.response);
            console.log(error.response.data.status);
            if (error.response.data.status == "Unauthorized") {
              this.$store.dispatch("logout");
              this.$router.push("");
            }
          })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
