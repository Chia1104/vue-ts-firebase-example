<script setup lang="ts">
import ContactForm from "@chia/components/pages/contact/ContactForm.vue";
</script>

<template>
  <div class="c-container">
    <main class="main w-full text-center">
      <h1 class="text-4xl font-bold mb-5 flex">
        <span class="mr-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20" />
          </svg>
        </span>
        Contact us
      </h1>
      <p class="w-full max-w-lg mx-auto my-5 text-lg">
        There live the blind texts far from the countries Vokalia and
        Consonantia, there live the blind texts. Separated they live in
        bookmarksgrove there live the blind texts far from the countries.
      </p>
      <ContactForm />
    </main>
  </div>
</template>
