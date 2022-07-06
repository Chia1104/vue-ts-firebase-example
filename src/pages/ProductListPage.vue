<script setup lang="ts">
import ProductsList from "@chia/components/pages/product/ProductsList.vue";
import { useStore } from 'vuex';
import {onMounted, computed} from "vue";

const store = useStore()
const products = computed(() => store.state.product.products)

onMounted(async () => {
  if(products.value.data.length === 0) await store.dispatch('getProductsAction')
});

</script>

<template>
  <div class="c-container">
    <main class="main w-full text-center">
      <ProductsList
          :is-success="products.isSuccess"
          :is-loading="products.isLoading"
          :products="products.data"
          more-data
      />
    </main>
  </div>
</template>
