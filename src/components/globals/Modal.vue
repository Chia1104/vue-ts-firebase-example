<script setup lang="ts">
import { defineProps, watch } from "vue";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const props = defineProps<Props>();

watch(() => props.isOpen, (isOpen) => isOpen ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto");

</script>

<template>
  <Transition>
    <div class="modal" v-if="isOpen" @click="handleClose">
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
