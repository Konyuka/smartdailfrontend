<template>
  <div class="">
    <!-- Disposition Modal  -->
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div
            class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
            role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <div>
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-200">
              <svg class="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                   fill="currentColor">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                <path
                    d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
              </svg>
            </div>

            <h3 v-if="callBackDateMessage" class="flex justify-center mt-6 text-lg leading-6 font-medium text-gray-900"
                id="modal-headline">
              Select the pause code
            </h3>

            <div v-if="!callback" class="mt-3 text-center sm:mt-5">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                Disposition
              </h3>
              <div v-if="error" class="lowercase mt-3 py-2 mb-5 text-blue-300 text-sm italic font-bold">
                <p>{{ hangupReason }}</p>
              </div>

              <div class="mt-2">
                <fieldset>


                  <div class="bg-white rounded-md -space-y-px">
                    <div class="grid grid-cols-3 gap-1">


                      <div v-for="option in options" :key="option.value"
                           class="relative border border-gray-200 p-2 flex">
                        <div class="flex items-center h-5">
                          <input v-model="selectDisposition" :value="option.value" id="settings-option-1"
                                 name="privacy_setting" type="radio"
                                 class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                        </div>
                        <label for="settings-option-1" class="ml-3 flex flex-col cursor-pointer">
                        <span class="block text-xs font-medium lowercase">
                          {{ option.name }}
                        </span>
                        </label>
                      </div>


                    </div>

                  </div>
                </fieldset>
              </div>


            </div>

            <!-- Call Back Modal -->
            <div v-if="callBackDate" class="mt-3 text-center sm:mt-5">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                Call Back
              </h3>
              <div class="mt-2 py-10">

                <Date/>

              </div>
            </div>

          </div>

          <div class="flex justify-center mt-5">
            <label class="inline-flex items-center mt-3">
              <input v-model="pauseInready" type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600"><span
                class="ml-2 text-gray-600 font-bold text-sm">pause on submit</span>
            </label>
          </div>
          <div v-if="!callback" class="mt-5 flex justify-center">

            <button :disabled="disabled" @click="checkMethod" type="button"
                    class="w-40 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">
              Submit
            </button>
            <!-- <button :disabled="disabled" @click="pauseAfter" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm">
              Submit & Pause
            </button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Date from '@/components/others/Date.vue';
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
  name: 'DipositionModal',
  props: {},
  components: {
    Date,
  },
  data() {
    return {
      callback: false,
      selectDisposition: null,
      pauseInready: false,
      mineOnly: false,
    }
  },
  methods: {
    checkMethod() {
      if (this.pauseInready == true) {
        this.pauseAfter()
      } else {
        this.submit()
      }
    },
    toggle(event) {
      if (event == 'PAUSED') {
        this.sideP = true
        let payload = {
          "username": localStorage.getItem('user'),
          "phone": localStorage.getItem('phone'),
          "campaign": this.$store.state.campaign,
          "state": 'PAUSED',
          "pause_code": 'BREAK'
        };
        console.log(payload)
        return this.$http
            .post("/api/v1/dial/status", payload, {
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
              }
            })
            .then((response) => {
              if (response) {
                this.$store.dispatch('userState', 'PAUSED')
                Toast.fire({
                  type: 'success',
                  title: 'You are now Paused',
                  icon: 'success',
                });
              }
            })
            .catch(error => {
              console.log(error)
            })
      } else {
        let payload = {
          "username": localStorage.getItem('user'),
          "phone": localStorage.getItem('phone'),
          "campaign": this.$store.state.campaign,
          "state": 'READY'
        };
        return this.$http
            .post("/api/v1/dial/status", payload, {
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
              }
            })
            .then((response) => {
              if (response) {
                this.$store.dispatch('userState', 'READY') //payload.state
                Toast.fire({
                  type: 'success',
                  title: 'You are now Active',
                  icon: 'success',
                });
              }
            })
            .catch(error => {
              console.log(error)
            })
      }
    },
    pauseAfter() {
      // this.$store.dispatch("setPausecode", 'CODE');
      // this.toggle('PAUSED')
      this.$parent.sideP = true
      // this.pauseInready = true
      let payload = {
        "username": localStorage.getItem('user'),
        "phone": localStorage.getItem('phone'),
        "campaign": this.$store.state.campaign,
        "lead_id": localStorage.getItem('lead_id'),
        "status": this.selectDisposition
      }
      localStorage.setItem('disposition', this.selectDisposition)

      if (this.pauseInready) {
        payload["pause_code"] = 'BLANK'
        this.$store.state.pause_code = ''
        console.log(payload)
      }

      if (this.selectDisposition == "CALLBK") {

        this.callMe()
      } else {
        return this.$http
            .post("/api/v1/dial/dispose", payload, {
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
              }
            })
            .then(response => {
              if (response) {
                true
              }
              localStorage.removeItem('disposition')
              this.$parent.logs()
              this.$parent.isDisable = false
              this.$parent.dispositionModal = false
              this.$parent.side = false
              this.$parent.sideD = false

              //this.callback = false
              this.$store.dispatch('resetDisposition')

            })
            .catch(error => {
              let payload = {title: 'Disposition Failed', text: error.response.data.error,}
              this.$store.dispatch("resetError", payload);
              this.$parent.tryAgain = false
              this.$parent.errorModal = true
            })
      }
    },
    callMe() {
      this.callback = true
    },
    closeModal() {
      this.showModal = true
    },
    submit() {
      let payload = {
        "username": localStorage.getItem('user'),
        "phone": localStorage.getItem('phone'),
        "campaign": this.$store.state.campaign,
        "lead_id": localStorage.getItem('lead_id'),
        "status": this.selectDisposition
      }
      localStorage.setItem('disposition', this.selectDisposition)

      if (this.pauseInready == true) {
        // this.$store.dispatch('userState', 'PAUSED')
        // this.$parent.sideP = true
        payload["pause_code"] = this.$store.state.pause_code
        // console.log(payload)
      }

      if (this.selectDisposition == "CALLBK") {
        this.callMe()
      } else {
        return this.$http
            .post("/api/v1/dial/dispose", payload, {
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('token')}`
              }
            })
            .then(response => {
              if (response) {
                this.$store.dispatch('userState', 'PAUSED')
                //this.$store.dispatch("setPausecode", '');               
                true
              }
              localStorage.removeItem('disposition')
              this.$parent.logs()
              this.$parent.isDisable = false
              this.$parent.dispositionModal = false

              this.$parent.side = false
              this.$parent.sideD = false

              //this.callback = false
              this.$store.dispatch('resetDisposition')

            })
            .catch(error => {
              let payload = {title: 'Disposition Failed', text: error.response.data.error,}
              this.$store.dispatch("resetError", payload);
              this.$parent.tryAgain = false
              this.$parent.errorModal = true
            })
      }
    },
  },
  computed: {
    callBackDateMessage() {
      return (this.callback == true && this.$parent.sideP == true) ? true : false;
    },
    callBackDate() {
      return (this.callback == true && this.$parent.sideP == false) ? true : false;
    },
    options() {
      return this.$store.state.dispositionOptions;
    },
    error() {
      return this.$store.state.hangupError;
    },
    hangupReason() {
      return this.$store.state.hangupReason;
    },
    disabled() {
      return (this.selectDisposition == null) ? true : false
    }

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
