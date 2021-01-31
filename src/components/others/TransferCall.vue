<template>
  <div class="">
    <div class="relative">
      <div class="hidden sm:block mt-8">
        <div class="border-b border-white">
          <nav class="-mb-px flex justify-between w-full" aria-label="Tabs">
            <a v-on:click="toggleTabs(1)"
               v-bind:class="{'text-white': openTabs !== 1, 'text-white border-indigo-600': openTabs === 1}"
               class="whitespace-nowrap py-2 px-1 border-b-4 border-transparent font-medium text-sm hover:text-gray-300 hover:border-indigo-400">
              Ingroup
            </a>
            <a v-on:click="toggleTabs(2)"
               v-bind:class="{'text-white': openTabs !== 2, 'text-white border-indigo-600': openTabs === 2}"
               class="whitespace-nowrap py-2 px-1 border-b-4 border-transparent font-medium text-sm  hover:text-gray-300 hover:border-indigo-400">
              Agent
            </a>
            <a v-on:click="toggleTabs(3)"
               v-bind:class="{'text-white': openTabs !== 3, 'text-white border-indigo-600': openTabs === 3}"
               class="whitespace-nowrap py-2 px-1 border-b-4   border-transparent font-medium text-sm hover:text-gray-300 hover:border-indigo-400">
              External
            </a>
          </nav>
        </div>
      </div>


      <div class="min-w-screen justify-between w-64">

        <div v-bind:class="{'hidden': openTabs !== 1, 'block': openTabs === 1}">

          <div>
            <fieldset class="w-full mt-5 bg-indigo-900">
              <legend class="block text-sm font-medium text-white text-center">Ingroup Transfer To:</legend>

              <div class="flex justify-center mt-2">

                <div class="mt-1 rounded-md shadow-sm pr-5">
                  <div>
                    <label for="country" class="sr-only">Country</label>
                    <select v-model="selectedIngroup" id="country" name="country"
                            class="bg-white text-black font-medium text-xs focus:ring-black focus:border-black relative block w-full rounded-none bg-transparent focus:z-10  border-white">
                      <option v-for="option in options" :value="option" :key="option">{{ option }}</option>
                    </select>
                  </div>
                </div>

                <div class="mt-1">
                  <button @click="ingroupTransfer" type="button"
                          class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                    Go
                  </button>
                </div>
              </div>

            </fieldset>
          </div>

        </div>

        <div v-bind:class="{'hidden': openTabs !== 2, 'block': openTabs === 2}">

          <div class="">
            <fieldset class="mt-5 bg-indigo-900">
              <legend class="block text-sm font-medium text-white text-center">Agent Transfer To:</legend>

              <div class="flex justify-center mt-2">

                <div class="mt-1 rounded-md shadow-sm pr-5">
                  <div>
                    <label for="country" class="sr-only">Country</label>
                    <select v-model="agent" id="country" name="country"
                            class="bg-white text-black font-medium text-xs focus:ring-black focus:border-black relative block w-full rounded-none bg-transparent focus:z-10  border-white">
                      <option class=" " v-for="option in agents" :value="option.user" :key="option"
                              placeholder="Select InGroup">{{ option.user }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="mt-1">
                  <button @click="agentTransfer" type="button"
                          class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                    Go
                  </button>
                </div>
              </div>

            </fieldset>
          </div>

        </div>

        <div v-bind:class="{'hidden': openTabs !== 3, 'block': openTabs === 3}">

          <div>
            <fieldset class="mt-5 bg-indigo-900">
              <legend class="block text-sm font-medium text-white text-center">External Transfer To:</legend>
              <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 flex items-center">
                  <label for="country" class="sr-only">Country</label>
                  <select disabled id="country" name="country"
                          class="focus:ring-gray-500 focus:border-gray-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                    <option>KE</option>
                  </select>
                </div>
                <input v-model="agent" type="number" name="phone_number" id="phone_number"
                       class="focus:ring-gray-500 focus:border-gray-500 block w-full pl-16 sm:text-sm border-gray-300"
                       placeholder="722 200 200">
              </div>

              <div class="mt-2 text-center flex justify-between">
                <button @click="blindTransfer" type="button"
                        class="inline-flex items-center px-1 py-2 border border-transparent shadow-sm text-xs leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Blind Dial
                </button>
                <button @click="addCustomer" type="button"
                        class="inline-flex items-center px-1 py-2 border border-transparent shadow-sm text-xs leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Dial With
                </button>
                <button @click="addparkCustomer" type="button"
                        class="inline-flex items-center px-1 py-2 border border-transparent shadow-sm text-xs leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Park Line
                </button>
              </div>

            </fieldset>
          </div>

        </div>

      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'TransferCall',
  props: {},
  data() {
    return {
      openTabs: 1,
      selectedIngroup: null,
      agent: null,
    }
  },
  methods: {
    ingroupTransfer() {
      let payload = {

        "username": localStorage.getItem('user'),
        "phone": localStorage.getItem('phone'),
        "campaign": localStorage.getItem('campaign'),
        "lead_id": localStorage.getItem('lead_id'),
        "callerid": localStorage.getItem('callerid'),
        "phone_number": localStorage.getItem('numberCalled'),
        "inbound_group": this.selectedIngroup
      }
      return this.$http
          .post("/api/v1/transfer/local", payload, {
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
            this.$parent.transferTrue = false;
            this.$parent.onCallTrue = false
            this.$parent.dispositionModal = true

            this.$store.dispatch('numberCalled', null)
            localStorage.removeItem('calledPhone')
            localStorage.removeItem('type')
            localStorage.removeItem('numberCalled')
            localStorage.removeItem('callerid')
            localStorage.removeItem('lead_id')
          })
          .catch(error => {
            console.log(error)
          })
    },
    agentTransfer() {
      let payload = {
        "username": localStorage.getItem('user'),
        "phone": localStorage.getItem('phone'),
        "campaign": localStorage.getItem('campaign'),

        "lead_id": localStorage.getItem('lead_id'),
        "callerid": localStorage.getItem('callerid'),
        "phone_number": localStorage.getItem('numberCalled'),
        "agent": this.agent,
        "inbound_group": "AGENTDIRECT"

      }
      return this.$http
          .post("/api/v1/transfer/local", payload, {
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
            console.log(payload)
            this.$root.$children[0].$children[0].transferTrue = false;
            this.$root.$children[0].$children[0].onCallTrue = false
            this.$root.$children[0].$children[0].dispositionModal = true
            this.$store.dispatch('numberCalled', null)
            localStorage.removeItem('calledPhone')
            localStorage.removeItem('type')
            localStorage.removeItem('numberCalled')
            localStorage.removeItem('callerid')
            localStorage.removeItem('lead_id')
          })
          .catch(error => {
            console.log(error)
          })
    },
    blindTransfer() {
      let payload = {
        "username": localStorage.getItem('user'),
        "phone": localStorage.getItem('phone'),
        "campaign": localStorage.getItem('campaign'),

        "lead_id": localStorage.getItem('lead_id'),
        "callerid": localStorage.getItem('callerid'),
        "phone_number": localStorage.getItem('numberCalled'),
        "agent": this.agent
      }

      console.log(payload)
      return this.$http
          .post("/api/v1/transfer/blind", payload, {
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


            //needs to be cleande 
            this.$root.$children[0].$children[0].transferTrue = false;
            this.$root.$children[0].$children[0].onCallTrue = false
            this.$root.$children[0].$children[0].dispositionModal = true
            this.$store.dispatch('numberCalled', null)
            localStorage.removeItem('calledPhone')
            localStorage.removeItem('type')
            localStorage.removeItem('numberCalled')
            localStorage.removeItem('callerid')
            localStorage.removeItem('lead_id')
          })
          .catch(error => {
            console.log(error)
          })
    },
    addCustomer() {
      let payload = {
        "username": localStorage.getItem('user'),
        "phone": localStorage.getItem('phone'),
        "campaign": localStorage.getItem('campaign'),
        "lead_id": localStorage.getItem('lead_id'),
        "agent": this.agent
      }
      this.$store.dispatch('ongoingFalseTransferTrue')
      return this.$http
          .post("/api/v1/transfer/add", payload, {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then((response) => {
            this.$store.dispatch('addCustomer')
            if (response) {
              true
            }
            this.$store.dispatch('addedNumber', this.agent)
            this.$parent.transferTrue = false;
            //this.$parent.transferred = true;
            this.$parent.onCallTrue = true
          })
          .catch(error => {
            console.log(error)
          })
    },
    addparkCustomer() {
      let payload = {
        "username": localStorage.getItem('user'),
        "phone": localStorage.getItem('phone'),
        "campaign": localStorage.getItem('campaign'),
        "lead_id": localStorage.getItem('lead_id'),
        "callerid": localStorage.getItem('callerid'),
        "agent": this.agent,
        "phone_number": localStorage.getItem('numberCalled')
      }
      //console.log(payload)


      return this.$http
          .post("/api/v1/transfer/park", payload, {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": `Bearer ${localStorage.getItem('token')}`
            }
          })
          .then((response) => {
            this.$store.dispatch('addPark')
            if (response) {
              this.$store.dispatch('addedNumber', this.agent)
              this.$parent.transferTrue = false;
              this.$parent.onCallTrue = true

            }
          })
          .catch(error => {
            console.log(error)
          })
    },
    // close(){
    //   this.$parent.transferTrue = false
    // },
    toggleTabs: function (tabNumber) {
      this.openTabs = tabNumber
    }
  },
  computed: {
    agents() {
      return this.$store.state.activeUsers
    },
    options() {
      let ingroups = Object.keys(this.$store.state.ingroups)
      return ingroups
    },
  },
  watch: {
    callStatus(newCount) {
      if (newCount == 'hangup' && this.transfer == true) {
        this.$emit('close')
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
