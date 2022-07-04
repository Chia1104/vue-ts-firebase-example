<script setup lang="ts">
import { defineProps } from 'vue'
import ProductItem from './ProductItem.vue'
import type {Product} from "@chia/utils/types/product";
import ProductsLoader from "./ProductsLoader.vue";

defineProps({
  isSuccess: {
    type: Boolean,
    default: false
  },
  isLoading: Boolean,
  products: Array as () => Product[]
})

</script>

<template>
  <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
    <ProductItem
      v-if="isSuccess"
      v-for="product in products"
      :key="product.id"
      :product-data="product"
    />
    <ProductsLoader v-if="isLoading"/>
  </div>
</template>
