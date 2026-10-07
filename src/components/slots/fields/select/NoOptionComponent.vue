<script setup lang="ts">
import { QItemLabel, QItem, QItemSection } from "quasar";
import type {
  TSubmit64FieldSlotPropsSegment,
} from "../../../../models";

// props
const propsComponent = defineProps<TSubmit64FieldSlotPropsSegment<'select'>>();
</script>

<template>
  <q-item v-bind="propsComponent.fieldApi.field.bindings.itemNoOption">
    <q-item-section>
      <q-item-label>{{
        propsComponent.formApi.form.formSettings.associationEmptyMessage
      }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
