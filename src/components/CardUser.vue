<template>
  <div class="flex bg-white rounded border border-gray-400 overflow-hidden shadow-lg px-6 py-4">
    <div class="w-1/4">
      <img class="rounded-full m-auto" :src="user.avatar_url" :alt="user.name">
      <div class="font-bold text-xl my-3">{{ user.name }}</div>
      <p class="text-gray-700 text-base">
        {{ user.bio }}
      </p>
      <div>
        Public Repos: {{ user.public_repos }}
        Memer since: {{ new Date(user.created_at).toLocaleString() }}
        <div>
          <a :href="user.html_url" target="_blank">{{ user.html_url }}</a>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap w-3/4 pl-6">
      <CardRepo
        class="my-1"
        v-for="repo in user.repos"
        :key="repo.name"
        :repo="repo"
      />
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