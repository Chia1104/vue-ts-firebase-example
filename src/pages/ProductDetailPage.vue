<script setup lang="ts">
import ProductDetail from '@chia/components/pages/product/ProductDetail.vue'
import {useQuery} from "@vue/apollo-composable";
import {GET_CLOTHES_BY_ID} from "@chia/lib/GraphQL/clothes/queries";
import { useRoute } from 'vue-router';

const route = useRoute();

const { result, error } = useQuery(GET_CLOTHES_BY_ID, {
  id: route.params.id
})

</script>

<template>
  <div class="c-container">
    <main class="main w-full">
      <ProductDetail
          v-if="!error"
          :product="result.clothes[0]"/>
    </main>
  </div>
</template>
