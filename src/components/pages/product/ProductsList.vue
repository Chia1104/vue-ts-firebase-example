<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
import ProductItem from './ProductItem.vue'
import type {Product} from "@chia/utils/types/product";
import ProductsLoader from "./ProductsLoader.vue";
import { useStore } from 'vuex';

const store = useStore()

interface Props {
  products: Product[];
  isLoading: boolean;
  isSuccess: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false,
  isSuccess: false,
});

</script>

<template>
  <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
    <template v-if="isSuccess">
      <ProductItem
          v-for="product in products.slice(0, 8)"
          :key="product.id"
          :product-data="product"
      />
    </template>
    <ProductsLoader v-if="isLoading"/>
  </div>
</template>
