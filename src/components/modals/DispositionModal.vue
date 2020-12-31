<template>
  <div class="">
    <!-- Disposition Modal  -->
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        
        <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <div>
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-200">
              <svg class="h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
            </div>


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

                    
                    <div v-for="option in options" :key="option.value" class="relative border border-gray-200 p-2 flex">
                      <div class="flex items-center h-5">
                        <input v-model="selectDisposition" :value="option.value" id="settings-option-1" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                      </div>
                      <label for="settings-option-1" class="ml-3 flex flex-col cursor-pointer">
                        <span class="block text-xs font-medium lowercase">
                          {{ option.name }}
                        </span>
                      </label>
                    </div>

                    <!-- <div class="relative border rounded-tl-md rounded-tr-md p-2 flex">
                      <div class="flex items-center h-5">
                        <input v-on:change="callMe" id="settings-option-0" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                      </div>
                      <label for="settings-option-0" class="ml-3 flex flex-col cursor-pointer">
                        <span class="block text-sm font-medium">
                          Call Back
                        </span>
                      </label>
                    </div> -->

                  </div>

                </div>
                </fieldset>
              </div>
            </div>

            <!-- Call Back Modal -->
            <div v-if="callback" class="mt-3 text-center sm:mt-5">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                Call Back
              </h3>
              <div class="mt-2 py-10">
              
                <Date />

              </div>
            </div>

          </div>
          <!-- <div v-if="callback" class="mt-5 sm:mt-6 sm:grid justify-center">
            <button :disabled="disabled" type="button" class="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">
              Submit Call Back
            </button>
          </div> -->
          <div v-if="!callback" class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <button :disabled="disabled" @click="submit" type="button" class="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">
              Submit & Resume
            </button>
            <button @click="dispositions = false" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm">
              Submit & Pause
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Date from '@/components/others/Date.vue';


export default {
  name: 'DipositionModal',
  props: {
  },
  components: {
    Date,
  },
  data(){
    return {
      callback: false,
      selectDisposition: null,
      pauseInready : false,
      mineOnly : false
    }
  },
  methods: {
    // closeCalender(){
    //  this.$parent.dispositionModal = false
    // this.callback = false
    // },
    callMe(){
      this.callback = true
    },
    closeModal() {
        this.showModal = true
      },
    submit() {
      let payload = { 
        "username":localStorage.getItem('user'),
        "phone":localStorage.getItem('phone'),
        "campaign":this.$store.state.campaign, 
        "lead_id": localStorage.getItem('lead_id'),
        "status":this.selectDisposition
      }
      localStorage.setItem('disposition' , this.selectDisposition)

      if(this.pauseInready){
        payload["pause_code"]  =  this.$store.state.pause_code
      }

      if(this.selectDisposition  == "CALLBK"){
        // payload["recipient"]  =  (this.mineOnly) ? "USERONLY" : "ANYONE"
        // payload["callback_time"]  =  this.$store.state.pause_code
        // payload["comment"]  =  this.$store.state.pause_code
        // this.$parent.showcalendarModal = true
        // this.$parent.dispositionModal = false
        this.callMe()
      }else{
        return this.$http
          .post("/api/v1/dial/dispose",payload, { headers:  {  "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${localStorage.getItem('token')}` } })
          .then(response => {
              if(response){
                //this.$store.dispatch('userState', 'PAUSED')
                true
              }
              localStorage.removeItem('disposition')
              this.$parent.logs()
              this.$parent.isDisable = false
              this.$parent.dispositionModal = false
              //this.callback = false
              this.$store.dispatch('resetDisposition')
    
            })
          .catch(error => {
              let payload = { title:  'Disposition Failed'  , text: error.response.data.error,}
              this.$store.dispatch("resetError",payload);
              this.$parent.tryAgain = false
              this.$parent.errorModal = true
            })
      }
    },
  },
  computed: {
    options() {
      return this.$store.state.dispositionOptions;
    },
    error() {
      return this.$store.state.hangupError;
    },
    hangupReason() {
      return this.$store.state.hangupReason;
    },
    disabled(){
      return (this.selectDisposition == null) ? true : false
    }
    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
