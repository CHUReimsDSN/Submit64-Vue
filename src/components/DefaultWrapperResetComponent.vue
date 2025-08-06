<script setup lang="ts">
import { TSubmit64FieldWrapperResetPropsSlot } from "../models";

// props
const propsComponent = defineProps<TSubmit64FieldWrapperResetPropsSlot>();
</script>

<template>
  <q-icon name="reset" class="cursor-pointer" @click="propsComponent.reset()" />
</template>
