<script setup lang="ts">
import { defineProps, ref } from "vue";
import { useScrollLock } from '@vueuse/core';

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  handleClose: {
    type: Function as () => void,
    required: true,
    payload: MouseEvent,
  },
});

const el = ref<HTMLDivElement | null>(null)
const isLocked = useScrollLock(el)


</script>

<template>
  <Transition>
    <div class="modal" v-if="isOpen" @click="handleClose" ref="el">
      <slot></slot>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
