<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

interface Props {
  className?: string;
  handleClick?: () => void;
  iconStyle?: string;
  iconStroke?: string;
}

withDefaults(defineProps<Props>(), {
  iconStroke: '2'
})

</script>

<template>
  <button
      class="rounded-full p-1 shadow-2xl hover:bg-[#E6E6FA] transition"
      :class="className"
      @click="handleClick"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" :stroke-width="iconStroke" :class="iconStyle">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  </button>
</template>
