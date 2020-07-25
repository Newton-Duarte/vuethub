<template>
  <input
    class="bg-white focus:outline-none focus:shadow-outline border border-gray-400 rounded-lg py-2 px-4"
    type="search"
    placeholder="e.g newton-duarte"
    name="search"
    id="search"
    spellcheck="false"
    @keyup.enter="$emit('search', $event.target.value.trim())"
  >
</template>

<script>
export default {
}
</script>

<style>

</style>