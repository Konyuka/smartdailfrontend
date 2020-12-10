<template>
  <div class="main-wrapper">

    <div>
      <div class="">
          <h2 class="text-xl font-extrabold text-black text-center">
            Record Call Back Time
          </h2>
          <datetime class="py-14" type="datetime" v-model="date"></datetime>
      </div>
    </div>


   
   


  </div>
</template>

<script>
import { Datetime } from 'vue-datetime';

export default {
  name: 'DatePicker',
  props: {
  },
  components: {
    datetime: Datetime
  },
  data(){
    return{
      date: "",
    }
  },
  methods: {
    
  },
}
</script>

<style scoped>
</style>
