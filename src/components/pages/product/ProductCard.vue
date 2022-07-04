<script setup lang="ts">
import { defineProps } from "vue";
import type { Product } from "@chia/utils/types/product";

defineProps({
  product: {
    type: Object as () => Product,
    required: true,
  },
});

</script>

<template>
  <article class="w-full">
    <div class="rounded-xl aspect-w-16 aspect-h-9 object-contain overflow-hidden">
      <img :src="product.img_src" :alt="product.name" />
    </div>
    <h1>{{ product.name }}</h1>

  </article>
</template>
