<template>
  <div class="main-wrapper">

    <div>
      <div class="">
        <h2 class="text-xl font-regular text-gray-800 text-center">
          Record Call Back Time
        </h2>
        <datetime class="py-8" type="datetime" v-model="callbacktime" value-zone="local" zone="local"></datetime>
        <div class="px-16">
        </div>
        <div class="callback-check ml-0">
          <input type="checkbox" id="mycallBack" name="mycallBack" v-model="mineOnly">
          <label for="mycallBack" class="text-blue-900 px-3">My Call Back Only</label><br>
        </div>

        <div class="mt-5 sm:mt-6 sm:grid justify-center">
          <button :disabled="disabled" @click="submit" type="button"
                  class="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">
            Submit Call Back
          </button>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import {Datetime} from 'vue-datetime';

export default {
  name: 'DatePicker',
  props: {},
  components: {
    datetime: Datetime
  },
  data() {
    return {
      // date: "",
      mineOnly: true,
      callbacktime: null,
      comment: null,
    }
  },
  computed: {
    disabled() {
      return (this.callbacktime == null)
    }
  },
  methods: {
    submit() {
      console.log(this.callbacktime)
      let payload = {
        "username": localStorage.getItem('user'),
        "phone": localStorage.getItem('phone'),
        "campaign": this.$store.state.campaign,
        "lead_id": localStorage.getItem('lead_id'),
        "status": localStorage.getItem('disposition'),
        "recipient": (this.mineOnly) ? "USERONLY" : "ANYONE",
        "callback_time": this.callbacktime,
        "comment": this.comment
      }
      console.log(payload)
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
              localStorage.removeItem('disposition')
            }
            this.$parent.isDisable = false
            this.$parent.callback = false
            this.$parent.$parent.dispositionModal = false
            this.$store.dispatch('resetDisposition')

            this.$parent.$parent.side = false
            this.$parent.$parent.sideD = false

          })
          .catch(error => {
            console.log(error.response.data)
            if (error) {
              true
            }
            if (this.callbacktime == null) {
              let payload = {title: 'Setting CallBack Failed', text: "You must select time,it cannot be Null",}
              this.$store.dispatch("resetError", payload);
              this.$parent.tryAgain = false
              this.$parent.errorModal = true

            }
          })
    }
  }
}
</script>

<style scoped>
</style>
