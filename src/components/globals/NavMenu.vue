<script setup>

</script>

<template>
  <nav class="w-screen flex h-[75px] items-center top-0 fixed justify-center z-50 border-b-[1px] c-border-primary c-bg-secondary">
    <div class="flex container w-[100%]">
      <div class="flex items-center w-[70%] justify-start">
        <router-link to="/" class="subtitle ml-3 hover:c-text-green-to-purple transition ease-in-out">
          VueShop
        </router-link>
      </div>
      <div class="flex items-center w-[30%] justify-end mr-3">
        <router-link to="/" class="flex c-link mr-4 py-3 text-dark">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </router-link>
        <router-link to="/" class="flex c-link mr-4 py-3 text-dark">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </router-link>
      </div>
    </div>
  </nav>
</template>
