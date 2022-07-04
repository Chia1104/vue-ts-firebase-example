<script setup lang="ts">
import NavMenu from "@chia/components/globals/NavMenu.vue";
import Footer from "@chia/components/globals/Footer.vue";

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
