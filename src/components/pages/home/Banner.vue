<script setup lang="ts">
import { Carousel as AntCarousel } from 'ant-design-vue'

</script>

<template>
  <div class="w-full rounded-2xl overflow-hidden mb-20 shadow-lg">
    <AntCarousel>
      <div class="">
        <img class="object-contain" src="https://picsum.photos/id/1/1920/1080.webp" alt="First slide">
      </div>
      <div class="">
        <img class="object-contain" src="https://picsum.photos/id/2/1920/1080.webp" alt="Second slide">
      </div>
      <div class="">
        <img class="object-contain" src="https://picsum.photos/id/3/1920/1080.webp" alt="Third slide">
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
