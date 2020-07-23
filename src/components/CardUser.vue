<template>
  <div class="max-w-sm rounded border overflow-hidden shadow-lg">
    <img class="w-full rounded-full" :src="user.avatar_url" :alt="user.name">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ user.name }}</div>
      <p class="text-gray-700 text-base">
        {{ user.bio }}
      </p>
    </div>
    <div class="px-6 py-4">
      Public Repos: {{ user.public_repos }}
      Memer since: {{ new Date(user.created_at).toLocaleString() }}
      <div>
        <a :href="user.html_url" target="_blank">{{ user.html_url }}</a>
      </div>
    </div>
    <!-- <div class="px-6 py-4">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
    </div> -->
  </div>
</template>

<script>
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
        location: ''
      })
    }
  }
}
</script>

<style>

</style>