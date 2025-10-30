<script setup lang="ts">
import { QItemLabel, QItem, QItemSection } from "quasar";
import type { TSubmit64AssociationDisplayPropsSlot } from "../models";

// props
const propsComponent = defineProps<TSubmit64AssociationDisplayPropsSlot>();
</script>

<template>
  <q-item v-bind="propsComponent.itemProps">
    <q-item-section>
      <q-item-label>{{ propsComponent.opt.label }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
