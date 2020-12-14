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
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
              <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
            </div>


            <div v-if="!callback" class="mt-3 text-center sm:mt-5">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                Disposition
              </h3>
              <div class="mt-2">
                <fieldset>
                

                <div class="bg-white rounded-md -space-y-px">
                  <div class="grid grid-cols-3 gap-3">

                    
                    <div class="relative border border-gray-200 p-2 flex">
                      <div class="flex items-center h-5">
                        <input id="settings-option-1" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                      </div>
                      <label for="settings-option-1" class="ml-3 flex flex-col cursor-pointer">
                        <span class="block text-sm font-medium">
                          Do Not Call
                        </span>
                      </label>
                    </div>

                    <div class="relative border rounded-tl-md rounded-tr-md p-2 flex">
                      <div class="flex items-center h-5">
                        <input v-on:change="callMe" id="settings-option-0" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                      </div>
                      <label for="settings-option-0" class="ml-3 flex flex-col cursor-pointer">
                        <span class="block text-sm font-medium">
                          Call Back
                        </span>
                      </label>
                    </div>

                    <div class="relative border border-gray-200 rounded-bl-md rounded-br-md p-2 flex">
                      <div class="flex items-center h-5">
                        <input id="settings-option-2" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                      </div>
                      <label for="settings-option-2" class="ml-3 flex flex-col cursor-pointer">
                        <span class="block text-sm font-medium">
                          Sale Made
                        </span>
                      </label>
                    </div>

                    <div class="relative border border-gray-200 rounded-bl-md rounded-br-md p-2 flex">
                      <div class="flex items-center h-5">
                        <input id="settings-option-3" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                      </div>
                      <label for="settings-option-3" class="ml-3 flex flex-col cursor-pointer">
                        <span class="block text-sm font-medium">
                          Decline Sale 
                        </span>
                      </label>
                    </div>

                    <div class="relative border border-gray-200 rounded-bl-md rounded-br-md p-2 flex">
                      <div class="flex items-center h-5">
                        <input id="settings-option-4" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                      </div>
                      <label for="settings-option-4" class="ml-3 flex flex-col cursor-pointer">
                        <span class="block text-sm font-medium">
                        No Answer 
                        </span>
                      </label>
                    </div>

                    <div class="relative border border-gray-200 rounded-bl-md rounded-br-md p-2 flex">
                      <div class="flex items-center h-5">
                        <input id="settings-option-5" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                      </div>
                      <label for="settings-option-5" class="ml-3 flex flex-col cursor-pointer">
                        <span class="block text-sm font-medium">
                          Phone Off 
                        </span>
                      </label>
                    </div>

                    <div class="relative border border-gray-200 rounded-bl-md rounded-br-md p-2 flex">
                      <div class="flex items-center h-5">
                        <input id="settings-option-6" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                      </div>
                      <label for="settings-option-6" class="ml-3 flex flex-col cursor-pointer">
                        <span class="block text-sm font-medium">
                        No Pitch 
                        </span>
                      </label>
                    </div>

                    <div class="relative border border-gray-200 rounded-bl-md rounded-br-md p-2 flex">
                      <div class="flex items-center h-5">
                        <input id="settings-option-7" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                      </div>
                      <label for="settings-option-7" class="ml-3 flex flex-col cursor-pointer">
                        <span class="block text-sm font-medium">
                          Call Tranfer
                        </span>
                      </label>
                    </div>

                    <div class="relative border border-gray-200 rounded-bl-md rounded-br-md p-2 flex">
                      <div class="flex items-center h-5">
                        <input id="settings-option-7" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                      </div>
                      <label for="settings-option-7" class="ml-3 flex flex-col cursor-pointer">
                        <span class="block text-sm font-medium">
                          Call Tranfer
                        </span>
                      </label>
                    </div>

                    <div class="relative border border-gray-200 rounded-bl-md rounded-br-md p-2 flex">
                      <div class="flex items-center h-5">
                        <input id="settings-option-7" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                      </div>
                      <label for="settings-option-7" class="ml-3 flex flex-col cursor-pointer">
                        <span class="block text-sm font-medium">
                          Call Tranfer
                        </span>
                      </label>
                    </div>

                    <div class="relative border border-gray-200 rounded-bl-md rounded-br-md p-2 flex">
                      <div class="flex items-center h-5">
                        <input id="settings-option-7" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                      </div>
                      <label for="settings-option-7" class="ml-3 flex flex-col cursor-pointer">
                        <span class="block text-sm font-medium">
                          Call Tranfer
                        </span>
                      </label>
                    </div>

                    <div class="relative border border-gray-200 rounded-bl-md rounded-br-md p-2 flex">
                      <div class="flex items-center h-5">
                        <input id="settings-option-7" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                      </div>
                      <label for="settings-option-7" class="ml-3 flex flex-col cursor-pointer">
                        <span class="block text-sm font-medium">
                          Call Tranfer
                        </span>
                      </label>
                    </div>

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
          <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
            <button @click="dispose" type="button" class="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">
              Submit & Resume
            </button>
            <!-- <button @click="dispositions = false" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm">
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


export default {
  name: 'DipositionModal',
  props: {
  },
  components: {
    Date,
  },
  Data(){
    return {
      callback: false,
    }
  },
  methods: {
    dispose(){
      this.$parent.dispositionModal = false,
      this.callback = false
    },
    callMe(){
      this.callback = true
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
