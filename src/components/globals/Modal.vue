<script setup lang="ts">
import { defineProps, watch } from "vue";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const props = defineProps<Props>();

watch(
  () => props.isOpen,
  (isOpen) =>
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto")
);
</script>

<template>
  <teleport to="body">
    <Transition>
      <div v-if="isOpen" class="modal" @click="handleClose">
        <slot></slot>
      </div>
    </Transition>
  </teleport>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
