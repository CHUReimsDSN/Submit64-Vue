<script setup lang="ts">
import { QCheckboxProps } from "quasar";
import { onMounted, ref } from "vue";

// types
type TCheckboxFieldProps = {
  binding?: Partial<QCheckboxProps>;
  value?: boolean;
  label?: string;
};

// props
const propsComponent = withDefaults(defineProps<TCheckboxFieldProps>(), {
  value: false,
});

// refs
const checkbox = ref(false);

// functions
function getValue() {
    return checkbox.value
}
function reset() {
  checkbox.value = propsComponent.value;
}

// exposes
defineExpose({
  reset,
  getValue
});

// lifeCycle
onMounted(() => {
  checkbox.value = propsComponent.value;
});
</script>

<template>
  <q-checkbox
    v-model="checkbox"
    v-bind="propsComponent.binding"
    :label="propsComponent.label"
  />
</template>
