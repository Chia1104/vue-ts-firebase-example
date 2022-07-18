<script setup lang="ts">
import ProductDetail from '@chia/components/pages/product/ProductDetail.vue'
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { onMounted, computed } from 'vue';

const route = useRoute();
const store = useStore()
const product = computed(() => store.state.product.product)

onMounted(async () => {
  await store.dispatch('getProductAction', {id: route.params.id})
});

</script>

<template>
  <div class="c-container">
    <main class="main w-full">
      <ProductDetail
          :product="product.data"/>
    </main>
  </div>
</template>
