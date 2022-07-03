<script setup lang="ts">

const year = new Date().getFullYear();

</script>

<template>
  <footer class="w-full h-screen md:h-[500px] bg-purple-300 flex justify-center items-center">
    <div class="c-container px-20 w-full h-full max-w-[900px] max-h-[450px]">
      <header class="title">
        VueShop
      </header>
      <ul class="w-full grid grid-cols-1 lg:grid-cols-2">
        <li>
          About
        </li>
        <li>
          Contact Us
        </li>
        <li>
          Terms & Conditions
        </li>
        <li>
          Privacy Policy
        </li>
      </ul>
      <div>
        @{{ year }} VueShop
      </div>
    </div>
  </footer>
</template>
