<script setup lang="ts">
import { QItemLabel, QItem, QItemSection } from "quasar";
import type { TSubmit64AssociationDisplayProps } from "../models";

// props
const propsComponent = defineProps<TSubmit64AssociationDisplayProps>();
</script>

<template>
  <q-item v-bind="propsComponent.itemProps">
    <q-item-section>
      <q-item-label>{{ propsComponent.entry.label }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
