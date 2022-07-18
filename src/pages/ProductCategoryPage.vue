<script setup lang="ts">
import InfiniteList from "@chia/components/pages/product/InfiniteList.vue";
import { useStore } from 'vuex';
import {onMounted, computed, onBeforeUnmount} from "vue";
import { useRoute } from 'vue-router';
const store = useStore()
const categoryProducts = computed(() => store.state.product.categoryProducts)
const route = useRoute()
onMounted(async () => {
  await store.dispatch('getProductsByCategoryAction', {category: [route.params.category]})
});
onBeforeUnmount(() => {
  store.dispatch('resetCategoryProductsAction')
});
const onMoreCategory = () => store.dispatch('getMoreProductsByCategoryAction', {lastProductId: categoryProducts.value.data[categoryProducts.value.data.length - 1].id, category: [route.params.category]})
</script>

<template>
  <div class="c-container">
    <main class="main w-full text-center">
      <h1 class="text-4xl font-bold self-start mb-20">
        {{route.params.category}}
      </h1>
      <InfiniteList
          :is-loading="categoryProducts.isLoading"
          :products="categoryProducts.data"
          :has-more="categoryProducts.hasMore"
          :on-more-data="onMoreCategory"
      />
    </main>
  </div>
</template>
