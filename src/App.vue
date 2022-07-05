<script setup lang="ts">
import NavMenu from "@chia/components/globals/NavMenu.vue";
import Footer from "@chia/components/globals/Footer.vue";

</script>

<template>
  <div class="mt-20">
    <NavMenu />
    <router-view v-slot="{ Component, route }">
      <Transition>
        <Component :is="Component" :key="route.path" />
      </Transition>
    </router-view>
  </div>
  <Footer />
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
