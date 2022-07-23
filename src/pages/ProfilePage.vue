<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import ProfileCard from "@chia/components/pages/profile/ProfileCard.vue";

const store = useStore();
const auth = computed(() => store.state.auth);
</script>

<template>
  <div class="c-container">
    <main class="main w-full text-center">
      <ProfileCard :email="auth.user.email" :name="auth.user.name" />
    </main>
  </div>
</template>
