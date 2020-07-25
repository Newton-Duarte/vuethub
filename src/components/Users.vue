<template>
   <select
    class="w-full bg-gray-200 border text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state"
    @change="changeUser"
  >
      <option disabled>Searched users</option>
      <option
        v-for="user of users"
        :key="user.login"
        :value="user.login"
        :selected="selected(user.login)"
      >{{ user.login }}</option>
    </select>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['users', 'githubUser']),
  },
  methods: {
    ...mapActions(['fetchGithubUser']),
    selected(login) {
      return this.githubUser && this.githubUser.login === login;
    },
    changeUser(event) {
      this.fetchGithubUser(event.target.value);
    }
  }
}
</script>

<style>

</style>