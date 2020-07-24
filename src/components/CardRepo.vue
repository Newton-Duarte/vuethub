<template>
  <div class="w-full md:w-1/2 lg:w-1/2 border border-gray-400 bg-white rounded p-4 leading-normal">
    <div class="mb-8">
      <div class="text-gray-900 font-bold text-xl mb-2">{{ repo.name }}</div>
      <p class="h-36 text-gray-700 text-sm">{{ repo.description }}</p>
    </div>
    <div class="flex text-sm text-gray-900">
      <p class="mr-6">&bull; {{ repo.language }}</p>
      <p class="text-gray-600">Updated {{ new Date(repo.updated_at).toLocaleString('pt-BR') }}</p>
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