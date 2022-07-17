<script setup lang="ts">
import InfiniteList from "@chia/components/pages/product/InfiniteList.vue";
import { useRoute } from 'vue-router';
import {useQuery} from "@vue/apollo-composable";
import {GET_CLOTHES_BY_CATEGORY} from "@chia/lib/GraphQL/clothes/queries";

const route = useRoute()

const { result, loading, fetchMore } = useQuery(GET_CLOTHES_BY_CATEGORY, {
  category: route.params.category,
  offset: 0,
})

const onMoreCategory = () => {
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
      <h1 class="text-4xl font-bold self-start mb-20">
        {{route.params.category}}
      </h1>
      <InfiniteList
          :is-loading="loading"
          :products="result.clothes"
          :has-more="true"
          :on-more-data="onMoreCategory"
      />
    </main>
  </div>
</template>
