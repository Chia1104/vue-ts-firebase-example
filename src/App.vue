<script setup lang="ts">
import NavMenu from "@chia/components/globals/NavMenu.vue";
import Footer from "@chia/components/globals/Footer.vue";
import { auth } from "@chia/lib/firebase/config";
import { useStore } from "vuex";
import { watchEffect } from "vue";
import { dataToJSON } from "@chia/lib/firebase/auth/repositories";

const store = useStore()

const firebaseUser = () => auth.onAuthStateChanged(user => {
  if (user) store.commit('loginSuccess', dataToJSON(user))
  else store.commit('loginError', 'You are not logged in')
});

watchEffect(firebaseUser)

</script>

<template>
  <div class="mt-20 min-h-screen">
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
