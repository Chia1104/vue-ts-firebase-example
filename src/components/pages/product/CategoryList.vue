<script setup lang="ts">
import { defineProps, ref, watchEffect } from "vue";
import { Cascader as AntCascader } from "ant-design-vue";
import type { CascaderProps } from 'ant-design-vue';
import { useStore } from "vuex";

interface Props {
  cascaderProps: CascaderProps['options'];
  onChange?: (value: string[]) => void;
}

const props = defineProps<Props>()
const store = useStore()
const valueRef = ref<string[]>([]);

watchEffect(() => {
  if(valueRef.value?.length >= 1) {
    store.dispatch('categorySelectedAction', true)
    store.dispatch('getProductsByCategoryAction', {category: valueRef.value})
  } else store.dispatch('categorySelectedAction', false)
})

</script>

<template>
  <AntCascader
    v-model:value="valueRef"
    :options="props.cascaderProps"
    placeholder="Select category"
    change-on-select
  />
</template>
