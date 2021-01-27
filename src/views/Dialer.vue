<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
<div class="h-screen flex overflow-hidden bg-gray-100">
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
  <div class="md:hidden" v-show="toggles">
    <div class="fixed inset-0 flex z-40">

      <div class="fixed inset-0" aria-hidden="true">
        <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
      </div>
      <!-- Responsive Menu -->
      <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white">
        <div class="absolute top-0 right-0 -mr-12 pt-2">
          <button  @click="toggles = false" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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

             <p  class="bg-indigo-900 text-md uppercase font-medium text-white pb-1 pt-1 text-center">
              {{ activecampaign }} campaign
             </p>

            <div class="flex justify-evenly px-2 pt-3 ">

            <span class="relative z-0 inline-flex shadow-sm rounded-md">
              <button @click="sideG = true" type="button" class="relative inline-flex items-center font-semibold px-3 py-2 rounded-l-md border border-gray-300 bg-white text-xs  text-black hover:bg-gray-800 hover:text-white focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                InGroups
              </button>
              <button @click="sideP = true" type="button" class="-ml-px relative inline-flex items-center font-semibold px-3 py-2 border border-gray-300 bg-white text-xs  text-black hover:bg-gray-800 hover:text-white focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                PCode
              </button>
              <button @click="dialNext" v-if="!ratio" type="button" class="-ml-px relative inline-flex items-center font-semibold px-3 py-2 border border-gray-300 bg-white text-xs  text-black hover:bg-gray-800 hover:text-white focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                DNext
              </button>
              <button @click="manualDial" type="button" class="-ml-px relative inline-flex items-center font-semibold px-3 py-2 rounded-r-md border border-gray-300 bg-white text-xs text-black hover:bg-gray-800 hover:text-white focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                MDial
              </button>

              <!-- comment -->
            </span>

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
                    <a v-on:click="toggleTab(1)" v-bind:class="{'text-black': openTab !== 1, 'text-black border-indigo-700': openTab === 1, 'css-selector': queue != 0, 'text-white': queue != 0 }" class="whitespace-nowrap py-2 px-1 border-b-4 border-transparent font-medium text-sm hover:text-black hover:text-gray-500 hover:border-indigo-500">
                      Queue
                      <!-- <span class="blink flex-shrink-0 inline-block h-2 w-2 rounded-full ml-1 mb-2" aria-hidden="true"></span> -->
                    </a>
                    <a v-on:click="toggleTab(2)" v-bind:class="{'text-black': openTab !== 2, 'text-black border-indigo-700': openTab === 2}" class="whitespace-nowrap py-2 px-1 border-b-4 border-transparent font-medium text-sm hover:text-black hover:text-gray-500 hover:border-indigo-500">
                      Logs
                    </a>
                    <a v-on:click="toggleTab(3)" v-bind:class="{'text-black': openTab !== 3, 'text-black border-indigo-700': openTab === 3}" class="whitespace-nowrap py-2 px-1 border-b-4   border-transparent font-medium text-sm hover:text-black hover:text-gray-500 hover:border-indigo-500">
                      Agents
                    </a>
                    <a v-on:click="toggleTab(4)" v-bind:class="{'text-black': openTab !== 4, 'text-black border-indigo-700': openTab === 4, 'css-selector text-white': dueCallBacks === true, 'text-black': dueCallBacks !== false && callbacks !== null ,  }" class="whitespace-nowrap py-2 px-1 border-b-4 border-transparent font-medium text-sm hover:text-black hover:text-gray-500 hover:border-indigo-500">
                      Backs
                    </a>
                  </nav>
                </div>
              </div>

              <div class="flex flex-col min-w-full px-1">


              <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">

                <div class="flex flex-col pt-2">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                      <div class="overflow-hidden sm:rounded-lg">
                        <table v-if="showQueueTable" class="min-w-full divide-y divide-gray-200">

                          <thead>
                            <tr>
                              <th scope="col" class="px-2 py-1 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Take
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
                            <tr v-for="item in queue" :key="item.caller" class="bg-indigo-100">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium">
                              <a  @click="takeCall(item)">
                                <svg class="mr-1 w-5 h-5 text-black hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"></path></svg>
                              </a>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-xs text-gray-500">
                                {{ item.caller }}
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-xs text-gray-500">
                                {{ item.queue_time }}
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-xs text-black">
                                {{ item.ingroup }}
                              </td>
                            </tr>


                          </tbody>

                        </table>
                        <p v-else class="text-gray-800 font-semibold text-xs flex justify-center mt-40">You have no calls in queue</p>
                        <!-- Pagination -->

                      </div>
                    </div>
                  </div>
                </div>

              </div>

              <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">

                <div class="flex flex-col pt-2">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="relative py-2 align-middle inline-block min-w-full sm:px-8 lg:px-8">
                      <div class="overflow-hidden sm:rounded-lg">
                        <div class="" v-if="showLogTable" >
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

                            <tr v-for="(log, index) in callLogs" :key="log.call_log_id" v-bind:class="tableStrip(index)">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <a @click="dial(stripNumber(log.phone_number))">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </a>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                {{ stripNumber(log.phone_number) }}
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                {{  getHumanDate(log.call_date) }}
                              </td>
                            </tr>

                          </tbody>
                        </table>

                        </div>
                        <p v-else class="text-gray-800 font-semibold text-xs flex justify-center mt-40">You have made no calls today</p>
                      </div>

                      <!-- Pagination -->
                      <div class="static bottom-0 pt-2">
                        <div>

                        <nav id="pagination-app" class="px-4 flex items-center justify-center sm:px-0">
                          <div v-if="page != 1" class="-mt-px w-0 flex-1 flex">
                            <a @click="page--" href="#" class="border-transparent pt-3 pr-1 inline-flex items-center text-sm font-medium text-black hover:text-indigo-400">
                              <!-- Heroicon name: arrow-narrow-left -->
                              <svg  class="mr-3 h-5 w-5 text-indigo-400 hover:text-indigo-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                              </svg>
                              Previous
                            </a>
                          </div>
                     
                          <div class="flex justify-center">
                            <!-- <p>page 1 of 5</p> -->
                          <!-- <button type="button" class="justify-center btn text-sm btn-sm btn-outline-secondary" v-for="pageNumber in pages.slice(page-1, page+5)" v-bind:key="pageNumber" @click="page = pageNumber"> {{pageNumber}} </button> -->
                          </div>


                          <div  v-if="page < pages.length && page != pages.length"  class="-mt-px w-0 flex-1 flex justify-end">
                            <a @click="page++" href="#" class="border-transparent pt-3 pl-1 inline-flex items-center text-sm font-medium text-black hover:text-indigo-400">
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
                      <ul tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-item-3" class="max-h-96 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm">

                        <!-- Ready Status -->
                        <li v-bind:class="tableStrip(index)" v-for="(item, index) in activeAgents" :key="item.user" id="listbox-item-0" role="option" class="py-1 px-4 text-black cursor-default select-none relative">
                          <div class="flex items-center justify-between">
                            <!-- Status Color -->
                            <span v-bind:class="userStatus(item.status)" class="flex-shrink-0 inline-block h-3 w-3 rounded-full" aria-hidden="true"></span>

                            <span class="ml-3 font-normal block truncate pl-1">
                              <span class="capitalize">
                              {{ item.user}}
                              </span>
                              <span class="sr-only"> is online</span>
                            </span>

                            <span class="inset-y-0 uppercase flex items-center pr-6">
                              <span class="ml-2"> {{ item.campaign }}  </span>
                            </span>

                          </div>
                        </li>

                      </ul>
                    </div>
                  </div>
                </div>


              </div>

              <div v-bind:class="{'hidden': openTab !== 4, 'block': openTab === 4}">

                 <div class="flex flex-col pt-2">
                  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="relative py-2 align-middle inline-block min-w-full sm:px-8 lg:px-8">
                      <div class="overflow-hidden sm:rounded-lg">
                        <div v-if="showCallBackTable" class="">
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
                            <tr v-for="(item,index) in callbacks" :key="index"  v-bind:class="tableStrip(index)">
                              <td class="px-2 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                <a @click="dial(stripNumber(item.PhoneNumber)) && deleteCallback(item)">
                                   <svg class="mr-1 h-5 w-5 text-black hover:text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                  </svg>
                                </a>
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-gray-500">
                                {{ item.PhoneNumber }}
                              </td>
                              <td class="px-2 py-2 whitespace-nowrap text-sm text-black">
                                {{ getHumanDate(item.CustomerTime)  }}
                              </td>
                            </tr>

                          </tbody>
                        </table>
                        </div>
                        <p v-else class="text-gray-800 font-semibold text-xs flex justify-center mt-40">You have no callbacks today</p>
                      </div>

                      <!-- Pagination -->
                      <div class="static bottom-0 pt-2">
                        <nav class="px-4 flex items-center justify-between sm:px-0">
                          <div v-if="pageCallBack != 1" class="-mt-px w-0 flex-1 flex">
                            <a @click="pageCallBack--" href="#" class="border-transparent pt-3 pr-1 inline-flex items-center text-sm font-medium text-black hover:text-indigo-400">
                              <!-- Heroicon name: arrow-narrow-left -->
                              <svg class="mr-3 h-5 w-5 text-indigo-400 hover:text-indigo-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                              </svg>
                              Previous
                            </a>
                          </div>
                          <div class="hidden md:-mt-px md:flex">

                          </div>
                          <div v-if="pageCallBack < pagesCallBack.length && pageCallBack != pagesCallBack.length" class="-mt-px w-0 flex-1 flex justify-end">
                            <a @click="pageCallBack++" href="#" class="border-transparent pt-3 pl-1 inline-flex items-center text-sm font-medium text-black hover:text-indigo-400">
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
        <div class="flex-shrink-0 flex">
          <a href="#" class="flex-shrink-0 w-full group block">
            <div class="items-center">
              <div class="">

                <div class="bg-indigo-900 px-2 text-center flex justify-between">
                <p class="text-md font-medium text-white pb-1">
                  Status: {{ activepausecode }}
                </p>
                <p class="text-md font-medium text-white pb-1">
                  Leads: {{ dialable_leads }}
                </p>
                </div>

                <div class="bg-indigo-600 text-md font-medium text-gray-400 group-hover:text-white flex justify-between px-2 py-2">

                    <button v-if="ready" @click="toggle('PAUSED')" type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-black bg-blue-400 hover:text-black hover:bg-white focus:outline-none">
                      <span class="flex">
                        <svg  class="mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div class="flex">
                        <span>
                          Active
                        </span>
                        </div>
                      </span>
                    </button>

                    <button v-else @click="toggle('Ready')" type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-black bg-blue-400 hover:text-black hover:bg-white focus:outline-none">
                      <span class="flex">
                        <svg class="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div class="flex">
                        <span>
                          Paused
                        </span>
                        </div>
                      </span>
                    </button>

                    <button @click="logout" type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-black bg-blue-400 hover:text-black hover:bg-white focus:outline-none">

                      <span class="flex">
                        <svg  class="mr-2 h-4 w-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        Logout
                      </span>

                    </button>



                </div>

              </div>
            </div>
          </a>
        </div>

      </div>
    </div>

      <!-- Manual Dial Side Bar -->
      <ManualDial v-if="side" class="absolute w-full"/>

      <!-- Ingroup Side Bar -->
      <Ingroup v-if="sideG" class="absolute w-full"/>

      <DialNext v-if="sideD" class="absolute w-full" />

      <!-- Pause Side Bar -->
      <PauseCode v-if="sideP" class="absolute w-full"/>


  </div>

    <div class="flex flex-col w-0 flex-1 overflow-hidden">
      <!-- Close Toggle Mobile  -->
      <div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
        <button @click='toggles = !toggles' class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
          <span class="sr-only">Open sidebar</span>
          <!-- Heroicon name: menu -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">

        <div class="py-0">

          <div v-bind:class="{'invisible': sideP === true, 'visible': sideP === false}" class="mx-auto px-0 sm:px-0 md:px-0">
            <!-- IFRAME -->
              <div class="h-screen">
                <iframe :src='iframe' id="iframe" width="100%" height="100%"  title="File details"></iframe>
                <!-- <iframe src = "http://172.16.10.202" width="1003" height="665" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
              </div>
            <!-- /IFRAME-->
          </div>

          <!-- Modals -->
          <CampaignModal    v-if="showcampaignModal"  @close="showcampaignModal   = false" />
          <DispositionModal v-if="dispositionModal"   @close="dispositionModal    = false" />
          <BlendModal       v-if="blendModal"         @close="blendModal          = false" />

        </div>
      </main>

    </div>

  </div>

</template>

<script>
import moment from 'moment';
import BlendModal from '@/components/modals/BlendModal.vue';
import CampaignModal from '@/components/modals/CampaignModal.vue';
import DispositionModal from '@/components/modals/DispositionModal.vue';
import ManualDial from '@/components/sidebars/ManualDial.vue';
import PauseCode from '@/components/sidebars/PauseCode.vue';
import Ingroup from '@/components/sidebars/Ingroup.vue';
import DialNext from '@/components/sidebars/DialNext.vue';

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
  name: 'Dashboard',
  props: {
  },
  components: {
    CampaignModal,
    DispositionModal,
    BlendModal,
    ManualDial,
    PauseCode,
    Ingroup,
    DialNext,
  },
  data() {
    return{
      dueCallBacks: false,
      posts: '',
      postsCallback: '',

      page: 1,
      pageCallBack: 1,

      perPage: 10.0,

      pages: [],
      pagesCallBack: [],

      show: true,
      user: null,
      blendModal: false,
      ingroupModal: false,
      dispositionModal: false,
      switchCampaignModal:false,
      successModal: false,
      InfoModal: false,
      errorModal: false,
      successnotification: false,
      //dialTrue: false,
      ingroupShow: false,
      onCallTrue: false,
      transferTrue: false,
      pauseCodeTrue: false,
      activityShow: true,
      campaignShow: true,
      showUser: false,
      campaignModal : true,
      showcalendarModal: false,
      errorinfoModal: false,
      paused : true,
      callParked: false,
      //grabcallTrue: false,
      conferenceCall : false,
      grabTransfer : false,
      //callTrue: false,
      activetab: 1,
      tryAgain : false,
      select : true,
      clicked: true,
      isDisable : false,
      toggleMenu: false,
      count : false,

      openTab: 1,
    //  openTabs: 1,
      toggles: false,
     // call: false,
    //  transfer: false,
    //  park: false,
      side: false,
      pausedd: false,
      sideG: false,
      sideP: false,
      sideD: false,
      camp: false
    }
  },
  created() {
      this.interval = setInterval(() => this.callbackTimes(), 1000);
      // this.interval = setInterval(() => this.logs(), 1000);
  },
  computed: {
    openSideG(){
      return (this.$store.state.pause_code != 'LOGIN') ? true : false
    },
    autodialValue(){
        return (this.$store.state.userState == 'READY' && this.$store.state.callStatus == 'livecall'  ) ? '1' : '0'
    },
    ratio (){
      return (this.$store.state.dial_method == 'RATIO') ? true : false
    },
    showcampaignModal () {
      return (this.$store.state.campaign == null ) ? true : false;
    },
    disposition () {
      return this.$store.state.dispositionModal
    },
    userName () {
      return this.$store.state.user
    },
    activecampaign () {
      return this.$store.state.campaign
    },
    userState () {
      return this.$store.state.userState
    },
    activepausecode () {
        return this.$store.state.pause_code
    },
    campaign () {
      return this.$store.state.campaign
    },
    callStatus () {
      return   this.$store.state.callStatus
    },
    dialable_leads() {
      return   this.$store.state.dialable_leads
    },
    disableBtns(){
      return (this.onCallTrue) ? false : true
    },
    ready(){
      return (this.$store.state.userState == 'READY') ? true : false
    },
    iframe(){
      return  this.$store.state.iframe
    },
    showQueueTable () {
     return (this.$store.state.callQueue.length == 0 ) ? false : true
    },
    showAgentTable () {
     return   this.activeAgents.length>0
    },
    showLogTable () {
      return   this.callLogs.length>0
    },
    showCallBackTable(){
      return this.callbacks.length>0
    },
    activeAgents(){
      return this.$store.state.activeAgents
    },
    callLogs() {
      return this.paginate(this.$store.state.callLogs);
    },
    callbacks(){
      return this.paginateCallBack(this.$store.state.callbacks);
   // return this.$store.state.callbacks
    },
    nonPaginatedCalllogs(){
      return this.$store.state.callLogs
    },
    nonPaginatedCallbacks(){
      return this.$store.state.callbacks
    },
    queue(){
      return  this.$store.state.callQueue
    },
    callbackLength(){
      return  this.callbacks.length
    }
  },
  watch:{
    openTab(newCount){
      if(newCount === 2 || newCount === 4){
        this.logs();
      }
    },
    autodialValue(newCount){
      if(newCount == true){
        this.sideD = true
      }
    },
    callbackLength(newCount){
      if(newCount < 1 || newCount == 0 ){
        this.dueCallBacks = false
      }
    },
    disposition (newCount) {
      if(newCount == true){
        this.dispositionModal = true
      }
    },
    callStatus (newCount) {
      if(newCount == 'livecall' && !this.onCallTrue){
        this.onCallTrue = true
        this.count = true
        localStorage.setItem('type', 'Incoming')

      }
    },
    campaign (newValue) {
      if(newValue == null){
        let payload = { title: 'Phone Disconnected', text: 'Phone disconnected,kindly call again to login to a campaign to start using the system',}
        this.$store.dispatch("resetError",payload);
        this.tryAgain = true
        this.errorModal = true
      }
    },
    callLogs(newCount){
      if(newCount == true){
      //  this.posts = this.callLogs.length;
        //this.setPages();
        console.log('calls have been added')
      }
    },
    callbacks(newCount){
      if(newCount == true){
        this.postsCallback = this.callbacks
        this.setPagesCallback();
      }

      if(this.callbacks.length < 0){
        this.dueCallBacks = false
      }
    },
  },
  methods: {
      sideGroup(){
        if(this.openSideG == false){
          Toast.fire({
              type: 'success',
              title: 'Kindly change your Pause Code from LOGIN to select an InGroup',
              icon: 'success',
            });
        }else {
          this.sideG = true
        }
      },
      moment: function (time) {
        return moment(time);
      },
      callbackTimes(){
        let timeArrs = []
        for (const i in  this.nonPaginatedCallbacks) {
          timeArrs.push(this.nonPaginatedCallbacks[i].CustomerTime)
        }

        for (let t = 0; t < timeArrs.length; t++){

          var callBackTime = this.moment(timeArrs[t++]);
          var currentTime = this.moment().add(180, 'seconds');

          if (callBackTime < currentTime) {
            this.dueCallBacks = true
          } else if(callBackTime > currentTime) {
            this.dueCallBacks = false
          }else {
            console.log("usiblink")
          }
          
        }
      },   
      paginate (callLogs) {
        let page = this.page;
        let perPage = this.perPage;
        let from = (page * perPage) - perPage;
        let to = (page * perPage);
        return  callLogs.slice(from, to);
      },
      paginateCallBack (callbacks) {
        let pageCallBack = this.pageCallBack;
        let perPage = this.perPage;
        let from = (pageCallBack * perPage) - perPage;
        let to = (pageCallBack * perPage);
        return  callbacks.slice(from, to);
      },
      setPages () {
        let numberOfPages = Math.ceil(this.nonPaginatedCalllogs.length / this.perPage);
        for (let index = 1; index <= numberOfPages; index++) {
          this.pages.push(index);
        }
      },
      setPagesCallback () {
        let numberOfPagesCallback = Math.ceil(this.nonPaginatedCallbacks.length / this.perPage);
        for (let index = 1; index <= numberOfPagesCallback; index++) {
          this.pagesCallBack.push(index);
        }
      },
      getHumanDate(date) {
          return moment(date).format('h:mm a');
        },
      stripNumber(number) {
        return number.substring(0)
      },
      selectIngroup() {
        this.ingroupModal = true
      },
      toggle(event){
        if(event == 'PAUSED'){
          this.sideP = true
          let payload = { "username":localStorage.getItem('user'),"phone": localStorage.getItem('phone'),"campaign": this.$store.state.campaign,"state": 'PAUSED', "pause_code" : 'BREAK'};
          console.log(payload)
          return this.$http
            .post("/api/v1/dial/status",payload, { headers: { "Content-Type": "application/json", "Accept": "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`} })
            .then((response) => {
                if(response){
                  this.$store.dispatch('userState', 'PAUSED')
                  Toast.fire({
                    type: 'success',
                    title: 'You are now Paused',
                    icon: 'success',
                  });
                }
              })
            .catch(error => {
                console.log(error)
              })
        }
        else{
          let payload = { "username":localStorage.getItem('user'), "phone": localStorage.getItem('phone'),"campaign": this.$store.state.campaign, "state": 'READY'};
          return this.$http
            .post("/api/v1/dial/status",payload, { headers: { "Content-Type": "application/json", "Accept": "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`} })
            .then((response) => {
                if(response){
                  this.$store.dispatch('userState', 'READY') //payload.state
                  Toast.fire({
                    type: 'success',
                    title: 'You are now Active',
                    icon: 'success',
                  });
                }
              })
            .catch(error => {
                console.log(error)
              })
        }
      },
      userStatus(item){
        if(item === "CLOSER"){
          return 'bg-green-400'
        }else if(item === "PAUSED"){
          return 'bg-yellow-400'
        }else if(item === "INCALL"){
          return 'bg-blue-400'
        }
        else{
          return 'text-orange-400'
        }
      },
      tableStrip(index){
        //console.log(index)
        if( index % 2 === 0){
          return 'bg-indigo-100'
        }else if(index % 2 !== 0){
          return 'bg-white'
        }
        else{
          return 'bg-gray-500'
        }
      },
      manualDial() {
        if(!this.ready){
         // this.dialTrue = true
          this.side = true
        }else{
          Toast.fire({
            type: 'success',
            title: 'Switch to Pause to Dial',
            icon: 'warning',
          });
          //this.$vs.notification({progress: 'auto', duration : 6000,color : "danger",position : 'top-center',title: 'Pause first!',text: "Yo must be paused to do a manual dial.Kindly pause first"})
        }
      },
      ingroup() {
          this.ingroupShow = true
          this.toggleMenu = false
      },
      changePausecode() {
        this.pauseCodeTrue = true
        this.toggleMenu = false
      },
      beforeCall(response){
        localStorage.setItem('lead_id',response.data.lead_id)
        localStorage.setItem('callerid', response.data.callerid)
        localStorage.setItem('numberCalled',response.data.phone_number)
        localStorage.setItem('type', 'Outgoing')
        this.$store.dispatch('numberCalled', response.data.phone_number )
        //this.onCallTrue = true
      },
      logs(){
        let payload = { "username"     : localStorage.getItem('user'), "phone" : localStorage.getItem('phone'),"campaign" : this.$store.state.campaign,};
        //console.log(payload)
        this.$http.post("/api/v1/dial/logs",payload, { headers: { "Content-Type": "application/json","Accept": "application/json", "Authorization": `Bearer ${localStorage.getItem('token')}` } })
          .then((response) => {
              this.$store.dispatch("callLogs", response.data.logs);
              //console.log(this.nonPaginatedCalllogs.length)
              // console.log(response.data.logs)
              this.postsCallback = this.nonPaginatedCallbacks
              localStorage.setItem('postsCallback', this.postsCallback)
              this.pages = [];
              this.pagesCallBack = [],
              this.setPages();
              this.setPagesCallback();
            })
          .catch(error => {
              let payload = { title:  'Getting Logs failed'  , text: error.response.data,}
              this.$store.dispatch("resetError",payload);
              this.tryAgain = false
              this.errorModal = true
          })
      },
      logout() {
        let payload={ username:localStorage.getItem('user')}
        return this.$http
          .post("/api/v1/logout", payload, { headers: {  "Content-Type": "application/json","Accept": "application/json","Authorization": `Bearer ${localStorage.getItem('token')}` }  })
          .then((response) => {
            if(response){
              this.$store.dispatch("logout");
              this.$router.push("/");
            }})
          .catch((error) => {
            let payload = { title:  'Logout Failed'  , text: error.response.data.error,}
            this.$store.dispatch("resetError",payload);
            this.tryAgain = false
            this.errorModal = true
            });
      },
      dialNext(){
          this.$store.dispatch('beforeCall')

          this.isDisable = true
          let payload = { "username":localStorage.getItem('user'), "phone": localStorage.getItem('phone'),"campaign": this.$store.state.campaign};
          return this.$http
            .post("/api/v1/dial/next",payload, { headers: {  "Content-Type": "application/json","Accept": "application/json","Authorization": `Bearer ${localStorage.getItem('token')}` } })
            .then((response) => {
                this.$store.dispatch("callDetails",response.data);
                localStorage.setItem('lead_id', response.data.lead_id),
                localStorage.setItem('callerid', response.data.callerid),
                localStorage.setItem('numberCalled', response.data.phone_number)
                console.log(response.data)
                this.beforeCall(response)
                this.sideD = true;
              })
            .catch(error => {
              let payload = { title:   error.response.data.error , text: 'There are no dialable leads in your Campaign. Kindly consult your Team leader'}
              this.$store.dispatch("resetError",payload);
              this.tryAgain = false
              //this.errorModal = true
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You have no Dialable Leads',
                footer: 'The team leader can be able to help'
              })
              this.isDisable = false
             })
      },
      takeCall(call){
        console.log(call)

        let payload = {
          "username"     : localStorage.getItem('user'),
          "phone"        : localStorage.getItem('phone'),
          "campaign"     : this.$store.state.campaign,
          "lead_id"      : call.lead_id,
          "call_id"      : call.call_id,
          "phone_number" : call.caller //.substring(1)
        };

        this.sideD = true
        this.onCallTrue = true

        return this.$http
          .post("/api/v1/dial/take",payload, { headers: { "Content-Type": "application/json", "Accept": "application/json","Authorization": `Bearer ${localStorage.getItem('token')}`} })
          .then((response) => {
            if(response){
              true
            }
            console.log(payload)
            console.log(response)
            this.$store.dispatch('iframe',response.data.url)
            console.log(response.data)
            localStorage.setItem('lead_id',payload.lead_id)
            localStorage.setItem('type', 'Incoming')
            localStorage.setItem('callerid', payload.call_id)
            localStorage.setItem('numberCalled',payload.phone_number)
            this.$store.dispatch('numberCalled', payload.phone_number )


            this.$store.dispatch('remove',call )
            this.ongoingCall = true
            })
          .catch(error => {
            console.log(error)
          })
      },
      dial(number) {
        this.onCallTrue = true
        this.dialTrue = false
        this.sideD = true;
        //console.log(number)
        localStorage.setItem('numberCalled',number)
        localStorage.setItem('type','Outgoing')
        let payload = {
            "phone_number": number, //number,//"0729309658",
            "username":localStorage.getItem('user'), //"duser",
            "phone": localStorage.getItem('phone'), //"100",
            "campaign": this.$store.state.campaign,//localStorage.getItem('campaign'),  //"dcamp",
            "list_id": String(998)//"998"
          };
        //console.log(number)
        //console.log(payload)
        this.$store.dispatch('resetDisposition')
        return this.$http.post("/api/v1/dial/manual",payload, { headers: {  "Content-Type": "application/json", "Accept": "application/json", "Authorization": `Bearer ${localStorage.getItem('token')}` }  })
          .then(response => {
            //this.beforeCall()
            //console.log(response.data)
                localStorage.setItem('lead_id',response.data.lead_id)
                localStorage.setItem('lead_id',response.data.lead_id)
                localStorage.setItem('callerid', response.data.callerid)
                localStorage.setItem('numberCalled',payload.phone_number)
                localStorage.getItem('type', 'Outgoing')

                this.$store.dispatch('numberCalled', payload.phone_number)
                this.onCallTrue = true
                this.dialTrue = false
                // this.deleteCallback(number)
          }).catch(error => {
            console.log(error)
          })
      },
      toggleTab: function(tabNumber){
        this.openTab = tabNumber
      },
      deleteCallback(item) {

          console.log(item)
          let payload = { "username":localStorage.getItem('user'), "phone": localStorage.getItem('phone'),"campaign": this.$store.state.campaign,"callbackID" : item.CallbackID};
          return this.$http
            .post("/api/v1/dial/deleteCallback",payload, { headers: {  "Content-Type": "application/json","Accept": "application/json","Authorization": `Bearer ${localStorage.getItem('token')}` } })
            .then((response) => {
                console.log(response.data)
                if (this.callbacks.length == 1){
                  this.$store.dispatch("clearCallbacks")
                }

              })
            .catch(error => {
              let payload = { title:   error.response.data.error , text: 'There are no dialable leads in your Campaign. Kindly consult your Team leader'}
              this.$store.dispatch("resetError",payload);
              this.tryAgain = false
              Swal.fire({
                icon: 'error',
                title: 'Failed to delete Call Back',
                text: 'You have no Dialable Leads',
                footer: 'The team leader can be able to help'
              })
              this.isDisable = false
             })
      },

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blink{
  /* animation: blink 0.02s 20 alternate; */
  animation: blink 1s linear infinite;
}
@keyframes blink {
  from { background-color: #34D399; }
  to { background-color: #EF4444; }
}

.cssselector {
    background: linear-gradient(261deg, #EEF2FF, #D1D5DB, #EFF6FF);
    background-size: 600% 600%;

    -webkit-animation: AnimationName 3s ease infinite;
    -moz-animation: AnimationName 3s ease infinite;
    -o-animation: AnimationName 3s ease infinite;
    animation: AnimationName 3s ease infinite;
}

.css-selector {
    background: linear-gradient(261deg, #2563eb, #dc2626, #6d28d9);
    background-size: 600% 600%;

    -webkit-animation: AnimationName 3s ease infinite;
    -moz-animation: AnimationName 3s ease infinite;
    -o-animation: AnimationName 3s ease infinite;
    animation: AnimationName 3s ease infinite;
}

@-webkit-keyframes AnimationName {
    0%{background-position:0% 46%}
    50%{background-position:100% 55%}
    100%{background-position:0% 46%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 46%}
    50%{background-position:100% 55%}
    100%{background-position:0% 46%}
}
@-o-keyframes AnimationName {
    0%{background-position:0% 46%}
    50%{background-position:100% 55%}
    100%{background-position:0% 46%}
}
@keyframes AnimationName {
    0%{background-position:0% 46%}
    50%{background-position:100% 55%}
    100%{background-position:0% 46%}
}

.iframe {
   overflow: scroll;
 }

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

</style>
