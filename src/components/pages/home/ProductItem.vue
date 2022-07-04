<script setup lang="ts">
import { defineProps } from 'vue'
import type { Product } from "@chia/utils/types/product";
import dayjs from "dayjs";

defineProps({
  productData: Object as () => Product
})

</script>

<template>
  <router-link
    :to="`/product/${productData.id}`"
    class="w-full rounded-xl flex flex-col c-bg-secondary shadow-lg min-h-[465px] 2xl:min-h-[520px] group hover:-translate-y-1.5 duration-300 transition ease-in-out relative">
    <div class="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-t-xl bg-gray-200 mb-3">
      <img class="rounded group-hover:scale-[1.1] duration-300 transition ease-in-out object-cover" :src="productData.img_src" :alt="productData.name"/>
    </div>
    <header class="subtitle mb-3 group-hover:text-secondary duration-300 transition ease-in-out line-clamp-2 leading-normal mx-5 text-start">
      {{ productData.name }}
    </header>
    <p class="line-clamp-3 c-description leading-normal mb-3 mx-5 text-start">
      {{ productData.excerpt }}
    </p>
    <footer class="mt-auto c-description mx-5 mb-3 self-start text-start">
      <span class="text-xl">${{ productData.price }}</span><br>
      {{ dayjs(productData.createdAt).format('MMMM D, YYYY') }}
    </footer>
  </router-link>
</template>
