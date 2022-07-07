<script setup lang="ts">
import { defineProps, withDefaults, ref, watch, onMounted } from 'vue'
import ProductItem from './ProductItem.vue'
import type {Product} from "@chia/utils/types/product";
import ProductsLoader from "./ProductsLoader.vue";
import { useStore } from 'vuex';
import { unrefElement } from '@vueuse/core'

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

const observer = ref<IntersectionObserver | null>(null)
const lastProduct = ref<HTMLElement[]>([])

watch(() => unrefElement(lastProduct.value[0]), (node) => {
  if(props.isLoading) return;
  if(observer.value) {
    console.log('observer.disconnect()')
    observer.value.disconnect()
  }

  observer.value = new IntersectionObserver(entries => {
    if(entries[0].isIntersecting) console.debug('load more')
  }, {
    rootMargin: '50px',
  })

  if(node) observer.value.observe(node)
});

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
      <div v-for="(product, index) in products">
        <ProductItem
            v-if="index + 1 === products.length"
            :product-data="product"
            ref="lastProduct"
            :key="product.id"
        />
        <ProductItem
            v-else
            :product-data="product"
            :key="product.id"
        />
      </div>
    </template>
    <ProductsLoader v-if="isLoading"/>
  </div>
</template>
