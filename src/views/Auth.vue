<template>
  <div id="auth" class="h-screen bg-white">

    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
             alt="Workflow">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Smart Dial Login
        </h2>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form class="space-y-6" action="#" method="POST">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">
                User Name
              </label>
              <div class="mt-1">
                <input v-model="username" id="username" name="username" type="text" autocomplete="username" required
                       class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              </div>
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div class="mt-1">
                <input v-model="password" id="password" name="password" type="password" autocomplete="current-password"
                       required
                       class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              </div>
            </div>

            <div>
              <button @click.prevent="login" type="submit"
                      class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Login
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>

  </div>
</template>

<script>


export default {
  name: "Auth",
  data() {
    return {
      username: null,
      password: null,
      error: false,
      errors: [],
    }
  },
  methods: {
    login() {
      let payload = {
        username: this.username,
        password: this.password
      }
      this.error = false
      this.errors = []
      return this.$http.post("/api/v1/login", payload)
          .then(response => {
            this.$store.dispatch('login', response.data)
            localStorage.setItem('token', response.data.token)
            console.log(response)
            this.$router.push('/dialer');
          })
          .catch(error => {
            console.log(error)
            //this.error = true;
            //this.errors = error.response.data.error
          })
    }
  }
}
</script>

<style scoped>

</style>
