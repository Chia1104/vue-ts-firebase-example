<script setup lang="ts">
import { defineProps } from 'vue'
import ProductItem from './ProductItem.vue'
import {Product} from "@chia/src/utils/types/product";
import ProductsLoader from "@chia/src/components/pages/products/ProductsLoader.vue";

defineProps({
  isLoading: Boolean,
  products: Array as () => Product[]
})

</script>

<template>
  <div class="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
    <ProductItem v-for="product in products" :key="product.id" :product-data="product"/>
    <ProductsLoader v-if="isLoading"/>
  </div>
</template>
