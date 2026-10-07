<script setup lang="ts">
import { QSelectSlots } from "quasar";
import type { TSubmit64FieldSlotPropsSegment } from "../../../../models";

// types
type SlotScope<T> = T extends (scope: infer S) => any ? S : never;

// props
const propsComponent = defineProps<
  TSubmit64FieldSlotPropsSegment<"select"> & {
    scope: SlotScope<QSelectSlots["option"]>;
  }
>();
console.log(propsComponent.formApi.form.resourceName ?? "NOOO");
console.log(propsComponent.scope.selected);
</script>

<template>
  <q-item v-bind="propsComponent.scope.itemProps">
    <q-item-section>
      <q-item-label>{{ propsComponent.scope.opt.label }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
