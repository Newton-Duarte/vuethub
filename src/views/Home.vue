<template>
  <div class="home">
    <input
      v-model="term"
      type="search"
      placeholder="Enter a GitHub User ..."
      name="search"
      id="search"
      @keyup.enter="search"
    >
    <div v-if="githubUser">
      <h4>{{ githubUser.name }}</h4>
      <img :src="githubUser.avatar_url" :alt="githubUser.name">
      <p>Public repos: {{ githubUser.public_repos }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data: () => ({
    githubUser: null,
    term: '',
    timeout: null
  }),
  methods: {
    async getGithubUser() {
      const response = await axios.get(`https://api.github.com/users/${this.term.trim()}`);
      this.githubUser = response.data;
      console.log(response.data);
    },
    search() {
      clearTimeout(this.timeout);
      this.timeout = null;
      setTimeout(() => this.getGithubUser(), 2000);
    }
  }
}
</script>
