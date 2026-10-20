<script setup lang="ts">
import { QSelectSlots } from "quasar";
import type { TSubmit64FieldSlotPropsSegment } from "../../../../models";

// types
// type SlotScope<T> = T extends (scope: infer S) => any ? S : never;

// props
const propsComponent = defineProps<
  TSubmit64FieldSlotPropsSegment<"select"> & QSelectSlots["option"]
>();
</script>

<template>
  <q-item v-bind="propsComponent.itemProps">
    <q-item-section>
      <q-item-label>{{ propsComponent.opt.label }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
