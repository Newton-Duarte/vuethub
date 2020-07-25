<template>
  <div class="flex flex-wrap w-full m-auto py-5">
    <div class="w-full sm:w-1/6">
      <img src="@/assets/img/newton.jpg" alt="Newton Duarte">
    </div>
    <div class="w-full sm:w-5/6 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
      <div>
        <h2 class="text-gray-900 font-bold text-xl">Newton Duarte</h2>
        <p class="text-sm text-gray-600">Full Stack Developer</p>
        <p class="text-gray-700 text-base mt-5">This project was created to practice Vue.js, Vuex and TailwindCSS.</p>
        <p class="mt-1">
          <a class="text-blue-500" href="https://newtonduarte.com.br" target="_blank">https://newtonduarte.com.br</a>
        </p>
      </div>
      <div class="flex mt-5 sm:mt-0">
        <a href="https://github.com/Newton-Duarte" target="_blank" class="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-1">
          Github
        </a>
        <a href="https://www.linkedin.com/in/newton-duarte/" target="_blank" class="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-1">
          Linkedin
        </a>
      </div>
    </div>
  </div>
</template>
<style scoped>
p > a:hover {
  text-decoration: underline;
}
</style>