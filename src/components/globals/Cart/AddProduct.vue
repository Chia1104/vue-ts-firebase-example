<script setup lang="ts">
import { reactive, defineProps, watchEffect, computed } from "vue";
import { Popover as AntPopover } from "ant-design-vue";
import type {Product} from "@chia/utils/types/product";
import {useStore} from "vuex";
import { useStorage } from '@vueuse/core'

interface Props {
  product: Product;
  className?: string;
}

defineProps<Props>()

const store = useStore();
const localState = reactive({
  disabled: true,
  count: 0,
});

const addQty = () => localState.count++;
const removeQty = () => localState.count--;
const addProductToCart = ({product, qty}: {product: Product, qty: number}) => store.dispatch('addProductToCartAction', {product, qty});
watchEffect(() => {
  localState.count >= 1 ? localState.disabled = false : localState.disabled = true;
});

</script>

<template>
  <AntPopover
      placement="bottom"
  >
    <template #content>
      <div class="flex flex-col">
        <div class="flex justify-center items-center">
          <button
              @click="removeQty"
              class="rounded-full p-1 shadow-2xl hover:bg-[#E6E6FA] transition mx-1"
              :disabled="localState.disabled"
              :class="localState.disabled && 'text-gray-300'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
            </svg>
          </button>
          <p>{{ localState.count }}</p>
          <button
              @click="addQty"
              class="rounded-full p-1 shadow-2xl hover:bg-[#E6E6FA] transition mx-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
        <button
            @click="addProductToCart({product, qty: localState.count})"
            class="rounded-full p-1 shadow-2xl hover:bg-[#E6E6FA] transition self-center"
            :disabled="localState.disabled"
            :class="localState.disabled && 'text-gray-300'"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>
    </template>
    <button
        class="rounded-full p-1 shadow-2xl hover:bg-[#E6E6FA] transition" :class="className">
          <span
              v-if="localState.count > 0"
              class="absolute -bottom-1 right-0 rounded-full bg-primary text-white w-4 h-4 text-xs flex text-center justify-center leading-4 ">
            {{ localState.count }}
          </span>
      <slot></slot>
    </button>
  </AntPopover>
</template>
