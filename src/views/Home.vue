<template>
  <div class="home py-5">
    <div class="text-center mb-5">
      <h1 class="text-3xl">Search for Github users</h1>
      <p class="my-5 text-gray-600">Enter a user and hit Enter!</p>
      <SearchBox @search="search" />
    </div>
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
    CardUser,
  },
  data: () => ({
    githubUser: null,
  }),
  methods: {
    async getGithubUser(user) {
      const response = await axios.get(`https://api.github.com/users/${user}`);
      const resRepos = await axios.get(`https://api.github.com/users/${user}/repos?sort=updated`);
      this.githubUser = response.data;
      this.githubUser.repos = resRepos.data;
      console.log(response.data);
      console.log(resRepos.data);
    },
    search(term) {
      if (term.length) {
        this.getGithubUser(term);
      }
    }
  }
}
</script>
