<script setup lang="ts">
import NavMenu from "@chia/src/components/globals/NavMenu.vue";
import Footer from "@chia/src/components/globals/Footer.vue";

</script>

<template>
  <div class="mt-20">
    <NavMenu />
    <RouterView />
  </div>
  <Footer />
</template>

<style>

</style>
