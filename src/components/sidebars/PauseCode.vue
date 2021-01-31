<template>
  <div class="fixed z-50 inset-0 overflow-y-auto">
    <div class="absolute md:flex flex-col md:flex-row md:min-h-screen w-full">
      <div
          class="flex flex-col w-full md:w-84 text-gray-700 bg-indigo-900 dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0"
          x-data="{ open: false }">
        <div class="flex-shrink-0 px-2 py-2 flex flex-row-reverse">
          <button :disabled="isDisable(selectedPauseCode)" @click="close"
                  class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Close sidebar</span>
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <nav class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
          <div class="">

          </div>
          <h4 class="text-xl tracking-tight font-bold text-white sm:text-xl ml-7 pb-5">
            Pause Code Selection
          </h4>
          <!--this.$store.state.pause_code-->
          <div class="">
            <div class="mt-4 grid">
              <div class="mt-2 justify-between px-8 grid">
                <div class="py-2 grid-cols-2 gap-2" v-for="option in options" :value="option.pause_code"
                     :key="option.pause_code">
                  <label class="inline-flex items-center">
                    <input v-model="selectedPauseCode" :value="option.pause_code" type="radio"
                           class="form-radio text-indigo-600">
                    <span class="ml-2 text-white text-sm">{{ option.name }}</span>
                  </label>
                </div>
              </div>
            </div>

            <div class="py-14 ml-16">
              <button :disabled="isDisable(selectedPauseCode)" @click="submitPause" type="button"
                      class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-black bg-white hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Submit
              </button>
            </div>

          </div>

        </nav>
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
  name: 'PauseCode',
  props: {},
  created() {
    this.selectedPauseCode = this.$store.state.pause_code
  },
  data() {
    return {
      selectedPauseCode: '',
    }
  },
  methods: {
    isDisable(selectedPauseCode) {
      return selectedPauseCode === 'LOGIN';
    },
    close() {
      this.$parent.sideP = false
    },
    submitPause() {
      this.$store.dispatch("setPausecode", String(this.selectedPauseCode));
      let payload = {
        "username": localStorage.getItem('user'),
        "phone": localStorage.getItem('phone'),
        "campaign": this.$store.state.campaign,
        "state": 'PAUSED',
        "pause_code": this.selectedPauseCode
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
              this.$parent.sideP = false
              //this.$parent.switchTab('activity')
              // this.$emit('close')
              Toast.fire({
                type: 'success',
                title: 'Switched Pause Code to: ' + this.selectedPauseCode,
                icon: 'success',
              });

            }
          })
          .catch(error => {
            console.log(error)
          })
    },
    selectedCod() {
      return this.$store.state.pause_code
    },
  },
  watch: {},
  computed: {
    checkedOptions() {
      return this.options.filter(item => item.checked).map(item => item.name)
    },
    options() {
      return this.$store.state.codeOptions
    },
    selectedCode() {
      return this.$store.state.pause_code
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
