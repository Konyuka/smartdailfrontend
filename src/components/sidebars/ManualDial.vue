<template>
  <div class="">

    <div class="md:flex flex-col md:flex-row md:min-h-screen">
      <div
          class="flex flex-col w-full md:w-84 text-gray-700 bg-indigo-900 dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0"
          x-data="{ open: false }">
        <div class="flex-shrink-0 px-2 py-2 flex flex-row-reverse">
          <button @click="closePanel"
                  class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Close sidebar</span>
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <nav class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto static">

          <!-- Dial Input   -->
          <div v-if="!call" class="pt-8 text-center sm:mt-5">
            <h3 class="text-lg leading-6 font-medium text-white" id="modal-headline">
              Enter the Phone Number
            </h3>
            <div class="pt-5">
              <div class="px-2">
                <div class="mt-1 relative rounded-md shadow-sm">
                  <div class="absolute inset-y-0 left-0 flex items-center">
                    <label for="country" class="sr-only">Country</label>
                    <select disabled id="country" name="country"
                            class="focus:ring-gray-500 focus:border-gray-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                      <option>🇰🇪</option>
                    </select>
                  </div>
                  <input @keyup.enter="dial" v-model="number" type="number" name="phone_number" id="phone_number"
                         class="focus:ring-gray-500 focus:border-gray-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md"
                         placeholder="722 200 200">
                </div>
              </div>
            </div>
          </div>

          <!-- During Call   -->
          <div v-if="call" class="mt-3 text-center sm:mt-5">
            <h3 v-if="callWaiting" class="text-sm italic leading-6 font-medium text-white" id="modal-headline">
              Dialing {{ numberCalled }}
            </h3>
            <div v-if="ongoingCall" class="mt-5">

              <h3 class="pb-4 text-md leading-6 font-medium text-white" id="modal-headline">
                {{ callType }} : {{ numberCalled }}
              </h3>
              <div class="">

                <svg class="ml-28 h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <h3 class="pt-2 text-sm leading-6 font-bold text-white" id="modal-headline">
                  {{ callTime }}
                </h3>
              </div>
              <div class="flex mt-5 justify-between">
                <button v-if="!transfer" @click="transferCall" type="button"
                        class="inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <!-- Heroicon name: mail -->
                  <svg class="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                       fill="currentColor">
                    <path fill-rule="evenodd"
                          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                          clip-rule="evenodd"/>
                  </svg>
                  Transfer
                </button>
                <button v-if="transfer" @click="transfer = !transfer" type="button"
                        class="inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <svg class="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                       fill="currentColor">
                    <path fill-rule="evenodd"
                          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                          clip-rule="evenodd"/>
                  </svg>
                  Transfer
                </button>

                <!-- Park Call v-if="!park" -->
                <button v-if="!callParked" @click="parkCall" type="button"
                        class="inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <svg v-if="callParked" class="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clip-rule="evenodd"/>
                  </svg>
                  <svg v-else class="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                       fill="currentColor">
                    <path fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"/>
                  </svg>
                  Park
                </button>
                <!-- Grab Call v-if="park" -->
                <button v-else @click="grabCall" type="button"
                        class="inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <svg v-if="callParked" class="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clip-rule="evenodd"/>
                  </svg>
                  <svg v-else class="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                       fill="currentColor">
                    <path fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"/>
                  </svg>
                  Grab
                </button>

                <button @click="addDTMF" type="button"
                        class="inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <svg class="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                  </svg>
                  DTMF
                </button>
              </div>

            </div>
          </div>

          <!-- During Transfer -->
          <TransferCall v-if="transfer" class="absolute"/>

          <!--Call & Hang-Up  Button -->
          <div class="mt-5 sm:mt-6 text-center absolute bottom-24 left-24">
            <div class="">
              <!-- Dial  -->
              <button :disabled="disabled" v-if="!call" @click='dial' type="button"
                      v-bind:class="{'bg-green-50': disabled === true, 'bg-green-700': disabled === false, 'hover:bg-red-800': disabled === true, 'hover:bg-green-500': disabled === false   }"
                      class="inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-4 text-base font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">
                <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"/>
                </svg>
              </button>
              <!-- hang -->
              <button v-if="call" @click='hangUp' type="button"
                      class="inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-4 bg-red-500 text-base font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">
                <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  <path
                      d="M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z"/>
                </svg>
              </button>
            </div>
          </div>

        </nav>
      </div>
    </div>

  </div>
</template>

<script>
import TransferCall from '@/components/others/TransferCall.vue';


import Swal from 'sweetalert2';

window.Swal = Swal;
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: false,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
window.Toast = Toast;


export default {
  name: 'ManualDial',
  components: {
    TransferCall,
  },
  data() {
    return {
      elapsedTime: 0,
      timer: undefined,
      manualDial: true,
      number: '',
      isPanelOpen: true,
      call: false,
      transfer: false,
      park: false,
      // openTabs: 1,
      disposition: false,

    }
  },
  created() {
    if (this.$parent.ready) {
      localStorage.setItem('type', 'Outgoing')
    }
    if (this.callStatus == 'livecall') {
      this.start()
    }
  },
  computed: {
    disabled() {
      return (this.number.length < '9') ? true : false
    },
    callStatus() {
      return this.$store.state.callStatus
    },
    grabTransfer() {
      return this.$parent.grabTransfer
    },
    numberCalled() {
      //let number = localStorage.getItem('numberCalled')
      //return  localStorage.getItem('numberCalled')
      return this.$store.state.numberCalled
    },
    callType() {
      let calltype = localStorage.getItem('type')
      return calltype
    },
    transferred() {
      return this.$store.state.transferedCall
    },
    ongoingCall() {
      return this.$store.state.ongoingCall
    },
    callWaiting() {
      return this.$store.state.callWaiting
    },
    incoming() {
      return (localStorage.getItem('type') == 'Incoming' && !this.transferred) ? true : false;
    },
    callParked() {
      return this.$parent.callParked
    },
    addedNumber() {
      return this.$store.state.addedNumber
    },
    grabTrue() {
      return this.$store.state.grabTrue
    },
    callTime() {
      const date = new Date(null);
      date.setSeconds(this.elapsedTime / 1000);
      const utc = date.toUTCString();
      return utc.substr(utc.indexOf(":") - 2, 8);
    }
  },
  watch: {
    callStatus(newCount) {
      if (newCount == 'hangup' && !this.$parent.transferred) {  //&& !this.$parent.callParked
        this.stop()
        this.reset()
        console.log(this.$parent.callParked)
        this.hangUp()
      }
      if (newCount == 'livecall') {
        //console.log("it is now in a livecall in autodial")
        this.start()

        this.$parent.isDisabled = true

      }
    },
    // disabled(status){
    //   if(status === 'true'){
    //     Toast.fire({
    //       type: 'success',
    //       title: 'You have resumed the call',
    //       icon: 'success',
    //     });
    //   }
    // }
  },
  methods: {
    closePanel() {
      this.$parent.side = false
      console.log(this.disabled)
    },
    closeSidebarPanel() {
      this.isPanelOpen = false
    },
    dial() {
      this.call = true,
          this.transfer = false,

          this.$store.dispatch('resetDisposition')
      this.$store.dispatch('beforeCall')
      if (this.number !== null && /^\d+$/.test(this.number)) {
        let payload = {
          "phone_number": this.number,
          "username": localStorage.getItem('user'),
          "phone": localStorage.getItem('phone'),
          "campaign": this.$store.state.campaign
        };
        return this.$http
            .post("/api/v1/dial/manual", payload, {
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
              }
            })
            .then((response) => {
              localStorage.setItem('lead_id', response.data.lead_id)
              localStorage.setItem('callerid', response.data.callerid)
              localStorage.setItem('numberCalled', this.number)
              this.$store.dispatch('numberCalled', this.number)
              localStorage.setItem('type', 'Outgoing')
              console.log(response.data.url)
              this.$store.dispatch('iframe', response.data.url)
              console.log(response.data)

              this.$parent.onCallTrue = true
              this.$parent.dialTrue = false
            })
            .catch(error => {
              let payload = {title: 'Manual Dial Failed', text: error.response.data,}
              this.$store.dispatch("resetError", payload);
              this.$parent.tryAgain = false
              this.$parent.errorModal = true
            })
      } else {
        let payload = {title: 'Enter Valid Phone Number!', text: "Must be a number and must not be blank",}
        this.$store.dispatch("resetError", payload);
        this.$parent.tryAgain = false
        this.$parent.errorModal = true
      }
    },
    grabCall() {

      //Set the call to NOT PARKED  in the parent state
      this.$parent.callParked = false

      // create the payload to send to the endpoint
      let payload = {
        "username": localStorage.getItem('user'),
        "phone": localStorage.getItem('phone'),
        "campaign": this.$store.state.campaign,
        "callerid": localStorage.getItem('callerid')
      };
      //console.log(payload)
      // Hit the grab endpoint
      return this.$http.post("/api/v1/dial/grab", payload, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
          .then((response) => {
            if (response) {
              true
              Toast.fire({
                type: 'success',
                title: 'You have resumed the call',
                icon: 'success',
              });
            }
          })
          .catch(error => {
            console.log(error.response)
          })
    },
    grabTransferred() {

      // create the payload to send to the endpoint
      let payload = {
        "username": localStorage.getItem('user'),
        "phone": localStorage.getItem('phone'),
        "campaign": this.$store.state.campaign,
        "callerid": localStorage.getItem('callerid')
      };

      this.$parent.grabTransfer = false
      return this.$http
          .post("/api/v1/dial/grab", payload, {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then((response) => {
            if (response) {
              true
            }
          })
          .catch(error => {
            console.log(error)
          })
    },
    leave3Way() {

      this.$parent.grabTransfer = true

      //Create the payload to be sent to the endpoint
      let payload = {
        "username": localStorage.getItem('user'),
        "phone": localStorage.getItem('phone'),
        "campaign": this.$store.state.campaign,
        "callerid": localStorage.getItem('callerid'),
        "phone_number": localStorage.getItem('numberCalled'),
        "lead_id": localStorage.getItem('lead_id'),
      }

      //Hit the endpoint with the above payload
      return this.$http
          .post("/api/v1/transfer/leave3way", payload, {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then((response) => {
            if (response) {
              true
            }
            this.$parent.onCallTrue = false
            this.$parent.dispositionModal = true
          })
          .catch(error => {
            console.log(error)
          })
    },
    hangall() {

      //create the payload to be sent to the endpoint
      let payload = {
        "username": localStorage.getItem('user'),
        "phone": localStorage.getItem('phone'),
        "campaign": this.$store.state.campaign,
        "callerid": localStorage.getItem('callerid'),
        "phone_number": localStorage.getItem('numberCalled'),
        "lead_id": localStorage.getItem('lead_id'),
      }

      //Hit the endpoint with the payload above
      return this.$http
          .post("/api/v1/transfer/leave3way", payload, {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then((response) => {
            if (response) {
              true
            }
            this.$parent.onCallTrue = false
            this.$parent.dispositionModal = true
          })
          .catch(error => {
            console.log(error)
          })
    },
    XferLine() {
      let payload = {
        "username": localStorage.getItem('user'),
        "phone": localStorage.getItem('phone'),
        "campaign": this.$store.state.campaign,
        "agent": this.$store.state.addedNumber,
      }
      return this.$http
          .post("/api/v1/transfer/hangxfer", payload, {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then((response) => {
            if (response) {
              this.$parent.onCallTrue = true
              this.$parent.grabTransfer = true
              this.$store.dispatch('normalCall')
              //this.ongoingCall = true
            }
          })
          .catch(error => {
            console.log(error)
          })
    },
    transferCall() {
      this.transfer = !this.transfer
      this.$parent.transferTrue = true
      //this.$parent.onCallTrue = false
      console.log('Transfer call')
    },
    parkCall() {

      //Set the call to parked in the parent state
      this.$parent.callParked = true
      //Create the payload to send to the park endpoint
      let payload = {
        "username": localStorage.getItem('user'),
        "phone": localStorage.getItem('phone'),
        "campaign": this.$store.state.campaign,
        "callerid": localStorage.getItem('callerid'),
        "lead_id": localStorage.getItem('lead_id')
      };
      console.log(payload)
      //Hit the park endpoint with the payload data you just created above
      return this.$http.post("/api/v1/dial/park", payload, {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        }
      })
          .then((response) => {
            if (response) {
              true
              Toast.fire({
                type: 'success',
                title: 'You have paused the call',
                icon: 'success',
              });
            }
          })
          .catch(error => {
            console.log(error)
          })
    },
    addDTMF() {
      this.dtmfTrue = true
      // this.$children.dtmfTrue = true
      console.log('Send DTMF Code')
    },
    hangUp() {
      this.call = false,
          this.transfer = false,

          //Create the payload to be sent
          this.$parent.clicked = true
      let payload = {
        "campaign": this.$store.state.campaign,
        "username": localStorage.getItem('user'),
        "phone": localStorage.getItem('phone'),
        "lead_id": localStorage.getItem('lead_id'),
        "callerid": localStorage.getItem('callerid'),
        "phone_number": localStorage.getItem('numberCalled')
      };

      //Hit the Hangup endpoint with the data above
      return this.$http
          .post("/api/v1/dial/hangup", payload, {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then((response) => {
            if (response) {
              this.$parent.dispositionModal = true
              this.$parent.onCallTrue = false
              this.$parent.callParked = false
              //this.manualDial = false
              this.$parent.dialTrue = false
              this.$parent.transferTrue = false


              //this.$parent.transferred = false
              localStorage.removeItem('calledPhone')
              localStorage.removeItem('numberCalled')
              localStorage.removeItem('type')
              //let phone = null
              this.$store.dispatch('numberCalled', null)
              //this.$emit("close")
            }
          })
          .catch(error => {
            console.log(error)
          })
    },
    start() {
      this.timer = setInterval(() => {
        this.elapsedTime += 1000;
      }, 1000);
    },
    stop() {
      clearInterval(this.timer);
      this.$parent.isDisabled = false
    },
    reset() {
      this.elapsedTime = 0;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
