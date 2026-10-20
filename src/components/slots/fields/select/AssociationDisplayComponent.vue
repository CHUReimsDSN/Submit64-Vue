<script setup lang="ts">
import { QItem, QItemSection, QItemLabel } from "quasar";
import type { QSelectSlots } from "quasar";
import type { TSubmit64FieldSlotPropsSegment } from "../../../../models";

// types
type SlotScope<T> = T extends (scope: infer S) => any ? S : never;

// props
const propsComponent = defineProps<
  TSubmit64FieldSlotPropsSegment<"select"> & {
    defaultProps: SlotScope<QSelectSlots["option"]>;
  }
>();
</script>

<template>
  <q-item v-bind="propsComponent.defaultProps.itemProps">
    <q-item-section>
      <q-item-label>{{ propsComponent.defaultProps.opt.label }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
