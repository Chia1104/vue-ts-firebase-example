<script setup lang="ts">
import {onMounted, computed} from "vue";
import ProductsList from '@chia/components/pages/product/ProductsList.vue'
import Banner from '@chia/components/pages/home/Banner.vue'
import Story from '@chia/components/pages/home/Story.vue'
import { useStore } from 'vuex';

const store = useStore()
const banners = computed(() => store.state.image.banner)
const products = computed(() => store.state.product.products)

onMounted(async () => {
  if(products.value.data.length === 0) await store.dispatch('getProductsAction')
  if(banners.value.listUrl.length === 0) await store.dispatch('getBannerAction', {category: 'banner'})
});

</script>

<template>
  <div class="c-container">
    <main class="main w-full text-center">
      <Banner
          v-if="banners.isSuccess"
          :list-url="banners.listUrl"/>
      <h1 class="text-4xl font-bold self-start mb-20">
        New Products
      </h1>
      <ProductsList
          :is-loading="products.isLoading"
          :products="products.data"/>
      <div class="mt-10">
        <router-link
            to="/product"
            class="group hover:bg-secondary hover:dark:bg-primary relative inline-flex transition ease-in-out rounded mt-7 self-center">
        <span class="c-button-secondary transform group-hover:-translate-x-1 group-hover:-translate-y-1 text-base">
           See More
        </span>
        </router-link>
      </div>
      <Story />
    </main>
  </div>
</template>
