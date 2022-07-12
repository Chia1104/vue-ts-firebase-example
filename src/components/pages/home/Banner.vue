<script setup lang="ts">
import { Carousel as AntCarousel } from 'ant-design-vue'

</script>

<template>
  <div class="w-full rounded-2xl overflow-hidden mb-20 shadow-lg">
    <AntCarousel>
      <div class="">
        <img class="object-contain" src="https://firebasestorage.googleapis.com/v0/b/vue-auth-example-b8ad7.appspot.com/o/banner%2Fbanner4.jpg?alt=media&token=9e00f8a0-e46c-424e-805f-bd370d5d5c5d" alt="First slide" loading="lazy">
      </div>
      <div class="">
        <img class="object-contain" src="https://firebasestorage.googleapis.com/v0/b/vue-auth-example-b8ad7.appspot.com/o/banner%2Fbanner2.jpg?alt=media&token=52665f30-1cb3-498c-9d74-fcc8a8fd1c3c" alt="Second slide" loading="lazy">
      </div>
      <div class="">
        <img class="object-contain" src="https://firebasestorage.googleapis.com/v0/b/vue-auth-example-b8ad7.appspot.com/o/banner%2Fbanner3.jpg?alt=media&token=456e4836-201c-4b75-9e7e-9f26486f2dab" alt="Third slide" loading="lazy">
      </div>
      <div class="">
        <img class="object-contain" src="https://firebasestorage.googleapis.com/v0/b/vue-auth-example-b8ad7.appspot.com/o/banner%2Fbanner4.jpg?alt=media&token=9e00f8a0-e46c-424e-805f-bd370d5d5c5d" alt="Third slide" loading="lazy">
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
