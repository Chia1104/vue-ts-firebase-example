<script setup lang="ts">
import RegisterForm from "@chia/components/pages/auth/RegisterForm.vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="c-container">
    <main class="main w-full text-center">
      <h1 class="text-4xl font-bold mb-14 flex">
        <span class="mr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-12 w-12"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
          </svg>
        </span>
        Join us
      </h1>
      <RegisterForm />
      <button
        @click="router.push('/login')"
        class="group relative inline-flex transition ease-in-out rounded mt-7 self-center hover:bg-secondary hover:dark:bg-primary">
        <span
          class="c-button-secondary transform text-base group-hover:-translate-x-1 group-hover:-translate-y-1">
          Login
        </span>
      </button>
    </main>
  </div>
</template>
