<script setup lang="ts">
import {onMounted, computed} from "vue";
import { useStore } from 'vuex';
import ProductCard from '@chia/components/pages/product/ProductCard.vue'
import { useRoute } from 'vue-router';

const store = useStore()
const product = computed(() => store.state.product.product)
const route = useRoute()

onMounted(async () => {
  await store.dispatch('getProductAction', {id: route.params.id})
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
