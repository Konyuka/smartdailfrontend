<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
<div class="h-screen flex overflow-hidden bg-gray-100">
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
  <div class="md:hidden" v-show="toggle">
    <div class="fixed inset-0 flex z-40">
      
      <div class="fixed inset-0" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
      </div>
      
      <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white">
        <div class="absolute top-0 right-0 -mr-12 pt-2">
          <button  @click="toggle = false" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Close sidebar</span>
            <!-- Heroicon name: x -->
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
          
          <nav class="mt-1 flex-1 px-2 space-y-1 relative">
             <p class="text-md font-medium text-black pb-1 text-center">
              ACTIVITIES (Demo Campaign)
            </p>  

            <div class="flex justify-between">

            <button type="button" class="py-2 inline-flex items-center px-1.5  border border-transparent text-xs font-medium rounded border-black shadow-sm text-black bg-white hover:bg-gray-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Ingroup
            </button>

            <button type="button" class="inline-flex items-center px-1.5  border border-transparent text-xs font-medium rounded border-black shadow-sm text-black bg-white hover:bg-gray-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              P - Code
            </button>

            <button @click="side = true" type="button" class="py-2 inline-flex items-center px-1.5  border border-transparent text-xs font-medium rounded border-black shadow-sm text-black bg-white hover:bg-gray-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              M - Dial
            </button>

            <button type="button" class="py-2 inline-flex items-center px-1.5  border border-transparent text-xs font-medium rounded border-black shadow-sm text-black bg-white hover:bg-gray-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              D - Next
            </button>

            </div>

            <div>

              <div class="sm:hidden">
                <label for="tabs" class="sr-only">Select a tab</label>
                <select id="tabs" name="tabs" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option>My Account</option>
                  <option>Company</option>
                  <option selected>Team Members</option>
                  <option>Billing</option>
                </select>
              </div>

              <div class="hidden sm:block mt-4">
                <div class="border-b border-black">
                  <nav class="-mb-px flex justify-between" aria-label="Tabs">
                    <a v-on:click="toggleTabs(1)" v-bind:class="{'text-gray-500': openTab !== 1, 'text-black bg-gray-200 border-black': openTab === 1}" class="whitespace-nowrap py-2 px-1 border-b-4 border-transparent font-medium text-md text-gray-600 hover:text-black hover:border-black">
                      Queue
                    </a>
                    <a v-on:click="toggleTabs(2)" v-bind:class="{'text-gray-500': openTab !== 2, 'text-black bg-gray-200 border-black': openTab === 2}" class="whitespace-nowrap py-2 px-1 border-b-4 border-transparent font-medium text-md text-gray-600 hover:text-black hover:border-black">
                      Logs
                    </a>
                    <!-- <a href="#" class="whitespace-nowrap py-4 px-1 border-b-2 border-indigo-500 font-medium text-sm text-white">
                      Team Members
                    </a> -->
                    <a v-on:click="toggleTabs(3)" v-bind:class="{'text-gray-500': openTab !== 3, 'text-black bg-gray-200 border-black': openTab === 3}" class="whitespace-nowrap py-2 px-1 border-b-4   border-transparent font-medium text-md text-gray-600 hover:text-black hover:border-black">
                      Agents
                    </a>
                    <a v-on:click="toggleTabs(4)" v-bind:class="{'text-gray-500': openTab !== 4, 'text-black bg-gray-200 border-black': openTab === 4}" class="whitespace-nowrap py-2 px-1 border-b-4 border-transparent font-medium text-md text-gray-600 hover:text-black hover:border-black">
                      Backs
                    </a>
                  </nav>
                </div>
              </div>

              <div class="flex flex-col w-84"> 


              <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                <p class="mt-6 ml-20 text-xs font-medium text-black pb-1">
                  You have no calls in Queue
                </p>
              </div> 

              <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">

                <div class="flex flex-col pt-2">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-8 lg:px-8">
                      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-blue-200">

                          <thead>
                            <tr>
                              <th scope="col" class="px-2 py-1 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Time
                              </th>
                              <th scope="col" class="px-2 py-1 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Number
                              </th>
                              <th scope="col" class="px-2 py-1 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Call
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            <!-- Even row -->
                            <tr class="bg-gray-100">
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                14:41
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-gray-500 hover:text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                            </tr>
                            <!-- Odd row -->
                            <tr class="bg-white">
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                15:51
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0722641951
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-gray-500 hover:text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                            </tr>
                            <!-- Even row -->
                            <tr class="bg-gray-100">
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                16:16
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0741
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-gray-500 hover:text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                            </tr>
                            <!-- Odd row -->
                            <tr class="bg-white">
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                17:05
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0727687589
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-gray-500 hover:text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                            </tr>
<!-- Even row -->
                            <tr class="bg-gray-100">
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                14:41
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-gray-500 hover:text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                            </tr>
                            <!-- Odd row -->
                            <tr class="bg-white">
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                15:51
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0722641951
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-gray-500 hover:text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                            </tr>
<!-- Even row -->
                            <tr class="bg-gray-100">
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                14:41
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                254716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-gray-500 hover:text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                            </tr>
                            <!-- Odd row -->
                            <tr class="bg-white">
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                15:51
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0722641951
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-gray-500 hover:text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                            </tr>
                            <tr class="bg-gray-100">
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                14:41
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-gray-500 hover:text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                            </tr>
                            <!-- Odd row -->
                            <tr class="bg-white">
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                15:51
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0722641951
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-gray-500 hover:text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                            </tr>
                            
                          </tbody>

                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </div> 

              <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
                <p class="mt-6 ml-20 text-xs font-medium text-black pb-1">
                  You have no active Agents
                </p>
              </div> 

              <div v-bind:class="{'hidden': openTab !== 4, 'block': openTab === 4}">
                <div class="flex flex-col pt-4">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-blue-200">

                          <thead>
                            <tr>
                              <th scope="col" class="px-2 py-1 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Call
                              </th>
                              <th scope="col" class="px-2 py-1 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Wait
                              </th>
                              <th scope="col" class="px-2 py-1 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Ingroup
                              </th>
                              <th scope="col" class="px-2 py-1 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Number
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            <!-- Even row -->
                            <tr class="bg-gray-100">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-gray-500 hover:text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                14:41
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                Finance
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                            </tr>
                            
                            
                          </tbody>

                        </table>
                      </div>
                    </div>
                  </div>
                </div>

              </div>  

              </div>


            </div>

          </nav>
        </div>

        <!-- Sidebar Footer -->
        <div class="flex-shrink-0 flex border-t-2 border-black p-2 bg-gray-500">
          <a href="#" class="flex-shrink-0 w-full group block">
            <div class="items-center">
              <div class="">

                <div class="px-2 text-center flex justify-between">
                <p class="text-md font-medium text-white pb-1">
                  Status: Lunch Break
                </p>
                <p class="text-md font-medium text-white pb-1">
                  Leads: 177 
                </p>
                </div>
                <hr class="mb-2 border-b border-black">
                <div class="text-md font-medium text-gray-400 group-hover:text-white flex">  

                  <span class="ml-1 flex text-white">  
                     <svg  class="mr-1 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                     <div class="flex">

                     <span>
                       Paused 
                     </span>
                     </div>
                  </span> 
                  
                  <span class="ml-24 hover:text-red-500 text-white flex">
                     <svg  class="mr-1 h-6 w-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                     </svg>
                     Logout
                  </span>
                </div>

                <!-- <p class="text-md font-medium text-white group-hover:text-white flex">
                  <span> 
                     <svg  class="mr-3 h-6 w-6 text-white hover:text-red-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg> 
                     Paused
                  </span> 
                  <span>
                     <svg  class="mr-3 h-6 w-6 text-white hover:text-red-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                     </svg>
                  </span>
                </p> -->

              </div>
              <div class="ml-14">
                <!-- <img class="inline-block h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> -->

                <!-- <svg  class="mr-3 h-6 w-6 text-white hover:text-red-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg> -->

              </div>
            </div>
          </a>
        </div>

      </div>
      <div class="flex-shrink-0 w-14" aria-hidden="true">
        <!-- Force sidebar to shrink to fit close icon -->
      </div>
    </div>
  </div>

<!-- //////////////////////////////////////////////////////////////// -->

  <!-- Static sidebar for desktop -->
  <div  class="relative hidden bg-white md:flex md:flex-shrink-0">
    <div class="flex flex-col w-72 ">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col h-0 flex-1">
        <div class="flex-1 flex flex-col pb-4 overflow-y-auto overflow-x-hidden">
          <nav class=" flex-1 space-y-1 relative">
           
             <p class="bg-indigo-900 text-md font-medium text-white pb-1 pt-1 text-center">
                Demo Campaign
                </p> 

            <div class="flex justify-between px-2">

            <button @click="sideG = true" type="button" class="rounded-lg py-2 inline-flex items-center px-1.5  border border-transparent text-xs font-medium border-gray-300 shadow-sm text-black bg-white hover:bg-indigo-800  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Ingroups
            </button>

            <button @click="sideP = true" type="button" class="rounded-lg inline-flex items-center px-1.5  border border-transparent text-xs font-medium rounded border-gray-300 shadow-sm text-black bg-white hover:bg-indigo-800  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              P - Code
            </button>

            <button @click="side = true" type="button" class="rounded-lg py-2 inline-flex items-center px-1.5  border border-transparent text-xs font-medium rounded border-gray-300 shadow-sm text-black bg-white hover:bg-indigo-800  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              M - Dial
            </button>

            <button type="button" class="rounded-lg py-2 inline-flex items-center px-1.5  border border-transparent text-xs font-medium rounded border-gray-300 shadow-sm text-black bg-white hover:bg-indigo-800  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              D - Next
            </button>

            </div>

            <div>

              <div class="sm:hidden">
                <label for="tabs" class="sr-only">Select a tab</label>
                <select id="tabs" name="tabs" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option>My Account</option>
                  <option>Company</option>
                  <option selected>Team Members</option>
                  <option>Billing</option>
                </select>
              </div>

              <div class="hidden sm:block mt-4 px-2">
                <div class="border-b border-black">
                  <nav class="-mb-px flex justify-between" aria-label="Tabs">
                    <a v-on:click="toggleTabs(1)" v-bind:class="{'text-black': openTab !== 1, 'text-black border-indigo-700': openTab === 1}" class="whitespace-nowrap py-2 px-1 border-b-4 border-transparent font-medium text-md hover:text-black hover:text-gray-500 hover:border-indigo-500">
                      Queue
                    </a>
                    <a v-on:click="toggleTabs(2)" v-bind:class="{'text-black': openTab !== 2, 'text-black border-indigo-700': openTab === 2}" class="whitespace-nowrap py-2 px-1 border-b-4 border-transparent font-medium text-md hover:text-black hover:text-gray-500 hover:border-indigo-500">
                      Logs
                    </a>
                    <a v-on:click="toggleTabs(3)" v-bind:class="{'text-black': openTab !== 3, 'text-black border-indigo-700': openTab === 3}" class="whitespace-nowrap py-2 px-1 border-b-4   border-transparent font-medium text-md hover:text-black hover:text-gray-500 hover:border-indigo-500">
                      Agents
                    </a>
                    <a v-on:click="toggleTabs(4)" v-bind:class="{'text-black': openTab !== 4, 'text-black border-indigo-700': openTab === 4}" class="whitespace-nowrap py-2 px-1 border-b-4 border-transparent font-medium text-md hover:text-black hover:text-gray-500 hover:border-indigo-500">
                      Backs
                    </a>
                  </nav>
                </div>
              </div>

              <div class="flex flex-col w-84 px-1"> 


              <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">

                <div class="flex flex-col pt-2">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="shadow overflow-hidden border-b border-transparent sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">

                          <thead>
                            <tr>
                              <th scope="col" class="px-2 py-1 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Call
                              </th>
                              <th scope="col" class="px-2 py-1 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Number
                              </th>
                              <th scope="col" class="px-2 py-1 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Wait
                              </th>
                              <th scope="col" class="px-2 py-1 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Ingroup
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            <!-- Even row -->
                            <tr class="bg-indigo-100">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                254716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                14:41
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                Finance
                              </td>
                            </tr>
                            <!-- Odd row -->
                            <tr class="bg-white">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                254716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                14:41
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                Finance
                              </td>
                            </tr>
                            <!-- Even row -->
                            <tr class="bg-indigo-100">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                254716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                14:41
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                Finance
                              </td>
                            </tr>
                            <!-- Odd row -->
                            <tr class="bg-white">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                254716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                14:41
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                Finance
                              </td>
                            </tr>
                            <!-- Even row -->
                            <tr class="bg-indigo-100">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                254716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                14:41
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                Finance
                              </td>
                            </tr>
                            <!-- Odd row -->
                            <tr class="bg-white">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                254716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                14:41
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                Finance
                              </td>
                            </tr>
                            <!-- Even row -->
                            <tr class="bg-indigo-100">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                254716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                14:41
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                Finance
                              </td>
                            </tr>
                            <!-- Odd row -->
                            <tr class="bg-white">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                254716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                14:41
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                Finance
                              </td>
                            </tr>
                            <!-- Even row -->
                            <tr class="bg-indigo-100">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                254716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                14:41
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                Finance
                              </td>
                            </tr>
                            <!-- Odd row -->
                            <tr class="bg-white">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                254716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                14:41
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                Finance
                              </td>
                            </tr>
                           
                          </tbody>

                        </table>
                        <!-- Pagination -->
                        <nav class="px-4 pt-2 flex items-center justify-between sm:px-0">
                          <div class="-mt-px w-0 flex-1 flex">
                            <a href="#" class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-black hover:text-indigo-400 hover:border-indigo-300">
                              <!-- Heroicon name: arrow-narrow-left -->
                              <svg class="mr-3 h-5 w-5 text-indigo-400 hover:text-indigo-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                              </svg>
                              Previous
                            </a>
                          </div>
                          <div class="hidden md:-mt-px md:flex">
                            
                          </div>
                          <div class="-mt-px w-0 flex-1 flex justify-end">
                            <a href="#" class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-black hover:text-indigo-400 hover:border-indigo-300">
                              Next
                              <!-- Heroicon name: arrow-narrow-right -->
                              <svg class="ml-3 h-5 w-5 text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                              </svg>
                            </a>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>

              </div> 

              <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">

                <div class="flex flex-col pt-2">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-8 lg:px-8">
                      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-blue-200">

                          <thead>
                            <tr>
                              <th scope="col" class="px-2 py-1 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Calls
                              </th>
                              <th scope="col" class="px-2 py-1 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Number
                              </th>
                              <th scope="col" class="px-2 py-1 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Time
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            <!-- Even row -->
                            <tr class="bg-indigo-100">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                14:41
                              </td>
                            </tr>
                            <!-- Odd row -->
                            <tr class="bg-white">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                14:41
                              </td>
                            </tr>
                            <!-- Even row -->
                            <tr class="bg-indigo-100">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                14:41
                              </td>
                            </tr>
                            <!-- Odd row -->
                            <tr class="bg-white">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                14:41
                              </td>
                            </tr>
                            <!-- Even row -->
                            <tr class="bg-indigo-100">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                14:41
                              </td>
                            </tr>
                            <!-- Odd row -->
                            <tr class="bg-white">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                14:41
                              </td>
                            </tr>
                            <!-- Even row -->
                            <tr class="bg-indigo-100">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                14:41
                              </td>
                            </tr>
                            <!-- Odd row -->
                            <tr class="bg-white">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                14:41
                              </td>
                            </tr>
                            <!-- Even row -->
                            <tr class="bg-indigo-100">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                14:41
                              </td>
                            </tr>
                            <!-- Odd row -->
                            <tr class="bg-white">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                14:41
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!-- Pagination -->
                        <nav class="px-4 pt-2 flex items-center justify-between sm:px-0">
                          <div class="-mt-px w-0 flex-1 flex">
                            <a href="#" class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-black hover:text-indigo-400 hover:border-indigo-300">
                              <!-- Heroicon name: arrow-narrow-left -->
                              <svg class="mr-3 h-5 w-5 text-indigo-400 hover:text-indigo-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                              </svg>
                              Previous
                            </a>
                          </div>
                          <div class="hidden md:-mt-px md:flex">
                            
                          </div>
                          <div class="-mt-px w-0 flex-1 flex justify-end">
                            <a href="#" class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-black hover:text-indigo-400 hover:border-indigo-300">
                              Next
                              <!-- Heroicon name: arrow-narrow-right -->
                              <svg class="ml-3 h-5 w-5 text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                              </svg>
                            </a>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>

              </div> 

              <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">

                <div>
                  <div class="mt-1 relative">
                   
                    <div class="absolute mt-1 w-full rounded-md bg-white">
                      <div class="justify-between flex mb-6 mt-3 px-4">
                        <div class="text-xs">
                        <span class="bg-green-400 flex-shrink-0 inline-block h-4 w-4 rounded-full" aria-hidden="true"></span>
                        Ready
                        </div>
                        <div class="text-xs">
                        <span class="bg-yellow-400 flex-shrink-0 inline-block h-4 w-4 rounded-full " aria-hidden="true"></span>
                        Paused
                        </div>
                        <div class="text-xs">
                        <span class="bg-blue-400 flex-shrink-0 inline-block h-4 w-4 rounded-full " aria-hidden="true"></span>
                        In-Call
                        </div>
                      </div>
                      <ul tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" class="max-h-96 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                        
                        <!-- Ready Status -->
                        <li id="listbox-item-0" role="option" class="py-1 bg-indigo-100 px-4 text-black cursor-default select-none relative">
                          <div class="flex items-center">
                            <!-- Online: "bg-green-400", Not Online: "bg-gray-200" -->
                            <span class="bg-green-400 flex-shrink-0 inline-block h-3 w-3 rounded-full " aria-hidden="true"></span>
                            <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                            <span class="ml-3 font-normal block truncate pl-1">
                              Wade Cooper
                              <span class="sr-only"> is online</span>
                            </span>
                          </div>

                          <span class="absolute inset-y-0 right-0 flex items-center pr-6">
                            <span class="ml-2"> 00:45 </span>
                          </span>
                        </li>

                        <!-- Paused Status -->
                        <li id="listbox-item-0" role="option" class="py-1 px-4 bg-white text-black cursor-default select-none relative">
                          <div class="flex items-center">
                            <!-- Online: "bg-green-400", Not Online: "bg-gray-200" -->
                            <span class="bg-yellow-400 flex-shrink-0 inline-block h-3 w-3 rounded-full " aria-hidden="true"></span>
                            <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                            <span class="ml-3 font-normal block truncate pl-1">
                              Wade Cooper
                              <span class="sr-only"> is online</span>
                            </span>
                          </div>

                          <span class="absolute inset-y-0 right-0 flex items-center pr-6">
                            <span class="ml-2"> 02:45 </span>
                          </span>
                        </li>

                        <!-- Incall Status -->
                        <li id="listbox-item-0" role="option" class="py-1 bg-indigo-100 px-4 text-black cursor-default select-none relative">
                          <div class="flex items-center">
                            <!-- Online: "bg-green-400", Not Online: "bg-gray-200" -->
                            <span class="bg-blue-400 flex-shrink-0 inline-block h-3 w-3 rounded-full " aria-hidden="true"></span>
                            <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                            <span class="ml-3 font-normal block truncate pl-1">
                              Wade Cooper
                              <span class="sr-only"> is online</span>
                            </span>
                          </div>

                          <span class="absolute inset-y-0 right-0 flex items-center pr-6">
                            <span class="ml-2"> 01:25 </span>
                          </span>
                        </li>

                        <!-- Ready Status -->
                        <li id="listbox-item-0" role="option" class="py-1 bg-white px-4 text-black cursor-default select-none relative">
                          <div class="flex items-center">
                            <!-- Online: "bg-green-400", Not Online: "bg-gray-200" -->
                            <span class="bg-green-400 flex-shrink-0 inline-block h-3 w-3 rounded-full " aria-hidden="true"></span>
                            <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                            <span class="ml-3 font-normal block truncate pl-1">
                              Wade Cooper
                              <span class="sr-only"> is online</span>
                            </span>
                          </div>

                          <span class="absolute inset-y-0 right-0 flex items-center pr-6">
                            <span class="ml-2"> 00:45 </span>
                          </span>
                        </li>

                      
                      </ul>
                    </div>
                  </div>
                </div>
  

              </div> 

              <div v-bind:class="{'hidden': openTab !== 4, 'block': openTab === 4}">

                 <div class="flex flex-col pt-2">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-8 lg:px-8">
                      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-blue-200">

                          <thead>
                            <tr>
                              <th scope="col" class="px-2 py-1 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Calls
                              </th>
                              <th scope="col" class="px-2 py-1 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Number
                              </th>
                              <th scope="col" class="px-2 py-1 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Time
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            <!-- Even row -->
                            <tr class="bg-indigo-100">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                14:41
                              </td>
                            </tr>
                            <!-- Odd row -->
                            <tr class="bg-white">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                14:41
                              </td>
                            </tr>
                            <!-- Even row -->
                            <tr class="bg-indigo-100">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                14:41
                              </td>
                            </tr>
                            <!-- Odd row -->
                            <tr class="bg-white">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                14:41
                              </td>
                            </tr>
                            <!-- Even row -->
                            <tr class="bg-indigo-100">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                14:41
                              </td>
                            </tr>
                            <!-- Odd row -->
                            <tr class="bg-white">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                14:41
                              </td>
                            </tr>
                            <!-- Even row -->
                            <tr class="bg-indigo-100">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                14:41
                              </td>
                            </tr>
                            <!-- Odd row -->
                            <tr class="bg-white">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                14:41
                              </td>
                            </tr>
                            <!-- Even row -->
                            <tr class="bg-indigo-100">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                14:41
                              </td>
                            </tr>
                            <!-- Odd row -->
                            <tr class="bg-white">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <router-link to="/details">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </router-link>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                0716202298
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                14:41
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!-- Pagination -->
                        <nav class="px-4 pt-2 flex items-center justify-between sm:px-0">
                          <div class="-mt-px w-0 flex-1 flex">
                            <a href="#" class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-black hover:text-indigo-400 hover:border-indigo-300">
                              <!-- Heroicon name: arrow-narrow-left -->
                              <svg class="mr-3 h-5 w-5 text-indigo-400 hover:text-indigo-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                              </svg>
                              Previous
                            </a>
                          </div>
                          <div class="hidden md:-mt-px md:flex">
                            
                          </div>
                          <div class="-mt-px w-0 flex-1 flex justify-end">
                            <a href="#" class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-black hover:text-indigo-400 hover:border-indigo-300">
                              Next
                              <!-- Heroicon name: arrow-narrow-right -->
                              <svg class="ml-3 h-5 w-5 text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                              </svg>
                            </a>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>

              </div>  

              </div>


            </div>

          </nav>
        </div>

        <!-- Sidebar Footer -->
        <div class="flex-shrink-0 flex p-2 bg-indigo-900">
          <a href="#" class="flex-shrink-0 w-full group block">
            <div class="items-center">
              <div class="">

                <div class="px-2 text-center flex justify-between">
                <p class="text-md font-medium text-white pb-1">
                  Status: Lunch Break
                </p>
                <p class="text-md font-medium text-white pb-1">
                  Leads: 177 
                </p>
                </div>
                <hr class="mb-2 border-b border-black">
                <div @click="paused = !paused" class="text-md font-medium text-gray-400 group-hover:text-white flex">  

                  <span class="ml-1 flex text-white hover:text-gray-400">  
                     <svg v-if="paused" class="mr-1 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                     <svg v-if="!paused" class="mr-1 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                     <div class="flex">
                     <span v-if="paused">
                       Paused 
                     </span>
                     <span  v-if="!paused">
                       Active 
                     </span>
                     </div>
                  </span> 
                  
                  <span class="ml-24 hover:text-gray-400 text-white flex">
                     <svg  class="mr-1 h-6 w-6 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                     </svg>
                     Logout
                  </span>
                </div>


              </div>
            </div>
          </a>
        </div>

      </div>
    </div>

      <!-- Manual Dial Side Bar -->
    <div v-if="side" class="absolute md:flex flex-col md:flex-row md:min-h-screen w-full">
      <div class="flex flex-col w-full md:w-84 text-gray-700 bg-indigo-900 dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0" x-data="{ open: false }">
        <div class="flex-shrink-0 px-2 py-2 flex flex-row-reverse">
          <button  @click="side = false" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Close sidebar</span>
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav  class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto static">

          <!-- Dial Input   -->
          <div v-if="!call" class="pt-8 text-center sm:mt-5">
            <h3 class="text-lg leading-6 font-medium text-white" id="modal-headline">
              Enter the Phone Number
            </h3>
            <div class="pt-5">
              <div class="px-2">
                <div class="mt-1 relative rounded-md shadow-sm">
                  <div class="absolute inset-y-0 left-0 flex items-center">
                    <label for="country" class="sr-only">Country</label>
                    <select disabled id="country" name="country" class="focus:ring-gray-500 focus:border-gray-500 h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                      <option>🇰🇪</option>
                    </select>
                  </div>
                  <input type="number" name="phone_number" id="phone_number" class="focus:ring-gray-500 focus:border-gray-500 block w-full pl-16 sm:text-sm border-gray-300 rounded-md" placeholder="722 200 200">
                </div>
              </div>
            </div>
          </div>

          <!-- During Call   -->
          <div v-if="call" class="mt-3 text-center sm:mt-5">
              <h3 class="text-sm italic leading-6 font-medium text-white" id="modal-headline">
              Ringing 0716202298
            </h3>  
            <div class="flex justify-between mt-5">

              <button v-if="transfer" @click="transfer = !transfer" type="button" class="inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <!-- Heroicon name: mail -->
              <svg class="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
              </svg>
              Transfer
            </button>
            <button v-if="!transfer" @click="transfer = !transfer" type="button" class="inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-black bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <svg class="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
              </svg>
              Transfer
            </button>

            <button v-if="!park" @click="park = !park" type="button" class="inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <svg v-if="!park" class="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              <svg v-if="park" class="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
              Park
            </button>
            <button v-if="park" @click="park = !park" type="button" class="inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <svg v-if="!park" class="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
              <svg v-if="park" class="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
              </svg>
              Park
            </button>

            <button type="button" class="inline-flex items-center px-2 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <svg class="-ml-0.5 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              DTMF
            </button> 
            </div>                    
          </div>

          <!-- During Transfer -->
          <div v-if="!transfer && call">
          <div class="hidden sm:block mt-8">
            <div class="border-b border-white">
              <nav class="-mb-px flex justify-between" aria-label="Tabs">
                <a v-on:click="toggleTab(1)" v-bind:class="{'text-white': openTabs !== 1, 'text-white border-indigo-600': openTabs === 1}" class="whitespace-nowrap py-2 px-1 border-b-4 border-transparent font-medium text-sm hover:text-gray-300 hover:border-indigo-400">
                  Ingroup
                </a>
                <a v-on:click="toggleTab(2)" v-bind:class="{'text-white': openTabs !== 2, 'text-white border-indigo-600': openTabs === 2}" class="whitespace-nowrap py-2 px-1 border-b-4 border-transparent font-medium text-sm  hover:text-gray-300 hover:border-indigo-400">
                  Agent
                </a>
                <a v-on:click="toggleTab(3)" v-bind:class="{'text-white': openTabs !== 3, 'text-white border-indigo-600': openTabs === 3}" class="whitespace-nowrap py-2 px-1 border-b-4   border-transparent font-medium text-sm hover:text-gray-300 hover:border-indigo-400">
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

          <!--Call & Hang-Up  Button -->
          <div class="mt-5 sm:mt-6 text-center absolute bottom-52 left-24">
            <div class="">
            <button v-if="!call" @click='call = !call' type="button" class="inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-4 bg-green-500 text-base font-medium text-black hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">
              <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
              </svg>
            </button>
            <button v-if="call" @click='call = !call' type="button" class="inline-flex justify-center rounded-full border border-transparent shadow-sm px-4 py-4 bg-red-500 text-base font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">
              <svg class="h-10 w-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
               <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
               <path d="M16.707 3.293a1 1 0 010 1.414L15.414 6l1.293 1.293a1 1 0 01-1.414 1.414L14 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L12.586 6l-1.293-1.293a1 1 0 011.414-1.414L14 4.586l1.293-1.293a1 1 0 011.414 0z" />
              </svg>
            </button>
            </div>
          </div>

        </nav>
      </div>
    </div>

    <!-- Ingroup Side Bar -->
    <div v-if="sideG" class="absolute md:flex flex-col md:flex-row md:min-h-screen w-full">
      <div class="flex flex-col w-full md:w-84 text-gray-700 bg-indigo-900 dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0" x-data="{ open: false }">
        <div class="flex-shrink-0 px-2 py-2 flex flex-row-reverse">
          <button  @click="sideG = false" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Close sidebar</span>
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav  class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
          <div class="">
            
          </div>
          <h4 class="text-xl tracking-tight font-bold text-white sm:text-xl ml-10 pb-5">
            Ingroup Selection
          </h4>  
          <div class="ml-4">
            <div class="grid grid-cols-2 gap-6 text-center">
              <label class="inline-flex items-center mt-3">
                  <input disabled type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600" checked><span class="ml-2 text-white text-sm">Agent Direct</span>
              </label>
              <label class="inline-flex items-center mt-3">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600" checked><span class="ml-2 text-white text-sm">Care</span>
              </label>
              <label class="inline-flex items-center mt-3">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600" checked><span class="ml-2 text-white text-sm">Reception</span>
              </label>
              <label class="inline-flex items-center mt-3">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600" checked><span class="ml-2 text-white text-sm">Finance</span>
              </label>
              <label class="inline-flex items-center mt-3">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600"><span class="ml-2 text-white text-sm">Procurement</span>
              </label>
              <label class="inline-flex items-center mt-3">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600"><span class="ml-2 text-white text-sm">Marketing</span>
              </label>
              <label class="inline-flex items-center mt-3">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600"><span class="ml-2 text-white text-sm">Strategy</span>
              </label>
              <label class="inline-flex items-center mt-3">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600"><span class="ml-2 text-white text-sm">Logistics</span>
              </label>
              <label class="inline-flex items-center mt-3">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600"><span class="ml-2 text-white text-sm">HR</span>
              </label>
              <label class="inline-flex items-center mt-3">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600"><span class="ml-2 text-white text-sm">IT</span>
              </label>

              
            </div>
        </div>

        </nav>
      </div>
    </div>

    <!-- Pause Side Bar -->
    <div v-if="sideP" class="absolute md:flex flex-col md:flex-row md:min-h-screen w-full">
      <div class="flex flex-col w-full md:w-84 text-gray-700 bg-indigo-900 dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0" x-data="{ open: false }">
        <div class="flex-shrink-0 px-2 py-2 flex flex-row-reverse">
          <button  @click="sideP = false" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Close sidebar</span>
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav  class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto">
          <div class="">
            
          </div>
          <h4 class="text-xl tracking-tight font-bold text-white sm:text-xl ml-6 pb-5">
            Pause Code Selection
          </h4>  
          <div class="ml-4">
            <div class="mt-4">
              <div class="mt-2">
                <label class="inline-flex items-center">
                  <input type="radio" class="form-radio text-indigo-600" name="accountType" value="personal">
                  <span class="ml-2 text-white text-sm">Tea Break</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input type="radio" class="form-radio text-indigo-600" name="accountType" value="busines">
                  <span class="ml-2 text-white text-sm">Lunch Break</span>
                </label>
              </div>
            </div>
          </div>

        </nav>
      </div>
    </div>

  </div>
<!-- Test Toggle  -->
  <div class="flex flex-col w-0 flex-1 overflow-hidden">
    <div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
      <button @click='toggle = !toggle' class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
        <span class="sr-only">Open sidebar</span>
        <!-- Heroicon name: menu -->
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
<!--End Test Toggle  -->
    <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">

      <div class="py-0">

        <div class="max-w-7xl mx-auto px-0 sm:px-0 md:px-0">
          <!-- Replace with your content -->
            <div class="rounded-lg h-96">
              <iframe src = "https://www.youtube.com/embed/cC9r0jHF-Fw" width="1003" height="665" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          <!-- /End replace -->

        </div>

        <!-- Campaign Modal -->
        <div  class="fixed z-10 inset-0 overflow-y-auto">
          <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
              <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <!-- This element is to trick the browser into centering the modal contents. -->
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          
            <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
             
              <div>
                <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <!-- Heroicon name: check -->
                  <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                    Choose Campaign
                  </h3>
                  <div class="mt-2">
                    <div class="px-8">
                      <fieldset class="mt-6 bg-white">
                        <div class="mt-1 rounded-md shadow-sm -space-y-px">
                          <div>
                            <label for="country" class="sr-only">Country</label>
                            <select id="country" name="country" class="focus:ring-indigo-500 focus:border-indigo-500 relative block w-full rounded-none rounded-t-md bg-transparent focus:z-10 sm:text-sm border-gray-300">
                              <option class="text-gray-200">Campaign List</option>
                              <option>Demo Campaign</option>
                              <option>Test Campaign</option>
                            </select>
                          </div>
                        </div>
                      </fieldset>
                    </div>

                  </div>
                </div>
              </div>
              
              <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button @click="modal = !modal" type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">
                  Submit
                </button>
                <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Disposition Modal  -->
        <div v-if="modalD" class="fixed z-10 inset-0 overflow-y-auto">
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
                <div class="mt-3 text-center sm:mt-5">
                  <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                    Disposition
                  </h3>
                  <div class="mt-2">
                    <fieldset>
                    

                    <div class="bg-white rounded-md -space-y-px">
                      <div class="grid grid-cols-2 gap-6">

                        <div class="relative border rounded-tl-md rounded-tr-md p-4 flex">
                          <div class="flex items-center h-5">
                            <input id="settings-option-0" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300" checked>
                          </div>
                          <label for="settings-option-0" class="ml-3 flex flex-col cursor-pointer">
                            <span class="block text-sm font-medium">
                              Call Back
                            </span>
                          </label>
                        </div>

                        <div class="relative border border-gray-200 p-4 flex">
                          <div class="flex items-center h-5">
                            <input id="settings-option-1" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                          </div>
                          <label for="settings-option-1" class="ml-3 flex flex-col cursor-pointer">
                            <span class="block text-sm font-medium">
                              Do Not Call
                            </span>
                          </label>
                        </div>

                        <div class="relative border border-gray-200 rounded-bl-md rounded-br-md p-4 flex">
                          <div class="flex items-center h-5">
                            <input id="settings-option-2" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                          </div>
                          <label for="settings-option-2" class="ml-3 flex flex-col cursor-pointer">
                            <span class="block text-sm font-medium">
                              Sale Made
                            </span>
                          </label>
                        </div>

                        <div class="relative border border-gray-200 rounded-bl-md rounded-br-md p-4 flex">
                          <div class="flex items-center h-5">
                            <input id="settings-option-2" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                          </div>
                          <label for="settings-option-2" class="ml-3 flex flex-col cursor-pointer">
                            <span class="block text-sm font-medium">
                              Decline Sale 
                            </span>
                          </label>
                        </div>

                        <div class="relative border border-gray-200 rounded-bl-md rounded-br-md p-4 flex">
                          <div class="flex items-center h-5">
                            <input id="settings-option-2" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                          </div>
                          <label for="settings-option-2" class="ml-3 flex flex-col cursor-pointer">
                            <span class="block text-sm font-medium">
                             No Answer 
                            </span>
                          </label>
                        </div>

                        <div class="relative border border-gray-200 rounded-bl-md rounded-br-md p-4 flex">
                          <div class="flex items-center h-5">
                            <input id="settings-option-2" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                          </div>
                          <label for="settings-option-2" class="ml-3 flex flex-col cursor-pointer">
                            <span class="block text-sm font-medium">
                              Phone Off 
                            </span>
                          </label>
                        </div>

                        <div class="relative border border-gray-200 rounded-bl-md rounded-br-md p-4 flex">
                          <div class="flex items-center h-5">
                            <input id="settings-option-2" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                          </div>
                          <label for="settings-option-2" class="ml-3 flex flex-col cursor-pointer">
                            <span class="block text-sm font-medium">
                             No Pitch 
                            </span>
                          </label>
                        </div>

                        <div class="relative border border-gray-200 rounded-bl-md rounded-br-md p-4 flex">
                          <div class="flex items-center h-5">
                            <input id="settings-option-2" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                          </div>
                          <label for="settings-option-2" class="ml-3 flex flex-col cursor-pointer">
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
              </div>
              <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">
                  Submit Only
                </button>
                <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm">
                  Submit & Pause
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Ingroup Modal  -->
        <div v-if="modalD" class="fixed z-10 inset-0 overflow-y-auto">
          <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
              <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <div>
                <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                    Ingroups
                  </h3>
                  <div class="mt-2">
                    <fieldset>
                    

                    <div class="bg-white rounded-md -space-y-px">
                      <div class="grid grid-cols-3 gap-6">

                        <div class="relative border rounded-tl-md rounded-tr-md p-4 flex">
                          <div class="flex items-center h-5">
                            <input id="settings-option-0" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300" checked>
                          </div>
                          <label for="settings-option-0" class="ml-3 flex flex-col cursor-pointer">
                            <span class="block text-sm font-medium">
                              Care
                            </span>
                          </label>
                        </div>

                        <div class="relative border border-gray-200 p-4 flex">
                          <div class="flex items-center h-5">
                            <input id="settings-option-1" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                          </div>
                          <label for="settings-option-1" class="ml-3 flex flex-col cursor-pointer">
                            <span class="block text-sm font-medium">
                              Reception
                            </span>
                          </label>
                        </div>

                        <div class="relative border border-gray-200 rounded-bl-md rounded-br-md p-4 flex">
                          <div class="flex items-center h-5">
                            <input id="settings-option-2" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                          </div>
                          <label for="settings-option-2" class="ml-3 flex flex-col cursor-pointer">
                            <span class="block text-sm font-medium">
                              Finance
                            </span>
                          </label>
                        </div>

                      </div>

                    </div>
                    </fieldset>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">
                  Submit
                </button>
                <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Pause Modal  -->
        <div v-if="modalP" class="fixed z-10 inset-0 overflow-y-auto">
          <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
              <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
              <div>
                <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <svg class="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                    Pause Code
                  </h3>
                  <div class="mt-2">
                    <fieldset>
                    

                    <div class="bg-white rounded-md -space-y-px">
                      <div class="grid grid-cols-3 gap-6">

                        <div class="relative border rounded-tl-md rounded-tr-md p-4 flex">
                          <div class="flex items-center h-5">
                            <input id="settings-option-0" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300" checked>
                          </div>
                          <label for="settings-option-0" class="ml-3 flex flex-col cursor-pointer">
                            <span class="block text-sm font-medium">
                              Lunch
                            </span>
                          </label>
                        </div>

                        <div class="relative border border-gray-200 p-4 flex">
                          <div class="flex items-center h-5">
                            <input id="settings-option-1" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                          </div>
                          <label for="settings-option-1" class="ml-3 flex flex-col cursor-pointer">
                            <span class="block text-sm font-medium">
                              Tea
                            </span>
                          </label>
                        </div>

                        <div class="relative border border-gray-200 rounded-bl-md rounded-br-md p-4 flex">
                          <div class="flex items-center h-5">
                            <input id="settings-option-2" name="privacy_setting" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 cursor-pointer border-gray-300">
                          </div>
                          <label for="settings-option-2" class="ml-3 flex flex-col cursor-pointer">
                            <span class="block text-sm font-medium">
                              Reviews
                            </span>
                          </label>
                        </div>

                      </div>

                    </div>
                    </fieldset>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm">
                  Submit
                </button>
                <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-gray-600 text-base font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>



      </div>
    </main>

  </div>
</div>

</template>

<script>
export default {
  name: 'Dashboard',
  props: {
  },
  data() {
    return{
      openTab: 1,
      openTabs: 1,
      toggle: false,
      call: false,
      transfer: false,
      park: false,
      side: false,
      paused: false,
      sideG: false, 
      sideP: false, 
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    },
    toggleTab: function(tabNumber){
      this.openTabs = tabNumber
    },
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
</style>
