<script setup lang="ts">
import { defineProps, reactive } from "vue";
import type { Product } from "@chia/utils/types/product";
import Modal from "@chia/components/globals/Modal.vue";
import {useStore} from "vuex";

interface Props {
  product: Product;
}

defineProps<Props>();

const localState = reactive({
  isOpen: false,
});
const store = useStore();

const handleClose = () => localState.isOpen = false;
const handleOpen = () => localState.isOpen = true;
const addProductToCart = (product: Product) => store.dispatch('addToCartAction', product);

</script>

<template>
  <article class="w-full">
    <div class="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
      <div class="rounded-xl aspect-w-1 aspect-h-1 overflow-hidden shadow-2xl hover:cursor-zoom-in group" @click="handleOpen">
        <img :src="product.img_src" :alt="product.name" class="object-cover group-hover:scale-[1.05] transition ease-in-out duration-500"/>
      </div>
      <div>
        <h1 class="title mb-10">{{ product.name }}</h1>
        <p class="text-4xl mb-14 font-bold"> $ {{ product.price }}</p>
        <p class="text-xl">{{ product.description }}</p>
      </div>
      <div class="w-full flex justify-center items-center">
        <button
            @click="addProductToCart(product)"
            class="rounded-full p-3 shadow-2xl hover:bg-[#E6E6FA] w-[130px] flex justify-center items-center mr-10 transition duration-500 ease-in-out hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
        <button class="rounded-full p-1 shadow-2xl hover:bg-[#E6E6FA] w-[52px] h-[52px] flex justify-center items-center transition duration-500 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>
    </div>
  </article>
  <Modal
      :is-open="localState.isOpen"
      :handle-close="handleClose"
  >
    <div class="w-full max-w-[1400px]">
      <div class="aspect-w-1 aspect-h-1 hover:cursor-zoom-out">
        <img :src="product.img_src" :alt="product.name" class="object-contain"/>
      </div>
    </div>
  </Modal>
</template>
