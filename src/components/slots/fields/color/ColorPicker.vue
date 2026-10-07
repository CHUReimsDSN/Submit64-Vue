<script setup lang="ts">
import { QIcon, QPopupProxy, QColor } from "quasar";
import type { TSubmit64FieldSlotPropsSegment } from "../../../../models";

// props
const propsComponent = defineProps<TSubmit64FieldSlotPropsSegment<'color'>>()
</script>

<template>
  <q-icon v-bind="propsComponent.fieldApi.field.bindings.icon">
    <q-popup-proxy v-bind="propsComponent.fieldApi.field.bindings.popupProxy">
      <q-color
        v-bind="propsComponent.fieldApi.field.bindings.color"
        :model-value="propsComponent.fieldApi.refs.modelValue.value"
        @update:model-value="propsComponent.fieldApi.setValue"
      />
    </q-popup-proxy>
  </q-icon>
</template>
