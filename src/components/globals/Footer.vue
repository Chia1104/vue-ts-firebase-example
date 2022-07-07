<script setup lang="ts">
import { contact } from '@chia/utils/meta/contact';

const year = new Date().getFullYear();

</script>

<template>
  <footer class="w-full h-screen md:h-[500px] c-bg-gradient-purple flex justify-center items-center text-light" v-once>
    <div class="c-container px-20 w-full h-full max-w-[1200px] max-h-[450px] flex flex-col">
      <header class="title">
        VueShop
      </header>
      <hr class="my-5 border-t-2 border-primary"/>
      <div class="w-full grid grid-cols-1 lg:grid-cols-2 text-xl">
        <ul>
          <li class="my-2">
            <router-link to="/">
              About
            </router-link>
          </li>
          <li class="my-2">
            <router-link to="/contact">
              Contact Us
            </router-link>
          </li>
        </ul>
        <ul>
          <li class="my-2">
            <router-link to="/">
              Terms & Conditions
            </router-link>
          </li>
          <li class="my-2">
            <router-link to="/">
              Privacy Policy
            </router-link>
          </li>
        </ul>
      </div>
      <div class="w-full md:w-1/2 mt-12">
        <ul class="w-full">
          <li class="mb-3 w-full flex">
            <span class="w-[10%]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </span>
            <span class="w-[90%]">
              {{ contact.phone }}
            </span>
          </li>
          <li class="mb-3 w-full flex">
            <span class="w-[10%]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </span>
            <span class="w-[90%]">
              {{ contact.address }}
            </span>
          </li>
        </ul>
      </div>
      <div class="mt-auto text-xl">
        &copy; {{ year }} VueShop
      </div>
    </div>
  </footer>
</template>
