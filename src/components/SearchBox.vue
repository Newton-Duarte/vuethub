<template>
  <input
    class="w-full bg-white focus:outline-none focus:shadow-outline border border-gray-400 rounded py-3 px-4"
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