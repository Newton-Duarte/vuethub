<template>
  <div class="home py-4">
    <h1 class="text-3xl">Search for Github users</h1>
    <p class="text-gray-600">Enter a user and hit Enter!</p>
    <SearchBox @search="search" />
    <CardUser
      v-if="githubUser"
      :user="githubUser"
    />
  </div>
</template>

<script>
import axios from 'axios';
import SearchBox from '@/components/SearchBox';
import CardUser from '@/components/CardUser';

export default {
  name: 'Home',
  components: {
    SearchBox,
    CardUser
  },
  data: () => ({
    githubUser: null,
  }),
  methods: {
    async getGithubUser(user) {
      const response = await axios.get(`https://api.github.com/users/${user}`);
      this.githubUser = response.data;
      console.log(response.data);
    },
    search(term) {
      if (term.length) {
        this.getGithubUser(term);
      }
    }
  }
}
</script>
