<script setup lang="ts">
import {onMounted, computed} from "vue";
import ProducsList from '@chia/src/components/pages/products/ProductsList.vue'
import { useStore } from 'vuex';

const store = useStore()
const products = computed(() => store.state.product.products)

onMounted(async () => {
  await store.dispatch('getProductsAction')
});

</script>

<template>
  <div class="container mx-auto">
    <main class="main w-full text-center">
      <ProducsList
          :products="products.data"
      />
    </main>
  </div>
</template>
