<script setup lang="ts">
import InfiniteList from "@chia/components/pages/product/InfiniteList.vue";
import CategoryList from "@chia/components/pages/product/CategoryList.vue";
import { clotheCategory } from "@chia/data/clotheCategory";
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

const store = useStore();
const products = computed(() => store.state.product.products);
onMounted(async () => {
  if (products.value.data.length === 0)
    await store.dispatch("getProductsAction");
});
const onMoreData = () =>
  store.dispatch("getMoreProductsAction", products.value.data.length);
</script>

<template>
  <div class="c-container">
    <main class="main w-full text-center">
      <CategoryList :cascader-props="clotheCategory" class="mb-20" />
      <InfiniteList
        :is-loading="products.isLoading"
        :products="products.data"
        :has-more="products.hasMore"
        :on-more-data="onMoreData" />
    </main>
  </div>
</template>
