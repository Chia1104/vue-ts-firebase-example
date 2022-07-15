<script setup lang="ts">
import { defineProps, withDefaults, ref, watch, onBeforeUpdate, onBeforeUnmount } from 'vue'
import ProductItem from './ProductItem.vue'
import type {Product} from "@chia/utils/types/product";
import ProductsLoader from "./ProductsLoader.vue";
import { useStore } from 'vuex';
import { unrefElement } from '@vueuse/core'

const store = useStore()

interface Props {
  products: Product[];
  isLoading: boolean;
  hasMore: boolean;
  onMoreData: () => void;
}

const props = withDefaults(defineProps<Props>(), {
  isLoading: false,
});

const observer = ref<IntersectionObserver | null>(null)
const lastProduct = ref<HTMLElement[]>([])

onBeforeUpdate(() => {
  if (observer.value) observer.value.disconnect()
  lastProduct.value = []
})

watch(() => unrefElement(lastProduct.value[lastProduct.value.length - 1]), (node) => {
  if(props.isLoading || !props.hasMore) return;
  if(observer.value) observer.value.disconnect()

  observer.value = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting && props.hasMore) props.onMoreData && props.hasMore && props.onMoreData()
  }, {
    rootMargin: '50px',
  })

  if(node && props.hasMore) observer.value.observe(node)
});

</script>

<template>
  <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
    <div v-for="(product, index) in products">
      <ProductItem
          v-if="index + 1 === products.length"
          :product="product"
          :ref="el => lastProduct[index] = el"
          :key="product.id"
      />
      <ProductItem
          v-else
          :product="product"
          :key="product.id"
      />
    </div>
    <ProductsLoader v-if="isLoading"/>
  </div>
</template>
