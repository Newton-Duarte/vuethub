<template>
  <div id="app" class="text-gray-900">
    <Navbar />
    <div class="container mx-auto px-4">
      <transition mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';

export default {
  components: {
    Navbar
  }  
}
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

a:hover {
  text-decoration: underline;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}

.v-leave-to {
  transform: translate3d(0, 20px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all .3s;
}

.router-link-exact-active {
  font-weight: bold !important;
  color: white !important;
}
</style>
