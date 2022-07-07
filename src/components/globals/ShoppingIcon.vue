<script setup lang="ts">
import { Popover as AntPopover } from "ant-design-vue";
import type {Product} from "@chia/utils/types/product";
import { defineProps } from "vue";
import {useStore} from "vuex";

interface Props {
  products: Product[];
  count: number;
  total: number;
}

defineProps<Props>();

const store = useStore();

const clearCart = () => store.dispatch('clearCartAction');
const removeProductFromCart = (product: Product) => store.dispatch('removeFromCartAction', product);

</script>

<template>
  <AntPopover
      placement="bottomRight"
      :title="`${count} items in cart`"
      trigger="click"
  >
    <button class="flex c-link mr-4 py-3 text-dark relative">
      <span
          v-if="count > 0"
          class="absolute bottom-1 -right-1 rounded-full bg-primary text-white w-4 h-4 text-xs flex text-center justify-center leading-4">
        {{ count }}
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    </button>
    <template #content>
      <ul v-if="products.length !== 0">
        <li v-for="product in products" :key="product.id">
          <div class="w-full flex justify-between">
            <router-link :to="`/product/${product.id}`">
              {{ product.name }}
            </router-link>
            <button
                @click="removeProductFromCart(product)"
                class="rounded-full p-1 shadow-2xl hover:bg-[#E6E6FA] transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </li>
      </ul>
      <p v-else>
        Your cart is empty.
      </p>
      <hr class="my-2 border-t-2 border-gray-100 w-full"/>
      <div class="flex justify-between">
        <span class="text-gray-600">
          Total:
        </span>
        <span class="text-gray-600">
          {{ total }}
        </span>
      </div>
      <div class="w-full my-1 flex justify-center items-center">
        <AntPopover
            placement="bottom"
        >
          <template #content>
            <p>Remove all</p>
          </template>
          <button
              @click="clearCart"
              class="rounded-full p-1 shadow-2xl hover:bg-[#E6E6FA] transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </AntPopover>
      </div>
    </template>
  </AntPopover>
</template>
