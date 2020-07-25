<template>
  <div class="home py-5">
    <div class="text-center mb-5">
      <h1 class="text-3xl">Search for Github users</h1>
      <p class="my-5 text-gray-600">Enter a user and hit Enter!</p>
      <div class="flex flex-wrap w-full sm:w-1/2 m-auto">
        <div class="w-full sm:w-1/2 mb-3 sm:mb-0 sm:pr-3" :class="{ 'sm:w-full': !users.length }">
          <SearchBox @search="search" />
        </div>
        <div v-if="users.length" class="w-full sm:w-1/2 sm:pl-3">
          <Users />
        </div>
      </div>
    </div>
    <CardUser
      v-if="githubUser && !isLoading"
      :user="githubUser"
    />
    <PageLoading v-else-if="isLoading" />
    <Error v-else-if="error" :error="error" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import SearchBox from '@/components/SearchBox';
import CardUser from '@/components/CardUser';
import Users from '@/components/Users';

export default {
  name: 'Home',
  components: {
    SearchBox,
    CardUser,
    Users,
  },
  computed: {
    ...mapGetters(['githubUser', 'isLoading', 'error', 'users'])
  },
  methods: {
    ...mapActions(['fetchGithubUser']),
    search(term) {
      if (term.length) {
        this.fetchGithubUser(term);
      }
    }
  }
}
</script>
