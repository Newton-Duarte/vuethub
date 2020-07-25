<template>
  <div class="w-full border border-gray-400 bg-white rounded p-4 leading-normal">
    <div class="mb-8">
      <div class="text-gray-900 font-bold text-xl mb-2">
        <a class="text-blue-500" :href="repo.html_url" target="_blank">{{ repo.name }}</a>
      </div>
      <p class="h-16 text-gray-700 text-sm">{{ repo.description }}</p>
    </div>
    <div class="flex text-sm text-gray-900">
      <p class="mr-6" v-if="repo.language">&bull; {{ repo.language }}</p>
      <p class="text-gray-600">Updated at {{ repo.updated_at | date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    repo: {
      type: Object,
      default: () => ({
        name: '',
        html_url: '',
        description: '',
        clone_url: '',
        language: '',
        updated_at: ''
      })
    }
  }
}
</script>

<style>

</style>