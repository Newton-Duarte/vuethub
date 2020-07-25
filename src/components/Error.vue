<template>
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center" role="alert">
    <span class="block sm:inline">{{ error }}</span>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style>

</style>