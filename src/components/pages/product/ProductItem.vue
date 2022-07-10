<script setup lang="ts">
import { defineProps, reactive } from 'vue'
import type { Product } from "@chia/utils/types/product";
import { useStore } from 'vuex';
import LoveIcon from '@chia/components/globals/LoveIcon.vue';
import { Popover as AntPopover } from "ant-design-vue";

interface Props {
  product: Product;
}

defineProps<Props>();

const store = useStore();
const localState = reactive({
  count: 0,
});

const addQty = (product: Product) => localState.count++;
const removeQty = (product: Product) => localState.count--;
const addProductToCart = ({product, qty}: {product: Product, qty: number}) => store.dispatch('addProductToCartAction', {product, qty});

</script>

<template>
  <div
    class="w-full rounded-xl flex flex-col c-bg-secondary shadow-lg min-h-[400px] 2xl:min-h-[370px] group duration-300 transition ease-in-out relative">
    <div class="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-t-xl bg-gray-200 mb-3">
      <img class="rounded group-hover:scale-[1.05] duration-300 transition ease-in-out object-cover" :src="product.img_src" :alt="product.name" loading="lazy"/>
    </div>
    <router-link
      :to="`/product/${product.id}`"
      class="subtitle mb-3 group-hover:text-secondary duration-300 transition ease-in-out line-clamp-2 leading-normal mx-5 text-start">
      {{ product.name }}
    </router-link>
    <p class="line-clamp-3 c-description leading-normal mb-3 mx-5 text-start">
      {{ product.excerpt }}
    </p>
    <footer class="mt-auto c-description px-5 mb-3 flex w-full relative">
      <span class="subtitle">${{ product.price }}</span>
      <AntPopover
          placement="bottom"
      >
        <template #content>
          <div class="flex justify-center items-center">
            <button
                @click="removeQty"
                class="rounded-full p-1 shadow-2xl hover:bg-[#E6E6FA] transition mx-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
              </svg>
            </button>
            <p>{{ localState.count }}</p>
            <button
                @click="addQty"
                class="rounded-full p-1 shadow-2xl hover:bg-[#E6E6FA] transition mx-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </template>
        <button
            @click="addProductToCart({product, qty: localState.count})"
            class="absolute bottom-0 right-10 mr-5 rounded-full p-1 shadow-2xl hover:bg-[#E6E6FA] transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
      </AntPopover>
      <LoveIcon class-name="absolute bottom-0 right-0 mr-5" />
    </footer>
  </div>
</template>
