<script setup lang="ts">
import InfiniteList from "@chia/components/pages/product/InfiniteList.vue";
import CategoryList from "@chia/components/pages/product/CategoryList.vue";
import { clotheCategory } from "@chia/data/clotheCategory";
import {useQuery} from "@vue/apollo-composable";
import {GET_CLOTHES} from "@chia/lib/GraphQL/clothes/queries";

const { result, loading, fetchMore } = useQuery(GET_CLOTHES, {
  offset: 0,
})

const onMoreData = () => {
  fetchMore({
    variables: {
      offset: result.value.clothes.length,
    },
    updateQuery: (prev, { fetchMoreResult }) => {
      if (!fetchMoreResult) return prev;
      return {
        ...prev,
        clothes: [...prev.clothes, ...fetchMoreResult.clothes],
      };
    },
  });
};

</script>

<template>
  <div class="c-container">
    <main class="main w-full text-center">
<!--      <CategoryList-->
<!--          :cascaderProps="clotheCategory"-->
<!--          class="mb-20"/>-->
      <InfiniteList
          :is-loading="loading"
          :products="result.clothes"
          :has-more="true"
          :on-more-data="onMoreData"
      />
    </main>
  </div>
</template>
