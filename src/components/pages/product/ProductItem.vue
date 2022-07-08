<script setup lang="ts">
import { defineProps } from 'vue'
import type { Product } from "@chia/utils/types/product";
import { useStore } from 'vuex';
import LoveIcon from '@chia/components/globals/LoveIcon.vue';

interface Props {
  productData: Product;
}

defineProps<Props>();

const store = useStore();

const addProductToCart = (product: Product) => store.dispatch('addToCartAction', product);

</script>

<template>
  <div
    class="w-full rounded-xl flex flex-col c-bg-secondary shadow-lg min-h-[400px] 2xl:min-h-[370px] group duration-300 transition ease-in-out relative">
    <div class="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-t-xl bg-gray-200 mb-3">
      <img class="rounded group-hover:scale-[1.05] duration-300 transition ease-in-out object-cover" :src="productData.img_src" :alt="productData.name"/>
    </div>
    <router-link
      :to="`/product/${productData.id}`"
      class="subtitle mb-3 group-hover:text-secondary duration-300 transition ease-in-out line-clamp-2 leading-normal mx-5 text-start">
      {{ productData.name }}
    </router-link>
    <p class="line-clamp-3 c-description leading-normal mb-3 mx-5 text-start">
      {{ productData.excerpt }}
    </p>
    <footer class="mt-auto c-description px-5 mb-3 flex w-full relative">
      <span class="subtitle">${{ productData.price }}</span>
      <button
          @click="addProductToCart(productData)"
          class="absolute bottom-0 right-10 mr-5 rounded-full p-1 shadow-2xl hover:bg-[#E6E6FA] transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </button>
      <LoveIcon class-name="absolute bottom-0 right-0 mr-5" />
    </footer>
  </div>
</template>
