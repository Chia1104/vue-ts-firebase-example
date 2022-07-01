<script setup lang="ts">
import { defineProps } from 'vue'
import type { Product } from "@chia/src/utils/types/product";

defineProps({
  productData: Object as () => Product
})

</script>

<template>
  <p>{{ productData.name }} -- {{ productData.price }}</p>
</template>
