<script setup lang="ts" generic="T">
import { getCurrentInstance, inject, onMounted, ref } from 'vue';
import { submit64FormProviderSymbol } from '../inject-provider-symbol';
import { TSubmit64Field } from '../models';

// props
const propsComponent = defineProps<{
    modelValue: T
}>()

// consts
const injectForm = inject(submit64FormProviderSymbol)

// refs
const modelValue = ref<T>();

// functions
function getValue() {
  return modelValue.value;
}
function reset() {
  modelValue.value = propsComponent.modelValue;
}

// exposes
defineExpose({
  reset,
  getValue,
});

// lifeCycle
onMounted(() => {
  modelValue.value = propsComponent.modelValue;
  const proxyInstanceRef = getCurrentInstance()?.proxy
  if (proxyInstanceRef) {
    injectForm?.registerRef(proxyInstanceRef as TSubmit64Field)
  }
});
</script>

<template>
    <slot :propsWrapper="modelValue"></slot>
</template>
