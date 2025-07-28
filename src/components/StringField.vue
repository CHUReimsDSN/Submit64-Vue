<script setup lang="ts">
import { QInputProps } from "quasar";
import { getCurrentInstance, inject, onMounted, ref } from "vue";
import { submit64FormProviderSymbol } from "../inject-provider-symbol";
import { TSubmit64Field } from "../models";

// types
type TStringFieldProps = {
  binding?: Partial<QInputProps>;
  value?: string;
  label?: string;
  rules?: QInputProps["rules"];
};

// props
const propsComponent = withDefaults(defineProps<TStringFieldProps>(), {
  value: '',
});

// consts
const injectForm = inject(submit64FormProviderSymbol)

// refs
const stringField = ref("");

// functions
function getValue() {
  return stringField.value;
}
function reset() {
  stringField.value = propsComponent.value;
}

// exposes
defineExpose({
  reset,
  getValue,
});

// lifeCycle
onMounted(() => {
  stringField.value = propsComponent.value;
  const proxyInstanceRef = getCurrentInstance()?.proxy
  if (proxyInstanceRef) {
    injectForm?.registerRef(proxyInstanceRef as TSubmit64Field)
  }
});
</script>

<template>
  <q-input
    v-model="stringField"
    v-bind="propsComponent.binding"
    :label="propsComponent.label"
    :rules="propsComponent.rules"
  />
</template>
