<template>
  <div class="flex flex-wrap bg-white rounded border border-gray-400 overflow-hidden shadow-lg px-4 lg:px-6 py-4">
    <div class="w-full lg:w-1/4 mb-5 sm:mb-0 md:mb-0 lg:mb-0">
      <img class="rounded-full m-auto" :src="user.avatar_url" :alt="user.name">
      <div class="font-bold text-xl my-3">{{ user.name }}</div>
      <p class="text-gray-700 text-base">
        {{ user.bio }}
      </p>
      <div class="mt-3">
        <p class="text-gray-600">Public Repos: {{ user.public_repos }}</p>
        <p class="text-gray-600">Member since: {{ user.created_at | date }}</p>
        <div class="mt-3">
          <a class="text-blue-400" :href="user.html_url" target="_blank">{{ user.html_url }}</a>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap w-full lg:w-3/4 lg:pl-6">
      <div 
        v-for="repo in user.repos"
        :key="repo.name"
        class="w-full md:w-2/4 lg:w-2/4 p-1"
      >
        <CardRepo
          :repo="repo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardRepo from '@/components/CardRepo';

export default {
  props: {
    user: {
      type: Object,
      default: () => ({
        avatar_url: '',
        html_url: '',
        name: '',
        bio: '',
        public_repos: '',
        created_at: '',
        location: '',
        repos: []
      })
    }
  },
  components: {
    CardRepo
  }
}
</script>

<style>

</style>