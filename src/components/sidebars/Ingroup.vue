<template>
  <div class="">
    <div class="absolute md:flex flex-col md:flex-row md:min-h-screen w-full">
      <div
          class="flex flex-col w-full md:w-84 text-gray-700 bg-indigo-900 dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0"
          x-data="{ open: false }">
        <div class="flex-shrink-0 px-2 py-2 flex flex-row-reverse">
          <button @click="close"
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
          <h4 class="text-xl tracking-tight font-bold text-white sm:text-xl ml-10 pb-5">
            InGroup Selection
          </h4>
          <div class="ml-4">
            <div class="grid grid-cols-2 gap-6 text-center">
              <label class="inline-flex items-center mt-3">
                <input disabled type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600" checked><span
                  class="ml-2 text-white text-sm">Agent Direct</span>
              </label>
              <label v-for="(item, index) in options" :key="index" class="inline-flex items-center mt-3">
                <input :id="item.name" v-model="item.checked" :value="item" type="checkbox"
                       class="form-checkbox h-5 w-5 text-indigo-600" checked><span
                  class="ml-2 text-white text-sm capitalize">{{ item.name }}</span>
              </label>
            </div>

            <div v-if="!noAutoDial" class="grid grid-cols-2 text-center pt-20 pl-14">
              <label class="inline-flex items-center mt-3">
                <input v-model="autoDialCheck" type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600"
                       checked><span class="ml-2 text-white text-sm">Auto Dial</span>
              </label>
            </div>

            <div class="py-14 ml-14">
              <button @click="submit" type="button"
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
  timer: 3000,
  timerProgressBar: false,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});
window.Toast = Toast;

export default {
  name: 'Ingroup',
  data() {
    //  let value = this.noAutoDial

    return {
      options: [],
      checkedIngroups: [],
      checkedAllIngroups: [],
      autoDialCheck: '',
    }
  },
  watch: {
    //  async checkedOptions(newCount){
    //    if(newCount.length){

    //      console.log('we on')

    //     const delay = ms => new Promise(res => setTimeout(res, ms));

    //     await delay(5000)
    //     this.revertState()
    //     console.log('state reverted');

    //     await delay(5000);
    //     this.revertState()
    //     console.log("Waited an additional 5s");

    //   }
    // },
    // autoDialValue(){
    //   const revertState = async () => {
    //     await delay(5000);
    //     console.log('state reverted');

    //     await delay(5000);
    //     console.log("Waited an additional 5s");
    //   };
    // },
  },
  mounted() {
    this.options = JSON.parse(JSON.stringify(this.$store.state.ingroups))
    const arr = Array.from(Object.keys(this.options), k => [`${k}`, this.options[k]]);
    let options = []
    arr.forEach(function (entry) {
      let item = {name: entry[0], checked: entry[1]}
      options.push(item)
    });
    this.options = options
  },
  computed: {
    // disabled(){
    //   return (this.checkedOptions == '' && this.autoDialCheck == '') ? true : false
    // },
    noAutoDial() {
      return (this.autoDial == 1) ? true : false
    },
    autoDial() {
      return this.$store.state.autoDialValue
    },
    checkedOptions() {
      return this.options.filter(item => item.checked).map(item => item.name)
    },
    autodialValue() {
      return (this.autoDialCheck == true) ? '1' : '0'
    },
    ratio() {
      return (this.$store.state.dial_method == 'RATIO') ? true : false
    },
    userState() {
      return this.$store.state.userState
    }
  },
  methods: {
    close() {
      this.$parent.sideG = false
      console.log(this.noAutoDial)
    },
    async revertState() {

      const delay = ms => new Promise(res => setTimeout(res, ms));

      await delay(5000)
      if (this.userState === 'READY') {
        this.$store.dispatch("userState", "PAUSED")
        console.log('state reverted');
      }

      await delay(5000);
      if (this.userState == 'READY') {
        this.$store.dispatch("userState", "PAUSED")
        console.log("Waited an additional 5s");
      }


      // let socketChange = this.$store.state.fromWebsockets
    },
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
                this.$store.dispatch("setSelectedingroups", this.checkedOptions);
                // this.revertState()
                if (this.noAutoDial == true) {
                  this.$store.dispatch("autoDialValue", '1');
                } else {
                  this.$store.dispatch("autoDialValue", this.autodialValue)
                  // this.$store.dispatch("userState", "PAUSED")
                  // this.$store.dispatch("setPausecode", "BREAK")
                }
                // this.$store.dispatch("userState", "PAUSED")
                if (this.$store.state.selectedIngroups.length++ && this.autoDialCheck == false) {
                  Toast.fire({
                    type: 'success',
                    title: this.checkedOptions + ' added to InGroups',
                    icon: 'success',
                  });
                } else if (this.autoDialCheck == true) {
                  Toast.fire({
                    type: 'success',
                    title: 'Auto Dial Activated',
                    icon: 'success',
                  });
                } else {
                  Toast.fire({
                    type: 'success',
                    title: 'Option(s) removed from InGroups',
                    icon: 'success',
                  });
                }
                this.close()
                // .then(
                // )
              }
          )
          .catch((error) => {
            // if (error.response.data.status == "Unauthorized") {
            //     this.$store.dispatch("logout");
            //     this.$router.push("/");
            // }
            console.log(error)
            // this.$emit('close')
          });
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
