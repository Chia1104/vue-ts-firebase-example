<script setup lang="ts">
import { Carousel as AntCarousel } from 'ant-design-vue'
import { defineProps } from 'vue'

interface Props {
  listUrl: string[]
  isLoading?: boolean
}

defineProps<Props>()

</script>

<template>
  <div class="w-full rounded-2xl overflow-hidden mb-20 shadow-lg">
    <AntCarousel arrows>
      <template #prevArrow>
        <div style="left: 10px; z-index: 20">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-[#E6E6FA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
          </svg>
        </div>
      </template>
      <template #nextArrow>
        <div style="right: 30px; z-index: 20">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-[#E6E6FA]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </template>
      <div v-for="(url, index) in listUrl" :key="index" v-memo>
        <img class="object-contain" :src="url" :alt="`${index} slide`" loading="lazy">
      </div>
    </AntCarousel>
  </div>
</template>

<style scoped>
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: auto;
  max-height: 600px;
  background: #fff;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
