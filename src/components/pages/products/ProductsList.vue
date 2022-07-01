<script setup lang="ts">
import ProductItem from './ProductItem.vue'
import {Product} from "@chia/src/utils/types/product";

const products: Product[] = [
  {
    id: 1,
    name: 'Product 1',
    price: 100,
  },
  {
    id: 2,
    name: 'Product 2',
    price: 200,
  },
  {
    id: 3,
    name: 'Product 3',
    price: 300,
  },
]

</script>

<template>
  <ProductItem v-for="product in products" :key="product.id" :productData="product"/>
</template>
