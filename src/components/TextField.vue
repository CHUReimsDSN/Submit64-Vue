<script setup lang="ts">
import { QInputProps } from "quasar";
import { onMounted, ref } from "vue";

// types
type TTextFieldProps = {
  binding?: Partial<QInputProps>;
  value?: string;
  label?: string;
};

// props
const propsComponent = withDefaults(defineProps<TTextFieldProps>(), {
  value: '',
});

// refs
const stringField = ref('');

// functions
function getValue() {
    return stringField.value
}
function reset() {
  stringField.value = propsComponent.value;
}

// exposes
defineExpose({
  reset,
  getValue
});

// lifeCycle
onMounted(() => {
  stringField.value = propsComponent.value;
});
</script>

<template>
  <q-input
    v-model="stringField"
    v-bind="propsComponent.binding"
    :label="propsComponent.label"
  />
</template>
