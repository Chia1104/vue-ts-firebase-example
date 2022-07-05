<script setup lang="ts">
import { Popover as AntPopover } from "ant-design-vue";
import type {Product} from "@chia/utils/types/product";
import { defineProps } from "vue";

interface Props {
  products: Product[];
  count: number;
  total: number;
}

defineProps<Props>();

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
          <router-link :to="`/product/${product.id}`">
            {{ product.name }}
          </router-link>
        </li>
      </ul>
    </template>
  </AntPopover>
</template>
