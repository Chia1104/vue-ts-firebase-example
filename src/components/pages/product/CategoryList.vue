<script setup lang="ts">
import { defineProps, ref, watchEffect } from "vue";
import { Cascader as AntCascader } from "ant-design-vue";
import type { CascaderProps } from 'ant-design-vue';
import { useStore } from "vuex";
import { useRouter } from "vue-router";

interface Props {
  cascaderProps: CascaderProps['options'];
  onChange?: (value: string[]) => void;
}

const props = defineProps<Props>()
const store = useStore()
const valueRef = ref<string[]>([]);
const router = useRouter()

watchEffect(() => {
  if(valueRef.value?.length >= 1) router.push(`/product/category/${valueRef.value[0]}`)
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
