<template>
  <div class="">
    <div v-if="transfer">
      <div class="hidden sm:block mt-8">
        <div class="border-b border-white">
          <nav class="-mb-px flex justify-between" aria-label="Tabs">
            <a v-on:click="toggleTabs(1)" v-bind:class="{'text-white': openTabs !== 1, 'text-white border-indigo-600': openTabs === 1}" class="whitespace-nowrap py-2 px-1 border-b-4 border-transparent font-medium text-sm hover:text-gray-300 hover:border-indigo-400">
              Ingroup
            </a>
            <a v-on:click="toggleTabs(2)" v-bind:class="{'text-white': openTabs !== 2, 'text-white border-indigo-600': openTabs === 2}" class="whitespace-nowrap py-2 px-1 border-b-4 border-transparent font-medium text-sm  hover:text-gray-300 hover:border-indigo-400">
              Agent
            </a>
            <a v-on:click="toggleTabs(3)" v-bind:class="{'text-white': openTabs !== 3, 'text-white border-indigo-600': openTabs === 3}" class="whitespace-nowrap py-2 px-1 border-b-4   border-transparent font-medium text-sm hover:text-gray-300 hover:border-indigo-400">
              External 
            </a>
          </nav>
        </div>
      </div> 
      
      <div v-bind:class="{'hidden': openTabs !== 1, 'block': openTabs === 1}">
        
        <div>
          <fieldset class="mt-5 bg-indigo-900">
            <legend class="block text-sm font-medium text-white text-center">Ingroup Transfer To:</legend>

            <div class="flex justify-center">

            <div class="mt-1 rounded-md shadow-sm px-1">
              <div>
                <label for="country" class="sr-only">Country</label>
                <select id="country" name="country" class="bg-white text-black font-medium text-xs focus:ring-black focus:border-black relative block w-full rounded-none  bg-transparent focus:z-10  border-white">
                  <option>Choose User From List</option>
                  <option>Milly Gakii</option>
                </select>
              </div>
            </div>

            <div class="mt-1">
            <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
              Go
            </button>  
            </div>
            </div>

          </fieldset>
        </div>

      </div>

      <div v-bind:class="{'hidden': openTabs !== 2, 'block': openTabs === 2}">
        
        <div>
          <fieldset class="mt-5 bg-indigo-900">
            <legend class="block text-sm font-medium text-white text-center">Agent Transfer To:</legend>

            <div class="flex justify-center">

            <div class="mt-1 rounded-md shadow-sm px-1">
              <div>
                <label for="country" class="sr-only">Country</label>
                <select id="country" name="country" class="bg-white text-black font-medium text-xs focus:ring-black focus:border-black relative block w-full rounded-none  bg-transparent focus:z-10  border-white">
                  <option>Choose User From List</option>
                  <option>Milly Gakii</option>
                </select>
              </div>
            </div>

            <div class="mt-1">
            <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
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
                <select disabled id="country" name="country" class="focus:ring-gray-500 focus:border-gray-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                  <option>KE</option>
                </select>
              </div>
              <input type="number" name="phone_number" id="phone_number" class="focus:ring-gray-500 focus:border-gray-500 block w-full pl-16 sm:text-sm border-gray-300" placeholder="722 200 200">
            </div>

            <div class="mt-2 text-center flex justify-between">
              <button type="button" class="inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Blind Dial
            </button>  
            <button type="button" class="inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Dial With
            </button> 
            <button type="button" class="inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Park Line
            </button> 
            </div>

          </fieldset>
        </div>

      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'TransferCall',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
