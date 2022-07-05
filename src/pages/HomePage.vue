<script setup lang="ts">
import {onMounted, computed} from "vue";
import ProducsList from '@chia/components/pages/home/ProductsList.vue'
import Banner from '@chia/components/pages/home/Banner.vue'
import Story from '@chia/components/pages/home/Story.vue'
import { useStore } from 'vuex';

const store = useStore()
const products = computed(() => store.state.product.products)

onMounted(async () => {
  if(products.value.data.length === 0) await store.dispatch('getProductsAction')
});

</script>

<template>
  <div class="c-container">
    <main class="main w-full text-center">
      <Banner />
      <h1 class="text-4xl font-bold self-start mb-20">
        New Products
      </h1>
      <ProducsList
          :is-success="products.isSuccess"
          :is-loading="products.isLoading"
          :products="products.data"
      />
      <Story />
    </main>
  </div>
</template>
