<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="fixed z-10 inset-0 overflow-y-auto">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <!--
          Background overlay, show/hide based on modal state.

          Entering: "ease-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div
            class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
            role="dialog" aria-modal="true" aria-labelledby="modal-headline">
          <div>
            <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100">
              <!-- Heroicon name: check -->
              <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                   xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div class="mt-3 text-center sm:mt-5">
              <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                Auto Dial
              </h3>
              <div class="mt-2">

                <p class=" text-sm text-gray-500">
                  Check below to make automatic calls by the system
                </p>

                <div class="pl-16">
                  <label class="inline-flex items-center mt-3">
                    <input v-model="autodial" type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600"><span
                      class="ml-2 text-white text-sm">Auto Dial</span>
                  </label>
                </div>

              </div>
            </div>
          </div>
          <div class="mt-5 sm:mt-6">
            <button @click="submit" type="button"
                    class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm">
              Proceed to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Blend',
  data() {
    return {
      autodial: false
    }
  },
  computed: {
    autodialValue() {
      return (this.autodial === true) ? '1' : '0'
    },
  },
  methods: {
    submit() {
      let payload = {
        "username": localStorage.getItem('user'),
        "groups": this.checkedOptions,
        "phone": localStorage.getItem('phone'),
        "campaign": this.$store.state.campaign,
        'blended': this.autodialValue
      }
      return this.$http
          .post("/api/v1/closer/inbound", payload, {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
          }).then((response) => {
            this.$store.dispatch("setIngroups", response.data.inbound);
            this.$parent.ingroupModal = false
            this.$parent.ingroupShow = false
            this.$store.dispatch("setSelectedingroups", this.checkedOptions);
            this.$store.dispatch("autoDialValue", this.autodialValue);
            let pause_code = this.$store.state.pause_code;
            let autoDialValue = this.$store.state.autoDialValue;
            if (pause_code === "LOGIN" && autoDialValue === "1") {
              this.$store.dispatch("userState", "PAUSED");
              // state.pause_code == 'PAUSED';
            }

            console.log(this.autodialValue)
            this.$vs.notification({
              progress: 'auto',
              duration: 4000,
              color: "success",
              position: 'top-center',
              title: 'Inbound groups added!',
              text: "You have Successfully Changed the ingroups"
            })
            //this.$parent.switchTab('activity')
            this.$emit('close')
          })
          .catch((error) => {
            // if (error.response.data.status == "Unauthorized") {
            //     this.$store.dispatch("logout");
            //     this.$router.push("/");
            // }
            console.log(error)
            this.$emit('close')
          });
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
