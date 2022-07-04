<script setup lang="ts">
import {onMounted, computed} from "vue";
import { useStore } from 'vuex';
import ProductCard from '@chia/components/pages/product/ProductCard.vue'

const store = useStore()
const product = computed(() => store.state.product.product)

onMounted(async () => {
  if(product.value.data.length === 0) {
    console.log('fetching product')
    await store.dispatch('getProductAction', {id: '3GL1iqz471kto6zWQspD'})
  }
});

</script>

<template>
  <div class="c-container">
    <main class="main w-full">
      <ProductCard
          :product="product.data"
      />
    </main>
  </div>
</template>
