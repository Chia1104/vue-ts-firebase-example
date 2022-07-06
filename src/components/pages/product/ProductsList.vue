<script setup lang="ts">
import { defineProps, withDefaults, ref, watch } from 'vue'
import ProductItem from './ProductItem.vue'
import type {Product} from "@chia/utils/types/product";
import ProductsLoader from "./ProductsLoader.vue";
import { useStore } from 'vuex';

const store = useStore()

interface Props {
  products: Product[];
  isLoading: boolean;
  isSuccess: boolean;
  moreData?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false,
  isSuccess: false,
  moreData: false,
});

const lastProduct = ref<HTMLElement | null>(null);

// watch(
//   () => [observer.value, props.isLoading],
//   (node: Node) => {
//     if(props.isLoading) return;
//     observer.value = new IntersectionObserver(entries => {
//       if (entries[0].isIntersecting) store.dispatch('getMoreProductsAction');
//     })
//   },
// );


</script>

<template>
  <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
    <ProductItem
      v-if="isSuccess && !moreData"
      v-for="product in products"
      :key="product.id"
      :product-data="product"
    />
    <template v-if="moreData && isSuccess">
      <ProductItem
          v-for="(product, index) in products"
          v-if="index + 1 === products.length"
          :key="product.id"
          :product-data="product"
          :ref="lastProduct"
      />
      <ProductItem
          v-else
          v-for="product in products"
          :key="product.id"
          :product-data="product"
      />
    </template>
    <ProductsLoader v-if="isLoading"/>
  </div>
</template>
