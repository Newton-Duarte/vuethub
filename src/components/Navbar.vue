<template>
  <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white">
      <span class="font-semibold text-xl tracking-tight">Vuethub</span>
    </div>
    <div class="flex-grow flex items-center justify-end w-auto">
      <router-link class="lg:inline-block text-teal-200 hover:text-white mr-4" to="/">Home</router-link>
      <router-link class="lg:inline-block text-teal-200 hover:text-white" to="/about">About</router-link>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>